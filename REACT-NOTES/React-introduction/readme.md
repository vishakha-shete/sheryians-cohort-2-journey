# 📘 React Basics

## ⚛️ What is React?

React JS is a JavaScript library used to build **Single Page Applications (SPA)**.

It helps in building fast, interactive, and dynamic user interfaces.

---

## 📚 Library vs Framework

**Library**
- Collection of predefined functions
- Flexible to use

**Framework**
- Provides complete structure
- Less flexibility

---

## ❓ Why do we need React?

Before React:
- Whole page reload was required for small updates ❌

After React:
- Only required parts update ✅
- Better performance 🚀
- Reusable components

---

## 🏗️ History of React

- Created by Jordan Walke at Facebook  
- Year: 2011  
- Initial name: FaxJS  

---

## 🌐 Virtual DOM vs Real DOM

**Real DOM**
- Actual DOM of browser  
- Slow updates  

**Virtual DOM**
- Copy of Real DOM  
- Faster updates  

**Reconciliation**
- Process of comparing Virtual DOM with Real DOM  
- Updates only changed parts  

---

## 📦 Export & Import

### Default Export
```js
export default App;

Only one default export per file
Named Export
export const name = "Vishakha";
Multiple exports allowed

⚙️ Create React App (Vite)
npm create vite
npm install
npm run dev

Important Terms

npm → Node Package Manager
Vite → Bundler
npm install → Install dependencies
npm run dev → Run server

📁 Project Structure
main.jsx → Entry point
App.jsx → Main component


⚡ Components
Components are reusable blocks of code.

const Card = () => {
  return <h1>Hello</h1>;
};
🔁 Props

Props means passing data from parent to child.

Data flows one way (Parent → Child)
Props are always in object form
<Card name="Sarthak" />
🔄 Rendering List using map()
const users = ["Sarthak", "Priya", "Aman"];
{users.map((user, index) => (
  <h1 key={index}>{user}</h1>
))}
⚡ Shortcut

rafce → React Arrow Function Component Export

🎯 Summary
React builds fast UI
Uses components for reusability
Uses Virtual DOM for performance
Uses props to pass data
Uses map() to render lists