# day-170
- yesterday i tell you the architecture some changes makes in that archetecture
- lets see that archetecture i just make little bit changes on it 
- in yesterdays archetectur we have ai pods 
- the sandox service is creating a pods forward and need to create service and ingress 
- we are changing the archetecture this time we are not creating a ingress each time 
- we have a four we not created right now we are crearing it in future auth notification ai archestration this are three pods for now we just created a sandbox service 
- and this pod can create a pods after this and ingress also 
- and each time we are creating one pod and one service 
- there is called sandbox servise amd this service goes forward and creating a pod and for each pod needed to create a sevice and ingress 
- so we have a pod and in pod we have a service 
- this is what we learnt in yesterdays class 
- and now our archetecture is little bit different 
- we are not creating a ingress each time 
- we each time creating only one pod and service 
- in pod we are running vite develpmet server and another one creating a service in which traffic goes 
- so we have one question in our mind  
- if ingress is not creating then how traffic reache out to the service 
- if user stays out of the ungress then user cannot sends a directlly a request 
- like we need ingress when traffic comes fro out of the cluster 
- there is one user present out of the cluster 
- and this user cannot request directlly on service 
- so that time 
- user sends a request on ingress then goes to the auth service
- so without ingress how user sends request on pods 
- this time we are creating a *preview.localhost this time ingess dosent forward a request to a service 
- all request goes to the ingress which ends *preview.loalhost
- those request to this ingress and this ingress sends a request on one server name is router server 
- so ingress send a request on router server 
- router server sends it forward
- router servver is our express server  
- because this is router server it has one service also router-service
- in yesterdays class we only createad a sandbox service in todays class we are going to set up the router server and along with it our sandbox service is able to create the pod also 
- then creating a router server which redirect the traffics 
- we need to set up the router server 
- and  give the capacity to the sandbox service for creating a pods and cpability  
- if u want to create this feature then u need to add some things in it 
- in sandbox srvice i wantend a to create a feature sanndbox-service can create a sandbox
- the pod which is running in this pod present a react vite development server  so each pod need a image for running a container so now creating a image 
- in sandbox we are creating a file called templates
- in react vite created a template of our react code 
- and that template i convert into the image  
- so here i am converting a vite template into image and that template 
- after installing it it runs on localhost 5173 
- i i access it it will easily accessable 
- for now my vite development server is goes into the template folder 
- so this vite code i am converting it into a docker there is file called docker engore in which present nodemodules .env
- export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true
  }
})

we write this in vite config.js
- the meaning of allowedHosts means
- vite server is different so thats why we are setting up allowedhosts true
- then created a image called template:latest
- we have a one image in which present a vite server 
- like basic vite configuration present in this image
- in pod vite bydefault template is runnig
- whenever it created that one template runs into it 
- now we are writing a code in sandbox service which created a pods 
- for that we need a one package whenever your woriking with express and u want new pod that time u need to have package called @kuberneties/client-node 
- we are using this package
- in sandbox serverwe are installing one more dependencies 
- now installing a packages
- npm i @kubernetes/client-node uuid
- in server folder in src creating folder called kuberneties
- in which creating config.js
- import * as k8sApi from '@kubernetes/client-node';

const kc = new k8sApi.KubeConfig();
kc.loadFromDefault();

export const k8sCoreV1Api = kc.makeApiClient(k8sApi.CoreV1Api);

- for pod creating a seperate file called pod.js
- import { k8sCoreV1Api } from "./config.js";

export async function createPod(sandboxId) {
  const podManifest = {
    apiVersion: "v1",
    kind: "Pod",
    metadata: {
      name: `sandbox-pod-${sandboxId}`,
      labels: {
        app: "sandbox",
        sandboxId: sandboxId,
      },
    },
    spec: {
      containers: [
        {
          name: "sandbox-container",
          image: "template",
          imagePullPolicy: "IfNotPresent",
          ports: [
            {
              containerPort: 5173,
              name: "http",
            },
          ],
          resources: {
            limits: {
              cpu: "500m",
              memory: "1Gi",
            },
            requests: {
              cpu: "250m",
              memory: "500Mi",
            },
          },
        },
      ],
    },
  };

  const response = await k8sCoreV1Api.createNamespacedPod({
    namespace: "default",
    body: podManifest,
  });

  return response;
}

then we need service so created service.js
- import { k8sCoreV1Api } from "./config.js";

export const createService = async (sandboxId) => {
  const serviceManifest = {
    apiVersion: "v1",
    kind: "Service",

    metadata: {
      name: `sandbox-service-${sandboxId}`,
      labels: {
        app: "sandbox",
        sandboxId: sandboxId,
      },
    },

    spec: {
      selector: {
        app: "sandbox",
        sandboxId: sandboxId,
      },

      ports: [
        {
          name: "http",
          port: 80,
          targetPort: 5173,
          protocol: "TCP",
        },
      ],

      type: "ClusterIP",
    },
  };

  const response = await k8sCoreV1Api.createNamespacedService({
    namespace: "default",
    body: serviceManifest,
  });

  return response;
};


