gsap.registerPlugin(ScrollTrigger);
let menu = document.querySelector(".ri-menu-3-line");
let cross = document.querySelector("#cross");
var nav = document.querySelector("nav");
let sideMenu = document.querySelector(".full");
var tl = gsap.timeline();

gsap.from(".nav-heading", {
    y: "50vh",
    scale: 4,
    yPercent: -50,
    color: "black",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        endTrigger: ".hero-section",
        end: "top center",
        scrub: true,
    },
});
tl.to(".full", {
    right: "0",
    duration: 0.4,
});
tl.from(".full h4", {
    x: 50,
    duration: 0.3,
    stagger: 0.3,
    opacity: 0,
});

tl.from(".full i", {
    opacity: "0",
});
tl.pause();
menu.addEventListener("click", function() {
    tl.play();
});
document.querySelector(".ri-close-line").addEventListener("click", function() {
    console.log("hello");
    tl.reverse();
});

const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".center-blue-shoe",
        start: "center center",
        end: "top 10%",
        scrub: 4,
        pin: true,
    },
});
tl5.to(".center-blue-shoe", {
    y: "+=110vh",
    duration: 4,
    ease: "none",
});

let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let storeTabs = document.querySelectorAll(".store-tab");
let newimg = document.querySelector(".newimg");
let malltitle = document.querySelector(".malltitle");
let malldesc = document.querySelector(".mall-desc2");
const setActiveStore = (activeBtn) => {
    storeTabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === activeBtn);
    });
};
circle1.addEventListener("click", function() {
    newimg.src = "./images/Malltwo.avif";
    malltitle.innerHTML = "CHENNAI";
    malldesc.innerHTML = "Avenue And Phoenix Markcity";
    setActiveStore(circle1);
    gsap.from(newimg, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
    });
});
circle2.addEventListener("click", function() {
    newimg.src = "./images/Mallthree.jpg";
    malltitle.innerHTML = "HYDERABAD";
    malldesc.innerHTML = "Inorbit Mall And GVK One Mall";
    setActiveStore(circle2);
    gsap.from(newimg, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
    });
});

circle3.addEventListener("click", function() {
    newimg.src = "./images/Mall6.avif";
    malltitle.innerHTML = "MUMBAI";
    malldesc.innerHTML = "Infinity Mall in Malad";
    setActiveStore(circle3);
    gsap.from(newimg, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
    });
});
setActiveStore(circle1);

const videoOverLay1 = document.querySelector("#video-over1");
const tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: videoOverLay1,
        start: "center center",
        end: "bottom 5%",
        scrub: true,
        pin: false,
    },
});
tl6.to(videoOverLay1, {
    scale: 3,
    opacity: 0,
});
const videoOverLay2 = document.querySelector("#video-over2");
const tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: videoOverLay2,
        start: "center center",
        end: "bottom 5%",
        scrub: true,
        pin: false,
    },
});
tl7.to(videoOverLay2, {
    scale: 3,
    opacity: 0,
});
const videoOverLay3 = document.querySelector("#video-over3");
const tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: videoOverLay3,
        start: "center center",
        end: "bottom 5%",
        scrub: true,
        pin: false,
    },
});
tl8.to(videoOverLay3, {
    scale: 3,
    opacity: 0,
});
var t9 = gsap.timeline()
t9.from("#content ,.Made-text",{
    opacity:0,
    x:-100,
    duration:2,
    stagger:0.9,
    scrollTrigger:{
        trigger:"#content",
        scroller:"body",
        start:"top 60%",
        end:"bottom 40%",
       
        scrub:2,
    }
})

gsap.utils.toArray(".reveal-up").forEach((item) => {
    gsap.from(item, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
        },
    });
});

gsap.from(".me-image-wrap img", {
    rotate: -35,
    scale: 0.85,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".me-section",
        start: "top 70%",
        end: "top 40%",
        toggleActions: "play none none reverse",
    },
});
