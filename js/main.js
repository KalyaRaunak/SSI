/**
 * Shree Sai Institute — Main JavaScript Logic
 * Contains animation hooks, counter timers, canvas particles, form handlers, mobile menu toggles,
 * and specific courses page tab/hash routing logic.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initHeroTextReveal();
  initCanvasParticles();
  initScrollAnimations();
  initStatsCounter();
  initCountdownTimer();
  initTestimonialsSlider();
  initScrollToTop();
  initEnquiryForm();
  initCoursesPage();
  initResultsFiltering();
});

/* ==========================================
   1. NAVBAR SCROLL EFFECT
   ========================================== */
function initNavbarScroll() {
  const header = document.querySelector('.navbar-container');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

/* ==========================================
   2. MOBILE NAV TOGGLE
   ========================================== */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu on click of any links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

/* ==========================================
   3. HERO TEXT REVEAL (Word-by-word staggered reveal)
   ========================================== */
function initHeroTextReveal() {
  const revealElements = document.querySelectorAll('.reveal-text-words');
  revealElements.forEach(element => {
    const text = element.textContent.trim();
    const words = text.split(/\s+/);
    element.innerHTML = '';

    words.forEach((word, index) => {
      const wrapper = document.createElement('span');
      wrapper.className = 'word-wrapper';
      
      const wordSpan = document.createElement('span');
      wordSpan.className = 'reveal-word';
      wordSpan.textContent = word + ' ';
      wordSpan.style.animationDelay = `${200 + index * 80}ms`;
      
      if (word.includes('SUCCESS') || word.includes('EXPERTS')) {
        wordSpan.classList.add('weight-900');
      } else if (word.includes('शुरुआत') || word.includes('साथ') || word.includes('सिर्फ') || word.includes('की') || word.includes('के')) {
        wordSpan.classList.add('highlight-gold');
      }

      wrapper.appendChild(wordSpan);
      element.appendChild(wrapper);
    });
  });
}

/* ==========================================
   4. CANVAS FLOATING PARTICLES
   ========================================== */
function initCanvasParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1; // 1px to 3px
      this.speedY = -(Math.random() * 0.9 + 0.3); // Float upward slowly (0.3 to 1.2 speed)
      this.speedX = Math.random() * 0.2 - 0.1; // Very slight horizontal sway
      this.alpha = Math.random() * 0.6 + 0.2; // 0.2 to 0.8 opacity
      this.colorType = Math.random() < 0.7 ? 'white' : 'gold'; // 70% white, 30% gold
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;

      // Wrap around screen edge when exiting top
      if (this.y < 0) {
        this.y = canvas.height;
        this.x = Math.random() * canvas.width;
      }
      if (this.x < 0 || this.x > canvas.width) {
        this.speedX = -this.speedX;
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      
      if (this.colorType === 'white') {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      } else {
        ctx.fillStyle = `rgba(245, 166, 35, ${this.alpha})`;
      }
      
      ctx.shadowBlur = 4;
      ctx.shadowColor = this.colorType === 'white' ? '#FFFFFF' : '#F5A623';
      ctx.fill();
      ctx.restore();
    }
  }

  // Generate particles
  const particleCount = 120; // Exactly 120 particles
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    animationFrameId = requestAnimationFrame(animate);
  };
  animate();

  // Handle visibility changes to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });
}


/* ==========================================
   5. SCROLL FADE-IN & SLIDE-UP (Intersection Observer)
   ========================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (elements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  elements.forEach(element => {
    observer.observe(element);
  });
}

/* ==========================================
   6. STATS COUNTER ANIMATION
   ========================================== */
function initStatsCounter() {
  const statsSection = document.querySelector('.stats-section');
  const countElements = document.querySelectorAll('.stat-number');
  if (!statsSection || countElements.length === 0) return;

  let hasRun = false;

  const startCounter = () => {
    countElements.forEach(element => {
      const target = parseInt(element.getAttribute('data-target'), 10);
      const suffix = element.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target.toLocaleString('en-IN') + suffix;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
        }
      }, stepTime);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        startCounter();
        hasRun = true;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);
}

/* ==========================================
   7. COUNTDOWN TIMER
   ========================================== */
function initCountdownTimer() {
  const countdownContainer = document.getElementById('countdown-timer');
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  if (!countdownContainer) return;

  // Target date: June 30, 2026 23:59:59 (local or UTC)
  const targetDate = new Date('2026-06-30T23:59:59').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Show "Batches Enrolling Now" message as requested
      countdownContainer.innerHTML = `<div class="batches-enrolling-msg">Batches Enrolling Now</div>`;
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  };

  // Run immediately and start interval
  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
}

/* ==========================================
   8. TESTIMONIALS SLIDER
   ========================================== */
function initTestimonialsSlider() {
  const slider = document.querySelector('.testimonials-slider');
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  
  if (!slider || cards.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer;

  const showSlide = (index) => {
    // Reset all
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Set active
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  };

  const nextSlide = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= cards.length) nextIndex = 0;
    showSlide(nextIndex);
  };

  // Start Autoplay (4 seconds)
  const startAutoplay = () => {
    autoplayTimer = setInterval(nextSlide, 4000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayTimer);
  };

  // Dot Click events
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      showSlide(index);
      startAutoplay();
    });
  });

  // Pause autoplay on mouse hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Initialize
  showSlide(0);
  startAutoplay();
}

