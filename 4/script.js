// GSAP Animations for Text and Icons
gsap.from(".title", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power4.out",
});

gsap.from(".hero-description", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
    ease: "power4.out",
});

gsap.from(".service-item", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1.5,
    ease: "power4.out",
});

gsap.from(".icon-item", {
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    duration: 1.5,
    delay: 1,
    ease: "back.out(1.7)",
});

gsap.from(".footer p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 2,
});

gsap.utils.toArray(".service-item").forEach(function (el) {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
        },
        scale: 1.1,
        opacity: 1,
        duration: 1,
    });
});
