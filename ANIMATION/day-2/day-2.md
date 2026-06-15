# 🚀 Day 2 - GSAP Duration, Easing & Callback Functions

> *"Animation is not just moving an object from one place to another; it's about creating natural and believable motion."*

## 📚 Recap

In the previous lecture, we learned:

* `gsap.to()`
* `gsap.from()`
* `gsap.fromTo()`
* `gsap.set()`
* Basic GSAP syntax and animation fundamentals.

Today, we dive deeper into **Duration**, **Easing**, **Repeat**, **Yoyo**, and **Callback Functions**.

---

# ⏱️ Duration

### What is Duration?

**Duration** is the amount of time an animation takes to complete.

### Example

Imagine two people are going home:

* Same path ✅
* Same distance ✅
* Only one road ✅

| Person   | Time Taken |
| -------- | ---------- |
| Person 1 | 5 seconds  |
| Person 2 | 3 seconds  |

**Question:** Who reaches first?
**Answer:** Person 2, because they take less time.

### Q. Which one goes slow and which one goes fast?

* Person 1 (5s) → Goes **slow** 🐢
* Person 2 (3s) → Goes **fast** ⚡

### Rule

> **Less Duration = More Speed**
> **More Duration = Less Speed**

### Relationship Between Duration and Speed

Duration and speed are **inversely (indirectly) proportional**.

* ⬆️ Duration increases → ⬇️ Speed decreases.
* ⬇️ Duration decreases → ⬆️ Speed increases.

---

# 🌍 Realistic Animations

Animations should feel **natural and believable**.

### Example

Suppose you push two boxes:

* A **small box**
* A **big box**

Which one moves faster?

**Answer:** The small box moves faster because it has less mass.

### Learning

Real-world objects behave differently depending on their size, weight, and momentum. Good animations should imitate these real-life behaviors instead of adding random effects.

> **A good animation should feel natural, relatable, and purposeful.**

---

# 🎯 Easing

Easing is one of the most important concepts in animation.

It controls **how the motion feels**, making animations look smooth and premium instead of robotic.

## Why is Easing Important?

### Q. Why do racers keep running even after crossing the finish line?

**Answer:** Because of **momentum**—they cannot stop instantly.

Similarly, objects in animation should not start or stop abruptly. Easing helps simulate this natural motion.

> **In real life, objects have momentum. Great animations imitate this behavior using easing.**

---

# 🏃 Animation vs Motion

### Q. If animation is moving from a starting point to an ending point, what is motion?

**Answer:** Motion is the movement or feeling of the object as it travels from one position to another over time.

Example:

* Start = `x: 0`
* End = `x: 300`

The **feeling** of how the object moves between these two points is called **motion**, and that feeling is controlled by **easing**.

---

# 🎨 Easing Families

In GSAP, easing is added using the `ease` property.

There are many easing families, and each family has three common variants:

* `.in`
* `.out`
* `.inOut`

## 1. `easeIn`

* Starts slowly.
* Gradually becomes faster.

**One-line definition:**

> `easeIn` means the animation starts slow and gradually speeds up.

---

## 2. `easeOut`

* Starts fast.
* Gradually slows down near the end.

**One-line definition:**

> `easeOut` means the animation starts fast and gradually slows down before stopping.

---

## 3. `easeInOut`

* Starts slowly.
* Speeds up in the middle.
* Slows down again at the end.

**One-line definition:**

> `easeInOut` combines both behaviors to create a smooth and natural animation.

---

# ⚡ Power Family

The **Power** easing family controls how strong the acceleration and deceleration effect is.

| Easing   | Behavior                            |
| -------- | ----------------------------------- |
| `power1` | Gentle slope, soft acceleration     |
| `power2` | Medium slope, stronger acceleration |
| `power3` | Steeper and more noticeable         |
| `power4` | Very steep and dramatic             |

### Examples

* `power2.in` → Slower start, stronger acceleration.
* `power2.out` → Faster start, stronger deceleration.
* `power2.inOut` → Slow → Fast → Slow with a stronger effect than `power1`.

### Easy Trick

* `power1` → Light slope 🙂
* `power2` → Medium slope 😊
* `power3` → Strong slope 😎
* `power4` → Very strong slope 🚀

---

# 🎭 Popular Easing Types

## 1️⃣ `back.out`

### Behavior

* Starts fast.
* Slightly overshoots the target.
* Comes back and settles smoothly.

### Real-life Example

Imagine pulling a rubber band and releasing it. It goes slightly beyond the target and then comes back.

### Easy Memory Trick

> **Go a little ahead ➜ Come back ➜ Stop.**

**One-line definition:**

> `back.out` slightly overshoots the target and then returns to the final position.

---

## 2️⃣ `bounce.inOut`

### Behavior

* Bounces at the beginning.
* Moves smoothly in the middle.
* Bounces again before stopping.

### Real-life Example

Imagine dropping a rubber ball. It bounces when it starts moving and bounces again before coming to rest.

### Easy Memory Trick

