# 🚀 Day 171 - Sandbox Agent, Shared Workspace, Kubernetes Volumes & Init Containers

## 📌 Overview

Today we continued working on the existing AI-powered Sandbox Service.

In the previous session, our Sandbox Service was able to:

* Dynamically create a Kubernetes Pod.
* Create a Service for the Pod.
* Run a Vite development server.
* Generate a unique preview URL.
* Route preview traffic to the correct sandbox.

Today, we moved one step further.

The main goal was to understand:

> How can we access and modify the React project files running inside the Sandbox?

To solve this problem, we introduced:

* Sandbox Agent
* Multi-container Pods
* Kubernetes Volumes
* `emptyDir`
* Volume Mounts
* Shared Workspace
* Agent Routing
* Init Containers

---

# 🏗️ Existing Sandbox Architecture

Previously, every user sandbox contained a single container.

```text
Sandbox Pod
     │
     └── Vite Container
              │
              ├── React Project
              └── Vite Development Server
```

The Vite development server runs on:

```text
Port 5173
```

The React application is served through a unique preview URL.

Example:

```text
http://<sandbox-id>.preview.localhost
```

This allowed us to view the generated React application in the browser.

However, we had one major problem.

---

# ❓ The Problem

The Vite development server can read and serve the React project.

But how can we:

* List project files?
* Read files?
* Create new files?
* Update existing files?
* Delete files?

Eventually, our AI agents need to modify the React project.

For example:

```text
User Prompt
      ↓
AI Agent
      ↓
Update App.jsx
      ↓
Vite Detects Change
      ↓
Preview Updates
```

Therefore, we need another service that can interact with the project files.

This is where the **Sandbox Agent** comes into the architecture.

---

# 🤖 Sandbox Agent

The Sandbox Agent is a simple Express server.

Its main responsibility is to provide APIs for interacting with files inside the project workspace.

The Agent will eventually provide APIs for:

* List Files
* Read File
* Create File
* Update File
* Delete File
* Execute Commands

The Agent runs on:

```text
Port 3000
```

---

# 🏗️ Updated Sandbox Pod Architecture

Previously:

```text
Sandbox Pod
     │
     └── Vite Container
```

Now:

```text
              Sandbox Pod
        ┌──────────────────────┐
        │                      │
        │   Vite Container     │
        │      Port 5173       │
        │                      │
        │   Agent Container    │
        │      Port 3000       │
        │                      │
        └──────────────────────┘
```

The same Kubernetes Pod now contains two containers.

### Vite Container

Responsible for:

* Reading React project files.
* Running the Vite development server.
* Providing a live preview.

### Agent Container

Responsible for:

* Reading project files.
* Listing files.
* Creating files.
* Updating files.
* Deleting files.

---

# 📂 Creating the Sandbox Agent

A new `agent` folder was created inside the Sandbox project.

The Agent uses:

* Express
* Morgan
* Node.js File System API

Example Agent server:

```javascript
import express from "express";
import morgan from "morgan";
import fs from "fs";

const WORKSPACE_DIR = "/workspace";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello from sandbox agent!",
        status: "success",
    });
});

app.get("/list-files", async (req, res) => {
    try {
        const elements = await fs.promises.readdir(WORKSPACE_DIR);

        res.status(200).json({
            message: "Elements in the workspace directory",
            files: elements,
            status: "success",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to read workspace directory",
            status: "error",
        });
    }
});

export default app;
```

---

# 📄 List Files API

The Agent exposes:

```http
GET /list-files
```

The API reads:

```text
/workspace
```

using:

```javascript
fs.promises.readdir(WORKSPACE_DIR)
```

Example response:

```json
{
  "message": "Elements in the workspace directory",
  "files": [
    "src",
    "package.json",
    "vite.config.js"
  ],
  "status": "success"
}
```

---

# 🐳 Agent Dockerfile

The Agent is containerized using Docker.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN mkdir /workspace

CMD ["node", "server.js"]
```

---

# 🔍 Understanding the Agent Dockerfile

## Base Image

```dockerfile
FROM node:20-alpine
```

Uses Node.js 20 with the Alpine Linux base image.

---

## Working Directory

```dockerfile
WORKDIR /app
```

The Agent server code is stored inside:

```text
/app
```

---

## Install Dependencies

```dockerfile
COPY package*.json ./

RUN npm install
```

Copies the package files and installs dependencies.

---

## Copy Agent Code

```dockerfile
COPY . .
```

Copies the Agent code into:

```text
/app
```

---

## Create Workspace

```dockerfile
RUN mkdir /workspace
```

Creates:

```text
/workspace
```

The Agent uses this directory to interact with the user's project files.

---

# 🏗️ Build Agent Image

Build the Docker image:

```bash
docker build -t agent:latest .
```

---

# 🚀 Run Agent Container

Run the Agent:

```bash
docker run -p 8080:3000 agent:latest
```

The Agent runs internally on:

```text
3000
```

and is mapped to:

```text
8080
```

on the host machine.

---

# 🌐 Access Agent API

Open:

```text
http://localhost:8080/list-files
```

Initially, the API returns an empty array.

Example:

```json
{
  "message": "Elements in the workspace directory",
  "files": [],
  "status": "success"
}
```

Why?

Because:

```text
/workspace
```

exists but contains no project files.

---

# 🚨 The Shared Workspace Problem

At this point, we have two containers.

```text
Vite Container
      │
      └── /workspace

