import gsap from "gsap"
import "./style.css"

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