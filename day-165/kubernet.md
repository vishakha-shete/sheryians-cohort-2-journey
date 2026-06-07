# ☸️day-165 Kubernetes Fundamentals & Deployment Architecture

## 📌 Overview

In this session, we started learning about:

* Kubernetes
* Auto Scaling
* Deployments
* Pods
* Services
* Ingress
* Ingress Controllers

We learned how Kubernetes helps manage:

* deployment
* scaling
* maintenance
* traffic routing

for containerized applications. 

---

# 🚀 Why Kubernetes?

Kubernetes is mainly used for:

* deployment
* scaling
* maintenance
* orchestration

of containers.

---

# ⚡ Auto Scaling Problem

Suppose:

* one server handles 1000 users

But traffic increases to:

* 2000 users

One container/server cannot handle the load.

---

# ✅ Kubernetes Solution

Kubernetes automatically:

* creates more containers
* distributes traffic
* removes extra containers when load decreases

This process is called:

```text id="8x2m5v"
Auto Scaling
```

---

# ☸️ What is Kubernetes?

Kubernetes is a:

```text id="3m7x1q"
Container Orchestration System
```

It manages:

* containers
* deployments
* networking
* scaling
* monitoring

---

# 📦 Container Architecture

Usually:

* one container contains one server/application

Example:

```text id="5m1x8q"
Express Server
```

running inside:

* Docker Container

---

# 🚀 Scaling Example

Initially:

```text id="1x7m4q"
1 Container → 1000 Users
```

Later:

```text id="4m2x8v"
2 Containers → 2000+ Users
```

Kubernetes creates containers dynamically based on demand.

---

# 🏗️ Kubernetes Architecture

Kubernetes contains multiple components.

---

# 1️⃣ Cluster

## 📌 What is Cluster?

A Cluster is:

```text id="7m1x5q"
Group of machines/nodes
```

where Kubernetes runs applications.

---

# 🧩 Pod

## 📌 What is Pod?

A Pod is the smallest unit in Kubernetes.

For beginners:

```text id="2x8m5v"
Pod ≈ Container
```

A Pod contains:

* application container
* networking
* runtime environment

---

# 🚀 Deployment

## 📌 What is Deployment?

Deployment manages Pods.

It defines:

* which image to run
* how many replicas
* CPU usage
* memory usage

---

# 🧠 Responsibilities

Deployment:

* creates Pods
* manages replicas
* restarts failed Pods
* maintains desired state

---

# 🔄 Replica

```yaml id="4m8x1q"
replicas: 2
```

Means:

* 2 Pods/containers should always run

---

# ⚙️ Resource Management

Deployment can define:

## CPU

```yaml id="5x1m7q"
cpu: "500m"
```

---

## Memory

```yaml id="7x2m4v"
memory: "128Mi"
```

---

# 🧠 Millicores

Kubernetes CPU system:

```text id="1m5x8q"
1 Core = 1000 millicores
```

---

# 📄 Deployment.yml

```yaml id="8m2x5v"
apiVersion: apps/v1
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
```

---

# 🚀 Apply Deployment

```bash id="9m4x1q"
kubectl apply -f ./k8s/Deployment.yml
```

This creates:

* deployment
* pods
* replicas

---

# 🌐 Service

## 📌 What is Service?

Pods can:

* crash
* restart
* receive new IP addresses

So direct pod access is unreliable.

---

# ✅ Service Solution

A Service provides:

```text id="4x8m2v"
Stable Endpoint
```

for accessing Pods.

---

# 🔄 Traffic Flow

```text id="1x5m7q"
User Traffic
      ↓
Service
      ↓
Pods
```

---

# 📄 Service.yml

```yaml id="7m2x5v"
kind: Service
apiVersion: v1

metadata:
  name: express-service

spec:
  selector:
    app: express

  type: ClusterIP

  ports:
  - name: http
    port: 80
    targetPort: 3000
```

---

# 🧠 Service Responsibilities

Service:

* receives traffic
* forwards traffic to Pods
* load balances between Pods

---

# 🌐 Ingress

## 📌 What is Ingress?

Ingress defines:

* routing rules
* external access rules

for services.

---

# 📄 ingress.yml

```yaml id="5m8x1q"
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
```

---

# 🚦 Ingress Controller

## 📌 Important Concept

Ingress only defines rules.

It does NOT implement them.

---

# ✅ Ingress Controller

Ingress Controller enforces Ingress rules.

Common controller:

```text id="2m7x4v"
NGINX Ingress Controller
```

---

# 🔄 Full Request Flow

```text id="6x2m5q"
User
  ↓
Ingress Controller (NGINX)
  ↓
Service
  ↓
Pods
```

---

# 🚀 Install NGINX Ingress Controller

```bash id="4m1x8q"
kubectl apply -f \
https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml
```

This installs:

* NGINX ingress controller
* routing system

---

# 📚 Key Kubernetes Components

| Component          | Responsibility           |
| ------------------ | ------------------------ |
| Cluster            | Group of nodes           |
| Pod                | Smallest deployable unit |
| Deployment         | Manages Pods             |
| Service            | Stable networking        |
| Ingress            | Routing rules            |
| Ingress Controller | Implements ingress       |

---

# ⚡ Kubernetes Benefits

## ✅ Auto Scaling

Automatically scales containers.

---

## ✅ Self Healing

Restarts failed Pods.

---

## ✅ Load Balancing

Distributes traffic across Pods.

---

## ✅ High Availability

Multiple replicas improve uptime.

---

# 📚 Key Learning Outcomes

This session teaches:

* Kubernetes Basics
* Pods
* Deployments
* Replicas
* Services
* Ingress
* Ingress Controllers
* Auto Scaling
* Resource Management
* Kubernetes Networking

---

# 🏁 Conclusion

Kubernetes helps build:

* scalable
* resilient
* production-grade
* containerized applications

by managing:

* deployments
* networking
* scaling
* traffic routing

efficiently and automatically.
