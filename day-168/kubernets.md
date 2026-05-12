🚀 AI-Powered Sandbox Service Architecture
📌 Overview

This project is inspired by platforms like Lovable, where users can interact with AI to generate and modify complete websites dynamically. The system enables users to:

Chat with AI
Generate React applications
Edit files in real time
Access terminal commands
Preview live updates instantly

The core goal of this project is to understand real-world backend architecture, Kubernetes deployment, Docker workflows, and AI-driven development systems.

🧠 Industry Learning

In real companies:

Nobody teaches every project from scratch
Developers are given:
documentation
folder structures
README files
existing codebases

Developers are expected to:

understand architecture
setup environments
read documentation
debug systems independently

This project is designed to simulate that real-world experience.

🎯 Project Goal

Build an AI-powered platform where:

User Prompt → AI → React Code Generation → Live Preview

The AI dynamically:

creates React code
updates files
modifies components
reflects changes instantly in preview
🖥️ Main Application Layout

The platform UI contains:

💬 Chat Interface
🖥️ Code Editor
📟 Terminal
🌐 Live Preview

Users can:

talk with AI
modify code
run terminal commands
preview websites instantly
⚡ Why Containers?

Browsers cannot directly execute JSX/React source files.

To solve this:

React code runs inside backend containers
Vite Development Server runs inside containers
Containers generate preview URLs
Users access the preview through those URLs
🐳 Containerized Architecture

Each user gets an isolated environment containing:

Container
 ├── Node.js
 ├── React Codebase
 ├── React Dependencies
 ├── OS Environment
 └── Vite Development Server
🚀 Why Use Containers?
Scalability

Multiple users can work simultaneously.

Isolation

Every project runs independently.

Flexibility

Users can:

edit files
execute commands
generate projects safely
☸️ Kubernetes Deployment

The backend infrastructure is deployed using:

Kubernetes Cluster

The cluster manages:

container orchestration
scaling
monitoring
restarting failed services
🧩 Core Microservices

The architecture contains multiple services:

1. Auth Service
2. Notification Service
3. AI Orchestration Service
4. Sandbox Service
🔐 Auth Service

Handles:

authentication
user sessions
authorization
📧 Notification Service

Handles:

sending emails
notifications
alerts
🤖 AI Orchestration Service

Responsible for:

AI interactions
prompt processing
code generation workflows
🧪 Sandbox Service

The most important service currently being developed.

Responsibilities:

create containers
run Vite servers
provide preview URLs
provide terminal access
manage file updates
🧪 Sandbox APIs
Start Sandbox
/api/sandbox/start
Responsibilities
create new container
start Vite server
generate preview URL
generate terminal URL
Health Check
/api/sandbox/health

Returns:

preview URL
terminal URL
container health status
🖥️ Terminal Access

The project uses:

node-pty

to create terminal-like functionality inside containers.

This allows users to:

run commands
install packages
interact with development environments
🐳 Docker Setup

The project uses:

Dockerfile
.dockerignore
Kubernetes deployment configs
📁 Project Structure
project/
 ├── backend/
 ├── frontend/
 ├── k8s/
 ├── Dockerfile
 ├── .dockerignore

All Kubernetes-related configurations are stored inside:

k8s/
☸️ Kubernetes Health Monitoring

Kubernetes continuously checks whether containers are healthy.

❤️ Liveness Probe

Checks:

Is container alive?

If failed:

Kubernetes restarts container
✅ Readiness Probe

Checks:

Is container ready to receive traffic?
🔍 Health Endpoint
path: /api/sandbox/health
port: 3000

Kubernetes repeatedly calls this endpoint.

If response is:

200 OK

Then:

container is healthy
service is running properly

Otherwise:

Kubernetes restarts the container
🌐 Ingress Controller

Kubernetes requires an:

Ingress Controller

to expose services externally.

It helps:

route traffic
manage URLs
expose preview services
⚙️ Technologies Used
Frontend
React.js
Vite
Backend
Node.js
Express.js
node-pty
DevOps
Docker
Kubernetes
AI
AI orchestration workflows
📚 Key Learning Outcomes

This project teaches:

Real-world architecture understanding
Docker workflows
Kubernetes deployment
Container orchestration
Health monitoring
Terminal emulation
AI-driven systems
Documentation reading skills
🚀 Future Scope

Future improvements may include:

multi-user collaboration
persistent storage
AI file generation
live deployment systems
distributed orchestration
scalable container pools
🏁 Conclusion

This project is a practical introduction to:

modern distributed systems
AI-powered development tools
containerized environments
scalable backend architectures

It focuses on teaching how real-world developer platforms operate internally while improving problem-solving and documentation-reading skills.