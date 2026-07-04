# 🚀 Day 170 - Dynamic Sandbox Creation, Router Service & Kubernetes RBAC

## 📌 Overview

Today we continued building the Sandbox Service for our AI-powered application. We improved the architecture by introducing a Router Service, implemented dynamic Pod and Service creation, configured Kubernetes RBAC permissions, and routed preview traffic using wildcard subdomains.

The main goal of today's implementation was to allow the Sandbox Service to dynamically create isolated development environments for users while exposing live previews through a centralized router.

---

# 🏗 Updated Architecture

Yesterday, each sandbox created:

* A Pod
* A Service
* An Ingress

This approach was not scalable because every sandbox required its own Ingress resource.

The updated architecture creates:

* One Pod per sandbox
* One Service per sandbox
* A single shared Ingress
* A Router Service responsible for forwarding preview requests

```text
                User
                  │
                  ▼
        *.preview.localhost
                  │
                  ▼
          NGINX Ingress
                  │
                  ▼
          Router Service
                  │
                  ▼
      Sandbox Service (by ID)
                  │
                  ▼
        User Sandbox Pod
```

---

# 🌐 Why a Router Service?

A Kubernetes Service cannot receive requests directly from outside the cluster.

Instead of creating an Ingress for every sandbox, we now use a single wildcard Ingress:

```text
*.preview.localhost
```

Every preview request is routed to the Router Service.

The Router Service extracts the sandbox ID from the hostname and forwards the request to the correct sandbox.

Example:

```text
abc123.preview.localhost
```

The router extracts:

```text
abc123
```

and proxies the request to:

```text
sandbox-service-abc123
```

---

# 🏖 Sandbox Template Image

Each sandbox needs a React project to run.

A template React application was created and converted into a reusable Docker image.

The template contains:

* React
* Vite
* Default project structure
* Basic configuration

Whenever a new sandbox is created, this template image is used to start the development environment.

---

# ⚛️ Vite Configuration

The Vite server was configured to accept external requests.

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true
  }
});
```

This allows the development server to be accessed through Kubernetes networking.

---

# ☸️ Kubernetes Client

The Sandbox Service now communicates directly with Kubernetes.

Installed packages:

```bash
npm install @kubernetes/client-node uuid
```

The Kubernetes client is responsible for:

* Creating Pods
* Creating Services
* Managing sandbox resources

---

# 🧩 Dynamic Pod Creation

A dedicated module creates sandbox Pods.

Each Pod:

* Uses the template image
* Runs the Vite development server
* Exposes port 5173
* Receives a unique sandbox ID

Resources are configured with CPU and memory limits for better resource management.

---

# 🌐 Dynamic Service Creation

For every sandbox Pod, a matching Kubernetes Service is also created.

Each service:

* Selects the corresponding Pod
* Exposes port 80
* Forwards traffic to Vite on port 5173

This creates an isolated network endpoint for every sandbox.

---

# 🚀 Sandbox Start API

A new endpoint was implemented:

```http
POST /api/sandbox/start
```

Responsibilities:

* Generate a unique sandbox ID.
* Create a Pod.
* Create a Service.
* Return a preview URL.

Example response:

```json
{
  "message": "Sandbox environment created successfully",
  "previewUrl": "http://<sandbox-id>.preview.localhost"
}
```

---

# ❤️ Health Check

Health endpoint:

```http
GET /api/sandbox/health
```

This endpoint is used by Kubernetes liveness and readiness probes to monitor the Sandbox Service.

---

# 🔐 Kubernetes RBAC

By default, Pods cannot create other Kubernetes resources.

The Sandbox Service initially failed because it lacked permission to create Pods and Services.

To solve this, an RBAC configuration was introduced.

The RBAC configuration consists of:

* ServiceAccount
* Role
* RoleBinding

---

## ServiceAccount

A ServiceAccount named:

```text
resource-manager
```

was created.

It acts as the identity used by the Sandbox Service.

---

## Role

The Role grants permissions to:

* Get Pods
* List Pods
* Watch Pods
* Create Pods
* Update Pods
* Delete Pods
* Create Services
* Delete Services

---

## RoleBinding

The RoleBinding connects:

```text
ServiceAccount
        ↓
resource-manager
        ↓
Role
```

Finally, the Sandbox Deployment uses:

```yaml
serviceAccountName: resource-manager
```

This gives the Sandbox Service permission to create Kubernetes resources dynamically.

---

# 🔍 Debugging

To inspect Sandbox Service logs:

```bash
kubectl logs deployment/sandbox-deployment -f
```

To remove all Kubernetes resources:

```bash
kubectl delete -f ./k8s
```

---

# 🌐 Router Service

A new microservice called **Router Service** was introduced.

Installed packages:

```bash
npm install express morgan http-proxy-middleware
```

Responsibilities:

* Receive preview requests.
* Extract sandbox ID.
* Proxy requests to the correct sandbox.

---

# Proxy Flow

Incoming request:

```text
abc123.preview.localhost
```

Extract sandbox ID:

```javascript
const sandboxId = host.split(".")[0];
```

Target service:

```text
sandbox-service-abc123
```

The Router Service forwards all HTTP and WebSocket traffic to that service using `http-proxy-middleware`.

---

# Router Deployment

The Router Service was containerized using Docker.

A Deployment and Service were created.

The deployment includes:

* CPU limits
* Memory limits
* Health checks
* Readiness checks

Health endpoints:

```http
GET /api/status/healthz
GET /api/status/readyz
```

---

# Wildcard Ingress

The Ingress now contains two routing rules.

### Sandbox API

```text
/api/sandbox/*
```

Routes requests to:

```text
sandbox-service
```

### Preview Requests

```text
*.preview.localhost
```

Routes requests to:

```text
router-service
```

This allows every preview URL to work through a single Ingress.

---

# Proxy Caching Optimization

Initially, a new proxy instance was created for every incoming request.

This caused:

* Increased memory usage
* Excessive HTTP agent creation
* Continuous page reloads

To solve this, proxy instances were cached.

Each sandbox now reuses a single proxy middleware instance.

Benefits:

* Lower memory usage
* Better performance
* Stable preview sessions

---

# Current Project Status

At this stage, the Sandbox Service can:

* Create sandbox Pods.
* Create Kubernetes Services.
* Generate preview URLs.
* Route traffic through the Router Service.
* Display React applications in the browser.

---

# Next Steps

Upcoming features include:

* Updating project files inside the sandbox.
* Integrating Tailwind CSS into the template.
* Allowing AI to modify project files.
* Automatically deleting inactive sandbox Pods.
* Improving sandbox lifecycle management.

---

# Key Learning Outcomes

Today we learned:

* Updated sandbox architecture
* Dynamic Pod creation
* Dynamic Service creation
* Kubernetes RBAC
* Service Accounts
* Roles and RoleBindings
* Kubernetes Client API
* Wildcard Ingress
* Router Service
* Reverse Proxy
* Proxy caching
* Dynamic preview routing
* Sandbox lifecycle management

---

# Conclusion

Today's implementation completed the core infrastructure required for the Sandbox Service. Users can now dynamically create isolated React development environments, receive live preview URLs, and access them through a centralized Router Service. This architecture is scalable, efficient, and forms the foundation for integrating AI-powered code generation and real-time file updates in the upcoming sessions.