Agent Container
      │
      └── /workspace
```

Even though both folders have the same name, they are completely different directories.

```text
Vite /workspace ≠ Agent /workspace
```

Containers have isolated filesystems.

Therefore, when the Agent modifies its `/workspace`, the Vite container cannot see those changes.

This creates a major problem.

---

# 🎯 Required Architecture

We need both containers to access the exact same project files.

```text
             Shared Workspace
                    │
          ┌─────────┴─────────┐
          │                   │
          ▼                   ▼
    Vite Container      Agent Container
          │                   │
      Read Files          Modify Files
```

To implement this, we use a Kubernetes Volume.

---

# 💾 Kubernetes Volume

A Volume provides shared storage that containers inside a Pod can mount.

For our Sandbox Pod, we create:

```javascript
volumes: [
    {
        name: "workspace-volume",
        emptyDir: {}
    }
]
```

---

# 📦 What is `emptyDir`?

`emptyDir` creates an empty temporary directory for the Pod.

The directory is created when the Pod starts.

```text
Pod Created
     ↓
emptyDir Created
     ↓
Containers Mount Volume
```

The volume exists for the lifetime of the Pod.

When the Pod is deleted:

```text
Pod Deleted
     ↓
emptyDir Deleted
     ↓
Workspace Data Lost
```

Therefore, `emptyDir` is ephemeral storage.

---

# 🔗 Volume Mounts

Creating a Volume is not enough.

We must mount the Volume inside each container.

```javascript
volumeMounts: [
    {
        name: "workspace-volume",
        mountPath: "/workspace"
    }
]
```

The same Volume is mounted inside:

* Vite Container
* Agent Container

---

# 🏗️ Shared Workspace Architecture

```text
                 Kubernetes Pod
        ┌────────────────────────────┐
        │                            │
        │      workspace-volume      │
        │         emptyDir           │
        │             │              │
        │       ┌─────┴─────┐        │
        │       │           │        │
        │       ▼           ▼        │
        │  Vite Container  Agent     │
        │   /workspace    /workspace │
        │                            │
        └────────────────────────────┘
