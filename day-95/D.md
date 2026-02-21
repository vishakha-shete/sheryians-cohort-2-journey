🚀 Day 95 – Revision & Fullstack Deployment
🧠 Today's Focus

Revising all concepts from Day 94
Deploying our JWT Authentication Server
Understanding fullstack deployment process

💭 Personal Reflection
Today I am feeling exhausted.
I feel like I haven’t completed topics on time, and that makes me feel stuck.
But even with that feeling, I still want to:
Go online
Learn properly
Understand every topic deeply

Consistency > Motivation.

🌐 Fullstack Deployment
In VS Code, we have two separate folders:

project/
│
├── frontend/
└── backend/

Both have different codebases.
🖥 Local Development Setup
Backend

Run:
npx nodemon server.js
Runs on: http://localhost:3000
Frontend (React + Vite)

Run:
npm run dev
Runs on: http://localhost:5173

☁️ Deployment Strategy
We deploy frontend and backend separately:
Frontend  →  Vercel
Backend   →  Render
🔵 Vercel (Frontend Hosting)
Free Plan (Hobby)

Free for learning
Limited resources
Suitable for small projects
Pro Plan
More features
More bandwidth

Paid usage
🟣 Render (Backend Hosting)
Free Plan
0.1 CPU
Limited RAM
Limited concurrent users
Slower cold start

Paid Plan Example
0.5 CPU
2GB RAM
$7/month (approx)
Better performance

💡 Important Industry Insight
For learning:
Free hosting platforms are fine
.
In real companies:
Hosting is paid.
Infrastructure costs money.
You pay for:
CPU
RAM
Bandwidth
Storage
Databases
Production systems are never truly "free".


🔄 Alternative Deployment Strategy (Single Platform)
Instead of deploying frontend and backend separately:
We can build frontend and serve it from backend.
Step 1: Build Frontend
Inside frontend folder:
npm run build
This generates:
dist/
│
├── index.html
├── assets/
│   ├── css
│   └── js
The dist folder contains:
HTML
CSS
JavaScript

This is the compiled version of the React app.
Step 2: Move dist to Backend
Copy the dist folder into backend project:
backend/
│
├── public/ (or dist)
├── server.js
├── app.js

Step 3: Serve Frontend from Backend
In app.js:
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

Now:
Backend serves frontend
Only one platform needed
Only one deployment cost

🎯 Final Understanding
Two deployment models:
1️⃣ Separate Deployment
Frontend → Vercel
Backend → Render
Easy setup

Common for beginners
2️⃣ Combined Deployment
Frontend build served from backend
Single hosting platform
More cost-efficient
More production-like

📌 Key Learnings Today
Fullstack architecture understanding
Hosting platforms & pricing awareness
Free vs Paid infrastructure difference
How React build works
How to serve frontend from backend
Real-world deployment strategy
💪 Personal Growth Note

Even when feeling tired,
I showed up.

Even when feeling behind,
I kept learning.

That is how developers grow.