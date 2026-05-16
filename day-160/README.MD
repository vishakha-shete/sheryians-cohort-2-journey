# DAY-160 
- WE ARE SEEING DOCKER COMPOSE LOCALLY ALON WITH AWS CONCEPTS 
- how networking implement 
- in tommwroes class we are deploying using aws 
- how we can evelope things locally using docker compose with full implementation
- so lets start creating a folder
- whenever we are talking about the local development 
- 1) Frontend which runs through vite server on port 5173 generally
- 2) backend which runs through express on port 3000 

docker-compose
- docker compose runs a two container with the help of compose
- 1) frontend : 5173
- 2) backend : 3000 

so lets understand how its work practically 

- here after creating a server we have two files while deployment
- it creates two seperate images 
- frontend 
- backend
with this two images we can create a containers 
- one container is for backend and another one is for frontend 

for backend command structure
- docker build . -t backend
- docker run -p 8080:3000 backend 

same for frontend command structure
- docker build . -t frontend
- docker run -p 5173:5173 frontend 


docker compose solve this problem dont need to solve this problem manually 

lets build it practically 
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

  - docker compose up --build

  