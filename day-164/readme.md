# THERE IS TWO DIFFERENT TYPES OF ARCHITECTURE 
1) MONOLITH
2) MICROSERVICES

1) MONOLITH
- in monolith in which only one server
- like we have one applicaton lets say insta
- there is only one server and one database
- server has different different replicas
- if server not handle the load with the server so we replicate the server
- so managing the traffic in a best way so we use there load balancer
- it distrubute similiarlly
- till now we use the 
- this is the monolith architecture
- we have a one server and that server handles auth posts messages feature is called monolith architecture

problem 
- the codebase is running on te server if you replicate it then same codebase runs on another also 
- so we created replication but the code is running same on the both if the codebase has one problem then so same bug makes an problem on another server also 
- and all server can with this bug down or behaved differentlly 
- so the codebase has a bug and faulty codebase so in that server this runs it shutdown that server also 

2) MICROSERVICES
- microservice architecture is different from monolith architecture
- in microservices application is one but in which have lot of small small services
- auth service runs different service the code base is only authentication code it has completelly different database
- posts service runs different service the code base is only posts code it has completelly different database
- messages service runs different service the code base is only messages code it has completelly different database
- the application id devided into small small services
- it has loadbalancer / api gateway 
- this redirected a services on specific servers 
-  message request on messages server
- posts request on posts server
- auth request on auth server

- message feature comsume more resources
- so i can replicate only the messages services 
- so here in microservices architecture i have chooce here 
- user can request like 
  - /api/posts 
  - /api/auth
  - /api/messages 
  - it forwards requeste on specific server
  - its unsharable 

- we are using the angenics load balancer 

CAP-THEOREM - learn about it
-  consistency and availability

- detox-attack


* Distributed-system
- we have different different services in it
- auth
- post
- messages
- what exactlly difference in it
- it has different different codebase , server but it has only one database so this is called distributed 
- each microservice has its own seperate database 
- distribute system is hybrid and monolith 


microservice architecture
- how services can communicate with each other
-interservice communication have its peimarlly two types 
1) asynchronous communication
- if post service wants a data from auth service then post sends one api request post take a network call on auth service then auth service sends a response its wait till response come 

2) synchronous communication
- we have a servvice called notification 
- if new user register on auth service with the details we have to send one notification on theire email address like your register on our platform successfully
- then that time we have message que its like the first input is the last input of it 
- auth servise register on the auth servise it goes into q  and those info come first those info out first its like first in first out 
- notification service continuoslly reads a q if its sees a new data then send a email on user gmail acount 


when we switch monolith to microservice architecture???
- in monolith when u are adding new features it delays so we switch to the microservice in which it devides a big codebase into small parts and using small parts feature developin is easy 

