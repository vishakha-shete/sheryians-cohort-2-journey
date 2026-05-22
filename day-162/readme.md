# day-162 

- so aws is big and lot of companies using aws for deployement 
- aws is used by netflix and hotstar , flipkart
- the big companies used aws and work properkly 
- in aws theire is concept called vpc it is known as virtual private network inside aws 
- and the netflix and hotstar has their own vpc
- the and ahve theire own server and own database
- but cannot access other vpc network 
- aws is a cloud provider
- firstlly need to create a vpc and it has a small part called subnet 
- public subment cn accesed through public subnet
- private subnet cannot accessed through the internet 


- ALB - APPLICATION LOAD BALANCER
- IN AWS HAVE VPN AND PUBLIC SUBNET theire is one thing called internet gateway and the internet traffic comes within it vpc - - is completelyy a unisolated network get traffic into vpc 
- internet gateway work is to ha
- alb work is to destribute a internet request/traffic to the servers 

SECURITY-GROUP
- security group is a virtual firewall that controls which traffic is allowed in (inbound) and out (outbound) of your resouce
- means the incomming and outgoing traffic which allows in your vpc
- alb deside all http request on port 80 and https on port 443
- server gnerally listen on port 3000
- the security protocall work is to check which traffic on which port when we are creating a security group then with that we need to send the message within it allow traffic from internet to port 80  we have to handle it through guv 
- by default it dosent allow the port 

TARGET- GROUPS
- LIST OF RESOURCES TO SEND TRAFFIC

cloud -wtach
- it produced runtime logs for maintaining that it 

= LETS LEARN ECR AND ECS
- we are running a command called npm run build it creates a dist folder then we have to move it to the backend then frontend and backemd in one folder
but it takes a lot time and we cannot do it every time and we need automation

we are automating it using a docker-file
we are creating a dockerfile and dockerignore file in main folder 
FROM node:20-alpine as frontend_builder

WORKDIR /app

COPY ./frontend/package.json /app

RUN npm install

COPY ./frontend /app

RUN npm run build

whenever your seeing a from keyword from theire new stage start creating 

NOW CREATING A STAGE-2
# stage-2 : fullstack-image
FROM node:20-alpine

WORKDIR /app

COPY ./backend/package*.json /app

RUN npm install

COPY ./backend /app

COPY --from=frontend_builder /app/dist /app/public

CMD ["node", "server.js"]


docker build . -t fullstack:latest
docker run -p 3000:3000 fullstack:latest


life stuck feels in every ones lif so this phase comes in everyones lifes so thats why dont be so nervous judt do working everyday