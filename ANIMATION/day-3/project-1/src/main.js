import gsap from "gsap";
import "./style.css";


gsap.from('h1 span', {
  yPercent: 100,
  opacity: 0,
  duration: 1.5,
  ease: "expo.out",
  // stagger: 0.08,   // upword stagger
  // stagger: -0.08,    // downward stagger

  stagger: {
    each: 0.08,
    // from: 'center', // start from center
    // from: 'edges',  // start from edges
    from: 'random',  // start from random
  },

});
