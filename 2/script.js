// GSAP setup for page animations

// Header Animation: Title and subheading
gsap.to('.main-title', {
    duration: 2,
    opacity: 1,
    y: -50,
    ease: 'power2.out',
    delay: 0.5
});

gsap.to('.subheading', {
    duration: 2,
    opacity: 1,
    y: -30,
    ease: 'power2.out',
    delay: 1
});

// Section 1 Text Animations
gsap.fromTo('.section-1 .section-title', {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

gsap.fromTo('.section-1 .section-text', {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

// Section 2 - SVG Animations with DrawSVGPlugin
gsap.fromTo('.icon-circle', {
    strokeDasharray: 0,
    strokeDashoffset: 0
}, {
    strokeDasharray: 251,
    strokeDashoffset: 251,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

gsap.fromTo('.icon-rect', {
    strokeDasharray: 0,
    strokeDashoffset: 0
}, {
    strokeDasharray: 320,
    strokeDashoffset: 320,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

// Section 3 - Scroll Animation
gsap.to('.section-3', {
    scrollTrigger: {
        trigger: '.section-3',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    },
    backgroundColor: '#ff7e5f',
    color: '#fff',
    duration: 3
});
