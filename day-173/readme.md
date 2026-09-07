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
- in skaffold we need to go with the same image name rather its creating a problem foerward 
- we are adding image name with in which folder the image is present 
- in artiffacts we are adding firstlly a image and and which name image is created and secondlly is a context which means a folder name in which folder we find a docker file that folder whole path 
- after that we are creating a one more image with the name agent context : sandbox/agent docker is : dockerfile similiarly for router after router comes server so server image name is sandbox adding image : sandbox content: sandbox/server and lastlly we have a template so we are going into template then into it 

image: template
context: sandbox/template
docker : 
dockerfile: dockerfile
- till now we not created the auth or notification so that not come into it rather all are in 
- so here we created a images still there are some things requires 
- FOR MAKING IT LIVE WE ARE USING MANIFEST 
rawml: and in it the files present in the k8s folder listing all files here 


in skaffold the things u written in this firstlly images are creating and then other files are run 
- in skaffold there is one thing which is very beautifull in which we can sync the things 
- - i will be using the sync property 
sync:
 manual:
 -src: 'src/**'
 dest: "app/src"

 so the things we edited in to the src folder sync into the the app src 
 - now everything runs perfectlly 
 - the ai server router server sandbox server runs perfectlly now
 - we can able t see the logs here and the good thing in it is 
 - for recognize the instant changes we are adding infer into skaffold replasing manual 