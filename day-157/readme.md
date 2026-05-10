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

# its day 157 we are learning about docker compose and aws concept
- in todays class we try to understand the concept of aws how networking impliment what are the main eliments and concept in it 
- how we can perform development with docker compose 

# local-development
- whenever we do things locally on our system 
- there are two things 
1) frontend which runs through vite
2) backend