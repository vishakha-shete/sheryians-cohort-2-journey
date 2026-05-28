# ☁️day-161 - AWS Fundamentals & Deployment Architecture

## 📌 Overview

In this session, we started learning about:

* AWS (Amazon Web Services)
* Cloud Computing
* Networking Concepts
* Deployment Architecture
* VPC
* Load Balancers
* Security Groups
* ECS & ECR

The main goal is to understand how real-world applications are deployed on cloud infrastructure.

---

# 🌩️ What is AWS?

AWS stands for:

```text id="8m4h0q"
Amazon Web Services
```

AWS is a:

```text id="1k9x2v"
Cloud Service Provider
```

It provides:

* servers
* networking
* storage
* databases
* deployment services
* container services
* security systems

---

# 🧠 Types of Cloud Services

Cloud providers generally offer 3 major categories:

---

# 1️⃣ Platform as a Service (PaaS)

Provides ready-made platforms for deployment.

Examples:

* Heroku

With PaaS:

* infrastructure is managed automatically
* developers mainly focus on code

---

# 2️⃣ Infrastructure as a Service (IaaS)

Provides infrastructure resources like:

* virtual machines
* networking
* storage
* deployment systems

Examples:

* AWS
* Google Cloud Platform
* Oracle Cloud

AWS mainly provides:

* infrastructure
* networking
* deployment tools

---

# 3️⃣ Software as a Service (SaaS)

Provides complete software solutions.

Examples:

* Microsoft Office
* Zoom

Users directly consume the software.

---

# ☁️ AWS as a Cloud Provider

AWS supports:

* IaaS
* PaaS
* SaaS

making it one of the largest cloud providers globally.

---

# 🌐 VPC — Virtual Private Cloud

## 📌 What is VPC?

A:

```text id="9t7y3j"
Virtual Private Cloud
```

is a private network inside AWS.

All AWS resources live inside a VPC:

* EC2
* ECS
* Databases
* Load Balancers

---

# 🧠 Why VPC Exists?

Many companies use AWS simultaneously.

For example:

* Netflix
* Hotstar
* Amazon
* Startups

AWS isolates every company’s infrastructure using separate VPCs.

---

# 🏢 Example

```text id="6r3m7p"
Netflix VPC
 ├── Servers
 ├── Databases
 └── Internal Services

Hotstar VPC
 ├── Servers
 ├── Databases
 └── Internal Services
```

Both are isolated from each other.

---

# 👥 Tenants

AWS customers are called:

```text id="2v9x4m"
Tenants
```

Each tenant has its own isolated infrastructure.

---

# 🌐 Subnets

Inside a VPC there are smaller networks called:

```text id="7x5q1k"
Subnets
```

---

# 🧩 Types of Subnets

## 1️⃣ Public Subnet

Accessible through the internet.

Used for:

* frontend servers
* backend APIs
* load balancers

---

## 2️⃣ Private Subnet

Cannot be accessed directly through the internet.

Used for:

* databases
* internal services
* private systems

---

# 🏗️ Real Deployment Architecture

## Public Subnet

Contains:

* application servers

because users access them through internet.

---

## Private Subnet

Contains:

* databases

because databases should NOT be exposed publicly.

---

# ⚖️ Application Load Balancer (ALB)

## 📌 What is ALB?

ALB stands for:

```text id="9w3c7l"
Application Load Balancer
```

It distributes incoming traffic across multiple servers.

---

# 🧠 Why Load Balancer Needed?

One server cannot handle massive traffic.

So companies create:

* multiple servers
* multiple containers

ALB distributes requests intelligently.

---

# 🌐 Request Flow

```text id="5v8p0n"
Internet User
      ↓
Application Load Balancer
      ↓
Available Server
```

---

# ⚡ ALB Responsibilities

* traffic distribution
* load balancing
* routing requests
* improving scalability
* preventing server overload

---

# 🔐 Security Groups

## 📌 What is Security Group?

A Security Group acts like a:

```text id="1r2m8t"
Virtual Firewall
```

It controls:

* inbound traffic
* outbound traffic

for AWS resources.

---

# 🧠 Why Important?

Security Groups define:

* which ports are accessible
* which protocols are allowed
* which services can communicate

---

# 🌐 Common Ports

| Protocol       | Port |
| -------------- | ---- |
| HTTP           | 80   |
| HTTPS          | 443  |
| Express Server | 3000 |

---

# 🔄 Traffic Flow Example

```text id="3j7x1m"
Internet
   ↓
ALB (80/443)
   ↓
Server (3000)
```

---

# ⚠️ Important Note

Even if the whole system is configured correctly:

```text id="0k2p7v"
Wrong Security Group rules = Application failure
```

Security Groups are extremely important.

---

# 🎯 Target Groups

## 📌 What is Target Group?

A Target Group is:

```text id="9v6x2k"
List of servers or containers
```

that ALB can send traffic to.

---

# 🔄 Flow

```text id="8n4t1m"
ALB
 ↓
Target Group
 ↓
Servers / Containers
```

---

# 📦 ECR — Elastic Container Registry

## 📌 What is ECR?

ECR stands for:

```text id="3q9v1z"
Elastic Container Registry
```

It is AWS storage for Docker Images.

---

# 🧠 Why Needed?

During deployment:

* Docker images must be stored somewhere
* AWS stores them inside ECR

---

# 📦 Example

Instead of:

* separate frontend image
* separate backend image

we can create:

```text id="4r2p7k"
Single Full-Stack Docker Image
```

and store it in ECR.

---

# 🚀 ECS — Elastic Container Service

## 📌 What is ECS?

ECS stands for:

```text id="7m1x4j"
Elastic Container Service
```

It is used to:

* run Docker containers
* manage deployments
* scale applications

---

# 🧠 ECS Responsibilities

* running containers
* managing services
* restarting failed containers
* scaling applications

---

# 🌐 Full AWS Architecture Flow

```text id="6x5v2m"
Internet User
      ↓
Application Load Balancer
      ↓
ECS Containers
      ↓
Private Database
```

---

# 📚 Key Learning Outcomes

This session teaches:

* Cloud Computing Basics
* AWS Fundamentals
* VPC
* Subnets
* Public vs Private Networking
* Application Load Balancer
* Security Groups
* Target Groups
* ECR
* ECS

---

# 🚀 Why These Concepts Matter?

These are foundational concepts for:

* real-world deployments
* scalable systems
* DevOps engineering
* cloud architecture
* production infrastructure

---

# 🏁 Conclusion

AWS provides powerful infrastructure services for deploying scalable applications.

Core deployment architecture involves:

* VPC
* Public & Private Subnets
* Load Balancers
* Security Groups
* ECS
* ECR

Together, they help build:

* secure
* scalable
* production-grade cloud systems.
