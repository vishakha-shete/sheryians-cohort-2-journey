# day-163 learning about ECR and ECS

we received a final image is only one with frontend and backend and live frontend and backend both
- we have to deploye it using a aws now 
- we have lot of services in aws 

- theire is service called
1) ELASTIC-CONTAINER-SERVICE {ECS}
2) ELASTIC-CONTAINER-REGISTERY {ECR}


* ec2
* bedrock
* segemaker - it used for tained the ai data fields and deploying it 
there is lot of services in aws but for now we are using ecs and ecr 

ECR => storage area for IMAGES ECR SAVES THE VERSION OF THE IMAGES ALSO
ECS =>  ECS is the actual one who runs the images

ecs has two part 
1) Task Definations
2) Services

1) Task Definations
- in task defination we are telling which image id needed to run WITH how many resources thats it
- with how many cps like vCPU:8 RAM:32 GB

2) Services
- services reads the task definations and run the image

lets understand
IAM - identity and access Mnagement

BYDEFAULT-USER-CREATED-IS-A-ROOT_USER
- this user has a lot of permissions of services
- if i used the credentials of root user work is done smoothlly
- but if root user credential leak accedentlly
- sot with the help of this credential anyone can do anything with this credentials
- so thats why we are not creating root agents credentials

so what wxactlly we do we create another user called cohort2.0 and give the permissions of two things called ecr and ecs so we used cohort_user_credential for push

- NOW CREATING A COHORT NAME USER AND GIVES A PERMISSION TO SCR AND ECS

- aws has a lot of regions
- firstlly we are creating a cohort name user which has the access of ecr and ecs
- click on view all service 
- then in security, identity, & compliance
there is iam click on it it runs by default global-region 
- click on iam user so we want to create a new user here  so now click on create user button bame it as cohort then egnore and click on next click on attache policious directlly and then need to delect ecr and ecs
- serch container there is one service name visible called
1)ec2containerregisteryfullacees click on checkbox
search for ecs
2) ecsfullacess click on checkbox
- then click on next 
- then we have a user with name cohort with the aceess of ac2 and acs
- we now have the user but we need to add this credentials into our system locally 
- then using this credentials we need to push our image 
- now the user created we need to create the credentials of it 
- click on security credentials in cohort user
- click on access key so they provide a two access keys you need to use those keys it shows only one time so make shure to copy it and remember 
- for next work you have to download the aws cli in your system 
- need to setup aws cli then after setup its ready for  local syatem so we move forward now 

then come to the page called awscondole
- click on view all services click on elastic container registery
- in which we click on the button create if not shows then click on create reposetory
- name it chohort-demo then click on create after that reposetory created with cohort-demo name but it dosent contain anything 
- now we created a space in ecr where we can store our images 
- click on view push command and run the command using git bash terminal if you have a windows system then also run the mac-os commands but using the git bash terminal 
- then opern terminal paste the path of the folder and paste it and enter
- run pwd
- run ls
we are starting to execute the command one by one 
- first command we run as it is then login successfull
- second command in which we need tio modified it
" buildx build --platform linux/and64 -t cohort-demo: latest . --load"
we have to run this command 
- the mac os and aws archetecture is different different 
- m3 pro chip architecture this architecture is is arm based but
- aws machine architecture 
- the our own machine architecture is arm based but the aws machine architecture is not arm based architecture it is amd based 
- the problem is when your creating the image on your system the architecture is arm based so the architecture image is not able to run on amd based processor for saving from this thing we have to run the command called
"buildx build --platform linux/and64 -t cohort-demo: latest . --load"
buildx is a aws architecture tool which converts arm based architecture into amd based then after running this image is startd to creating and creeated a image 
--load tag is imp for saving the image

then run other commands as it is 
- after running all this command the image is successfully uploaded on ecr
- sometimes u saw three files so it dosent have any ishue image is uploaded successfully

ECS WORK NEXT-ECS DONE THE REMAINING WORK
- IN ECS THEIRE IS TWO WORK 
1) TASK DEFINATION
2) SERVICES

- IMAGE IS ALLREADY uploaded on ecr so we need to perform task definition and convrt it into service
- come on aws console
- in containers
- click on elastic container service 
- by default your creating a cluster but before that  
- we have to create vpc subnets 
- come return on console
- click on view all services
- then click on netwroking & content delivery
- then click on vpc 
- click on create vpc 
- click on vpc and more
- name it cohort-vpc 
- then click on create vpc 
- it takes 1 to 2 minutes for creating
- created a vpc
- come on elastic container service
- then click on create cluster 
- name is cohort-cluster
- select farget only 
- click on create
- it takes 1 to 2 minutes
- then created

then click on create new definition
- here we have to tell which image need to run with how much resorces
- then name it as cohort-task
- select 1 cpu and memory as 3GB
- then the task role and execution role
- both work is littel bit different 

# task role
- task role provide a permission container serving inside ECS task

# task execution role
- a task execution role is used by ecs to perform operations like pulling images and sending logs 

so we need to create it now
- come return to iam click on roles 
- click on create role 
- select aws service
- the use case is elastic cntainer service 
- select task execution fro elastic role service
- click on next
- name it as cohort-taskrole
- click on create role
- then we are using same task role on both role fields  task role and execution role
- name the image container as cohort-demo-server
- image url for click on browse ecr image click on cohort-demo
- click on intest
- select the image tag 
- add container port 3000
- protocall tsc 
- port name
- express-server
- http
- addinvironmental varible if want
- click on create button 
- task definition is created 

- now we have to run the one service 
- come to the cluster and click on the cluster 
- then click on the create button 
- select ltest task definition there 
- service name as a cohort-task-service-ltest
- desired task 2 
- in networking
- select vpc cohort-vpc
- remove private subnet form there 
- selct security group and then
- select load-balancing as use load balancer
-select application load balancer
-  load balncer name is cohort-ALB
- name target group as cohort-TG
- then click on create 
- then service creating and created 
- it takes two to three minutes
-  
how to access the service for accessing the service 
- scroll down and see there is one tab called configuration and networking and there is one option called dns if u coppied the dns and come to any browser paste its not working server is running your all things are good but 
- the server is running on port 3000
-  you dont created any security group which allowas the port 3000 traffic
- then go to configuration networking 
- there is a option called security group 
- you allow one another rule here 
- still not accessing
- check alb security group  
- then access perfectllly done 
- dns name through u can access your application 
- we dont do like this we have to purchase the domain for it so  form squarespace 
- there is option called dns 
- there is option of dns setting 
- we have to add new record theire 
- type - CNAME
       - @
       - 30 mins
       - then add dns data and save it 
- this much easy to attached with domain        

whenever your creating something on aws name it perfectlly on aws select all tcp  anywhere save this 


in next classes what remaining we are going to learn
- Capstone-project(multiagent-system)
- tyny cat
- CICD
- kubernetes(ngnix, loadbalancer)
- microservices
- queues
- nextjs
- pwa
- animations
- 
