import gsap from 'gsap'
import './style.css'

//Easing Implementation

//"power2.out"

gsap.to(".box1", {
  x: 400,
  duration: 1,
  delay: 0.6,
  ease: "power2.inout",
});


// "bounce.inOut"
gsap.to(".box2", {
  x: 700,
  duration: 1
  , delay: 0.6
  , ease: "bounce.inOut",
});

// "elastic.inOut"

gsap.to(".box3", {
  x: 700,
  duration: 1,
  delay: 0.6,
  ease: "elastic.inOut",
});


// "steps(12)"

gsap.to(".box4", {
  x: 700,
  duration: 1,
  delay: 0.6,
  ease: "steps(12)",
});

// reapeating the animation
// "power1.inOut"
gsap.to(".box5", {
  x: 400,
  duration: 1,
  delay: 0.6,
  ease: "power1.inOut",
  repeat: 2,
});


// continuous animation
// "power3.inOut"
gsap.to(".box6", {
  x: 400,
  duration: 1,
  delay: 0.6,
  ease: "power3.inOut",
  repeat: -1,
});


// yoyo effect
// "sine.inOut"
gsap.to(".box7", {
  x: 400,
  duration: 1,
  delay: 0.6,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});


// yoyo effect
// "back.inOut"
gsap.to(".box8", {
  x: 400,
  duration: 1,
  delay: 0.6,
  ease: "back.inOut",
  repeat: 3,
  yoyo: true,
});

// set 

gsap.set(".box9", {
  x: -300,
});

gsap.to(".box9", {
  x: 1500,
  duration: 1,
  delay: 0.6,
  ease: "power2.inOut",
  repeat: -1,
});

// callback function 

gsap.to(".box10", {
  x: 400,
  duration: 1,
  delay: 0.6,
  ease: "power2.inOut",
  onStart: () => {
    console.log("Animation Started");
  }
  , onComplete: () => {
    console.log("Animation Completed");
  },
  onUpdate: () => {
    console.log("Animation Updated");
  }
});