# 🏗️ Monolith vs Microservices Architecture

## 📌 Overview

In modern backend systems, there are mainly two types of architectures:

```text id="8m3x1v"
1. Monolith Architecture
2. Microservices Architecture
```

These architectures define:

* how applications are structured
* how services communicate
* how systems scale
* how deployments work

---

# 🧱 1️⃣ Monolith Architecture

## 📌 What is Monolith?

In a Monolith Architecture:

```text id="7q1m5x"
Entire application runs inside one server/codebase
```

---

# 🧠 Example

Suppose we build:

```text id="5m8x2v"
Instagram
```

The application contains:

* authentication
* posts
* messages
* notifications

but everything runs inside:

* one codebase
* one server
* one database

---

# 🏗️ Architecture Flow

```text id="2v9x1m"
Users
   ↓
Load Balancer
   ↓
Monolith Server
   ↓
Single Database
```

---

# ⚖️ Replication

When traffic increases:

* one server cannot handle load

So multiple replicas of the same server are created.

---

# 🌐 Load Balancer

A Load Balancer distributes traffic among replicated servers.

```text id="1x5m8q"
User Request
     ↓
Load Balancer
     ↓
Multiple Monolith Servers
```

---

# ⚠️ Problem with Monolith

Every replicated server runs:

* same codebase
* same logic
* same bugs

---

# 🚨 Example Problem

If:

* authentication code has a bug

Then:

* every replicated server has same bug

Result:

* all servers may crash
* entire application affected

---

# ❌ Limitations of Monolith

* tightly coupled codebase
* difficult scaling
* harder maintenance
* slow feature development
* bug affects entire system

---

# 🧩 2️⃣ Microservices Architecture

## 📌 What is Microservices?

In Microservices Architecture:

```text id="6x2m7v"
Application is divided into small independent services
```

Each service handles:

* one responsibility
* one feature

---

# 🧠 Example

Instagram can be divided into:

```text id="4m8x1q"
Auth Service
Posts Service
Messages Service
Notification Service
```

---

# 🏗️ Microservice Structure

Each service has:

* separate codebase
* separate server
* separate deployment
* separate database

---

# 🌐 Architecture Flow

```text id="3x7m2v"
Users
   ↓
API Gateway / Load Balancer
   ↓
 ┌───────────────┐
 │ Auth Service  │
 │ Posts Service │
 │ Msg Service   │
 └───────────────┘
```

---

# ⚡ API Gateway / Load Balancer

The Load Balancer routes traffic to correct service.

---

# 🔄 Example Routes

```text id="8m5x2v"
/api/auth     → Auth Service
/api/posts    → Posts Service
/api/messages → Messages Service
```

---

# 🚀 Advantages of Microservices

## Independent Scaling

If:

* Messages feature consumes more resources

Then:

* only Messages Service can be replicated

instead of scaling entire application.

---

# ✅ Benefits

* isolated services
* independent deployments
* better scalability
* faster feature development
* fault isolation
* team independence

---

# ⚠️ Challenges

Microservices introduce:

* networking complexity
* service communication
* distributed systems problems
* deployment complexity

---

# 🌐 NGINX Load Balancer

The architecture commonly uses:

```text id="5v1m8x"
NGINX
```

as:

* API Gateway
* Reverse Proxy
* Load Balancer

---

# 📚 CAP Theorem

CAP Theorem is important in distributed systems.

It talks about:

```text id="1m7x4q"
Consistency
Availability
Partition Tolerance
```

---

# 🧠 Basic Idea

A distributed system cannot guarantee all three perfectly at same time.

Usually systems balance between:

* consistency
* availability

---

# 🌐 Distributed Systems

## 📌 What is Distributed System?

Suppose services are separated:

```text id="9x2m5v"
Auth Service
Posts Service
Messages Service
```

but all use:

```text id="6m8x1q"
Single Shared Database
```

This is called:

```text id="7p4x2m"
Distributed System
```

---

# 🧠 Difference

| Architecture       | Database                |
| ------------------ | ----------------------- |
| Monolith           | Single                  |
| Distributed System | Shared                  |
| Microservices      | Separate DB per service |

---

# 🔄 Inter-Service Communication

Services must communicate with each other.

There are mainly 2 types:

---

# 1️⃣ Synchronous Communication

## 📌 What Happens?

One service directly waits for response from another service.

---

# 🧠 Example

```text id="3m1x7q"
Posts Service → Auth Service
```

Posts Service requests:

* user data
* authentication info

It waits until Auth Service responds.

---

# 🔄 Flow

```text id="8x5m2v"
Posts Service
      ↓
Network Request
      ↓
Auth Service
      ↓
Response
```

---

# ⚠️ Problem

If Auth Service becomes slow:

* Posts Service also slows down

---

# 2️⃣ Asynchronous Communication

## 📌 What Happens?

Services communicate using:

* queues
* events
* background processing

without waiting immediately.

---

# 🧠 Example — Notification Service

When user registers:

```text id="4v1m8q"
Auth Service
```

sends event to:

```text id="7x2m5v"
Message Queue
```

Notification Service continuously reads queue.

---

# 📬 Flow

```text id="5m1x7q"
Auth Service
      ↓
Message Queue
      ↓
Notification Service
      ↓
Email Sent
```

---

# 📦 Queue Concept

Queues follow:

```text id="1q8m5x"
FIFO
(First In First Out)
```

---

# ✅ Benefits of Async Communication

* faster systems
* decoupled services
* scalable architecture
* background processing

---

# 🚀 When to Move from Monolith to Microservices?

Initially:

* startups use monolith

because:

* easier development
* faster MVP creation

---

# ⚠️ Switch to Microservices When

* codebase becomes huge
* development slows down
* scaling becomes difficult
* teams become larger
* independent deployments needed

---

# 🧠 Why Microservices Help

Breaking large codebase into:

* smaller services
* isolated responsibilities

makes:

* feature development easier
* debugging easier
* scaling easier

---

# 📚 Key Learning Outcomes

This session teaches:

* Monolith Architecture
* Microservices Architecture
* Distributed Systems
* API Gateway
* Load Balancers
* CAP Theorem
* Synchronous Communication
* Asynchronous Communication
* Queues
* Service Scaling

---

# 🏁 Conclusion

Modern scalable applications increasingly move toward:

```text id="8v2m5x"
Microservices Architecture
```

because it provides:

* scalability
* flexibility
* fault isolation
* independent development

while monoliths remain useful for:

* smaller systems
* faster initial development.
