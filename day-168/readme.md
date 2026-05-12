# day-168 i give you task to read documentation and implement it 
- whenever in company your working this thinks happen there is no one to teach all the project from scratch 
- there you given a folder structure in which you have a readme file by reading that file you have to understand the folder understand the project working thats it 

# now lets understand whats or project is and working of our project 
- we are creating  a project like lovable in which ai is present and user gives a prompt to ai and on the bases of this prompt ai can create a whole website 
- now how  the ui of this project 
- this is not exact itss a main layout 
- we have a main screen in which have a chat screen 
- in another side to the bottom there is one terminal like in vs code we have terminal like that 
- and their is one code section 
- and one preview section 

- in which user can talk with ai like user able to give a prompt to ai and according to that i changing and generating the code like code chnges then it preview according to that user can ble to change code also user can also acces the terminal 

- and this all code creating using react and this is our browser 
- browser cannot run our jsx file but we want to show the preview 
- and what we are doing in our backend from server side creating a container 
- in this conatiner we have the node, react-codebase, react-dependencies, os 
- and which code u have its runs on backend 
- the vite development server 
- vite development server gives us a react code after running the react code it gives a url and with this url we can preview the output 
- so the vite development server we are running on container 
- why we are running it on container 
- first thing is lots of compexity will creating and the second thing is the aplication is not serving only one user  their are multiple users then we can shrink a multiple containers 
- on lovable their is multiple users and multiple users working on multiple projects  their is your one another doubt like if we run different different containers it we are spinning a vite then we have to spin a machines that much users we have then we need a machines 
- vite server is running on backend side containers 
- in container vite server is running but serves on preview 
- if your making chnages iin code then its updated in container 
- if you are running command on terminal then its run in container 
- whenever your talking with ai and editing a files then those files also editing in container ai also editing things into the container 
- our backend is mainlly deploye on kuberneties 
- for creating a terminal we have a package called node pty 
- there mainlly four services we have 
- the first one is auth - it works for authentication 
- notification sefvice in which we are sending email
- ai orchestration - it works related to ai 
- sendbox - it runs our vite command in sendbox in containers run react code 

firstlly we are working on sandbox 
- now we are bilding a sandbox service 
- create containers for vite dev server
- delete containers 
- provide terminal access 
- provide preview url 
- provide the apis for file updates 

- create containers for vite dev server
 - because here we are creating a vite development server because we are using kuberneties so we have to run that also here 
 - when we are /api/sandbox/start calling on this api it work something
 - create new container
- return the preview urls
- return terminal url
this bare minimum server created and this functionality works after that and creating one api  /api/sandbox/health and this api return terminal url and preview url 
- we are creating a sandbox service 
- we created a server and api /api/sandbox/health
- now we are deploying it using kubernatives 
- then understandig how this servers creating a conatainers we are understanding that also 
- if i want to deploye it then it create a image of server then that image is deploying on the kubernatives 
- we are creating a file called dockerignore
- and after that creating a dockerfile 
- in main folder creating k8s folder all service code is goes into the k8s folder
- we are creating a rules for sandbox how to deploye it 
- in pod we have server running on port 3000 and one api is present call /api/health kuberneties request again and again on the same api if api respond without errors the container is running good and best and in it no problem 
- but if api dosent reply then kubernatives know the container is closed so we have to restart it again 
- so how we can know its running or stopped 
- kubernetives send again and again request on the api whenever return response comes 
- the api respond as a 200 that time kubernatives know running
- if not then not running container is closed need to restart it 

livenessProbe : liveness probs tells the container is live or not 
readinessProbe : readiness probs tells the container is ready or not 
path: /api/sandbox/health
port:3000

- lets understand how our architecture is going
- our main kuber cluster
- in which have 4 tp 5 pods 
1) AUTH
2) Notification
3) AI-Orchestration
4) Sandbox-Service

user pods
- pod 1 - vite dev server 
- we are deploying our sandbox service on kuber cluster 
- the kubernatives cluster missing one thing called 
- for installing ingress controller after installing this we can apply a rules 