after this import in app.js and adding another api 

- import express from "express";
import morgan from "morgan";
import { createPod } from "./kuberneties/pod.js";
import { createService } from "./kuberneties/service.js";
import { v7 as uuid } from "uuid"

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/sandbox/health', (req, res) => {
    res.status(200).json({
        message: 'sandbox API is healthy',
        status: 'ok'
    })
});

app.post("/api/sandbox/start", async (req, res) => {
    try {
        const sandboxId = uuid();

        await Promise.all([
            createPod(sandboxId),
            createService(sandboxId)
        ]);

        return res.status(201).json({
            message: "Sandbox environment created successfully",
            previewUrl: `http://${sandboxId}.localhost`
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to create sandbox environment"
        });
    }
})

export default app;


- we are deploying this part before deploying it i have to create a new image for it docker build -t sandbox:latest .
- after this need to run command in capstone project kubectl apply -f ./k8s
- there is one thing mising bydefault if new cluster is creating 
- so ingress controller is not installed
- so we need to install it 
-

http://localhost/api/sandbox/health

- what we want is like the sandbox service can create a pod and also create one service so bydefault this all things are working into the kuber-cluster kuber cluster by-default any pod 
- what is a sandbox service it is one pod 
-  so then kuberneties bydefault any service is not allowed for creating a self new pod and self service kuberneties doesent give any permission 
- so this is we want to create so for this here nee to create a file 
- file name is rabback
- now we are checking our apis working or not simply goes in browser and check first api
http://localhost/api/sandbox/health

and then i check this on postman it gives an error 
http://localhost/api/sandbox/start

- if u want to see what exactlly the errors comes into the sandbox-service 
- so u can run the command called 
- kubectl logs deployment/sandbox-deployment -f

and now we are deleting the pods
- kubectl delete -f ./k8s
- with the help of this i deleted deployement pods and evrything which present kuberneties 
- now our first work is to give a permission to the sandbox service to creating a new pods and sevices and 
- for this we have to create one another file in k8s folder that is rbac.yml
- this is the file in which we are creating a serviceaccounts 
- we can name it as resource-manager
- then we are creating a role metadata

apiVersion: v1
kind: ServiceAccount
metadata:
  name:  resource-manager

