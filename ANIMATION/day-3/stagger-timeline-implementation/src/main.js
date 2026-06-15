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

const tl = gsap.timeline({
  defaults: {
    duration: 1.3,
    ease: "power2.Out",
  },
});

tl.to(".box2", {
  x: 500,
  delay: 0.6,
})