import gsap from "gsap";
import "./style.css";

let count = 0;
const loaderCounter = document.querySelector(".loader-counter h1");

const interval = setInterval(() => {
    count++;
    loaderCounter.innerHTML = `${count}%`;

    if (count === 100) {
        clearInterval(interval);
        landingAnimation();
    }
}, 20);

function landingAnimation() {
    const tl = gsap.timeline();

    tl.to(".loader-counter", {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    })
        .to(".loader", {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.out",
        }, "-=0.9")
        .from(".background img", {
            scale: 1.2,
            duration: 1.3,
            ease: "expo.out",
        },"-=1.1")
        .from(".heading h1", {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
        },"-=0.8").from(".subheading h2", {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
        },"-=0.77")
}