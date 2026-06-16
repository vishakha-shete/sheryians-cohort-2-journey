#day-3 till now what we learn 

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
- we can add different animation also 
- we take a different element box1,box2,box3.box4 
- my goal is after ending the box animation that time runs a next box1 animation 
- so now what we can do 
- we can add delay which animation 1 requires to complete
- but with this one problem accures 
- whenever ur doing a complex animation that time your not doing this things 
- so u dont need to calculate this animation 
- for that we use timeline 
- so lets use the timeline 
- so how we can create a timeline
- const tl = gsap.timeline();
after adding this you can understand the changing of animation is runs
but generally dont want thiss

# position parameter
- now lets move towards the position parameter 
- what is position parameter
- tl.to(element,{property},parameter);
- there are multiple types of position parameters
- types of position parameter
1) "<" = less that parameter 
- how exactlly it works
= you have three animation a1,a2,a if i add a position parameter to the a2 so each element has its own starting and ending point 
- so after adding this both box runs on same time because it makes the same box time as a previous one 

if add like "<0.1" its add a delay type in the animation 
- its run adding A delay in it its add a delay in the starting time 

2) -=0.3
- this animation runs before ending first animation it -0.3 from the previous animation 
if i add +=0.3 it also work as delay and then run the animation of second box 

3) LABELS
- till now we are playing downword upword
- till now compares with upword element
- if i want to make animation 4 and 2
- then that time i used labels
- we can move the different animation using a same label name 