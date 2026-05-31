# kuberneties

- pod = means your actual one server
- deployement = deployement manages the pods
 - server v1 is pod if u want to deploye v2 it stayes with old v1 and create new one after creating completelly new one down old one slowlly
 - its kind off load-balancer

 - service = service manages the list off traffic 
 - service distibute the list off traffic to the pods similiarlly


- ingress = ingress is rules for 

- ingress-controller = (ngnix) is ingress controller
- user request goes to the ingress controller
- it forwards request to the service and
- then service send a request to the one port of any one after analizing the traffic theire is algorithum present for.ex= round-robin algorithum
- the kuberneties works on the docker
- you have to use aws all the time 
- to ingress-controller we need to tell where our trffic goes 

- firstlly we created a basic express server and then we create an image and run it and it gives a one container
-  now we are move towords the kuberneties 
- firstlly setup the kuberneties 
- firstlly we are creating a deployement 
- the folder name we gave it k8s
- then in create a deployement.yml

- deployement file work is to manage the pods

apiVersion: apps/v1
kind: Deployment
metadata:
  name: express-deploymeent
spec:
  replicas: 3
  selector:
    matchLabels:
      app: main-server
  template:
    metadata:
      labels:
        app: main-server
    spec:
      containers:
        - name: main-server
          image: express_cohort_2:latest
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
    
    \\ we have one kuberneties in which next we will create a deployement 
    - we name the deployement as the express deployement 
    - in specs the number of replication means the deployement how many pods runs is calles replicas so we set a 3 it creates a deployement but at a time how many numbers of pods it is managing maintain it 
    - containers - the one pod runs a multiple container
    - in one pod we put one container 
    - but theire is possibility to add another one also 
    - the container name is main-server
    - the container create on the which image
    - imagpollicy tells where image present go with that
    - ports - traffic port is 3000
    - resources - how mant resources the container used
    -  memory : "128mi" - it mean RAM the 128 megabytes
    - cpu: "500m" - cpu 500 milicores (05 cpu)
    - in laptop there is multiple cors present 
    - and one core capacity= 1000m, 1 {core = 1000 milicores}
    - the container is running used this ram and cpu half core it can be used 250 milicores cpu
    - ideally 64 megabytes ram and 


- now the deployement will be creaate with 3 pods 
- deployement manages the lables for each one
- selector tells which deployement pods which name is main-server we need to manage 

run this command
- docker ps
- docker remove --id
- docker stope --id

after this run this
kubectl apply -f ./k8s/deployement.yml

- deployement create new pod if old one dead

kubectl apply -f deployement.yml
- it create a 3 pods

kubectl get pods
- it shows how many pods are present 

kubectl delete pod express-deploymeent-8687bdc9c6-gthhh
- it delete the perticular path with theire id

 kubectl delete pod express-deploymeent-8687bdc9c6-sv688 --grace-period=0 --force
 - for without vating pod deletion

 so now we created a deployement and understanding the working of pods

 - now the user dont have way to send traffic on this so we need to create the ingress controller and services

 -  so now we are going to create the services
 - firstlly create file service.yml in k8s folder
 
 - kind: Service
apiVersion: v1
metadata:
  name:  main-server-service
spec:
  selector:
    app:  main-server
  type:  ClusterIP
  ports:
  - name:  name-of-the-port
    port:  80
    targetPort:  3000

    // here we created a service now deploye it
    - kubectl apply -f service.yml

- now we have to create the ingress controller
- you have to set ingress.yml and install the controller

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml

kubectl get pods -n ingress-nginx
- it for seeing the ingrss is running or not

- apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: express-app
  labels:
    app.kubernetes.io/name: express-app
spec:
  ingressClassName: nginx
  rules:
   - http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          service:
            name: main-server-service
            port: 
              number: 80


run 
kubectl apply -f ingress.yml
- run the ingress-controller

now it runs perfectlly

- for monitoring and debugging we have some commands


1) Metric-server
- metric-server is one component it monitor the pods and manage the using rosources  

- we have to run this three commands for metric server

for installing the matric server
# Option A: Official manifest with kubelet insecure TLS patch (recommended for Docker Desktop)
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# Docker Desktop uses a self-signed cert — patch metrics-server to skip TLS verify:
kubectl patch deployment metrics-server -n kube-system  --type=json \ -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'

# Wait for it to be ready (~30 seconds)
kubectl rollout status deployment/metrics-server -n kube-system

# Verify it works — you should see CPU and Memory columns
kubectl top nodes
kubectl top pods

watch cli install
