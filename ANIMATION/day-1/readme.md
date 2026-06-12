# day-1 = of the animation journay 

-  swaraj signh a creative website designer recentlly graduated from nit goa he is a perfect guy who able to teaach animations so started animation journey with swaraj singh
- i teach differentlly i asked a lot of questions during session i want to students interact and think much more than they only learn
- and second thing is i asked a tricky questions if u answer wrong then i tell it right to see who is perfect answering 
- i will tell you answers but i want you to think and answer first this is the only think sir want from us
- we will starting with animation 2d animations 
- mostlly we are starting with the gsap peoples know how to create animation using code but they dont know what exactlly is animations
- animation within it it is big field if u understand the animation first then your animation in websites is veryy beutifull if u did annimation without understanding then you find something missing so thats why we are going with the basic first 
- so firstlly we understanding the animation and then starting with the gsap
- and then creating a project with it and then learning three js and creating project with it 
- this is like our whole animation series going 
- we are also building a beautiful portfolio where we are adding a beautifull animations in it 

so now we will start with animation
# animations 

1) Which is your favorite animated movie?
- "My favorite animated movie is Kung Fu Panda because it's entertaining and teaches valuable life lessons." 🚀

2) How were animated movies created when there was no animation software?
- Before animation software existed, animated movies were made by hand-drawing each frame and photographing them one by one to create motion🚀
- that time animators take a one paper and draw the animation like a carector and this carector draw on different page with different action draw multiple actions with the same caracter on multiple papers and then start it frame by frame 
- its running on 56.89 per second means this your drawing in one second how many times runs 
- if i called 60fps its means 60 frames change in one second 
- so we also mostlly want to run our website in 60fps 
- we dont want to lag our website and crashed we adding animations in our website because we want to feel more premium 
- that much quality ur increasing fps also increasing with it

ANIMATION
- animation within itself is a big careear

ANIMATION-BASICS
1) first thing is starting point 
- you have to tell from where your animation is starting

2) ending-point 

3) duration
- it means the animation completion timing

4) easing
- it is very imp if ur easing is good then ur animation half and part completed 

this four points with i added a my one point 

5) PATH of the animation
- suppose our a point which is our starting point and b point which is the ending point 
- so how many ways for going into a to b there are infinite paths with path of the animation is also matters

Q: How many ways are there to go from point A to point B in animation?
There are infinitely many ways to go from A to B, depending on the path and the easing (speed) of the animation.


WEB-ANIMATIONS : - 

there are two ways of animation
- css animation
- javascript animation

- css animations are limited so we have to use javascript
- In javascript if your writing simple animation then u need to write lot of lines code and its littele bit complex 
- we need to do optimization also optimization also manual 
- this all the problems  are presentss in javascript so who is solving this problems ??
solutin : any animation library 
- so whenever we are talking about animation in web development most famous and relible , used library is react 
- big brands like apple amazon are used gsap for animation

Q: Who solves these problems in JavaScript animations?
A: GSAP (GreenSock Animation Platform) solves these problems by simplifying animation code and handling optimization automatically. 🚀

# GSAP :
- GSOC is stands for greensock animation platform

# basic syntax of the gsap

- gsap.method(".element", {properties}) 

- means GSAP applies the specified animation properties to the selected HTML element.

Syntax breakdown:

- gsap → The GSAP library object.

- method → The animation method (to(), from(), or fromTo()).

- .element → The target HTML element (CSS selector).

- {properties} → The animation properties and settings (e.g., x, y, duration, delay, ease).


- how we include gsap in our project 
- go to gsap installation on browser
- there are two ways generelly we use 
- first one using a cdn 
- second one using npm 
- i am creating vite folder 
- in which installing gsap 
- using a command called
- npm install gsap 

- we created a red box simply we have to move that box 
- whenever your doing animation you have to understand which type of your animation is 2d animation or 3d animation

2d animation - whenever the 2d animation we show two axis x and y 
3d animation - three axis 

- i want to move the box from x axis forward 

what is method ??
- A method is a function used to perform a specific animation task in GSAP

Q: What is a method in GSAP?
A: A method is a function that tells GSAP what type of animation to perform.

