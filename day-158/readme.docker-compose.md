# 🚀 Docker Compose & Development Environment Setup

## 📌 Overview

In modern software development, multiple developers work together on the same project. Each developer may have:

* Different operating systems
* Different Node.js versions
* Different local environments
* Different dependencies

This creates a major problem:

```text id="4g8m6o"
Code works on one machine but fails on another.
```

Docker solves this issue by creating a consistent development environment for all developers.

---

# 🧠 Problem Docker Solves

Without Docker:

* One developer uses Windows
* Another uses Linux
* Another uses macOS

Different environments lead to:

* dependency conflicts
* Node.js version mismatch
* “works on my machine” issues

Docker standardizes the entire environment.

---

# 🐳 Docker Fundamentals

## 🖼️ Docker Image

A Docker Image is a package containing:

```text id="f8wwjo"
1. Codebase
2. Dependencies
3. Node.js Runtime
4. Operating System
```

---

## 📦 Docker Container

A container is:

```text id="k7o4yf"
Running instance of a Docker Image
```

---

## 📄 Dockerfile

A Dockerfile is used to create Docker Images.

It contains:

* setup instructions
* dependencies
* commands
* runtime configuration

---

# ⚙️ Express Server Setup

The project uses an Express.js backend server.

---

# 🐳 Dockerfile Explanation

## Dockerfile

```dockerfile id="7h8w1n"
FROM node:20-alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]
```

---

# 🔍 Step-by-Step Breakdown

## 1️⃣ Base Image

```dockerfile id="hcz7ut"
FROM node:20-alpine
```

Uses:

* Node.js v20
* Alpine Linux OS

This provides:

* Node runtime
* Lightweight operating system

---

## 2️⃣ Working Directory

```dockerfile id="uj31jm"
WORKDIR /app
```

Sets the application folder inside the container.

---

## 3️⃣ Copy Package Files

```dockerfile id="0suvqe"
COPY package.json /app
COPY package-lock.json /app
```

Copies dependency files separately.

---

## ❓ Why Copy Package Files Separately?

Docker uses caching layers.

If dependencies do not change:

* Docker reuses cached layers
* npm install does not run again

This improves:

* build speed
* performance
* optimization

---

## 4️⃣ Install Dependencies

```dockerfile id="j6iq2k"
RUN npm install
```

Creates:

```text id="ab6exl"
node_modules/
```

inside the container.

---

## 5️⃣ Copy Codebase

```dockerfile id="mbh86c"
COPY . /app
```

Copies the complete project source code.

---

## 6️⃣ Start Server

```dockerfile id="8bd7yt"
CMD ["npm", "start"]
```

Runs the application.

---

# 🛠️ Docker Commands

## Build Docker Image

```bash id="r7z0o2"
docker build . -t express-server
```

Creates Docker Image named:

```text id="1c3t6m"
express-server
```

---

## Run Container

```bash id="j0xrmj"
docker run express-server
```

Starts container from image.

---

## Port Mapping

```bash id="2xvql8"
docker run -p 8080:3000 express-server
```

Maps:

```text id="a5pcx2"
Host Port 8080 → Container Port 3000
```

---

# 🚀 Docker Compose

Docker Compose helps manage development environments easily.

Instead of manually:

* building images
* running containers
* mapping volumes

Docker Compose automates everything.

---

# 📄 docker-compose.yml

```yaml id="1szff6"
services:
  backend:
    build: ./Backend
    ports:
      - "8080:3000"

    volumes:
      - ./Backend:/app
      - ./Backend_node_modules:/app/node_modules

    command: npx nodemon -L server.js
```

---

# 🔍 Docker Compose Breakdown

## Build

```yaml id="1o8w4x"
build: ./Backend
```

Builds Docker image from Backend folder.

---

## Ports

```yaml id="xrdv7t"
ports:
  - "8080:3000"
```

Maps:

* Host machine → 8080
* Container → 3000

---

## Volumes

```yaml id="ltlffv"
volumes:
  - ./Backend:/app
```

This is a:

```text id="7x4aj5"
Bind Mount
```

It syncs:

* local backend folder
* container app folder

Changes update instantly.

---

## Node Modules Volume

```yaml id="2z6hsh"
- ./Backend_node_modules:/app/node_modules
```

Prevents local node_modules conflicts.

---

## Command

```yaml id="m0m0nr"
command: npx nodemon -L server.js
```

Runs:

* nodemon
* auto-restart on file changes

---

# 🔗 Bind Mounts

Bind Mounts connect:

```text id="ysl3jv"
Host Machine ↔ Container Filesystem
```

This enables:

* live file syncing
* real-time updates
* faster development

---

# 💾 Volumes

Docker Volumes are managed by Docker.

Used for:

* persistent storage
* dependency isolation
* database storage

---

# 🧠 Bind Mount vs Volume

| Feature     | Bind Mount     | Volume                 |
| ----------- | -------------- | ---------------------- |
| Managed By  | Host Machine   | Docker                 |
| Performance | Faster for dev | Better for persistence |
| Use Case    | Development    | Production/Data        |

---

# ⚡ Why Docker Compose Helps

Docker Compose simplifies:

* local development
* environment consistency
* live reloading
* multi-container setup

---

# 🎯 Key Learning Outcomes

This project teaches:

* Docker fundamentals
* Docker Images
* Containers
* Dockerfile
* Docker Compose
* Bind Mounts
* Volumes
* Development workflows

---

# 🚀 Conclusion

Docker solves real-world development problems by ensuring:

```text id="g8g3n3"
Same environment for every developer
```

Using:

* Dockerfile
* Docker Compose
* Bind Mounts
* Volumes

developers can build scalable and consistent development environments efficiently.
