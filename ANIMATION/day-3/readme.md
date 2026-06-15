# till now what we learn 

1) animation
2) web animation
3) animation libraries = gsap
4)methods .to .from .fromto .set
5) gsap syntax
6) duration
7) easing
- types and learn in details easing with graph
- easing curve fro creating ustom easing
- callbacks functions
- onstart oncomplete onupdate

today we are going to learn stagger and timelline

# STAGGER 
- when u have multiple instence of one element 
- u have a same element u have to add same annimation to all them 
- when we have same element and same animation that time we used a stagger 
- how stagger actually  work 
- if we created a same element 
- then see the output we created a 5 element 
gsap.to(".box1", {
  x: 1200,
  duration: 1.3,
  delay: 0.6,
  ease: "power2.Out",
});

it simplyy run all after staring this animation
- now lets understand the power of swagger add down to the delay a stagger 
- in stagger i give a value which is the time based value 
- then u will show it creates a beautifull animation u can see with stagger u create a this animation
-  it runs one by one 
- each animation has its own staring time and ending time 
- if u plus the starting-time + duration + delay = ending time
- when i add the stagger it has same starting time and same enging time
- but when i add stagger 0.2s then this animation have delay between them 0.2s 
- the delay comes in between the elements 
- u can add according to u the timing

- the main concern is our is its starts from 1st element
- no its running upword to lower
- if i want to opposite to it lower to upword direction
- then i can add add -ve before the timing -0.2

till now we are going starting to end end to start 

- now i want to propogate from center
- stragger:{
    each: 0,5,
    from: 'center',
}

- it goes from center i want to outer from center 
- then i can change it to edges
- if i want to flow the animation randomly i can random


then we build the small project using the stragger

lets move towards the understanding of the timeline 
- timeline is used for the sequence of the multiple  animation
- 