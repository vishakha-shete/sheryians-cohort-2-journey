# 🚀 Day 3 - GSAP Stagger & Timeline

> *"Animations become truly powerful when multiple elements move together in a meaningful sequence."*

## 📚 What We Have Learned So Far

### ✅ Animation Fundamentals

1. What is Animation?
2. What is Web Animation?
3. Animation Libraries

   * Why we need animation libraries.
   * Introduction to **GSAP (GreenSock Animation Platform)**.

### ✅ GSAP Basics

* `gsap.to()`
* `gsap.from()`
* `gsap.fromTo()`
* `gsap.set()`

### ✅ GSAP Syntax

```javascript
gsap.method(".element", {
  properties
});
```

### ✅ Duration

* Time taken to complete an animation.
* Relation between duration and speed.
* Duration and speed are inversely proportional.

### ✅ Easing

* Why easing is important.
* Motion vs Animation.
* Easing curves and realistic animations.
* Easing Families:

  * `power1`
  * `power2`
  * `power3`
  * `power4`
* Popular easings:

  * `back.out`
  * `bounce.inOut`
  * `elastic.inOut`

### ✅ Callback Functions

* `onStart`
* `onUpdate`
* `onComplete`

---

# 🎯 Today's Topics

Today we are going to learn:

1. **Stagger**
2. **Timeline**
3. **Position Parameters**
4. **Labels**

---

# ⚡ GSAP Stagger

## What is Stagger?

When you have **multiple instances of the same element** and you want to apply the **same animation** to all of them, GSAP provides the **`stagger`** property.

### Without Stagger

Suppose we create 5 boxes:

```javascript
gsap.to(".box1", {
  x: 1200,
  duration: 1.3,
  delay: 0.6,
  ease: "power2.out"
});
```

If multiple elements share the same class (`.box1`), they all start their animation **at the same time**.

---

## Why Use Stagger?

Instead of all elements moving together, we may want them to animate **one after another**.

By adding `stagger`, GSAP automatically adds a small delay between each element.

```javascript
gsap.to(".box1", {
  x: 1200,
  duration: 1.3,
  delay: 0.6,
  ease: "power2.out",
  stagger: 0.2
});
```

### How does it work?

* First element starts.
* After `0.2s`, the second element starts.
* After another `0.2s`, the third element starts.
* And so on...

This creates a much smoother and more visually appealing animation.

---

## Understanding Stagger Timing

Each animation has:

* Starting Time
* Duration
* Ending Time

```
Ending Time = Starting Time + Delay + Duration
```

When we add:

```javascript
stagger: 0.2
```

GSAP inserts a **0.2 second gap between the starting times of consecutive elements.**

---

# 🔄 Stagger Direction

## Default Behavior

By default, stagger starts from the **first element** and moves toward the **last element**.

```
1 → 2 → 3 → 4 → 5
```

---

## Reverse Direction

If we want the animation to start from the last element and move upward, we can use a **negative stagger value**.

```javascript
stagger: -0.2
```

Now the animation order becomes:

```
5 → 4 → 3 → 2 → 1
```

---

# 🎯 Advanced Stagger

Instead of simply starting from the first or last element, GSAP lets us choose where the animation should begin.

## From Center

```javascript
stagger: {
  each: 0.5,
  from: "center"
}
```

Animation order:

```
Center → Outer Elements
```

---

## From Edges

```javascript
stagger: {
  each: 0.5,
  from: "edges"
}
```

Animation order:

```
Edges → Center
```

---

## Random Order

```javascript
stagger: {
  each: 0.5,
  from: "random"
}
```

Animation starts from random elements each time.

---

## Stagger Summary

| Property         | Behavior                            |
| ---------------- | ----------------------------------- |
| `stagger: 0.2`   | Elements animate one after another. |
| `stagger: -0.2`  | Reverse order animation.            |
| `from: "center"` | Starts from the center element.     |
| `from: "edges"`  | Starts from the outer elements.     |
| `from: "random"` | Starts randomly.                    |

---

# 🛠️ Mini Stagger Project

After learning stagger, we built a small project where multiple elements animate sequentially to create a smooth and premium loading effect.

---

# ⏳ GSAP Timeline

## Why Do We Need Timeline?