* `bounce.in` → Bounce at the start.
* `bounce.out` → Bounce at the end.
* `bounce.inOut` → Bounce at both the start and the end.

**One-line definition:**

> `bounce.inOut` creates a bouncing effect at both the beginning and the end of the animation.

---

## 3️⃣ `elastic.inOut`

### Behavior

* Elastic effect at the beginning.
* Smooth movement in the middle.
* Elastic effect again before stopping.

### Real-life Example

Imagine stretching a spring and releasing it. It oscillates before settling down.

### Easy Memory Trick

* `elastic.in` → Spring effect at the start.
* `elastic.out` → Spring effect at the end.
* `elastic.inOut` → Spring effect at both ends.

**One-line definition:**

> `elastic.inOut` creates a spring-like motion at both the beginning and the end.

---

# 📈 Which Easing Should We Use?

The goal is not to memorize every easing function but to understand the **curve** and the feeling it creates.

### Commonly Used Easing Functions

1. `expo`
2. `power1`
3. `power2`
4. `power3`

For playful or special interactions, you can use:

* `back`
* `bounce`
* `elastic`

Ultimately, the best easing depends on the feeling you want to create.

---

# 🔄 Repeat

Sometimes we want an animation to run multiple times.

GSAP provides the `repeat` property for this.

### Example

```javascript
gsap.to(".box", {
  x: 300,
  duration: 2,
  repeat: 2
});
```

### Q. If `repeat: 2`, how many times does the animation run?

* Original play ▶️
* First repeat 🔄
* Second repeat 🔄

**Total = 3 plays**

### Rule

> **Total Plays = 1 + Repeat Value**

---

# ♾️ Infinite Repeat

### Q. How can we make an animation repeat forever?

Set:

```javascript
repeat: -1
```

**One-line definition:**

> `repeat: -1` makes the animation repeat infinitely.

---

# ↔️ Yoyo

### What is `yoyo`?

`yoyo: true` makes the animation reverse direction after every repeat.

### Example

```javascript
gsap.to(".box", {
  x: 300,
  repeat: 3,
  yoyo: true
});
```

### Q. If `repeat: 3` and `yoyo: true`, how many times does it go forward and backward?

Sequence:

1. Forward ▶️
2. Backward ◀️
3. Forward ▶️
4. Backward ◀️

* Forward = 2 times
* Backward = 2 times

**One-line definition:**

> `yoyo` makes the animation alternate between forward and backward directions.

---

# 🎞️ Marquee Animation

By combining:

* `repeat: -1`
* `yoyo`
* `gsap.set()`

we can create continuous animations like marquees, sliders, and loaders.

---

# ⚙️ GSAP Callback Functions

Callback functions allow us to execute code at specific moments during an animation.

## Common Callback Functions

* `onStart`
* `onUpdate`
* `onComplete`

### Do callback functions consider `delay`?

✅ Yes, all of them respect the delay.

---

## 1️⃣ `onStart`

* Runs once.
* Fires after the delay ends.
* Executes right before the animation begins.

**One-line definition:**

> `onStart` executes a function when the animation starts.

---

## 2️⃣ `onUpdate`

* Runs continuously while the animation is playing.
* Executes almost every frame.

**One-line definition:**

> `onUpdate` repeatedly executes a function while the animation is running.

---

## 3️⃣ `onComplete`

* Runs once after the animation fully finishes.
* Includes the waiting time caused by `delay`.

**One-line definition:**

> `onComplete` executes a function after the animation has completely finished.

---

## 🎯 Callback Timeline

```text
Delay → onStart → onUpdate → onUpdate → onUpdate → onComplete
```

### Easy Memory Trick

* ▶️ `onStart` → Animation begins.
* 🔄 `onUpdate` → Animation is running.
* ✅ `onComplete` → Animation ends.

---

# 📌 Key Takeaways

* Duration and speed are inversely proportional.
* Realistic animations feel better than random effects.
* Easing gives life and personality to animations.
* Motion is the feeling created while moving from start to end.
* `easeIn`, `easeOut`, and `easeInOut` control acceleration and deceleration.
* `power1` to `power4` provide different strengths of easing.
* `back`, `bounce`, and `elastic` create playful animation effects.
* `repeat` and `yoyo` help create looping animations.
* Callback functions (`onStart`, `onUpdate`, `onComplete`) let us execute code during different stages of an animation.

---

## 🚀 What's Next?

In the next lecture, we will learn:

* **GSAP Stagger**
* **GSAP Timeline**
* Building more complex and synchronized animations.

---

### ✨ Day 2 Summary

✅ Learned Duration and its relation to Speed.
✅ Understood realistic animation principles.
✅ Explored Motion and Easing concepts.
✅ Studied Easing Families and Power curves.
✅ Learned `back.out`, `bounce.inOut`, and `elastic.inOut`.
✅ Understood `repeat`, `repeat: -1`, and `yoyo`.
✅ Explored GSAP Callback Functions.
✅ Ready to move towards **Stagger** and **Timeline**.
