in todays class we are learning about docker 

- in industrry in one project their are multiple developers who works on one project 
lets assume :
1) neha - windows node:18
2) rohan - mac node:20
3) ritu -linux  node:22 
this are the three developers who have different setup this working on different operating system and different versions 
- this all members working through github 
- lets say theire is a code called function(x) and this code is written by ritu the version is 22 and operating system is linux and its perfectlly runs on ritus system then ritu push code on github 
- neha pull request but the code dosent support the node version 10 
- here is no mistake of any user but at the time of development problem comes in neha dosent go forward before solving the problem 
- this is the problem 
- so docker solves thiss problem it capble to runs a same code on any system 

HOW ;:- 
lets take an example of express server
- express server works on codebase api/routes/controllers etc firstlly 
- second most imp thing is dependencies 
- third one is node.js 
- the code written in js for that we need node.js 
- then for running all this we need a operating system 
- if i have codebase ,dependencies, nodejs,os then i can create a express server 
whats docker exactlly doing here 
- docker creates one file 
- docker makes all system invironment same and solve problem here 
how docker creates a same invironment in all systems 

docker has mainlly two concepts
- images
- container 
- images and container are the main two concepts of the docker 

images - images is combination of codebase,dependencies,node,os all this are four things are files its include in image 

what is the role of operating system 
- user interface 
- os work is to manage hardware ssd hard disk
- user task performes through this 
-os os build for using hardwares and others you are watching ui it is for best user experience 
- image we creating their size is only 4 to 5 mb that is enough for running the server without ui and other things 
- in node also same thing it is related to gui if i remove dependencies then node js also stay little 
- so after this your image file size is around 120-200mb 

image - image is compilation of codebase(controllers),dependencies(express,mpngoose,dotenv), node, os in one file that file is calles image

CONTAINER 
- image is only file 
- when you run/execute the image it convert in the form of container 
- a container is a running intense of image

- for example we are creatig one express server and convert it into image form then we execute the image then it makes as a conatainer 

- if u want to use docker then u have to install docker desktop for this 


PHASE-1
- we have to convert express server into image 
- now i created a server and have all four requires 
- i have to convert it into one image 
- and now i have create dockerfile in my folder 
- deleted node_modules files
- in docker file we write
- FROM node:20-alpine it is image
- its the combination of node version:20 + Linux os 
- COPY . /package.json .
COPY . /package-lock.json .

RUN npm install

TWO THINGS ARE DONE NODE AND OS 

- then we again need codebase and dependencies 
COPY . /server.js .

this four things are in the image now 
docker file tells onlly how to create a image 
- now run command called docker build. -t cohort_2 this command create an image 
- it finds your docker file and create image 
- AND IN THIS IMAGE HAVE CODEBASE, DEPENDENCIES,NODE,OS NAME OF THIS IMAGE IS COHORT_2 HERE OUR PHASE ONE COMPLETED 


PHASE-2
- we convert image into container form  
- FOR EXECUTING THE COMMAND WE HAVE ONE another command called docker run cohort_2
- for starting the server 
we write in docker file CMD ["node", "server.js"]
- now container start its an running instance of image

but the problem is your server is running into container you cannot access it out of the container 
- for accessing the server 
- we have to run command called
- docker run -p 8080:3000 cohort_2 
- here we are mapping the port 

lets understand how compose
if you created a api called login and covert it into image and execute it 
- and again create a register api and then you thing its converted into image but not image cant be update we can completelly rewrite it but dont update
- image is immutable  
- if u want to convert it actually in image then u have create it again 