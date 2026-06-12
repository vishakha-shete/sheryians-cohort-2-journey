# 🚀 Day 1 - GSAP & Animation Basics Journey

> **"Great animations are not just about moving objects; they are about understanding motion, timing, and storytelling."**

## 📖 Introduction

Today marks the beginning of my **Animation Journey** with **Swaraj Singh**, a creative web designer and recent graduate from **NIT Goa**. Rather than directly jumping into code, this session focused on understanding the **fundamentals of animation**, because beautiful web animations come from understanding the principles behind them.

The teaching style was highly interactive—students were encouraged to think, answer questions, and explore concepts before being given the solutions.

---

## 🎬 What is Animation?

Animation is the process of creating the illusion of movement by displaying a sequence of images (frames) rapidly.

### 💡 Fun Question

**Q: Which is your favorite animated movie?**
**A:** *My favorite animated movie is **Kung Fu Panda** because it's entertaining and teaches valuable life lessons.* 🐼✨

### 🎥 How were animated movies created before animation software?

Before computers and animation software, artists used to:

* Draw each frame by hand on paper.
* Create multiple drawings of the same character with slight changes.
* Photograph each drawing one by one.
* Play them rapidly to create the illusion of movement.

**One-line Answer:**

> **Before animation software existed, animated movies were created by hand-drawing each frame and photographing them one by one.**

---

## 🎞️ Frames Per Second (FPS)

* **FPS (Frames Per Second)** represents how many images are displayed in one second.
* Example:

  * **60 FPS** = 60 frames are shown every second.
* Modern websites often target **60 FPS** to ensure smooth animations and a premium user experience.

---

# 🎯 Animation Basics

Every animation is built around these five core concepts:

| Concept            | Description                                        |
| ------------------ | -------------------------------------------------- |
| **Starting Point** | Where the animation begins.                        |
| **Ending Point**   | Where the animation finishes.                      |
| **Duration**       | How long the animation takes to complete.          |
| **Easing**         | Controls the speed and feel of the animation.      |
| **Path**           | The route the animation follows from start to end. |

### 📍 Path of Animation

Suppose an object moves from **Point A** to **Point B**.

**Q: How many ways are there to go from A to B?**
**A:** There are infinitely many ways, depending on the path and the easing (speed) of the animation.

---

# 🌐 Web Animations

There are mainly two ways to create animations on the web:

1. **CSS Animations**
2. **JavaScript Animations**

### Why not only CSS?

* CSS animations are limited.
* Complex interactions are difficult to build.
* Dynamic animations often require JavaScript.

### Problem with Vanilla JavaScript

* Requires a lot of code.
* Manual optimization is needed.
* Performance management becomes difficult.

### ✅ Solution

Use an **Animation Library**.

The most popular and widely used library is **GSAP (GreenSock Animation Platform)**.

**Q: Who solves these JavaScript animation problems?**
**A:** GSAP simplifies animation code and handles performance optimization automatically.

---

# 🟢 GSAP (GreenSock Animation Platform)

## What is GSAP?

**GSAP** stands for **GreenSock Animation Platform**. It is a high-performance JavaScript library used to create smooth and optimized animations.

---

# ⚙️ Installing GSAP

There are two common ways to add GSAP to a project:

### 1. Using CDN

Include the GSAP CDN link in your HTML file.

### 2. Using NPM

```bash
npm install gsap
```

---

# 📝 Basic Syntax of GSAP

```javascript
gsap.method(".element", {
  properties
});
```

### Syntax Breakdown

| Part           | Meaning                                           |
| -------------- | ------------------------------------------------- |
| `gsap`         | The GSAP library object.                          |
| `method`       | Animation method (`to`, `from`, `fromTo`, `set`). |
| `.element`     | Target HTML element (CSS selector).               |
| `{properties}` | Animation properties and settings.                |

---

# 🔧 What is a Method?

**Q: What is a method in GSAP?**
**A:** A method is a function that tells GSAP what type of animation to perform.

### Common GSAP Methods

* `gsap.to()` → Animate to the ending state.
* `gsap.from()` → Animate from the starting state.
* `gsap.fromTo()` → Animate from a specified start state to a specified end state.
* `gsap.set()` → Instantly set properties without animation.

---

# 🎯 Selecting Multiple Elements

**Q: How can we select multiple elements in GSAP?**

**A:** Use a common CSS selector (such as a class), and GSAP will animate all matching elements.

```javascript
gsap.to(".box", {
  x: 300
});
```

If multiple elements have the class `.box`, all of them will be animated.

---

# 🎨 GSAP Properties

## CSS Properties

You can animate most CSS properties:

* `x`
* `y`
* `opacity`
* `scale`
* `rotation`
* etc.

```javascript
x: 100
```

> GSAP assumes **pixels (`px`) by default**, so `x: 100` is treated as `100px`.

## Duration

```javascript
duration: 2
```

* Duration is measured in **seconds** by default.
* `duration: 2` means the animation lasts **2 seconds**.

## Delay

```javascript
delay: 0.6
```

* Delay specifies how long GSAP waits before starting the animation.

---

# 🚀 GSAP Methods

## 1️⃣ `gsap.to()`

* Moves from the element's **current (default) state** to a specified **ending state**.

```javascript
gsap.to(".box", {
  x: 700,
  duration: 2,
  delay: 0.6
});
```

### Important

The **current position of the element** acts as the initial state.

**One-line answer:**

> `gsap.to()` animates an element from its current state to a specified ending state.

---

## 2️⃣ `gsap.from()`

* Works opposite to `gsap.to()`.
* Starts from a specified state and animates back to the element's current state.

```javascript
gsap.from(".box", {
  x: -300,
  opacity: 0,
  duration: 2
});
```

**One-line answer:**

> `gsap.from()` animates an element from a specified starting state to its current state.

---

## 3️⃣ `gsap.fromTo()`

* Combines the behavior of both `from()` and `to()`.
* You define both the starting and ending states manually.

```javascript
gsap.fromTo(
  ".box",
  {
    x: 0
  },
  {
    x: 300,
    duration: 2,
    delay: 0.6
  }
);
```

### Structure

| First Object            | Second Object                            |
| ----------------------- | ---------------------------------------- |
| Starting (`from`) state | Ending (`to`) state + animation settings |

### Why are `delay` and `duration` written in the second object?

Because:

* The **first object** only describes **where the animation starts**.
* The **second object** describes **where it ends and how it behaves**.

**Easy way to remember:**

* **FROM object** → "Where should the animation start?"
* **TO object** → "Where should it end, and how should it behave?"

**One-line answer:**

> `gsap.fromTo()` animates an element from a specified starting state to a specified ending state.

---

# 🎯 Animating Custom JavaScript Properties

GSAP is not limited to CSS properties. It can also animate custom JavaScript object properties.

```javascript
let obj = {
  value: 0
};

gsap.to(obj, {
  value: 100,
  duration: 2,
  onUpdate: () => {
    console.log(obj.value);
  }
});
```

### Property Types

| Type              | Examples                                             |
| ----------------- | ---------------------------------------------------- |
| CSS Properties    | `x`, `y`, `opacity`, `scale`                         |
| GSAP Properties   | `duration`, `delay`, `ease`, `repeat`                |
| Custom Properties | Any numeric JavaScript object property (`obj.value`) |

**One-line answer:**

> GSAP can animate both CSS properties and custom JavaScript object properties.

---

# ⚡ `gsap.set()`

`gsap.set()` instantly changes an element's properties **without any animation**.

```javascript
gsap.set(".box", {
  x: 300,
  opacity: 0.5
});
```

The changes happen immediately—there is no movement, duration, or delay.

### Comparison

| Method          | Description                                  |
| --------------- | -------------------------------------------- |
| `gsap.to()`     | Animate to a new state.                      |
| `gsap.from()`   | Animate from a specified state.              |
| `gsap.fromTo()` | Animate from one specified state to another. |
| `gsap.set()`    | Instantly set properties without animation.  |

**One-line answer:**

> `gsap.set()` instantly applies property values to an element without animating them.

---

# 📌 Key Takeaways

* Animation is much more than moving objects—it involves timing, easing, and paths.
* Websites should aim for smooth animations around **60 FPS**.
* Vanilla JavaScript animations are complex and require manual optimization.
* GSAP simplifies animation development and improves performance.
* Learn the difference between `to()`, `from()`, `fromTo()`, and `set()`.
* GSAP can animate both CSS properties and custom JavaScript object properties.

---

## 📚 Day 1 Summary

✅ Learned animation fundamentals.
✅ Understood FPS and frame-based animation.
✅ Explored web animation approaches.
✅ Learned why GSAP is needed.
✅ Installed GSAP and studied its basic syntax.
✅ Understood `to()`, `from()`, `fromTo()`, and `set()`.
✅ Learned how to animate custom variables using GSAP.

---

### 🎯 Task for Next Session

* Explore `gsap.set()` in more depth.
* Practice creating small animations using `to()`, `from()`, and `fromTo()`.
* Build a simple animated project using GSAP.

---

*Day 1 of my Animation Journey — building the foundation before creating beautiful web experiences.* 🚀✨

*Based on my Day 1 learning notes.* 
