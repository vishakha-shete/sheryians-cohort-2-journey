# 🚀 Day 166 - Kubernetes Scaling, Services, Ingress & Monitoring

## 📌 Overview

In this session, we learned how Kubernetes manages containerized applications at scale using:

* Deployments
* Pods
* Services
* Ingress
* Ingress Controllers
* Metrics Server
* Horizontal Pod Autoscaler (HPA)

We also learned how Kubernetes automatically creates, manages, monitors, and scales containers based on application demand.

---

# ☸️ Kubernetes Basics

Kubernetes is a:

```text
Container Orchestration Platform
```

It helps with:

* Deployment
* Scaling
* Monitoring
* Self-healing
* Load Balancing

---

# 🧩 Pod

A Pod is the smallest deployable unit in Kubernetes.

For learning purposes:

```text
Pod ≈ Container
```

A Pod contains:

* Application Container
* Networking
* Runtime Environment

Example:

```text
Docker Image
      ↓
Pod
```

---

# 🚀 Deployment

Deployment manages Pods.

Responsibilities:

* Creates Pods
* Maintains replicas
* Handles rolling updates
* Automatically recreates failed Pods

---

## Deployment Example

```yaml
apiVersion: apps/v1
kind: Deployment

metadata:
  name: express-deployment

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
```

---

# 🔄 Replica Concept

```yaml
replicas: 3
```

Means:

```text
Kubernetes must always keep 3 Pods running.
```

If one Pod crashes:

```text
Kubernetes creates a new Pod automatically.
```

---

# ⚙️ Resource Management

Each container can be assigned:

## Memory

```yaml
memory: "128Mi"
```

Means:

```text
128 MB RAM
```

---

## CPU

```yaml
cpu: "500m"
```

Means:

```text
500 Millicores
```

---

## CPU Calculation

```text
1 CPU Core = 1000 Millicores
```

Therefore:

```text
500m = 0.5 CPU Core
250m = 0.25 CPU Core
```

---

# 🚀 Create Deployment

Apply deployment:

```bash
kubectl apply -f deployment.yml
```

Check pods:

```bash
kubectl get pods
```

---

# 🗑 Delete Pod

Delete specific pod:

```bash
kubectl delete pod <pod-name>
```

Force delete:

```bash
kubectl delete pod <pod-name> --grace-period=0 --force
```

Deployment immediately creates a replacement pod.

---

# 🌐 Service

Pods have a problem:

```text
Pods can die and restart.
```

Every new Pod gets a new IP.

Therefore users cannot directly connect to Pods.

---

## Solution: Service

A Service provides:

```text
Stable Endpoint
```

for accessing Pods.

---

## Service Example

```yaml
apiVersion: v1
kind: Service

metadata:
  name: main-server-service

spec:
  selector:
    app: main-server

  type: ClusterIP

  ports:
    - name: name-of-the-port
      port: 80
      targetPort: 3000
```

---

## Traffic Flow

```text
User
 ↓
Service
 ↓
Pods
```

---

# 🚦 Ingress

Ingress defines routing rules.

Example:

```text
/ → Main Service
/products → Product Service
```

Ingress itself does not handle traffic.

It only defines rules.

---

# 🎛 Ingress Controller

Ingress Controller implements ingress rules.

Common choice:

```text
NGINX Ingress Controller
```

---

## Install NGINX Ingress Controller

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml
```

---

## Verify Installation

```bash
kubectl get pods -n ingress-nginx
```

---

# Ingress Example

```yaml
apiVersion: networking.k8s.io/v1

kind: Ingress

metadata:
  name: express-app

spec:
  ingressClassName: nginx

  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix

            backend:
              service:
                name: main-server-service

                port:
                  number: 80
```

---

# 🌐 Request Flow

```text
User
 ↓
Ingress Controller (NGINX)
 ↓
Service
 ↓
Pods
```

---

# 📊 Metrics Server

Metrics Server collects:

* CPU usage
* Memory usage
* Resource statistics

from Kubernetes nodes and pods.

---

## Install Metrics Server

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

---

## Docker Desktop Fix

```bash
kubectl patch deployment metrics-server -n kube-system --type=json -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'
```

---

## Verify Metrics Server

```bash
kubectl rollout status deployment/metrics-server -n kube-system
```

---

## Monitor Nodes

```bash
kubectl top nodes
```

---

## Monitor Pods

```bash
kubectl top pods
```

---

# 👀 Watch CLI

Install Watch CLI.

Monitor pods continuously:

```bash
watch -n 2 kubectl top pods
```

This refreshes every:

```text
2 Seconds
```

---

# 🔥 Hey CLI

Hey is a load testing tool.

Used to generate traffic.

---

## Example

```bash
hey -z 2m -c 200 http://localhost
```

Meaning:

* Run for 2 minutes
* 200 concurrent users
* Send traffic to localhost

---

# 📜 Live Logs

View deployment logs:

```bash
kubectl logs deployment/express-deployment --tail=100 -f
```

Options:

| Flag       | Meaning        |
| ---------- | -------------- |
| --tail=100 | Last 100 logs  |
| -f         | Live streaming |

---

# 📈 Horizontal Pod Autoscaler (HPA)

By default:

```text
Kubernetes does NOT autoscale.
```

Autoscaling requires:

```text
HPA
```

---

## Create HPA

```bash
kubectl autoscale deployment express-deployment \
  --min=2 \
  --max=10 \
  --cpu-percent=50
```

---

## Configuration

```text
Minimum Pods = 2
Maximum Pods = 10
CPU Threshold = 50%
```

---

## Autoscaling Logic

```text
CPU > 50%
      ↓
Create More Pods
```

```text
CPU Low
      ↓
Remove Extra Pods
```

---

# 📊 HPA + Metrics Server

Relationship:

```text
Metrics Server
       ↓
Provides CPU Data
       ↓
HPA Reads Metrics
       ↓
Scales Pods
```

---

# 🏗 Multi-Service Kubernetes Setup

Later we introduced:

## Main Server

```text
Port 3000
```

---

## Product Server

```text
Port 8080
```

Each service requires:

* Deployment
* Service
* Ingress Route

---

## Traffic Routing Example

```text
/
 ↓
Main Service

/products
 ↓
Product Service
```

Configured inside:

```text
ingress.yml
```

---

# 📚 Key Learning Outcomes

This session teaches:

* Pods
* Deployments
* Services
* Ingress
* NGINX Ingress Controller
* Metrics Server
* HPA
* Autoscaling
* Resource Management
* Load Testing
* Multi-Service Kubernetes Architecture

---

# 🏁 Conclusion

Kubernetes provides powerful capabilities for:

* Deployment
* Traffic Routing
* Monitoring
* Self-Healing
* Autoscaling

By combining:

```text
Deployment
+
Service
+
Ingress
+
Metrics Server
+
HPA
```

we can build scalable, production-ready applications that automatically adapt to traffic and system load.
