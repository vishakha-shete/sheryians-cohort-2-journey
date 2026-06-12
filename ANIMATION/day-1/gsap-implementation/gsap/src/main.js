import "./style.css";
import { gsap } from "gsap";


// Basic GSAP Animations

// .to() - animates to a specific state

gsap.to(".box", {
  delay: 0.6,       // TO (ending state)
  x: 700,
  duration: 2,
})


// .from() - animates from a specific state
gsap.from(".box1", {
  delay: 0.6,            // FROM (starting state)
  x: 700,
  duration: 2,
})


// .fromTo() - animates from one state to another
gsap.fromTo(".box2",
  {
    x: 0           //from Starting state
  },
  {
    x: 300,        //to Ending state
    y: 200,
    duration: 2,   // How long the animation takes
    delay: 0.6     // How long to wait before starting
  }
);

// Animating a JavaScript object

let obj = { value: 0 };

gsap.to(obj, {        // Animating a JavaScript object
  value: 100,
  duration: 2,
  onUpdate: () => {
    console.log(obj.value);
  }
});

// set() - sets properties immediately without animation
gsap.set(".box3", {
  x: 600,
  y: 100,
});