Until now, we were running only one animation.

Suppose we have four different boxes:

* Box 1
* Box 2
* Box 3
* Box 4

Our goal is:

* After Box 1 animation finishes, Box 2 should start.
* After Box 2 finishes, Box 3 should start.
* And so on.

### Traditional Way (Not Recommended)

We could manually calculate delays:

```text
Animation 1 Duration + Delay
→ Animation 2 Delay
→ Animation 3 Delay
→ ...
```

But for complex projects, calculating delays manually becomes difficult.

---

## Solution: Timeline

GSAP Timeline automatically manages the sequence of multiple animations.

### Creating a Timeline

```javascript
const tl = gsap.timeline();
```

Now we can add animations one by one:

```javascript
const tl = gsap.timeline();

tl.to(".box1", {
  x: 300
});

tl.to(".box2", {
  x: 300
});

tl.to(".box3", {
  x: 300
});
```

The animations will automatically run one after another without manually calculating delays.

---

# 📍 Position Parameter

Timeline becomes even more powerful with **Position Parameters**.

## Syntax

```javascript
tl.to(element, { properties }, positionParameter);
```

Position parameters allow us to decide **when** an animation should start relative to another animation.

---

# 1️⃣ `<` (Less Than Parameter)

### How does it work?

Suppose there are three animations:

* A1
* A2
* A3

If we write:

```javascript
tl.to(".box2", {
  x: 300
}, "<");
```

Then Box 2 starts **at the same time** as the previous animation.

### Meaning

```
Previous Animation Start Time
          ↓
A1: ───────────────
A2: ───────────────
```

Both start together.

---

## `<0.1`

```javascript
tl.to(".box2", {
  x: 300
}, "<0.1");
```

Now Box 2 starts **0.1 seconds after** the previous animation begins.

It behaves like adding a small delay relative to the previous animation's starting point.

---

# 2️⃣ `-=` and `+=`

## `-=0.3`

```javascript
tl.to(".box2", {
  x: 300
}, "-=0.3");
```

This means:

> Start this animation **0.3 seconds before** the previous animation ends.

So the two animations overlap.

---

## `+=0.3`

```javascript
tl.to(".box2", {
  x: 300
}, "+=0.3");
```

This means:

> Wait **0.3 seconds after** the previous animation finishes, then start the next animation.

It behaves like adding an extra delay.

---

# 3️⃣ Labels

Until now, position parameters were always relative to the previous animation.

But what if we want to synchronize completely different animations?

For example:

* Animation 2
* Animation 4

We may want both to start at the same custom point.

### Solution: Labels

Labels allow us to create custom named positions inside the timeline.

```javascript
const tl = gsap.timeline();

tl.add("startAnimation");

tl.to(".box1", {
  x: 300
}, "startAnimation");

tl.to(".box4", {
  y: 200
}, "startAnimation");
```

Both animations will begin at the label called `"startAnimation"`.

## Why Use Labels?

* Avoid complex delay calculations.
* Easily synchronize distant animations.
* Improve readability and maintainability.

---

# 📌 Key Takeaways

* **Stagger** is used when multiple elements share the same animation.
* `stagger` creates a delay between each element automatically.
* Negative stagger values reverse the animation order.
* Stagger can begin from:

  * Start
  * End
  * Center
  * Edges
  * Random positions.
* **Timeline** helps manage multiple animations in sequence.
* Timeline eliminates the need for manual delay calculations.
* **Position Parameters** allow overlapping and custom timing.
* **Labels** help synchronize unrelated animations using named positions.

---

# 🚀 What's Next?

In the next lecture, we'll build more advanced animation projects using:

* Timeline
* Stagger
* Position Parameters
* Labels
* Real-world UI animation patterns

---

## ✨ Day 3 Summary

✅ Revised GSAP fundamentals.
✅ Learned what **Stagger** is and why it is useful.
✅ Understood stagger direction and advanced stagger options.
✅ Built a small stagger animation project.
✅ Learned **GSAP Timeline**.
✅ Explored **Position Parameters (`<`, `-=`, `+=`)**.
✅ Understood the power of **Labels** for synchronizing animations.

> **"A single animation can look good, but combining multiple animations with proper sequencing and timing is what makes an experience feel truly premium."** 🚀