---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: resource-manager
rules:
  - apiGroups: [""]
    resources: ["pods", "services"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: resource-manager-binding
subjects:
  - kind: ServiceAccount
    name: resource-manager
    apiGroup: rbac.authorization.k8s.io
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: resource-manager

  now lets understand the meaning of this file
  - here we are creating a one service account 
  - so lets understand the meaning of service account into the kuberneties 
  - in the company the has cto title (cheaf technical officer)
  - so he can take a design related to technical 
  - it is like a that cto tittle 
  - it is a job-description or account 
  - it a one service acount which name is the resource manager 
  - so u just created a account
  - now u dont gave your acount to anyone
  - whoever had this role or accesed of the resource manager they can create a pods and delete the pods watch ,list, get
  - they can perform any tak with the pods and services
  - so now we can give our ressoure manager accessed to the sandbox-deployement
  - spec we are adding serviceaccountname
  - and then we have a service account name called resource-manager
  - then what will happens the service account present can  the pods which are creating in sandbox services all has a permission for creating a pods and services so now we gives a permission for this 
  -it like instagram without creating and account we cannot likes see anything in instram there u follow the instagram security so here also same 
  - then we run the command kubectl apply -f ./k8s
  - then created a pods and service
  - this time sandbox-service created a pod and service 
  - still i can verify that in pod everything works perfectlly or not 
  - for veryfying i came out with the pods 
  - this can created a pod and service
  - but like we want a ingress in which preview.locahost is allows and 
   there is router server and service is remaining to learn
   - fistlly we are going to create a router servers 
   - in sandbobox we are creating a folder called router
   - this router works for router service 
   - in creating a server fo that running a command called 
   - npm init -y
   - theninstalling some packages 
   - npm i express morgan http-proxy-middleware 
   - http proxy is for kind of reverce proxy 
   - http-proxy-middleware  with using this package what we can do??
   - the requests comes from router server we can forward it into the next perticular service 
   - in router we are creating a folder called src in which app.js
import {createProxyMiddleware} from "http-proxy-middleware";
   -  this middleware helps u to forwards a request  
   - how??
   = those request which comes those request in which domain comes 
   - pod2.preview.localhost
   - pod1.preview.localhost
   - i want extract this pod1 because this is my id 
   - so i want to extract this id 
   - for extracting this 
   - i dont want full i want only starting-part .preview.localhost is static
   - i can add const sandboxId = host.split('.')(0);
   - i can slpit it on the bases of .
   - and remove the first part 
   - now we get a sandboxid and now we have to create the target
   - const target = `http://sandbox-service-${sandboxID}`
   - the target is our pod1 service
   - the prefix of this is sandbox-service-then here sandbox id 
   - after this we are returning the proxymiddleware in proxymiddleware we have target , chnageorigin:true,then we also have websocket ws:true, then we are calling t with parameter
   req,res,next
   - like this server is setuping 
   - done with the server setup
   - router server is done now
   - import express from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(morgan("combined")); 

app.use((req, res, next) => {
    const host = req.headers.host;

    const sandboxId = host.split('.')[0]; // Extract the sandbox ID from the subdomain

    const target = `http://sandbox-service-${sandboxId}`; // Construct the target URL based on the sandbox ID

    return createProxyMiddleware({
        target,
        changeOrigin: true,
        ws: true, // Enable WebSocket proxying
    })(req, res, next);
});

export default app

we have to create a file in router folder called dockerignore file in which we have to add nodemodules and .env 
- we have to set up it each time whenever we are creating a server
- and also have to create a file called dockerfile 
- then we have a base image in it is
- FROM node:20-alpine 
and the wordirectory is a app
WORKDIR /app
then copy and npm install
COPY package.json ./
RUN npm install
then coppy all
COPY ..

EXPOSE PORT NUMBER 3000
then we are giving a command  node server.js

EXPOSE 3000
CMD ["node", "server.js"]

then we have to install the package in development time

npm i -D nodeman
   
then i have to add this    
CMD ["npm", "run", "server"]

for this i need to add dependencies in the package.json called
- "dev": "nodemon -L server.js"

so here is done with the router now i have to create image 
- for this we have to run the image 
- docker build -t router:latest .
- now our image is created 
- but with images not working we have to create a deployement and service file 
- we are now creating a file in k8s folder called router-deployement.yml
- we are going into it with deployement complete 
- apiVersion: apps/v1
kind: Deployment

metadata:
  name: router-deployment
  labels:
    app: router

spec:
  replicas: 1

  selector:
    matchLabels:
      app: router

  template:
    metadata:
      labels:
        app: router

    spec:
      containers:
        - name: router-server
          image: router:latest
          imagePullPolicy: Never

          ports:
            - containerPort: 3000

          resources:
            requests:
              cpu: "20m"
              memory: "250Mi"
            limits:
              cpu: "500m"
              memory: "500Mi"

          livenessProbe:
            httpGet:
              path: /api/status/healthz
              port: 3000
            initialDelaySeconds: 90
            timeoutSeconds: 10

          readinessProbe:
            httpGet:
              path: /api/status/readyz
              port: 3000
            initialDelaySeconds: 30
            timeoutSeconds: 10

after this we have to create two apis for it 
- app.get("/api/status/healthz", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.get("/api/status/readyz", (req, res) => {
    res.status(200).json({ status: "ready" });
});

then we are creating a file in k8s folder again name called router-service.yml
- and in which we are going with the service complete 
- apiVersion: v1
kind: Service

metadata:
  name: router-service
  labels:
    app: router

spec:
  selector:
    app: router

  type: ClusterIP

  ports:
    - name: http
      port: 80
      targetPort: 3000

      done with the setuping the router-service

      - then we need to set up the ingress 
      -apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: codespace-ingress
  labels:
    app.kubernetes.io/name: codespace-ingress
spec:
  ingressClassName: nginx
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: "/api/sandbox"
            backend:
              service:
                name: sandbox-service
                port:
                  number: 80

    - host: "*.preview.localhost"
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: router-service
                port:
                  number: 80

done with the ingress setuping 
this ingress for what works 
- the request which cames from the *.preview.localhost port which ends with *.preview.localhost so we forwarding all this requestON THE ROUTER SERVICE 

- after doing the all things we need to see the preview is working or not 
- our preview is seeing but it reloading again and again the reason is
- the request comes in the router server 
- it creates a new proxy for each request 
- which is not good
- because of that this problems accures 
- whenever its creating a new proxy for each request 
- the limits or memory of http agents is becomes full
- for stopping away from this 
- we have to run command firstlly for deleting the deployements 
- kubectl delete -f ./k8s
- then in router app.js 
- i dont want to create a new proxy-each-time 
- function getProxy(sandboxId) {
    if (!proxies[sandboxId]) {
        proxies[sandboxId] = createProxyMiddleware({
            target,
            changeOrigin: true,
            ws: true, 
        });
    }
    return proxies[sandboxId]; 
}
- we are doing chashing which is not creating a proxy for each step 
- and for each sandbox one proxy existed 
- till tadays class we created a whole functionality kind of we can create a sandbox and into that sandbox we can run our vite development server
- and we can show the preview of this into the browser 
- in tommorows class we are watching that how we can update this files and and try to add tailwind into it 
- then we can crate a whole ui into it 
- the tailwins is going into the template and using that we can tell to ai that this our thing u have to give output us like this 
- n the container lot of days request not came so thats why if there is something happening we can able to delete that pod this feature also we have to build it and also we can update the files of it 