# 🚀 Day 168 - Understanding the Capstone Project & Sandbox Microservice Architecture

## 📌 Overview

Today we officially started working on the final capstone project. Until now, throughout the cohort, we have learned how to build various projects by following guided explanations and tutorials. However, real software companies work differently.

In the industry, developers are often given an existing codebase and a set of documentation. Instead of someone explaining every detail, developers are expected to:

* Read the documentation.
* Understand the architecture.
* Set up the development environment.
* Explore and understand the codebase independently.
* Start contributing new features and fixing issues.

The main objective of this capstone project is to develop this real-world engineering skill.

---

# 📖 Importance of Documentation

A professional developer does not only write code. A large part of the job involves reading and understanding documentation.

When joining a company, a senior developer may simply provide:

* README files
* Setup guides
* Architecture documents
* API documentation

and ask you to configure the entire project on your own.

This project is designed to simulate that exact experience.

---

# 🎯 Capstone Project Goal

The instructor will provide:

* A ZIP folder containing the project.
* Docker files.
* YAML files.
* HTML documentation.
* Existing codebase.

The documentation explains:

* Folder structure.
* Project architecture.
* Environment setup.
* Running the project locally.

Before any coding begins, the task is to:

1. Read the documentation.
2. Understand the architecture.
3. Set up the project independently.

Only after that does actual development begin.

---

# 🏗️ Microservices in the Capstone Project

The complete project will eventually contain multiple microservices.

Initially, we are only required to set up one microservice:

```text
Sandbox Microservice
```

This microservice is not fully complete yet. It contains only the bare minimum implementation and will continue to grow as new features are added throughout the project.

---

# ❓ Why Are We Building This Service?

The final product is an AI-powered platform similar to:

* Lovable
* Vercel v0

The AI generates and updates React applications based on user prompts.

For example:

* User asks AI to create a dashboard.
* AI creates React components.
* AI updates files based on further instructions.
* User instantly sees the preview in the browser.

To make this possible, the generated React code must actually run somewhere. This is why we need the Sandbox Microservice.

---

# ☸️ High-Level Architecture

The sandbox environment is managed using Kubernetes.

Inside Kubernetes:

* One Pod is created.
* That Pod contains three different containers.

```text
                Kubernetes Pod
     ┌─────────────────────────────────┐
     │                                 │
     │   ┌──────────┐                  │
     │   │   Vite   │                  │
     │   └──────────┘                  │
     │                                 │
     │   ┌──────────────────┐          │
     │   │ Communication     │          │
     │   │      Agent        │          │
     │   └──────────────────┘          │
     │                                 │
     │   ┌─────────────┐               │
     │   │ Sync Agent  │               │
     │   └─────────────┘               │
     │                                 │
     └─────────────────────────────────┘
```

All three containers share a common workspace.

---

# ⚛️ Vite Container

The first container is the **Vite Container**.

### Responsibilities:

* Contains the React project.
* Runs the Vite development server.
* Serves the frontend preview.

### Port:

```text
5173
```

When we create a React project, we need to start a development server. The Vite container performs this task and generates a preview URL, allowing users to see their AI-generated application directly in the browser.

Its only responsibility is to:

* Run the React application.
* Provide a live preview URL.

---

# 🔗 Communication Agent Container

The second container is the **Communication Agent**.

### Port:

```text
3000
```

Its main responsibility is to update and modify the React project files.

---

## Shared Workspace Folder

Docker provides a feature called **Bind Mounts**, which allows multiple containers to share the same folder.

A shared folder called:

```text
workspace/
```

is mounted inside all containers.

This means:

* Vite Container can read the React code.
* Communication Agent can update the React code.
* Sync Agent can monitor the React code.

All three containers work on the same project files.

---

## WebSocket Communication

The Communication Agent exposes a:

* WebSocket URL
* Socket.IO endpoint

This creates a bidirectional connection between the frontend and the communication service.

Through this connection, commands can be sent directly to the workspace.

---

## Node-PTY

The Communication Agent uses the **node-pty** package.

`node-pty` allows the backend to create a virtual terminal session.

Using this package, the system can execute commands such as:

* npm install
* npm run dev
* file operations
* shell commands

inside the shared workspace folder.

This enables AI agents to interact with the project as if a real developer were using the terminal.

---

# ☁️ Sync Agent Container

The third container is the **Sync Agent**.

Unlike the other containers, it does not expose any public port.

Its job is to synchronize project files with cloud storage.

---

## S3 Bucket Synchronization

The Sync Agent continuously monitors the shared `workspace` folder.

Whenever any file is:

* Created
* Updated
* Edited
* Deleted

the Sync Agent automatically uploads those changes to an AWS S3 Bucket.

### Workflow

```text
Workspace Folder
        ↓
File Changed
        ↓
Sync Agent Detects Change
        ↓
Update AWS S3 Bucket
```

This ensures that project files are safely backed up and can be restored or shared across different systems.

---

# 📂 Shared Workspace Flow

The shared `workspace` folder is the central component connecting all containers.

```text
                Workspace Folder
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
   Vite        Communication   Sync
 Container        Agent        Agent
```

* Vite reads the files to serve the application.
* Communication Agent modifies the files.
* Sync Agent uploads file changes to S3.

---

# 🎯 Key Learning Outcomes

This session introduces several real-world engineering concepts:

* Reading and understanding documentation.
* Understanding large existing codebases.
* Setting up projects independently.
* Microservice architecture.
* Kubernetes Pod architecture.
* Multi-container Pods.
* Shared workspace using Docker Bind Mounts.
* Vite development server.
* WebSocket communication.
* Node-PTY for terminal execution.
* AWS S3 synchronization.
* Sandbox environment architecture.

---

# 🏁 Conclusion

The Day-168 session marks the beginning of the capstone project. The focus is not only on coding but on developing the skills required by professional software engineers:

* Reading documentation.
* Understanding unfamiliar systems.
* Setting up complex projects independently.
* Working with real-world architectures.

The Sandbox Microservice acts as the foundation for the AI-powered platform, where multiple containers collaborate to generate, modify, preview, and synchronize AI-created React applications in real time.
