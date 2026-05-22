# ☁️ AWS Networking, ECS, ECR & Fullstack Docker Deployment

## 📌 Overview

In this session, we continued learning about:

* AWS Architecture
* VPC Networking
* Application Load Balancer
* Security Groups
* Target Groups
* CloudWatch
* ECS & ECR
* Multi-stage Docker Builds
* Fullstack Deployment Automation

We also learned how to combine:

* frontend
* backend

into a single production-ready Docker image.

---

# 🌩️ AWS Overview

AWS is a:

```text id="1r7x4k"
Cloud Service Provider
```

Large companies use AWS for deployment, including:

* Netflix
* Hotstar
* Flipkart

AWS provides:

* servers
* networking
* databases
* deployment systems
* container services

---

# 🌐 VPC — Virtual Private Cloud

## 📌 What is VPC?

A:

```text id="3n5v2m"
Virtual Private Cloud
```

is a private isolated network inside AWS.

Every company gets its own VPC.

---

# 🧠 Example

```text id="5x2p8t"
Netflix VPC
Hotstar VPC
Flipkart VPC
```

Each VPC contains:

* servers
* databases
* internal networking

and cannot access other VPCs directly.

---

# 🧩 Subnets

Inside a VPC there are smaller networks called:

```text id="9t6w3r"
Subnets
```

---

# 🌍 Public Subnet

Can be accessed through the internet.

Used for:

* frontend servers
* backend APIs
* load balancers

---

# 🔒 Private Subnet

Cannot be accessed directly through the internet.

Used for:

* databases
* internal services

---

# 🌐 Internet Gateway

Inside AWS VPC architecture there is an:

```text id="2m8x5k"
Internet Gateway
```

It allows internet traffic to enter the VPC.

---

# 🔄 Request Flow

```text id="7q4p1n"
Internet
   ↓
Internet Gateway
   ↓
VPC
```

Without Internet Gateway:

* public traffic cannot enter the VPC.

---

# ⚖️ ALB — Application Load Balancer

## 📌 What is ALB?

ALB stands for:

```text id="6x1m4v"
Application Load Balancer
```

Its job is to distribute traffic across multiple servers.

---

# 🧠 Why Needed?

One server cannot handle huge traffic.

So multiple servers are created.

ALB intelligently distributes:

* requests
* traffic
* load

between servers.

---

# 🔄 ALB Flow

```text id="1t7v8m"
Internet User
      ↓
Application Load Balancer
      ↓
Available Server
```

---

# 🔐 Security Groups

## 📌 What is Security Group?

A Security Group acts like a:

```text id="4p2k9x"
Virtual Firewall
```

It controls:

* inbound traffic
* outbound traffic

inside AWS resources.

---

# 🌐 Common Ports

| Service        | Port |
| -------------- | ---- |
| HTTP           | 80   |
| HTTPS          | 443  |
| Express Server | 3000 |

---

# 🧠 Security Group Responsibilities

Security Groups decide:

* which protocol is allowed
* which port is accessible
* which traffic can enter

By default:

* ports are blocked
* rules must be configured manually

---

# 🔄 Example

Allow:

* HTTP traffic on port 80
* HTTPS traffic on port 443
* Internal server traffic on port 3000

---

# 🎯 Target Groups

## 📌 What is Target Group?

A Target Group is:

```text id="8w5m1q"
List of resources/servers
```

that ALB can send traffic to.

---

# 🔄 Flow

```text id="2q6x9r"
ALB
 ↓
Target Group
 ↓
Servers / Containers
```

---

# ☁️ CloudWatch

## 📌 What is CloudWatch?

CloudWatch is AWS monitoring service.

It provides:

* runtime logs
* metrics
* monitoring
* alerts

---

# 🧠 Why Important?

Used for:

* debugging
* production monitoring
* server health tracking

---

# 🚀 ECR & ECS

---

# 📦 ECR — Elastic Container Registry

## 📌 What is ECR?

ECR is AWS storage service for Docker Images.

---

# 🧠 Why Needed?

For deployment:

* Docker images must be stored somewhere
* AWS stores them in ECR

---

# ⚙️ Previous Manual Process

Previously:

* frontend build generated `dist/`
* dist moved manually to backend
* deployment was repetitive

This process was inefficient.

---

# 🚀 Automation Using Docker

We automated the entire process using:

* Dockerfile
* Multi-stage builds

---

# 🐳 Multi-Stage Docker Build

---

# 🧩 Stage 1 — Frontend Builder

```dockerfile id="5x8q1m"
FROM node:20-alpine as frontend_builder

WORKDIR /app

COPY ./frontend/package.json /app

RUN npm install

COPY ./frontend /app

RUN npm run build
```

---

# 🧠 What Happens Here?

This stage:

* installs frontend dependencies
* builds React/Vite app
* generates production `dist/` folder

---

# ⚠️ Important Concept

Whenever Docker sees:

```dockerfile id="7r2m9v"
FROM
```

a new build stage starts.

---

# 🧩 Stage 2 — Fullstack Image

```dockerfile id="3v1x8q"
FROM node:20-alpine

WORKDIR /app

COPY ./backend/package*.json /app

RUN npm install

COPY ./backend /app

COPY --from=frontend_builder /app/dist /app/public

CMD ["node", "server.js"]
```

---

# 🧠 What Happens Here?

This stage:

* creates backend server
* installs backend dependencies
* copies backend code
* copies frontend production build into backend public folder

Result:

```text id="1m5v7k"
Single Fullstack Docker Image
```

---

# 🚀 Build Fullstack Image

```bash id="8q3x1v"
docker build . -t fullstack:latest
```

Creates:

* fullstack production image

---

# ▶️ Run Fullstack Container

```bash id="5v2m7x"
docker run -p 3000:3000 fullstack:latest
```

Runs:

* frontend
* backend

inside one container.

---

# 🌐 Final Production Architecture

```text id="7p1x5m"
Internet
   ↓
ALB
   ↓
ECS Container
   ↓
Fullstack Application
```

---

# ⚡ ECS — Elastic Container Service

## 📌 What is ECS?

ECS is AWS service for:

* running containers
* managing deployments
* scaling applications

---

# 🧠 ECS Responsibilities

* run Docker containers
* restart failed services
* manage scaling
* deploy applications

---

# 📚 Key Learning Outcomes

This session teaches:

* AWS Networking
* VPC Architecture
* Internet Gateway
* Public & Private Subnets
* Application Load Balancer
* Security Groups
* Target Groups
* CloudWatch
* ECR
* ECS
* Multi-stage Docker Builds
* Fullstack Deployment Automation

---

# 🚀 Why This Matters?

These concepts are used in:

* real production systems
* scalable applications
* cloud-native architectures
* DevOps workflows

---

# 🏁 Conclusion

Using:

* AWS
* Docker
* ECS
* ECR
* Load Balancers
* Multi-stage builds

developers can create:

* scalable
* automated
* production-ready
* cloud-native applications

efficiently and professionally.

---

# 💡 Final Note

Every developer faces difficult phases while learning.

The most important thing is:

```text id="6q4m8x"
Keep showing up and keep working consistently every day.
```

Consistency matters more than temporary setbacks.
