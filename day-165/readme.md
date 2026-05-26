# day-165 - learning about the kuberneties

- why we are using the kuberneties 
- deployement, scalling , maintaining 
- because of scalling if the load lot comes on it then add one server immediatlly theire 

so today we are learning how autoscalling work
- created a express server convert it into image and run it and it gives a container 

- we have a image cohort_2_express
- now we are starting our kuberneties 
- and deploye it using the kuberneties 
- learning how this image goes live 
- in kuberneties there are some concept
1) cluster
- cluster is group and in which we are running all the server it like network

kuberneties
- container archistration system 
- in container we have a server generally in one cnatainer one server present
- because of the container in which we have server then loads comes in a server in our deployement we have only one container in which one server it serves 1000 users but the problem is user is not limited it grows after sometime it grows till 2000 but the resources not allows it so thats why we can able to create a one another container in which we have another server which it serves very easily 
- when load increase then increases the server when load down then decreases the server 
- kuberneties works on the demand 

- how kuberneties done thiss??
-  kuberneties have another components also  
- Architecture
- pod
 - pod in kuberneties lets assume it as a container 

- deployement
 - it is component  in wich image from pods created
 - it manages the pods 
 - cpu
 - how many cpu it can be used 
 - ram
 - how many ram used 
 - replica  : 2
 - how mant container is able to create from this image 
 - deployment conatains everytime two pod/container 
 - replica tells the number of container to be spinns and roles 

 * service
 -  it gives a stable endpoinds
- container has a ishue it can be crash anytime whenever its creating it has new ip 
-user traffic flow  service through becausse pod/containers anyime crash and new container spins so whenever conatiner spins we dont the ip of the container so the service can forward traffic through the pods/containers forward


* ingress
- ingress is a rules it inforse anyone else 

* ingress-controllers 
- this the one who can implement the things 
- ingress controller can inforse the the rules off ingress
- (nginx) is a ingress controller 
- now we have to mplement this

- we have to create three files 
- 1) Deployement.yml
   - it contains which image is to be run
   - with how many resouces
   - and how many replicas

- lets create Deployement-file
- create a new folder with name k8s

- apiVersion: apps/v1
kind: Deployment
metadata:
  name: express-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: express
  template:
    metadata:
      labels:
        app: express
    spec:
      containers:
      - name: express-container
        image: cohort_2_express
        imagePullPolicy: Always
        ports:
        - containerPort: 3000
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
          requests:
            memory: "64Mi"
            cpu: "250m"

    -  deployement file work is to manage the pods with which image
     - kubernwties contains a
     - 1 core = 1000 millicores 
     - the one container can be used 500m and its maximum generally 250    

    run this kubectl apply -f ./k8s/Deployement.yml   
    - till now we created a deployement file 
    - in which we have two pods which hadle deployement perfectlly 
    - now we have to create a one service here 
    - because deployement sees only the pods now running two
    - but the traffic forward work is services
    - but now the servise not exists
    - so now we have to create the service

- 2) Service.yml

kind: Service
apiVersion: v1
metadata:
  name:  express-service
spec:
  selector:
    app:  express
  type: ClusterIP
  ports:
  - name: http
    port:  80
    targetPort:  3000

    this is the service,yml file 
    - in this service if traffic come it forwards to  pods 
    - and the servise traffic comes from ingress controller 
    - so now we need to create the ingress controller in which we have (nginx)
    - so here user sends a traffic to the ingress-controller and traffic goes to the service
    - so now lets create it 

- 3) ingress.yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: express-ingress
  labels:
    app.kubernetes.io/name: myingress
spec:
  className: nginx
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: express-service
                port:
                  number: 80


- ingress is only a rules it actuall inforce the ingress-controller so we have to create the ingress controller
- for that we need to run the command for setup it called

- kubectl apply -f \
  https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml