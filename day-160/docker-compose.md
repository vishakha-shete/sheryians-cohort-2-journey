# 🚀day-160 Docker Compose with Frontend & Backend Development Setup

## 📌 Overview

In this session, we explored how to run a complete full-stack application locally using:

* Docker
* Docker Compose
* Frontend Container
* Backend Container

We also introduced AWS deployment concepts and networking basics that will be used in upcoming deployment sessions.

---

# 🎯 Goal

Run both:

```text id="7tt5kg"
Frontend + Backend
```

inside separate Docker containers while enabling smooth local development.

---

# 🧠 Local Development Architecture

A typical full-stack application contains:

## 1️⃣ Frontend

Runs using:

```text id="x6h7vz"
Vite Development Server
```

Default Port:

```text id="l5c2y9"
5173
```

---

## 2️⃣ Backend

Runs using:

```text id="9pd1mc"
Express.js Server
```

Default Port:

```text id="fjlwmg"
3000
```

---

# 🐳 Problem Without Docker Compose

Without Docker Compose:

We must manually:

* build frontend image
* build backend image
* create frontend container
* create backend container
* configure networking
* setup volumes

This becomes repetitive and inefficient.

---

# ⚡ Manual Docker Workflow

## Backend

### Build Image

```bash id="gl94m4"
docker build . -t backend
```

### Run Container

```bash id="a7j4kh"
docker run -p 8080:3000 backend
```

---

## Frontend

### Build Image

```bash id="jlwmh1"
docker build . -t frontend
```

### Run Container

```bash id="24p7lx"
docker run -p 5173:5173 frontend
```

---

# 🚀 Docker Compose Solution

Docker Compose automates the entire setup.

Instead of manually creating containers, Docker Compose manages:

* multiple services
* networking
* volumes
* ports
* commands

using a single file:

```text id="zv6fki"
docker-compose.yml
```

---

# 📄 docker-compose.yml

```yaml id="jlwmw8"
services:
  backend:
    build: ./Backend
    ports:
      - "3000:3000"

    volumes:
      - ./Backend:/app
      - Backend_node_modules:/app/node_modules

    command: npx nodemon -L server.js

  frontend:
    build: ./Frontend
    ports:
      - "5173:5173"

    volumes:
      - ./Frontend:/app
      - Frontend_node_modules:/app/node_modules

    command: npm run dev -- --host

volumes:
  Backend_node_modules:
  Frontend_node_modules:
```

---

# 🔍 Backend Service Breakdown

## Build

```yaml id="9jlwmv"
build: ./Backend
```

Builds backend Docker image from:

```text id="vdxk1w"
./Backend
```

---

## Ports

```yaml id="1qk56t"
ports:
  - "3000:3000"
```

Maps:

```text id="ggd1s0"
Host Port 3000 ↔ Container Port 3000
```

---

## Volumes

```yaml id="dq6sra"
volumes:
  - ./Backend:/app
```

Creates a bind mount.

This syncs:

* local backend files
* container files

---

## Node Modules Volume

```yaml id="f4lr1z"
- Backend_node_modules:/app/node_modules
```

Prevents local dependency conflicts.

---

## Command

```yaml id="zvpsvw"
command: npx nodemon -L server.js
```

Runs backend with:

* nodemon
* live reload
* automatic restart

---

# 🔍 Frontend Service Breakdown

## Build

```yaml id="7l11u0"
build: ./Frontend
```

Builds frontend Docker image.

---

## Ports

```yaml id="3k26fc"
ports:
  - "5173:5173"
```

Maps Vite development server port.

---

## Volumes

```yaml id="co3m9v"
volumes:
  - ./Frontend:/app
```

Syncs frontend code in real-time.

---

## Node Modules Volume

```yaml id="1q8zvl"
- Frontend_node_modules:/app/node_modules
```

Separates dependencies from local machine.

---

## Command

```yaml id="64c83z"
command: npm run dev -- --host
```

Runs Vite server.

The:

```text id="n1jlwm"
--host
```

flag exposes the Vite server outside the container.

---

# 🌐 Docker Networking

Docker Compose automatically creates a shared network.

This allows:

```text id="8lr1m2"
Frontend ↔ Backend communication
```

without manual configuration.

---

# 🔗 How Containers Communicate

Inside Docker Compose:

Frontend can access backend using:

```text id="jlwm7h"
http://backend:3000
```

instead of:

```text id="c3jtx2"
localhost
```

because:

* each container has its own localhost
* Docker Compose provides service-based networking

---

# 💾 Volumes

The project uses named volumes:

```yaml id="jlwm0t"
Backend_node_modules:
Frontend_node_modules:
```

Benefits:

* persistent dependencies
* faster rebuilds
* avoids reinstalling packages repeatedly

---

# ⚡ Benefits of Docker Compose

## ✅ Simplifies Development

Single command starts everything:

```bash id="jlwmrq"
docker compose up
```

---

## ✅ Consistent Environment

All developers get:

* same Node.js version
* same dependencies
* same OS environment

---

## ✅ Live Reloading

Changes update automatically.

---

## ✅ Multi-Container Management

Handles:

* frontend
* backend
* networking
* volumes

together.

---

# 🚀 AWS Deployment Concepts

This setup also prepares for cloud deployment concepts:

* containerized applications
* service networking
* scalable architecture
* isolated environments

which are essential for:

* AWS
* Kubernetes
* modern DevOps workflows

---

# 📚 Key Learning Outcomes

This session teaches:

* Docker Compose
* Multi-container setup
* Frontend/backend containerization
* Docker networking
* Bind mounts
* Named volumes
* Live development workflows

---

# 🏁 Conclusion

Docker Compose simplifies local full-stack development by allowing:

```text id="jlwmgk"
Frontend + Backend + Networking + Volumes
```

to run together seamlessly.

It creates a production-like development environment while improving:

* consistency
* scalability
* collaboration
* developer experience
