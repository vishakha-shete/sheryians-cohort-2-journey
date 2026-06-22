day-4 of the animation 

# Timeline-control
- timeline control means u can control your timeline as a video 
- yt video controls option
- you can paused the video 
- if u paused the video then u have to restart it again 
- restart
- reverse 
- speed
- so this are the things involved in control
- similiarly u can pause reverse speed the timeline 
- i have to create a button 
- and make it play paused reverse restart 
-  make it 


const tl = gsap.timeline({ paused: true });

tl.to(".box", {
  x: 1200,
  duration: 1.3,
  ease: "power4.out"
})
.to(".box1", {
  x: 1200,
  duration: 1.3,
  ease: "power4.out"
})
.to(".box2", {
  x: 1200,
  duration: 1.3,
  ease: "power4.out"
})
.to(".box3", {
  x: 1200,
  duration: 1.3,
  ease: "power4.out"
});

play.addEventListener("click", () => tl.play());
pause.addEventListener("click", () => tl.pause());
restart.addEventListener("click", () => tl.restart());
reverse.addEventListener("click", () => tl.reverse());


total we have a four animation if we add up the all time of the animation that called total duration of the animation if in that timeline i called him like u runs in just 2 seconds for tat i am making a another button and in this seek i add the value 2 sec then after clicking on the seek button it tells where our animation when the 2 sec also i can add lable for running the animation on same time .addlabel "vishakha" it cant run 1st animation

so if u have big animation so this timeline is more complex so for solving this 
- lets take an example 
- if u had one landing animation 
- then firslly come the loader
- then navbar 
- homepage title
- so we are distributing it in layers 
-  so the first one is loading Timeline then navbar timeline 
- like this u can add the timeline 
- and one master time which manages this all timeline 

// Loaing-Timeline 

const loadingTimeline = ()=>{
  return gsap.timeline().to(Element,{})
}

// Navbar Timeline

const navbarTimeline = ()=>{
  return gsap.timeline()
}


const master = gsap.timeline();

master.add(loadingTimeline, "-=0,4").add(navbarTimeline);

this is called the nested timeline this is a better way os writting your  animations 
- so from this our basic gsap topics are end 
- so u can congratulate yourself
- so lets move towards the pluggins now
- there are multiple types of pluggins today we are going to see the scrolltigger 

import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

- with this we add a schroll tigger in it 