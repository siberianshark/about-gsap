gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero-title", {
  duration: 2,
  opacity: 0,
  y: -50,
  ease: "power4.out"
});

gsap.from(".hero-text", {
  duration: 2,
  opacity: 0,
  y: 50,
  delay: 0.5,
  ease: "power4.out"
});

// Scroll Animations for Sections
gsap.from(".section-title", {
  scrollTrigger: {
    trigger: ".about, .contact",
    start: "top 80%",
    toggleActions: "restart pause reverse pause"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power4.out"
});

// Hover Animation for Cat Images
gsap.from(".cat-images img", {
  scale: 0.8,
  duration: 0.5,
  ease: "back.out(1.7)",
  opacity: 0,
  stagger: 0.3,
  delay: 1
});