/* ==========================================
   9. SCROLL-TO-TOP BUTTON
   ========================================== */
function initScrollToTop() {
  // Check if button already exists, if not create and insert it dynamically
  let scrollBtn = document.querySelector('.scroll-to-top');
  if (!scrollBtn) {
    scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to Top');
    scrollBtn.innerHTML = '&#8593;'; // Up arrow unicode
    document.body.appendChild(scrollBtn);
  }

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility);
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================
   10. ENQUIRY FORM VALIDATION & MODAL
   ========================================== */
function initEnquiryForm() {
  const forms = document.querySelectorAll('.enquiry-form');
  if (forms.length === 0) return;

  // Build the Success Modal elements dynamically in JavaScript if not present
  let modalOverlay = document.querySelector('.modal-overlay');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
      <div class="modal-content">
        <div class="modal-icon">✓</div>
        <h3>Enquiry Submitted!</h3>
        <p>Thank you for reaching out to Shree Sai Institute. Our counseling expert will get in touch with you shortly (within 24 hours).</p>
        <button class="btn btn-primary close-modal">Got it, Thanks!</button>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    // Modal closing events
    const closeModalBtn = modalOverlay.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const emailInput = form.querySelector('[name="email"]');
      const courseSelect = form.querySelector('[name="course"]');
      
      let isValid = true;

      // Reset previous error outlines
      form.querySelectorAll('input, select').forEach(input => {
        input.style.borderColor = '';
      });

      // Name Validation
      if (!nameInput || nameInput.value.trim() === '') {
        if (nameInput) nameInput.style.borderColor = 'red';
        isValid = false;
      }

      // Phone Validation (simple 10-digit Indian phone validation)
      if (phoneInput) {
        const phoneVal = phoneInput.value.trim().replace(/\s+/g, '');
        const phoneRegex = /^[6-9]\d{9}$/; // 10 digit Indian mobile numbers
        if (!phoneRegex.test(phoneVal)) {
          phoneInput.style.borderColor = 'red';
          isValid = false;
        }
      } else {
        isValid = false;
      }

      // Course Select Validation
      if (!courseSelect || courseSelect.value === '') {
        if (courseSelect) courseSelect.style.borderColor = 'red';
        isValid = false;
      }

      if (isValid) {
        // Trigger modal success popup
        modalOverlay.classList.add('active');
        
        // Reset the form
        form.reset();
      }
    });
  });
}

/* ==========================================
   11. COURSES PAGE TAB ROUTER
   ========================================== */
function initCoursesPage() {
  const tabButtons = document.querySelectorAll('.course-tab-btn');
  const sections = document.querySelectorAll('.course-content-section');
  if (tabButtons.length === 0 || sections.length === 0) return;

  const selectTab = (hash) => {
    const targetId = hash.replace('#', '');
    let found = false;

    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add('active');
        found = true;
      } else {
        section.classList.remove('active');
      }
    });

    tabButtons.forEach(btn => {
      const btnHash = btn.getAttribute('data-target');
      if (btnHash === hash) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (found) {
      // Find the select inside the active course section and auto-populate it
      const formSelect = document.querySelector(`#${targetId} select[name="course"]`);
      if (formSelect) {
        const valMap = {
          'foundation': 'Foundation',
          'science': 'Science',
          'commerce': 'Commerce',
          'jee': 'JEE',
          'neet': 'NEET',
          'gujcet': 'GUJCET'
        };
        formSelect.value = valMap[targetId] || '';
      }
    }
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const hash = btn.getAttribute('data-target');
      window.location.hash = hash;
    });
  });

  const handleHash = () => {
    const hash = window.location.hash || '#foundation';
    selectTab(hash);
    
    // Smooth scroll to the tab selector on click
    if (window.location.hash) {
      const container = document.querySelector('.courses-tabs-container');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  window.addEventListener('hashchange', handleHash);
  handleHash(); // Initial check
}

/* ==========================================
   12. RESULTS PAGE DYNAMIC FILTERING
   ========================================== */
function initResultsFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const topperCards = document.querySelectorAll('.results-grid-container .topper-card');
  const sectionBlocks = document.querySelectorAll('.results-section-block');
  
  if (filterBtns.length === 0 || topperCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      if (filterVal === 'all') {
        // Show all cards
        topperCards.forEach(card => card.style.display = 'block');
        // Show all section categories
        sectionBlocks.forEach(block => block.style.display = 'block');
      } else {
        // Show only matching sections, hide other sections
        sectionBlocks.forEach(block => {
          const category = block.getAttribute('data-category');
          if (category === filterVal) {
            block.style.display = 'block';
            // Ensure cards inside are visible
            block.querySelectorAll('.topper-card').forEach(card => card.style.display = 'block');
          } else {
            block.style.display = 'none';
          }
        });
      }
    });
  });
}
