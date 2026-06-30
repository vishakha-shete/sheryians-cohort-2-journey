# day-170
- yesterday i tell you the architecture some changes makes in that archetecture
- lets see that archetecture i just make little bit changes on it 
- in yesterdays archetectur we have ai pods 
- the sandox service is creating a pods forward and need to create service and ingress 
- we are changing the archetecture this time we are not creating a ingress each time 
- we have a four we not created right now we are crearing it in future auth notification ai archestration this are three pods for now we just created a sandbox service 
- and this pod can create a pods after this and ingress also 
- and each time we are creating one pod and one service 
- there is called sandbox servise amd this service goes forward and creating a pod and for each pod needed to create a sevice and ingress 
- so we have a pod and in pod we have a service 
- this is what we learnt in yesterdays class 
- and now our archetecture is little bit different 
- we are not creating a ingress each time 
- we each time creating only one pod and service 
- in pod we are running vite develpmet server and another one creating a service in which traffic goes 
- so we have one question in our mind  
- if ingress is not creating then how traffic reache out to the service 
- if user stays out of the ungress then user cannot sends a directlly a request 
- like we need ingress when traffic comes fro out of the cluster 
- there is one user present out of the cluster 
- and this user cannot request directlly on service 
- so that time 
- user sends a request on ingress then goes to the auth service
- so without ingress how user sends request on pods 
- this time we are creating a *preview.localhost this time ingess dosent forward a request to a service 
- all request goes to the ingress which ends *preview.loalhost
- those request to this ingress and this ingress sends a request on one server name is router server 
- so ingress send a request on router server 
- router server sends it forward
- router servver is our express server  
- because this is router server it has one service also router-service
- in yesterdays class we only createad a sandbox service in todays class we are going to set up the router server and along with it our sandbox service is able to create the pod also 
- then creating a router server which redirect the traffics 
- we need to set up the router server 
- and  give the capacity to the sandbox service for creating a pods and cpability  
- if u want to create this feature then u need to add some things in it 
- in sandbox srvice i wantend a to create a feature sanndbox-service can create a sandbox
- the pod which is running in this pod present a react vite development server  so each pod need a image for running a container so now creating a image 
- in sandbox we are creating a file called templates
- in react vite created a template of our react code 
- and that template i convert into the image  
- so here i am converting a vite template into image and that template 
- after installing it it runs on localhost 5173 
- i i access it it will easily accessable 
- for now my vite development server is goes into the template folder 
- so this vite code i am converting it into a docker there is file called docker engore in which present nodemodules .env
- export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true
  }
})

we write this in vite config.js
- the meaning of allowedHosts means
- vite server is different so thats why we are setting up allowedhosts true
- then created a image called template:latest
- we have a one image in which present a vite server 
- like basic vite configuration present in this image
- in pod vite bydefault template is runnig
- whenever it created that one template runs into it 
- now we are writing a code in sandbox service which created a pods 
- for that we need a one package whenever your woriking with express and u want new pod that time u need to have package called @kuberneties/client-node 
- we are using this package
- in sandbox serverwe are installing one more dependencies 
- now installing a packages
- npm i @kubernetes/client-node uuid
- in server folder in src creating folder called kuberneties
- in which creating config.js
- import * as k8sApi from '@kubernetes/client-node';

const kc = new k8sApi.KubeConfig();
kc.loadFromDefault();

export const k8sCoreV1Api = kc.makeApiClient(k8sApi.CoreV1Api);

- for pod creating a seperate file called pod.js
- import { k8sCoreV1Api } from "./config.js";

export async function createPod(sandboxId) {
  const podManifest = {
    apiVersion: "v1",
    kind: "Pod",
    metadata: {
      name: `sandbox-pod-${sandboxId}`,
      labels: {
        app: "sandbox",
        sandboxId: sandboxId,
      },
    },
    spec: {
      containers: [
        {
          name: "sandbox-container",
          image: "template",
          imagePullPolicy: "IfNotPresent",
          ports: [
            {
              containerPort: 5173,
              name: "http",
            },
          ],
          resources: {
            limits: {
              cpu: "500m",
              memory: "1Gi",
            },
            requests: {
              cpu: "250m",
              memory: "500Mi",
            },
          },
        },
      ],
    },
  };

  const response = await k8sCoreV1Api.createNamespacedPod({
    namespace: "default",
    body: podManifest,
  });

  return response;
}

then we need service so created service.js
- import { k8sCoreV1Api } from "./config.js";

export const createService = async (sandboxId) => {
  const serviceManifest = {
    apiVersion: "v1",
    kind: "Service",

    metadata: {
      name: `sandbox-service-${sandboxId}`,
      labels: {
        app: "sandbox",
        sandboxId: sandboxId,
      },
    },

    spec: {
      selector: {
        app: "sandbox",
        sandboxId: sandboxId,
      },

      ports: [
        {
          name: "http",
          port: 80,
          targetPort: 5173,
          protocol: "TCP",
        },
      ],

      type: "ClusterIP",
    },
  };

  const response = await k8sCoreV1Api.createNamespacedService({
    namespace: "default",
    body: serviceManifest,
  });

  return response;
};


after this import in app.js and adding another api 

- import express from "express";
import morgan from "morgan";
import { createPod } from "./kuberneties/pod.js";
import { createService } from "./kuberneties/service.js";
import { v7 as uuid } from "uuid"

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/sandbox/health', (req, res) => {
    res.status(200).json({
        message: 'sandbox API is healthy',
        status: 'ok'
    })
});

app.post("/api/sandbox/start", async (req, res) => {
    try {
        const sandboxId = uuid();

        await Promise.all([
            createPod(sandboxId),
            createService(sandboxId)
        ]);

        return res.status(201).json({
            message: "Sandbox environment created successfully",
            previewUrl: `http://${sandboxId}.localhost`
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to create sandbox environment"
        });
    }
})

export default app;


- we are deploying this part before deploying it i have to create a new image for it docker build -t sandbox:latest .
- after this need to run command in capstone project kubectl apply -f ./k8s
- there is one thing mising bydefault if new cluster is creating 
- so ingress controller is not installed
- so we need to install it 
-

http://localhost/api/sandbox/health

