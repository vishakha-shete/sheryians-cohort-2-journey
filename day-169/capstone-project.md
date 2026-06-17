# 🚀 Day 169 - Sandbox Service Architecture & Kubernetes Deployment

## 📌 Overview

Today we focused on understanding the architecture of our capstone project and the implementation of the Sandbox Service.

The goal of this project is to build an AI-powered platform similar to:

* Lovable
* Vercel v0

where users can generate complete websites using AI prompts.

Unlike tutorial projects, this project emphasizes a real-world engineering workflow where developers are expected to:

* Read documentation
* Understand existing codebases
* Configure environments independently
* Learn project architecture before implementation

---

# 📖 Learning to Read Documentation

In real companies, nobody explains the entire project from scratch.

Typically:

1. You receive a repository.
2. You receive README and documentation files.
3. You are expected to:

   * Understand the folder structure.
   * Understand the architecture.
   * Configure the environment.
   * Start contributing.

This project is designed to teach exactly that skill.

---

# 🎯 Project Goal

The application allows users to interact with AI and generate complete frontend applications.

Users can:

* Chat with AI.
* Generate React code.
* Modify existing files.
* Access a live preview.
* Access a terminal.
* Inspect generated code.

---

# 🖥️ High-Level UI Layout

The final product contains:

```text
┌──────────────────────────────┐
│           Chat Area          │
├──────────────┬───────────────┤
│    Code      │    Preview    │
│   Editor     │    Window     │
├──────────────┴───────────────┤
│          Terminal            │
└──────────────────────────────┘
```

---

# 🤖 AI Workflow

User enters a prompt:

```text
Create a landing page for a fitness startup
```

AI then:

1. Creates React components.
2. Generates files.
3. Updates existing files.
4. Starts development server.
5. Shows preview instantly.

---

# ⚛️ Why Containers?

Browsers cannot execute:

```text
.jsx
.tsx
React Source Code
```

directly.

React code must be executed through:

```text
Vite Development Server
```

which generates a preview URL.

Because multiple users use the platform simultaneously:

* Every project runs in its own isolated container.
* Each user gets their own environment.
* Containers can be scaled independently.

---

# ☸️ Kubernetes Architecture

Our backend is deployed on Kubernetes.

The system contains multiple microservices:

```text
Auth Service
Notification Service
AI Orchestration Service
Sandbox Service
```

---

# 🔐 Auth Service

Responsible for:

* Login
* Registration
* User Authentication
* Authorization

---

# 📧 Notification Service

Responsible for:

* Sending Emails
* User Notifications
* System Alerts

---

# 🤖 AI Orchestration Service

Responsible for:

* Managing AI agents
* Processing prompts
* Generating code
* Coordinating workflows

---

# 🏖️ Sandbox Service

Responsible for:

* Creating project containers
* Running Vite servers
* Providing terminal access
* Managing previews
* Updating project files

This is the first microservice being built.

---

# 🎯 Sandbox Service Responsibilities

The Sandbox Service must:

### Create Containers

Creates isolated development environments for users.

---

### Start Vite Development Server

Runs React projects inside containers.

---

### Provide Preview URLs

Returns URLs where users can view generated websites.

---

### Provide Terminal Access

Allows users to execute commands.

---

### Update Project Files

Provides APIs for AI and users to modify project files.

---

# 🌐 Sandbox APIs

## Start Sandbox

```http
POST /api/sandbox/start
```

Responsibilities:

* Create container
* Start Vite server
* Generate preview URL
* Generate terminal URL

Returns:

```json
{
  "previewUrl": "...",
  "terminalUrl": "..."
}
```

---

## Health Check

```http
GET /api/sandbox/health
```

Returns:

```json
{
  "status": "healthy",
  "previewUrl": "...",
  "terminalUrl": "..."
}
```

---

# 🐳 Deployment Workflow

Before Kubernetes deployment:

1. Create Dockerfile.
2. Create .dockerignore.
3. Build Docker image.
4. Deploy image to Kubernetes.

---

# 📂 Kubernetes Configuration

A dedicated folder:

```text
k8s/
```

contains:

* Deployment
* Service
* Ingress
* Configuration files

---

# ❤️ Health Monitoring

Kubernetes continuously checks container health.

A health endpoint is created:

```http
GET /api/sandbox/health
```

If:

```text
HTTP 200
```

is returned:

```text
Container is healthy
```

Otherwise:

```text
Container is unhealthy
```

and Kubernetes restarts it automatically.

---

# 🔍 Liveness Probe

Liveness Probe checks:

```text
Is the container alive?
```

Example:

```yaml
livenessProbe:
  httpGet:
    path: /api/sandbox/health
    port: 3000
```

---

# ✅ Readiness Probe

Readiness Probe checks:

```text
Is the container ready to receive traffic?
```

Example:

```yaml
readinessProbe:
  httpGet:
    path: /api/sandbox/health
    port: 3000
```

---

# 🏗️ Main Kubernetes Cluster

The primary cluster contains:

```text
┌──────────────────────┐
│ Auth Service         │
├──────────────────────┤
│ Notification Service │
├──────────────────────┤
│ AI Orchestration     │
├──────────────────────┤
│ Sandbox Service      │
└──────────────────────┘
```

---

# 👤 User Project Pods

When users create projects:

New Pods are created dynamically.

Example:

```text
User Project Pod
    └── Vite Dev Server
```

These Pods are managed by the Sandbox Service.

The Sandbox Service handles:

* Creation
* Monitoring
* Deletion

of user project environments.

---

# 🚦 Ingress Controller

Kubernetes does not provide an Ingress Controller by default.

We install NGINX Ingress Controller:

```bash
kubectl apply -f \
https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml
```

---

# 🌐 Request Flow

The architecture uses:

```text
codespace-ingress
```

Flow:

```text
User Request
      ↓
codespace-ingress
      ↓
sandbox-service
      ↓
User Sandbox Pod
```

---

# 🏖️ User Sandbox Architecture

Every user sandbox contains:

```text
User Pod
 └── Vite Development Server
```

Each Pod has:

* Its own Service
* Its own Ingress
* Its own Preview URL

This allows complete isolation between users.

---

# 📚 Key Learning Outcomes

This session teaches:

* Real-world documentation reading
* System architecture understanding
* Kubernetes deployment workflow
* Sandbox service design
* Vite container execution
* Health checks
* Liveness probes
* Readiness probes
* Ingress architecture
* Multi-service systems
* Dynamic user environments

---

# 🏁 Conclusion

The Sandbox Service is the foundation of the AI-powered platform.

It enables:

* Isolated development environments
* Live previews
* Terminal access
* AI-driven code generation

while Kubernetes manages:

* Deployment
* Health monitoring
* Scaling
* Traffic routing

making the entire system scalable and production-ready.
