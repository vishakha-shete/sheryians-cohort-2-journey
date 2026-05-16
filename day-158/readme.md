# day-158 learning the docker compose 
- in yesterdays class we sawn how docker solves the problem but wasnt learn how docker solves proble 
- so in today class we are going to learn how docker solves the problem
- what is the problem exactlly??
- single developer is not monitoring the whole website whole tesm work on that 
- in one team their are different developers present and each ones machines,node version is different
- local development invironment is different here
- one developer makes the function x on theire  system it properlly runs on their computer but not in anothers 
- one code is present which runs on one developer machines but not the another ones 
- but it failes on development server 
- docker solves this problem all make all system working invironment same 
- we learn inages
- image is cobination of four things 
ie codebase dependencies node os
- container - container is the running instance of image
- dockerfile - with the help of docker file we are creating a image
-  we are set up express server
- now we are creating a docker file for creating a docker-image
- image has four things called codebase , dependencies, node, os 

first step
- FROM node:20-alpine 
- means we are using a base image 
- in node 20 alpine we have a node.js and os two things 
- COPY package.json .
COPY package-lock.json .
- WE TELLS TO ADD IT INTO IMAGE 
- RUN npm install ITS ADD NODE_MUDULES FOLDER
- COPY .. for codebase 
why we re coppy package files seperatelly - beacuse docker creates things in stages we are not installing packages every time we just make changes in code lots of times we are not changing our os  so this part is allways same the output is same so its make a cache in docker 
- docker optimize it
 docker build . -t express-server
 - building image
 docker run express-server
 - creating a image-container 
 docker run -p 8080:3000 
 - -p means port-mapping
 - sever runs on 3000 but mapped it on port 8080


 # docker-compose

 - we have a host machine in which codebase , node, os, dependencies present and we create a image with this and and execute the image then created a container same thingd is into the container 
 - now we linking a host machine  completely with container we are doing this using docker-compose.yml

 FROM node:20-alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]

firstlly did this and crated a image and container 

tells to the docker-compose.yml file to sync with backend app file
services:
backend:
     build: ./Backend
     ports:
     - "8080:3000"
     volumes:
      - ./Backend:/app
      - ./Bckend_node_modules:app/node_modules
     command: npx nodemon -L server.js
     
     with the help of docker compose we are solving development time

TASK - LEARN ABOUT BINDMOUNDS AND VOLUMES 