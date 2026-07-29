# 🚀 Day 172 – Building the Sandbox Agent APIs & AI Orchestration

## 📌 Overview

Today we continued working on the **Sandbox Service**. In the previous session, we successfully created sandbox pods capable of running a Vite development server and exposing a preview URL. Today, the focus shifted to making the sandbox interactive by allowing AI to read, create, and update project files inside the shared workspace.

The major goals achieved today were:

* Implementing file management APIs in the Sandbox Agent.
* Improving the `list-files` API to recursively return project files.
* Supporting automatic folder creation while creating new files.
* Preparing the Sandbox Agent to be controlled by AI.
* Beginning the AI Orchestration service using LangChain and Mistral AI.
* Creating AI tools that communicate with the Sandbox Agent APIs.

---

# 🏗️ Existing Architecture

Our Sandbox Pod now contains two containers sharing the same workspace.

```text
                Sandbox Pod
        ┌─────────────────────────────┐
        │                             │
        │  Vite Development Server    │
        │        Port 5173            │
        │                             │
        │     Sandbox Agent           │
        │        Port 3000            │
        │                             │
        └─────────────┬───────────────┘
                      │
              Shared Workspace
```

The Vite container serves the React application, while the Sandbox Agent provides APIs for manipulating project files.

---

# 📂 Sandbox Agent APIs

The Sandbox Agent is responsible for interacting with the shared workspace.

By the end of today's implementation, it supports four core APIs:

* List Files
* Read Files
* Update Files
* Create Files

These APIs allow AI to manipulate project files without directly accessing the filesystem.

---

# 📁 1. List Files API

### Endpoint

```http
GET /list-files
```

Initially, the API simply returned the names of folders inside the workspace.

Example:

```text
src
public
```

This wasn't sufficient because AI needs the complete file structure.

---

## Improved List Files API

The endpoint was rewritten to recursively traverse the workspace and return all project files while ignoring unnecessary directories.

Ignored folders include:

* `node_modules`
* `.git`
* `dist`
* `build`
* `.next`
* `.cache`

The API now returns results like:

```text
src/App.jsx
src/index.css
public/favicon.svg
package.json
vite.config.js
```

This gives AI complete visibility into the project structure.

---

# 📖 2. Read Files API

### Endpoint

```http
GET /read-files
```

Example:

```text
/read-files?files=src/App.jsx,src/main.jsx
```

The endpoint accepts a comma-separated list of file paths.

For every requested file:

* Reads the content
* Returns the file contents
* Reports any read errors

This allows AI to inspect existing source code before making modifications.

---

# ✏️ 3. Update Files API

### Endpoint

```http
PATCH /update-files
```

Example request:

```json
{
  "updates": [
    {
      "file": "src/App.jsx",
      "content": "<Updated Code>"
    }
  ]
}
```

The API:

* Accepts multiple updates
* Locates each file
* Writes the new content
* Returns update results

This endpoint enables AI to modify existing project files.

---

# 📄 4. Create Files API

### Endpoint

```http
POST /create-files
```

Example request:

```json
{
  "files": [
    {
      "file": "src/components/Navbar.jsx",
      "content": "<React Component>"
    }
  ]
}
```

Initially, this endpoint could only create files if the parent folder already existed.

---

## Creating Files Inside New Folders

To support nested directories, the API now creates missing folders automatically before writing files.

This is achieved using:

```javascript
await fs.promises.mkdir(
    path.dirname(filePath),
    { recursive: true }
);
```

The `recursive: true` option ensures all missing directories are created automatically.

Example:

```
src/components/ui/Button.jsx
```

Even if `components` or `ui` do not exist, they will be created before the file is written.

---

# 📂 Final Sandbox Agent Capabilities

The Sandbox Agent now supports:

* Listing project files
* Reading source code
* Updating existing files
* Creating new files
* Creating nested folder structures automatically

This makes the Sandbox fully editable through HTTP APIs.

---

# 🤖 Preparing the AI Orchestration Service

After completing the Sandbox Agent, we started building the **AI Orchestration Service**.

Its responsibility is to:

* Receive user prompts
* Understand project context
* Decide which tools to use
* Modify the project using Sandbox APIs

---

# 📦 Installed Packages

The following libraries were added:

```bash
npm install express morgan langchain @langchain/mistralai @langchain/langgraph dotenv axios zod
```

These packages provide:

* Express server
* Logging
* LangChain
* LangGraph
* Mistral AI integration
* HTTP requests
* Runtime validation

---

# 🛠️ AI Tools

Instead of allowing AI to directly manipulate files, we expose capabilities through **LangChain Tools**.

Three tools were implemented today.

---

## List Files Tool

Purpose:

* Calls the Sandbox Agent `/list-files` API.
* Returns every project file.

The AI uses this tool to understand the project structure.

---

## Read Files Tool

Purpose:

* Reads one or more project files.
* Returns the file contents.

The AI uses this before editing existing code.

---

## Update Files Tool

Purpose:

* Sends updated source code to the Sandbox Agent.
* Modifies existing files.

The AI uses this to rewrite React components and other project files.

---

# 🧩 Zod Schemas

Every tool defines its expected input using **Zod**.

Example:

```javascript
schema: z.object({
    files: z.array(z.string())
})
```

Advantages:

* Runtime validation
* Better tool descriptions
* Structured inputs for AI

---

# 🤖 AI Agent

The AI agent was built using:

```javascript
createAgent({
    model,
    tools
})
```

The available tools are:

* List Files
* Read Files
* Update Files

The AI automatically decides which tool to invoke depending on the user's prompt.

---

# Example Prompt

```text
Create a modern responsive home page for an online food ordering website.
```

The AI workflow becomes:

```text
User Prompt
      │
      ▼
AI Agent
      │
      ▼
List Project Files
      │
      ▼
Read Required Files
      │
      ▼
Generate Updated Code
      │
      ▼
Update Files API
      │
      ▼
Sandbox Agent
      │
      ▼
Shared Workspace Updated
      │
      ▼
Vite Detects Changes
      │
      ▼
Live Preview Updated
```

---

# 🏗️ Updated Architecture

```text
                User Prompt
                     │
                     ▼
             AI Orchestration
                     │
         ┌───────────┼───────────┐
         │           │           │
         ▼           ▼           ▼
    List Files   Read Files   Update Files
         │           │           │
         └───────────┼───────────┘
                     ▼
             Sandbox Agent APIs
                     │
                     ▼
             Shared Workspace
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
   Vite Development       Live Preview
        Server
```

---

# 📚 Key Learning Outcomes

Today I learned:

* Recursive file traversal in Node.js
* Reading multiple files asynchronously
* Updating project files through APIs
* Creating files with automatic folder creation
* Using `fs.promises.mkdir()` with `recursive: true`
* Building REST APIs for file management
* LangChain Tools
* Zod schema validation
* Axios-based tool communication
* AI Orchestration architecture
* Integrating Mistral AI with LangChain
* Connecting AI with Sandbox Agent APIs

---

# 🏁 Conclusion

Today's session transformed the Sandbox Agent into a fully functional file management service.

With the implementation of **List Files**, **Read Files**, **Update Files**, and **Create Files** APIs, the AI can now inspect and modify project files inside the shared workspace.

We also laid the foundation for the **AI Orchestration Service** by integrating LangChain, Mistral AI, and custom tools. The AI can now use these tools to understand a project, edit source code, and instantly reflect those changes in the live Vite preview.

This completes the core communication layer between AI and the Sandbox, bringing us one step closer to building an AI-powered website generation platform similar to Lovable or Vercel v0.
