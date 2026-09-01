# day-173 of my learning journey 
- till now we are developing a images by own and add it into k8s but now we are using skaffold 
- but now we are talking about what is skaffold and why we are using it we are going to learn about this
- firstlly understanding what is skaffold??
- skaffold is a development tool
- whenever your working with the kuberneties that time it is usable 
- skaffold waches your file and sync changes into directlly into container then it automtically desides to make the images the development s
- skaffolds solves a problem if in your file system or server you change any code so for any code you have to make image and with the help of kuberneties deploye again 
- but skaffold watch the develpment time changes each time so if it find any chnages into server then it desides by there own he needs to make new image or depploye it in containers its running with development its preety much easier 
- for installing skaffold with the help of cocoed u can install it in windows
- firstlly created a dockerignore file into the ai orchestration folder and creating one another file called dockerfile
- we right this line in dockerfile
- FROM node:20-alpine

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run","dev"]

- now we dont need to create the images again and again this can automatically created the images 
- with the help of that we dont need to create the images again and again with foing into it 
- one command i can run and it automaticalli run and create the images for makinyou that you need to create file with the name skaffold.yaml
-  this skaffold.yml file created into root 
-  we are using a skaffold because we dont want to create again and again images and deployed it 
- we are creating a file called skaffold.yml
- we have build  and in build we have some artifacts
- in artifacts our first artifact is image 
- image name is ai-orchestration
- there is one thing you need to remember that in your k8s folder the deployement file goes that you need to paased the same name which in that file
- firstlly we are creating a deployement file of ai-orchestration
- after that we are creating a service file 
- then we are coming to the ingress and there we are creating one rule 
- then our ingress rule is expanding the notification services increase then inngress rules also increases 
- folder also increases 
- after doning the ingress setup we are coming to the skaffold.yml
- 