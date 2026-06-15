lecture-2

in previous class we learn till .from to 

so lets understand the duration in detail

#  DURATION
- time taken to complete the animation is called duration
- for ex : 
  there is two persons we have to go to the home same path same distance and one way to go 
  - person 1 timing is 5 s 
  - and person 2 timing is 3 s 
  - so  which one reached first
   = second person reached first 

### Q. Which one will go slow and which one will go fast?

If two people travel the same distance:
- Person 1 takes **5 seconds** → goes **slow**.
- Person 2 takes **3 seconds** → goes **fast**.

**Rule:** For the same distance, **less duration = more speed**, and **more duration = less speed**.

- so duration and speed has a relation between both so what is the raltion between them ???
- Duration and speed are indirectly (inversely) proportional because increasing one decreases the other. 🚀

you dont like those animation look good u add you have to be natural and realisting 
- if creating a two boxes one big and one small which one go fast if pushesh them so like this we have to puth the realistic animation
- small box goes fast 
- big box goes slow 
- because has a mass difference 
- so the make shure your animation is relatable and realistic so animation fit hone chahiye feel ana chahiye unwanted animations added in your websites so thats not look good mostlly learn what is animation
- and how we cam apply the animation 

so now move towards the easing so easing is the thing u have to understand very perfectlly and it give u ability to make animation easing makes your animation premium 

Q: Why do racers keep running even after crossing the finish (red) line?
= Racers continue running after crossing the finish line because of momentum—they cannot stop instantly. 
- In real life, objects and people have momentum, so they don't stop immediately. Good animations mimic this natural behavior using easing.

animation is basically moving from starting point to the ending point then what is motion?
= Motion is the movement of an object from one position to another over time, while animation is the overall process that creates that movement. 
- Start = x: 0
  End = x: 300
- feeling of the animation is called motion and that feeling is called as easing 
- we can achieve this using easing 

we add easing in gsap using ease in which we have to add two things there are multiple families
- in family we can add three things called 
-  family.-- in , out , inout 
- so lets understand in , out, inout

easeIn : means the animation starts slow and gradually becomes fast.- 
easeOut : means the animation starts fast and gradually slows down at the end.
easeInOut
Combines both behaviors.
The animation starts slowly, speeds up in the middle, and slows down again at the end.

there are families incluid in it and also u can create the custome 
power 1 is the family which gives us a slppe feeling=
power 2 what is power 2 did ??
- power2 is an easing family that creates a stronger and steeper acceleration/deceleration effect than power1.

📌 Power Family
power1 → Gentle slope, soft acceleration/deceleration.
power2 → Stronger slope than power1; starts or ends more dramatically.
power3 → Even steeper, with a more noticeable speed change.
power4 → Very steep, creating a very strong easing effect.

For example:

power2.in → Starts slower than power1.in but speeds up more aggressively.
power2.out → Starts fast and slows down more noticeably.
power2.inOut → Slow start → Faster middle → Slow end, with a stronger effect than power1.inOut.


Easy way to remember:
power1 → Light slope 🙂
power2 → Medium slope 😊
power3 → Strong slope 😎
power4 → Very strong slope 

with using easing your animation looks good 
- lets used easing one by one and see how is our animation looks good 

1) back-out

- how is this animation??
= back.out starts fast, slightly overshoots the target, and then comes back to smoothly stop at the final position. 
  - back.out = Go a little ahead ➜ Come back ➜ Stop.

In back.out, the value may temporarily go beyond the target (overshoot) and then return, which is why you may see negative or extra offset values in the easing curve

  ex: Imagine pulling a rubber band and releasing it—the object goes a little farther than the target and then comes back.

2)bounce-inOut
- how is this animation?
= bounce.inOut combines both bounce.in and bounce.out behaviors

The animation starts with a bouncing effect, moves smoothly in the middle, and ends with another bouncing effect.

example:
Imagine dropping a rubber ball—it bounces when it starts moving and bounces again before it comes to rest.

How does it look?
Bounce at the beginning → Smooth movement → Bounce at the end 

