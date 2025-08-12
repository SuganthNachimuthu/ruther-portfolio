// Scroll Animation Observer
export const initScrollAnimations = () => {
  try {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length > 0) {
      fadeElements.forEach(el => {
        if (el) observer.observe(el);
      });
    }
  } catch (error) {
    console.error('Error initializing scroll animations:', error);
  }
};

// Parallax Effect
export const initParallax = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
};

// Mouse Trail Effect
export const initMouseTrail = () => {
  try {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    document.body.appendChild(trail);

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateTrail = () => {
      try {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
      } catch (error) {
        console.error('Error in mouse trail animation:', error);
      }
    };
    
    animateTrail();
  } catch (error) {
    console.error('Error initializing mouse trail:', error);
  }
};

// Typing Effect
export const initTypingEffect = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  
  const typeWriter = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  
  typeWriter();
};

// Glow Effect on Hover
export const initGlowEffects = () => {
  const glowElements = document.querySelectorAll('.glow-on-hover');
  
  glowElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.animation = 'glow 1s ease-in-out infinite';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.animation = 'none';
    });
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  try {
    initScrollAnimations();
    initParallax();
    initMouseTrail();
    initGlowEffects();
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('.section');
    if (sections.length > 0) {
      sections.forEach((section, index) => {
        if (section) {
          section.classList.add('fade-in');
          section.style.animationDelay = `${index * 0.2}s`;
        }
      });
    }
  } catch (error) {
    console.error('Error initializing animations:', error);
  }
};