```

Now:

```text
Vite /workspace = Agent /workspace
```

If the Agent updates:

```text
/workspace/src/App.jsx
```

the Vite container immediately sees the updated file.

Vite's Hot Module Replacement can then update the browser preview.

---

# ⚙️ Adding the Agent Container

The Agent container is added to the Sandbox Pod configuration.

```javascript
{
    name: "agent-container",
    image: "agent",
    imagePullPolicy: "IfNotPresent",

    ports: [
        {
            containerPort: 3000,
            name: "http",
        }
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

    volumeMounts: [
        {
            name: "workspace-volume",
            mountPath: "/workspace"
        }
    ]
}
```

---

# 🌐 Exposing the Agent

The Sandbox Kubernetes Service previously exposed only Vite.

Vite runs on:

```text
5173
```

The Agent runs on:

```text
3000
```

Therefore, another Service port is added.

```javascript
{
    name: "agent-http",
    port: 3000,
    targetPort: 3000,
    protocol: "TCP",
}
```

The Service can now forward traffic to both containers.

```text
Service
   │
   ├── Port 80   → Vite 5173
   │
   └── Port 3000 → Agent 3000
```

---

# 🌍 Agent URL Routing

Preview traffic uses:

```text
*.preview.localhost
```

Agent traffic uses:

```text
*.agent.localhost
```

Example:

```text
abc123.preview.localhost
```

routes to the Vite development server.

```text
abc123.agent.localhost
```

routes to the Sandbox Agent.

---

# 🚦 Agent Ingress Rule

A new wildcard Ingress rule is added.

```yaml
- host: "*.agent.localhost"
  http:
    paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: router-service
            port:
              number: 80
```

Both Preview and Agent traffic first reach the Router Service.

---

# 🔀 Router Service

The Router Service analyzes the hostname.

Example:

```text
abc123.preview.localhost
```

or:

```text
abc123.agent.localhost
```

The sandbox ID is extracted from the hostname.

```javascript
const sandboxId = host.split(".")[0];
```

The router then identifies the correct sandbox Service.

```javascript
function getProxy(sandboxId) {
    const target = `http://sandbox-service-${sandboxId}`;

    if (!proxies[sandboxId]) {
        proxies[sandboxId] = createProxyMiddleware({
            target,
            changeOrigin: true,
            ws: true,
        });
    }

    return proxies[sandboxId];
}
```

For Agent traffic, the Router must forward requests to the Agent's Service port.

---

# 🚨 New Problem: Empty Workspace

After mounting the `emptyDir` Volume, the Vite container stopped working.

Why?

The template Docker image already contains React project files inside:

```text
/workspace
```

Example:

```text
/workspace
├── package.json
├── src
├── index.html
└── vite.config.js
```

However, Kubernetes mounts an empty `emptyDir` Volume on:

```text
/workspace
```

The mounted Volume hides the files that already exist at that path in the container image.

Conceptually:

```text
Template Image /workspace
        │
        ├── package.json
        ├── src
        └── vite.config.js

          ↓ Mount emptyDir

Container /workspace
        │
        └── EMPTY
```

The original image files are not deleted from the image.

However, they are hidden by the mounted Volume.

---

# ❌ Why Vite Failed

The Docker image runs:

```bash
npm run dev
```

This command looks for:

```text
package.json
```

inside the working directory.

But `/workspace` is now backed by an empty Volume.

Therefore:

```text
package.json not found
```

and the Vite development server cannot start.

---

# ✅ Solution: Init Container

To solve this problem, we introduced an Init Container.

An Init Container runs before the main application containers.

```text
Pod Starts
     ↓
Init Container Runs
     ↓
Init Container Completes
     ↓
Vite Container Starts
     ↓
Agent Container Starts
```

The main containers do not start until all Init Containers successfully complete.

---

# 🧩 Init Container Configuration

```javascript
initContainers: [
    {
        name: "init-container",
        image: "template",
        imagePullPolicy: "IfNotPresent",

        command: [
            "sh",
            "-c",
            "cp -r /workspace/. /seed/"
        ],

        volumeMounts: [
            {
                name: "workspace-volume",
                mountPath: "/seed"
            }
        ]
    }
]
```

---

# 🔍 How the Init Container Works

The Init Container uses:

```text
template
```

image.

The template image already contains the React project inside:

```text
/workspace
```

The shared Volume is mounted at:

```text
/seed
```

Notice that the Volume is **not mounted on `/workspace` inside the Init Container**.

Therefore, the original template files remain visible.

The Init Container executes:

```bash
cp -r /workspace/. /seed/
```

This copies the React project into the shared Volume.

---

# 🔄 Complete Initialization Flow

```text
Template Image
      │
      │ /workspace contains React project
      ▼
Init Container Starts
      │
      │ cp -r /workspace/. /seed/
      ▼
workspace-volume
      │
      │ React project copied
      ▼
Init Container Completes
      │
      ├──────────────────────┐
      ▼                      ▼
Vite Container         Agent Container
/workspace              /workspace
      │                      │
Runs React App          Modifies Files
```

Both containers now share the initialized React project.

---

# 🔥 Complete Sandbox Architecture

```text
                        User
                          │
             ┌────────────┴────────────┐
             │                         │
             ▼                         ▼
   sandbox.preview.localhost   sandbox.agent.localhost
             │                         │
             └────────────┬────────────┘
                          ▼
                  NGINX Ingress
                          │
                          ▼
                    Router Service
                          │
                          ▼
               Sandbox Kubernetes Service
                          │
               ┌──────────┴──────────┐
               │                     │
               ▼                     ▼
           Port 80                Port 3000
               │                     │
               ▼                     ▼
        Vite Container         Agent Container
           Port 5173              Port 3000
               │                     │
               └──────────┬──────────┘
                          ▼
                   Shared Workspace
                    emptyDir Volume
                          ▲
                          │
                   Init Container
                          │
                    Template Image
```

---

# 🧠 Why Use a Multi-Container Pod?

The Vite and Agent containers are tightly coupled.

Both containers operate on the same user's project.

The Vite container:

```text
Reads Project Files
```

The Agent container:

```text
Modifies Project Files
```

Because they share the same lifecycle and workspace, placing them inside the same Pod is useful for this Sandbox architecture.

---

# 📚 Key Learning Outcomes

Today we learned:

* Sandbox Agent architecture
* Express-based file management Agent
* Node.js File System API
* Multi-container Kubernetes Pods
* Container filesystem isolation
* Kubernetes Volumes
* `emptyDir`
* Volume Mounts
* Shared Workspace architecture
* Service multi-port configuration
* Wildcard Agent routing
* Router Service updates
* Volume mount behavior
* Why mounted Volumes hide image directory contents
* Init Containers
* Workspace seeding
* Vite and Agent communication through shared storage

---

# 🏁 Conclusion

Today's implementation introduced the Sandbox Agent and solved one of the most important problems in our Sandbox architecture: sharing project files between multiple containers.

The Vite container is responsible for running and previewing the React application, while the Agent container is responsible for modifying project files.

A shared Kubernetes `emptyDir` Volume allows both containers to access the same workspace.

Because mounting an empty Volume hides the React project already present in the template image, an Init Container is used to copy the template project into the shared Volume before the Vite and Agent containers start.

The final flow is:

```text
Init Container
      ↓
Seed Shared Workspace
      ↓
Vite + Agent Start
      ↓
Agent Modifies Files
      ↓
Vite Detects Changes
      ↓
Live Preview Updates
```

This creates the foundation for AI-powered file modification and real-time application previews inside isolated Kubernetes Sandbox environments.