One-sentence answer:
bounce.inOut makes the animation bounce at both the start and the end, creating a playful and energetic motion. 

Easy trick to remember:
bounce.in → Bounces at the beginning.
bounce.out → Bounces at the end.
bounce.inOut → Bounces at both the beginning and the end.


3) "elastic.inOut
- how is this animation?
= elastic.inOut combines both elastic.in and elastic.out behaviors.
The animation starts with an elastic (stretching) effect, moves normally in the middle, and ends with another elastic effect.
It looks like an object attached to a spring or rubber band.

example:
Imagine pulling a spring and releasing it—it stretches, oscillates, and finally settles into place.

How does it look?
Elastic at the start → Smooth movement → Elastic at the end

One-sentence answer:

elastic.inOut creates a spring-like animation that stretches and oscillates at both the beginning and the end before settling.

Easy trick to remember:
elastic.in → Spring effect at the beginning.
elastic.out → Spring effect at the end.
elastic.inOut → Spring effect at both the beginning and the end. 

the goal is to teach the curve easing teaches u everyone but nobody teaches about the curve 
* mejority uses is expo and then power1 power2 power3 
- then again if need then go to the back bounce elasting like playing 

mojority is elastic expo power1 power2 power3 you can use another also its depends on u how u want the animation 

till now we are running only one animation but now i want that animation runs in multiple times repeatavily 
- for this i can use reapeat in which i can add value how many times repeat
Q: If I add repeat: 2, how many times will the animation run, and why?

A: repeat: 2 means the animation will play 3 times in total—1 original play + 2 additional repeats.

Timeline:
▶️ First play (original animation)
🔄 First repeat
🔄 Second repeat

Total = 3 plays

Q: If I want the animation to repeat continuously, what should I do?

A: Set repeat: -1 to make the animation repeat infinitely.

Q: What does yoyo do in GSAP?

A: yoyo makes the animation reverse its direction after each repeat, so it goes forward and then backward.
Q: If I set repeat: 3 and yoyo: true, how many times does the animation go forward and backward?

A: The animation will run 4 times in total (1 original play + 3 repeats), alternating directions.

Forward: 2 times
Backward: 2 times

with using this u can create maeque animation
lets use set here

// learn about the callback functions

there are many types of callaback function like 
oncomplete onstart onupdate majority times uses this animation 
i add delay in is so it consider the delay or not

GSAP Callback Functions

Commonly used callback functions are:

onStart
onUpdate
onComplete
❓ If I add delay, do callback functions consider the delay?
1) onStart

✅ Yes, onStart considers the delay.
It fires after the delay ends, just before the animation actually starts.

One-line answer:
onStart is triggered after the delay period, right when the animation begins.

2) onUpdate

✅ Yes, onUpdate also considers the delay.
It starts running only after the delay is over and the animation is actively playing.

One-line answer:
onUpdate runs continuously while the animation is in progress, after the delay has finished.

3) onComplete

✅ Yes, onComplete also considers the delay.
It is triggered only after the entire animation finishes, including the waiting time caused by delay.


Q: What do callback functions (onStart, onUpdate, onComplete) do in GSAP?

A: Callback functions are special functions that GSAP automatically calls at specific moments during the animation lifecycle.

1️⃣ onStart
Runs once, when the animation starts (after any delay).
Used to trigger some action right before the animation begins.

✅ One-line answer:
onStart executes a function when the animation starts.

2️⃣ onUpdate
Runs continuously while the animation is playing.
Called every time the animation values change (almost every frame).

✅ One-line answer:
onUpdate executes a function repeatedly while the animation is running.

3️⃣ onComplete
Runs once, when the animation finishes completely.
Used to perform actions after the animation ends.

✅ One-line answer:
onComplete executes a function after the animation has fully finished.

🎯 Easy Trick to Remember
onStart → Before the animation begins ▶️
onUpdate → While the animation is running 🔄
onComplete → After the animation ends ✅

we will learn in next class staggle and timeline 