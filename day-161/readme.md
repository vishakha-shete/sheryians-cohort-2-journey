#day-161 today we are start learning aws it is acloud service provider

- what is aws??
- aws is a cloud service provider cloud service provider is big 
- it offers a lot of things to us 
- platform-as-service
  - ex. hiroque 
- Infrastructure-as-a-service
 - amazon
 - google cloud platform
 - oracle cloud 
- Software_as_service 
  - microsoft
  - zoom

- for supporting this tree is called cloud provider AWS is a cloud provider providing iaas, paas, saas


- we are using a aws cloud provider 

# VPC : virtual private cloud 
- vpc is a private network inside aws. all your aws resources (ecs, pos,ec2) live inside a vpc it involves your infro from others
- lot of companies using aws 
- aws tells who is using my system so you all create your own vpc vpc means a virtual private network 
- for ex we have two vpc calles netflix and hostar and netflix has and hostar has a multiples server similarally database also present multiple database and both has a seperatly in their own vpc and access only their own vpc do not access by any other

* tenants
- there are different tenants into a aws  and  it using all
- in vpc what are the things are present 
- in vpc theire is one concept calles subnets 
- vpc kind of big private network and subnet is small private network of big network
- there are mainlly two types of subnets
1. public subnet
2. private subnet 
- in one server your frontend and backed both deployed and one database 
- in server their is need to come request from internet because user can access through the server but the database onlly accessed by your server if any other accessed then creates a problem
- pblic subnets can be accessed through the internet 
- but private subnets cant be accessable trough internet 
- its made up like this 
- in public subnet we are uploading our server and in privare the database
- because our server and database both is in vpc  

# Applicaton load balancer 
- vpc is big private network on aws
- public subnet - server
- alb generally in your vpc 
- if in your server multiple servers are running 
- one server cannot handle the load of your website so you created a multiple server
- in internet the user present and send the request trough internet on alb alb forward the request which server needed to send this request  in which server low load send a request on that server 
- alb performes the actual load balancing with multiple servers 

# Security Group
- security group make your aws journey hell litterally 
- whenever your requesting on internet https.//sheryiands
- local requires a port but in production your your port removed why because when by default your using a http protocall the port is consider is 8080  
- the request come on alb through internet if comes http so it comes on port 8080 if request https then come port no 443 i think 
- on alb comes request from port 80/443 and server generally runs on port no 3000 and the protocol nature is tcp all server runs port 3000 protocall tcp 
- security groups contolls which protocalls request comes on which port  
- security group is a virtual fireball that controlls which traffic is allowed in fireball out bound of your resources 
- its used for defining the rules on which port traffic comes and go and it is verry powerfull and if you make whole system but in security forget to add rules...then problem comes
- after that your creating another security group for alb to server  

# target groups 
- target group is kind of list of sever/container on which alb can send traffic 

# ecr 
- image is creating a two images but forward for deployment  we are creating a single image and in this image present backend and frontend both and wheneever your runnning this image then their is full stack server comes and for this we have to store that image like aws offers a lot of services 
- IN ECR WE ARE STORING THE IMAGE 
ECR - ecr is a storagr place for image 

# ecs - elastic container-service  
-  ecs is in which we are running our image service 