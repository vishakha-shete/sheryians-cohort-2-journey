import gsap from "gsap";
import "./style.css";

// stagger implementation

gsap.to(".box1", {
  x: 500,
  duration: 1.3,
  delay: 0.6,
  ease: "power2.Out",
  // stagger: 0.2,       // upword stagger
  // stagger: -0.2,    // downward stagger
  stagger: {
    each: 0.1,
    // from: 'center', // start from center
    // from : 'edges',  // start from edges
    from: 'random',  // start from random
  }
});


// timeline implementation

const t1 = gsap.timeline()

t1.to(".box2", {
  x: 500,
  duration: 1.3,
  delay: 0.6,
  ease: "power4.Out",
}).to(".box3", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
}).to(".box4", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
}).to(".box5", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
}).to(".box6", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
})


// position parameter implementation
// "<"= this parameter is used to start the animation of the next element at the same time as the previous animation
const t2 = gsap.timeline() 

t2.to(".box7", {
  x: 500,
  duration: 1.3,
  delay: 0.6,
  ease: "power4.Out",
}).to(".box8", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
},"<"  // start the animation of box8 at the same time as the previous animation (box7)
).to(".box9", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
}).to( ".box10", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
},"<.08") // start the animation of box10 0.08 seconds after the start of the previous animation (box9)

const t3 = gsap.timeline()

t3.to(".box11", {
  x: 500,
  duration: 1.3,
  delay: 0.6,
  ease: "power4.Out",
},"vishakha").to(".box12", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
},"-=0.6") // start the animation of box12 0.4 seconds before the end of the previous animation (box11)


const t4 = gsap.timeline()

t4.to(".box13", {
  x: 500,
  duration: 1.3,
  delay: 0.6,
  ease: "power4.Out",
},"vishakha").to(".box14", {
  x: 500,
  duration: 1.3,
  ease: "power4.Out",
  },"+=0.6") // start  the animation of box14 0.6 seconds after the end of the previous animation 