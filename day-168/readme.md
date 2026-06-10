# day-168 - understanding project implementation 
- abhi tak ka jo cohort hua hain usame hamne sikha ki kaise projects build krna hai and all this are things the sir explaining the projects and we created it by watching 
- but in companies their your creating something that time ayone is available for explaining this things to you the answer is no 
- whenever your becoming a developer their is a one seniour developer come to you and he gives you some documentation like readme files and tell you to read this md file and set up the environment according to that their is a lot to read 
- developer is dont write only code developer is also reading lots of documentation how codes runs how it works and all this are things then reading this developer works as per the guidelines and requirement 
- this is our last final project in this project sir want to teach this skills to us and sir along with teach everything but before that i will give u some documentation before that u have to read all and i will providing a zip folder to you you have to read the zip folder you have to understand the code available in zip folder 
- and in this zip folder their is lot of code docker files , eml files and iske alava main aapko html files provide krta hun and isi html file ke andar puri documentation hogi how the folder structure works how you can start and setup the folder you have to read this all documentation documentation is not short its long so after reading that documentation u have to setup your project i will teach you but before that you have to read understand everything by your own you have read and setup then we are the project 
- and  from today our project is start in which we have to build three microservices we cannot setup all three but one microservice u have to setup it and the microservice is uncomplete we have to do more thing in it but the bare minimum microservice allready made it it is easy this service is not that much big but whenever we are building forward it groes more 
- it is sandbox microservise these spins containers for us and create a development invironment so this the sendbox services yess its not complete its short it grows while we are building 
- so i will providing the zip folder to you you have to understand and set on your system 
- the documentation you have seen much time before this 

- i will tell you the architecture then you can understand what this service actually do ??

-why this sevice we are creating ???\
- because the website which builds through ai in which react present and ai works on react 
- ai creating and updating a things in react according to the users requirement 
- and this react code we have to run and then we can watch the preview 
- for using this react code we are creating a controllers in our backend code 
- and the all continers handles through the cuberneties 
- there is one cuberneties in which we  create one pod and in this pod we have three different different containers and this is single pod 

# vite container
- the first conatiner is vite 
  - vite means the react component folder work on this the container run on port:5173  in which runs our frontend 
- the vite agent - whenever your creating a react that time you have start the development server which you can start with the help of vite we have a react code but wecannot show it directlly on browser  and at that time we are starting the vite development server   
- and vite development server gives us a url localhost---- with accessing this we can preview it on browser 
- for running this we are creating a vite container in which our whole react code and along with this our vite development server also running 

# communication-agent container  
- then we have anouther port called communication agent and this port is 3000
- the communication agent is a simple work is in docker theire is bind mound in which we can sync the folder with container in the conatainer which folder is present we can sync it whith the host 
- so here in folder name called workspace with this folder we are linking with all containers
- it means all containers have the access of the  workspcae folder
- and this folder have complete react code 
- on the bases of this folder vite code is running 
- also communication and sync agent have the acces of this folder 
- vite work is to only create url and preview it 
- if u have to update the and want to add url so u have to change the code and the react code is change using communication agent 
- communication agent can change the code mainlly communication agent work is this also gives two url 
- which urls???
1) - websocket url orcsocket io url
- with using this url you can connect with your communication agent 
- you can create a bidirectional connection with communication agent 
- with this connection you can run any command in workspace folder
- howw ??
- so we have one package called node-pty  
- in communication agent we use node-pty package with the help of this package we can run any command in workplace folder

# sync agent container
- their is another container called sync agent this is not working on any port 
- we cannot communicate with this externally 
- in sync agent container all the files of your project you are storing them into a bucket called s3 bucket 
- sync agent work is whenever cahnges accurs in workspace folder any file deleted, edited , created updated those changes makes updated in s3 
- any changes accures in workspace folder then sync it in s3  is the wok of sync agent container 
- this is our main architecture 

-total one pod in which you have a three containers
- whwnever ur reading all documentation and implement it then u can able draw archetecture of it 
- so u have read and setup