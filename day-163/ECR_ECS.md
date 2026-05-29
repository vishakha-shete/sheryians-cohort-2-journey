# ☁️day163 - AWS ECS & ECR Deployment Workflow

## 📌 Overview

In this session, we learned how to deploy a full-stack Dockerized application using:

* AWS ECR
* AWS ECS
* VPC
* Load Balancer
* Security Groups
* IAM
* Task Definitions
* ECS Services

We deployed a single Docker image containing:

* frontend
* backend

together into AWS cloud infrastructure. 

---

# 🚀 Final Deployment Architecture

The final deployment flow looks like this:

```text id="4w7p2x"
Developer Machine
        ↓
Docker Image
        ↓
AWS ECR
        ↓
AWS ECS
        ↓
Load Balancer
        ↓
Internet Users
```

---

# ☁️ AWS Services Used

## 1️⃣ ECS — Elastic Container Service

Used to:

* run Docker containers
* manage services
* scale applications

---

## 2️⃣ ECR — Elastic Container Registry

Used to:

* store Docker images
* manage image versions

---

# 🧠 Other AWS Services Mentioned

AWS provides many services including:

* EC2
* Bedrock
* SageMaker

### SageMaker

Used for:

* training AI models
* deploying ML systems

---

# 📦 ECR — Image Storage

ECR acts like:

```text id="9x3m1v"
Docker Hub for AWS
```

It stores:

* Docker images
* image versions
* deployment artifacts

---

# 🚀 ECS — Container Runner

ECS is responsible for:

* pulling images from ECR
* running containers
* scaling services
* managing deployments

---

# 🧩 ECS Core Components

ECS mainly has 2 important parts:

---

# 1️⃣ Task Definitions

Task Definition describes:

```text id="8m1x5q"
Which image to run
+
How many resources to allocate
```

---

## Example Resources

```text id="7v4m2x"
vCPU: 1
RAM: 3GB
```

---

# 2️⃣ Services

Services:

* read Task Definitions
* create running containers
* maintain desired container count

---

# 🔐 IAM — Identity & Access Management

## 📌 What is IAM?

IAM controls:

* users
* permissions
* access policies

inside AWS.

---

# ⚠️ Root User Problem

By default:

* AWS root user has complete access

If root credentials leak:

* entire AWS account becomes vulnerable

---

# ✅ Best Practice

Create separate IAM users with limited permissions.

Example:

```text id="3m7x1k"
cohort-user
```

with access only to:

* ECS
* ECR

---

# 🛠️ Creating IAM User

## Steps

1. Open IAM Service
2. Create User
3. Name:

   ```text id="9r4m2v"
   cohort
   ```
4. Attach Policies:

   * AmazonEC2ContainerRegistryFullAccess
   * AmazonECS_FullAccess

---

# 🔑 Access Keys

After creating user:

* generate access keys
* copy keys immediately

AWS shows them only once.

---

# 💻 AWS CLI Setup

AWS CLI is required to:

* authenticate locally
* push Docker images
* interact with AWS services

---

# 📦 Creating ECR Repository

## Steps

1. Open ECR
2. Create Repository
3. Repository Name:

```text id="1q8m4x"
cohort-demo
```

This creates storage space for Docker images.

---

# 🚀 Push Docker Image to ECR

AWS provides push commands.

---

# ⚠️ Architecture Problem

Mac systems often use:

```text id="6x2m9v"
ARM Architecture
```

AWS machines usually use:

```text id="7p5m1q"
AMD64 Architecture
```

Images built on ARM may fail on AWS.

---

# ✅ Solution — Docker Buildx

Use:

```bash id="5v2m8x"
docker buildx build --platform linux/amd64 -t cohort-demo:latest . --load
```

---

# 🧠 What Buildx Does

Converts:

* ARM images
  → AMD64 compatible images

---

# ⚠️ Important Flag

```bash id="2m7x4v"
--load
```

ensures image is saved locally after build.

---

# ☸️ ECS Deployment Setup

---

# 🌐 Step 1 — Create VPC

Create:

```text id="8q1m5x"
cohort-vpc
```

This creates:

* networking environment
* subnets
* routing system

---

# ☸️ Step 2 — Create ECS Cluster

## Cluster Name

```text id="9x4m2v"
cohort-cluster
```

Select:

```text id="5m1x8q"
Fargate Only
```

---

# 🧩 Step 3 — Create Task Definition

## Task Name

```text id="4p7x2m"
cohort-task
```

---

# ⚙️ Resources

```text id="7x2m5q"
CPU: 1 vCPU
Memory: 3GB
```

---

# 🔐 ECS Roles

---

# Task Role

Provides permissions to:

* containers inside ECS tasks

---

# Task Execution Role

Used by ECS for:

* pulling images
* sending logs
* ECS operations

---

# 🛠️ Creating Task Role

1. IAM
2. Roles
3. Create Role
4. AWS Service
5. Elastic Container Service
6. Task Execution Role

Name:

```text id="2v5m8x"
cohort-taskrole
```

---

# 📦 Container Setup

## Container Name

```text id="6m2x9v"
cohort-demo-server
```

---

# 🖼️ Image Source

Select image from:

* ECR Repository
* cohort-demo

---

# 🌐 Container Port

```text id="5x1m7q"
3000
```

Protocol:

```text id="3m9x2v"
TCP
```

---

# 🚀 Step 4 — Create ECS Service

## Service Name

```text id="1x5m8q"
cohort-task-service-latest
```

---

# Desired Tasks

```text id="4m2x7v"
2
```

This creates:

* 2 running containers

---

# 🌐 Networking Configuration

Select:

* cohort-vpc

Remove:

* private subnets

---

# ⚖️ Load Balancer Setup

Use:

```text id="7m1x4q"
Application Load Balancer
```

---

# Load Balancer Name

```text id="9x5m2v"
cohort-ALB
```

---

# Target Group Name

```text id="3m8x1q"
cohort-TG
```

---

# 🔐 Security Groups

Initially application may not work because:

```text id="5m7x2v"
Port 3000 traffic is blocked
```

---

# ✅ Fix

Add Security Group rules allowing:

* TCP traffic
* Port 3000
* Source: Anywhere

Also configure:

* ALB Security Group

---

# 🌍 Accessing Application

ECS provides:

* DNS URL
* Load Balancer endpoint

You can access application through browser using DNS.

---

# 🌐 Domain Setup

Instead of raw DNS:

* purchase domain
* configure DNS settings

---

# DNS Configuration

Add:

```text id="1m9x4q"
CNAME Record
```

Point domain to:

* ALB DNS URL

---

# 🚀 Future Learning Topics

Upcoming topics include:

* Multi-Agent Systems
* Capstone Project
* TinyCat
* CI/CD
* Kubernetes
* NGINX
* Load Balancers
* Microservices
* Queues
* Next.js
* PWAs
* Animations

---

# 📚 Key Learning Outcomes

This session teaches:

* AWS ECS
* AWS ECR
* IAM
* VPC
* ECS Services
* Task Definitions
* Security Groups
* Load Balancers
* Docker Buildx
* Multi-Architecture Images
* Cloud Deployment Workflows

---

# 🏁 Conclusion

Using:

* Docker
* ECR
* ECS
* VPC
* Load Balancers
* Security Groups

developers can deploy:

* scalable
* production-ready
* cloud-native applications

on AWS efficiently and professionally.
