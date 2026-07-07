# day-171 move next with the existing project 
- in yesterdays session the sandbox service is able to create a pod and and we gets in return a pod preview url
- and using that preview url we can access the things
- in todays class we are learning how sandbox is creating and how can we modifies the file present in it a vite development server
- in this pod we have a vite development server which is running into container and returning its preview url
- along with it we created a service the pod which is creating the request reache successfully 
- in our sandbox we have only one container and in this container runs a vite development server and we can access its preview url
- what feature we have to develop
- the vite development server run in which container we are able to make changes into it into that development server in which files runs we can edit them 
- our vite development server is running into the workspace folder why?
= in our dockerfile we have workdir as a workspace so here the vite development server is running into the workspace folder 
- here now we are creating a one new container
- we have a pod in which we have a one container so i can spin one another container 
- and it is a express server 
- we are calling it as a agent name 
- idealy we can store a one container in one pod but we can add more containers 
- our files is in the workspace folder so workspace folder is in the container how the second container access the vite development server container 
- so generally its not possible to acces the things from another container
- so yess its not happenning 
- so here we are not creating a workspace folder into the container 
- the workspace folder is directlly present into the pod 
- and we are giving the access of workspace folder to the vite development server and the agent 
- so we need a two container and each one have the workspace folder acces is to the  both containers
- vite development server is only reading the files present into the workspace folder and serve it into the preview url
- but the agent it is a express server so it gives us a apis called read files , list files  , updates files , delecte files , create files
- this agent gives us a some api with this apis we can apple to list read update delete and creates files this files 
- so how we can doing it ?
= there is a thing called volume 
- the folder presents into the contianer it manage by docker volume files is exactlly storing into the pod 
- whenever the pod delete the files also delting the files never saves 
- we are creating a agent folder in sandbox folder and setup the server 
- here we are writing a code in which agent can able to read update delete create the files lists the files 
- and then creating a server and two apis there 

import express from "express";
import morgan from "morgan";
import fs from "fs";

const WORKSPACE_DIR = '/workspace';

const app = express();

app.use(morgan("dev"));


app.get("/", (req, res) => {
    res.status(200).json({ 
        message: "Hello from sandbox agent!",
        status: "success"
    });
});


app.get("/list-files", (req, res) => {
    const elements = await fs.promises.readdir(WORKSPACE_DIR);
    res.status(200).json({
        message: "elements in the workspace directory",
        files: elements,
        status: "success"
    });
});


export default app;


after this creating a docker-file 

- FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN mkdir /workspace

CMD ["node", "server.js"]

now we have to create a image firstlly 

for that we need to run command called 
- docker build -t agent:latest .

- docker run -p 8080:3000 agent:latest
after this whenever i am running this image and mapping the port therre is problem accures when i am hitting the api
- docker run -p 8080:3000 agent:latest
- sandbox agent server is running on port 3000
- we have created a one api called list-files 
- let just acces this
http://localhost:8080/list-files
whenever we access this it gives a one error
- whenever with the help of docker we are creating a agent whole image so all code goes into the app folder 
- why we are showing the working directory
- we are showing that the agent code is in which folder present 
- but we dont want to access the agent code we just want to access the worspace code
- so for that we set up the working directory in the app.js as the workspace 
- and now our workspace folder is not exists
- fistlly here u created a image as name agent:latest 
- and then u spins the container 
- whenever u see the containers and the files 
- there exist a app folder but and in this app folder exist agent server code
- but there is a missing a workplace folder 
- so here we needed to create the workspace folder 
- we are creating a workspace folder with the help of docker-file 
- with adding this
- RUN mkdir /workspace
- this time we are creating a one folder called workspace 

so again we are creating a image and running the same image again