Examples of GSAP methods:

gsap.to() → Animate to the ending state.
gsap.from() → Animate from the starting state.
gsap.fromTo() → Animate from a specified start state to a specified end state.

Q: How can we select multiple elements in GSAP?

A: We can select multiple elements by - - using a common CSS selector, such as a class name, and GSAP will animate all matching elements.

we can add multiple lements in one araay with qauma and double invited 

properties : 
- maximum of the css properties we can add here 
- x : 100px it will not work
- x: 100, it will work
because the gsap bydefault lenght and distance things units save as a 100px 
- if we dont give any unit its bydefault in pixel

duration : 
- duration is the time for completing the animation 
- 1s so this will not work
- because the time property unit saves default as a second 
- "1mls" we cannot do like this also
- we can write as 0.000---

gsap.to(".box",{
  delay: 0.6,
  x: 700,
  duration: 2,
})

because it going fast so we add delay

delay - before animation srarts how many secods pause we need to take 

now we are moving forwards to the methods 
- .to , .from , .fromto , .set

1) .to 
- .to goes starting point to ending point
- it is ending properties so who is initial one

- the bydefault positon of the element is a initial state of the element

In gsap.to(), the initial state is the element's current state, and you only specify the ending state. 

2) .from 
- it is apposite to the .to
- it goes to the ending state to starting state 
- so tell me which state is belongs

Q: In gsap.from(), which state belongs to from and which state belongs to the element?

A: In gsap.from(), you specify the starting (initial) state, and the ending state is the element's current state in the HTML/CSS.

3) .fromto 
- what exactlly is does??
It combines the behavior of .from() and .to().
- It lets you manually define both the 
- starting state and the ending state.
- GSAP does not use the element's 
- current state; it uses the values you provide.


In gsap.fromTo(), the first object is the from (starting) state, and the second object is the to (ending) state with animation settings like duration and delay.

in which bracket delay and duration properties written??

delay and duration should be written in the TO (second) bracket, not in the FROM bracket.

Q: Why should delay and duration be written in the TO (second) bracket and not in the FROM (first) bracket?

A: Because the first bracket only defines the starting values, while the second bracket controls how the animation runs, including settings like duration, delay, ease, repeat, and callbacks.

Think of it like this:
FROM bracket = "Where should the animation start?"
TO bracket = "Where should it end, and how should it behave?"

in which bracket delay and duration go ??
delay and duration go in the TO (second) bracket because they control the animation itself, not the starting state of the element.

Q: Why should delay and duration be written in the TO (second) bracket and not in the FROM (first) bracket?
- A: Because the first bracket only defines the starting values, while the second bracket controls how the animation runs, including settings like duration, delay, ease, repeat, and callbacks.

Think of it like this:
FROM bracket = "Where should the animation start?"
TO bracket = "Where should it end, and how should it behave?"

in properties css properties we only add or gsap properties can we create our custome properties ??

- assume i have a variable i want to animate the value from 0 to 100 so how i can animate ???

Q: In GSAP, can we animate only CSS properties, or can we create our own custom properties?

- GSAP can animate both CSS properties and custom JavaScript object properties, allowing you to animate values like a variable from 0 to 100.

CSS properties → x, y, opacity, scale, etc.
GSAP properties → duration, delay, ease, repeat, etc.
Custom properties → Any numeric property inside a JavaScript object (e.g., obj.value). 🎯


# task
learn about set 
4) .set 


Q: What exactly is gsap.set()?

A: gsap.set() instantly changes an element's properties without any animation or transition.

Example:
gsap.set(".box", {
  x: 300,
  opacity: 0.5
});

👉 The .box element will immediately move to x: 300 and its opacity will become 0.5. There is no duration, no delay, and no movement effect.

Think of it like this:
gsap.to() → Animate to a new state.
gsap.from() → Animate from a given state.
gsap.fromTo() → Animate from one specified state to another.
gsap.set() → Just set the state instantly (no animation).

✅ One-sentence answer:
gsap.set() is used to instantly apply property values to an element without animating them. 🚀

For your flowchart, under gsap.set() you can write:

Instantly set properties
          ↓
     No animation

or simply:

Set state instantly (without animation)