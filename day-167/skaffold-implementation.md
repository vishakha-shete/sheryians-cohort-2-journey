# 🚀 Day 167 - Skaffold Implementation with Kubernetes

## 📌 Overview

This project demonstrates the implementation of **Skaffold** with **Docker** and **Kubernetes** to automate the development workflow of a Node.js application.

Skaffold simplifies Kubernetes development by automatically building Docker images, deploying Kubernetes manifests, syncing code changes, and providing local port forwarding.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Docker
* Kubernetes
* Skaffold
* NGINX Ingress Controller

---

## 📂 Project Structure

```bash
skaffold-Implementation/
│
├── backend/
│   ├── dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── node_modules/
│
├── k8s/
│   ├── core-deployment.yml
│   ├── core-service.yml
│   └── core-ingress.yml
│
└── skaffold.yaml
```

---

## ⚙️ Skaffold Configuration

The `skaffold.yaml` file automates:

* Docker image building
* Kubernetes deployment
* File synchronization
* Port forwarding

### Image Build

```yaml
build:
  local:
    push: false
```

Builds images locally without pushing them to a registry.

---

### File Sync

```yaml
sync:
  manual:
    - src: '**/*.js'
      dest: /app
```

Automatically syncs source code changes to running containers without rebuilding the image.

---

### Port Forwarding

```yaml
portForward:
  - resourceType: service
    resourceName: core-service
    port: 80
    localPort: 3000
```

Allows access to the application via:

```bash
http://localhost:3000
```

---

## ☸️ Kubernetes Resources

### Deployment

Creates application pods and manages replicas.

```bash
kubectl get deployments
```

---

### Service

Exposes the application inside the Kubernetes cluster.

```bash
kubectl get services
```

---

### Ingress

Provides external access and routing.

```bash
kubectl get ingress
```

---

## 🚀 Running the Project

### Start Kubernetes Cluster

Verify Kubernetes is running:

```bash
kubectl get nodes
```

---

### Run Skaffold

```bash
skaffold dev
```

Skaffold will:

1. Build Docker image
2. Deploy Kubernetes manifests
3. Start port forwarding
4. Watch source files for changes
5. Sync updates automatically

---

## 🔍 Useful Commands

### Check Pods

```bash
kubectl get pods
```

### Check Services

```bash
kubectl get svc
```

### Check Ingress

```bash
kubectl get ingress
```

### View Logs

```bash
kubectl logs <pod-name>
```

### Stop Skaffold

```bash
Ctrl + C
```

---

## 🎯 Key Learnings

* Skaffold Fundamentals
* Kubernetes Deployment Management
* Service Exposure
* Ingress Configuration
* Port Forwarding
* Docker Image Automation
* Continuous Development Workflow
* Automatic File Synchronization

---

## 📈 Outcome

Successfully implemented a complete Skaffold-powered Kubernetes development workflow that automates Docker image builds, Kubernetes deployments, port forwarding, and live code synchronization, enabling faster and more efficient application development.

---

### ⭐ Day 167 Completed Successfully

**Topic:** Skaffold Implementation with Kubernetes & Docker