so now we can access the link and it showing the working 
- because of in workspace folder there is nothing present so thats why its showing empty
- now our agent is little bit ready not complete but yes little bit its ready
- still there is some problems present in it 
- if now with this setup u deployed your agent 
- so the agent accessing with that folder like means in pod there is present workplace folder it cannot accessed that it will accessed the folder which is present into the agents container 
- but we didnt want like this 
- we want the both workspace needed to ne sync 
- similiarlly in container the vite development server is running that rinning into the worspace folder
- the workspace folder presnt into the pod it needed to the sync the both folders perfectlly
- we have to implement into the kuberneties
-  we need to fistlly deploye the agent fot that 
- the creating a pod in which we want a vite development server along with the pods 
- in this we have two containers 
- we allready have a one container we need to create the another one into it

    {
          name: "agent-container",
          image: "agent",
          imagePullPolicy: "IfNotPresent",
          ports: [{
            containerPort: 3000,
            name: "http",
          }],
          resources: {
            limits: {
              cpu: "500m",
              memory: "1Gi",
            },
            requests: {
              cpu: "250m",
              memory: "500Mi",
            },
          }
        }

        - still its not syc there is thing we requires for it
        - here we are creating volume with name of the workspace  

     -     spec: {
      volumes:[
        {
          name: "workspace_volume",
          emptyDir:{}
        }
      ], 

    we written this into apects into the pod,js file so lets understand what it does exactlly
    - with writing this the in workspace folder created a volume
    - that volume is called the workspace volume 
    - still we didnt sync it 
    - so the vite and agent worspace folder is different 
    - for now the two container also creating and into vite server workspace folder also present 
    - now we have to sync it 
    - by-default the workspace volume is the empty folder
    - for sync we have the volume mounts in the workspace folder volume created by u sync with the workspace
    -              volumeMounts: [
              {
                name: "workspace_volume",
                mountPath: "/workspace"
              }
            ]

    we add volumemounts in both container with the help of that sync both workspace with the workspace volume   
    - now in additional what we are doing ?
    -  there is one another problem is present the agent is created by us   how we can forwards a request to agent
    -   i am updating ingress also 
    - same thing just for agent
    - and service is same targeted 
        - host: "*.agent.localhost"
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: router-service
                port:
                  number: 80

    - localhoat:preview.url  
    - localhoat:preview.url  
    - this two types of url comes into the same server 
    - now we are again adding a condition here so what is the condition here
    function getProxy(sandboxId) {

    const target = `http://sandbox-service-${sandboxId}`; // Construct the target URL based on the sandbox ID

    if (!proxies[sandboxId]) {
        proxies[sandboxId] = createProxyMiddleware({
            target,
            changeOrigin: true,
            ws: true,
        });
    }
    return proxies[sandboxId];
}
    - for the pod we are creating a service it is in the kuberneties service.js file  
    - the vite development server in general runs on port 5173   
    - and the express server is running on the port 3000        
    - we are adding this into the service,js into kuberneties folder
    -         {
          name: "agent-http",
          port: 3000,
          targetPort: 3000,
          protocol: "TCP",
        }
   - so the by default request comes from the http protocall it goes on the port 80 
   - so now we said that the agent traffic port is 3000
   - so this time we are sending a request on the agent it goes into the port:3000
   - now i have to create the images again
   - i have to create router sandbox and agent this three images create again
   - i have to create router sandbox and agent this three images create again
- created this three images agian and then deleted unwanted things from the docker
- pods and services
- then again creating one pod
- and after creating a pod service is also created
- but there is problem accures in it like 
- for that we need to see logs
- kubectl logs sandbox-pod-019f3c0d-7ea9-72bf-a980-bea2f68d2cd3
- there is only vite development server not the agent 
- this is the problem accures when u are working with kubectl for images 
- pod is created but our agent is not created 
- in workspace directory folders whe u mount the empty folder with the container workspace 
- it overrides to the container worspace folder it sync with the container worspace 
- it dosent work like the workspace folder attatch with it 
- it sync volume as it is 
- because of volume is a empty folder thats why workspace also become a empty folder
- in this image we are running a command in the dockerfile called  npm run dev
- when we runs this command
- it goes into the package.json
- or vite for finding the dev script
- because this is your workspace folder it doesent exist enything 
- it doesnt find any package.json file so thats why it gives some errors
- so lets understand how to fix it
- there in pods we have some normal containers and init containers
      initContainers: [
        {
          name: "init-container",
          image: "template",
          imagePullPolicy: "IfNotPresent",
          command: ["sh", "-c", "cp -r /workspace/. /seed/"],
          volumeMounts: [
            {
              name: "workspace-volume",
              mountPath: "/seed"
            }
          ]
        }
      ],
- so here the init container is the container where present some containers
- like in pod the main containers there are two container vite container and and agent container so the init container runs before the all containers
-  and firstlly it runns and close there the init container work is close 
- in this container i am using the same template image
- and again voume same mount just into seed folder
- we sync the /seed folder with the workspace 