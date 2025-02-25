// GSAP Animations

// Trigger animation on "Start Animations" button click
document.getElementById('startAnimation').addEventListener('click', () => {
    // Animate boxes with a staggered effect (appear with delay)
    gsap.to('.box', {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.3,
      ease: 'bounce.out'
    });
  
    // Animate text (fade-in and move up)
    gsap.to('.animated-text', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5
    });
  
    // Image animation (fade-in and scale)
    gsap.to('#animatedImage', {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 1,
      ease: 'power2.out'
    });
  
    // Scroll-triggered animation for text at the bottom
    gsap.to('.scroll-text', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2,
      ease: 'power3.out'
    });
  });
  
  // Hover effect for images
  gsap.utils.toArray('.image-container img').forEach(img => {
    img.addEventListener('mouseover', () => {
      gsap.to(img, { scale: 1.05, duration: 0.5 });
    });
    img.addEventListener('mouseout', () => {
      gsap.to(img, { scale: 1, duration: 0.5 });
    });
  });
  
  // Parallax effect on scroll
  gsap.to('.parallax img', {
    y: '20%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax',
      scrub: 1,
      start: 'top bottom',
      end: 'bottom top'
    }
  });
  
  // Scroll-triggered animations for elements
  gsap.from('.scroll-text', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.scroll-text',
      start: 'top 75%',
      end: 'bottom top',
      scrub: true
    }
  });
  
  // Scroll-triggered image animation
  gsap.from('#animatedImage', {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: '#animatedImage',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true
    }
  });
  
  // Theme toggle functionality
  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
  