🚀 AI Sandbox Microservice Architecture
📌 Overview

This project is part of the final phase of the cohort where the focus shifts from:

Watching project tutorials ❌
To understanding real-world developer workflows ✅

The main objective of this project is to learn:

Reading documentation
Understanding existing codebases
Setting up large projects independently
Working with Docker containers
Understanding microservice architecture
Managing development environments
🧠 Why This Project?

In real companies:

Nobody explains every line of code
Developers receive:
documentation
README files
existing codebases
setup instructions

A developer’s work is not just writing code.

A developer also:

reads documentation
understands architecture
debugs systems
sets up environments
follows project requirements

This project is designed to teach those real industry skills.

🎯 Project Goal

Build a Sandbox Microservice System that allows AI-generated React applications to run inside isolated containers.

The AI can:

generate React code
update React code
preview applications live
🏗️ Architecture Overview

The system uses:

Docker
Kubernetes
Multiple Containers
Shared Workspace
Real-time Communication
📦 Kubernetes Architecture

A single Kubernetes Pod contains:

Pod
 ├── Vite Container
 ├── Communication Agent Container
 └── Sync Agent Container

All containers share access to a common folder called:

workspace/

This folder contains the React project files.

⚡ Vite Container
Purpose

Runs the React frontend using Vite.

Port
5173
Responsibilities
Starts Vite development server
Serves React application
Generates preview URL
Displays frontend in browser
🔌 Communication Agent Container
Port
3000
Purpose

Handles communication with the workspace.

Features
Workspace Sync

Uses Docker Bind Mounts:

Host Machine ↔ Workspace Folder ↔ Containers

All containers can access the same files.

WebSocket Communication

Provides:

WebSocket URL
Socket.IO connection

This enables:

Bidirectional communication
Real-time updates
Running commands remotely
node-pty Integration

Uses:

node-pty

to:

execute terminal commands
simulate shell environments
modify React code dynamically
☁️ Sync Agent Container
Purpose

Synchronizes project files with AWS S3.

Features

Monitors the workspace/ folder.

Whenever:

file created
file updated
file deleted
file modified

The changes are automatically synced to:

AWS S3 Bucket
Important Note

The Sync Agent:

does NOT expose ports
cannot be accessed externally
works internally only
🧩 Main Workflow
AI generates React code
        ↓
Code stored in workspace folder
        ↓
Vite container runs frontend
        ↓
Communication agent updates files
        ↓
Sync agent uploads changes to S3
📂 Project Structure
backend/
 ├── src/
 ├── Dockerfile
 ├── docker-compose.yml
 ├── server.js

frontend/
 ├── src/
 ├── vite.config.js
🐳 Technologies Used
Backend
Node.js
Express.js
Socket.IO
node-pty
Frontend
React.js
Vite
DevOps
Docker
Docker Compose
Kubernetes
Cloud
AWS S3
📖 Learning Objectives

This project teaches:

Reading documentation
Understanding architecture
Setting up existing projects
Docker fundamentals
Kubernetes basics
Real-time communication
Container orchestration
Shared workspace systems
⚠️ Important Industry Lesson

Real-world development is not only about coding.

Developers must also:

understand documentation
analyze existing systems
configure environments
debug independently

This project simulates real company workflows.

🚀 Future Scope

As the project grows, more features can be added:

AI code generation
Container orchestration
Multi-user support
Live collaboration
Sandboxed execution
Cloud deployments
🏁 Conclusion

This project is a practical introduction to:

modern backend systems
microservices
containerized development environments
real-world developer workflows

It focuses on building industry-level problem-solving and setup skills rather than only writing code.