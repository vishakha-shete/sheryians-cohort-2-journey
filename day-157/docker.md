Day-157 Learning About Docker
🚀 Today’s Session

In today’s class, we learned about Docker and why it is very important in real-world software development.

In industries, multiple developers work together on the same project, but everyone may have different:

Operating Systems
Node.js Versions
System Configurations

This creates development problems.

Docker helps solve this issue by creating the same environment on every system.

👨‍💻 Example Problem in Industry

Suppose there are 3 developers:

Neha → Windows + Node.js 18
Rohan → Mac + Node.js 20
Ritu → Linux + Node.js 22

All developers are working on the same project using GitHub.

⚠️ Problem Scenario

Suppose:

Ritu writes some code using Node.js version 22
The code works perfectly on her Linux system
Then she pushes the code to GitHub

Now:

Neha pulls the code
But the code does not support her Node.js version

This problem happens because:

Different systems
Different Node versions
Different environments

There is no mistake by any developer, but the project cannot move forward until the issue is solved.

✅ Solution → Docker

Docker solves this problem by creating the same environment on every system.

No matter:

Windows
Linux
Mac

Docker runs the project in the same environment everywhere.

🛠 Understanding Express Server Requirements

To run an Express server, we need:

Codebase
API
Routes
Controllers
Dependencies
Express
Mongoose
Dotenv
Node.js Runtime
Operating System

If all these things exist:

The server can run properly
📦 What Docker Does

Docker combines:

Codebase
Dependencies
Node.js
Operating System

into one package.

This package runs the same way on every machine.

🖼 Main Concepts of Docker

Docker mainly has two concepts:

Images
Containers
📸 What is an Image?

An image is a combination of:

Codebase
Dependencies
Node.js
Operating System

All these are packaged into one file.

This file is called a Docker Image.

💻 Role of Operating System

Operating System mainly provides:

User Interface
Hardware Management
SSD/HDD Management
User Interaction

But for running a server:

We do not need full UI
We only need minimal resources

Docker uses lightweight Linux systems like Alpine Linux.

Because of this:

Docker images stay lightweight
Usually around 120MB–200MB
📦 Docker Image Definition

A Docker image is:

A packaged file containing:

Codebase
Dependencies
Node.js
Operating System
🧱 What is a Container?

An image is only a file.

When we execute/run the image:

It becomes a Container
📌 Definition

A container is:

A running instance of an image

⚙️ Installing Docker

To use Docker:

Install Docker Desktop
🛠 PHASE-1 → Convert Express Server into Image

First:

Create Express server
Create Dockerfile

Also:

Delete node_modules
📄 Dockerfile Setup
Base Image
FROM node:20-alpine

This image contains:

Node.js version 20
Lightweight Linux OS
📂 Copy Package Files
COPY ./package.json .
COPY ./package-lock.json .
📥 Install Dependencies
RUN npm install

Now:

Dependencies are installed
📂 Copy Server Code
COPY ./server.js .

Now all 4 things exist:

Codebase
Dependencies
Node.js
Operating System
🏗 Build Docker Image

Dockerfile only tells Docker:

How to create the image

To actually create the image:

docker build . -t cohort_2

This command:

Reads Dockerfile
Creates Docker image
Image name = cohort_2

Now Phase-1 is completed.

🚀 PHASE-2 → Convert Image into Container

To execute the image:

docker run cohort_2

Now:

Image becomes container
Server starts running
▶️ Starting Server Automatically

In Dockerfile:

CMD ["node", "server.js"]

This command automatically starts the server.

🌐 Port Mapping Problem

Problem:

Server runs inside container
Cannot access it outside container

Solution:

Map ports
🔌 Port Mapping Command
docker run -p 8080:3000 cohort_2

Here:

8080 = local machine port
3000 = container/server port

Now the server becomes accessible outside the container.

🔄 Understanding Immutable Images

Suppose:

You created Login API
Converted it into image
Ran the container

Then:

Added Register API

Now:

Existing image cannot update automatically

Because:

Docker images are immutable

This means:

Images cannot be modified
You need to rebuild the image again
📚 What I Learned Today
What is Docker
Why Docker is important in industry
Problem of different development environments
What is Docker Image
What is Container
Difference between image and container
Dockerfile basics
Building Docker images
Running Docker containers
Port mapping
Immutable nature of Docker images
🛠 Commands Learned
Build Image
docker build . -t cohort_2
Run Container
docker run cohort_2
Run with Port Mapping
docker run -p 8080:3000 cohort_2
✨ Conclusion

Today’s session helped me understand how Docker solves real-world development environment issues. We learned about Docker images, containers, Dockerfiles, port mapping, and how Docker ensures the same environment across all systems. This is very useful in real software development and deployment workflows.