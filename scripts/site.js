// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuToggle && mobileNav) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');

    if (mobileNav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  document.querySelectorAll('.mobile-nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      mobileMenuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Scroll progress indicator
const scrollProgressBar = document.getElementById('scrollProgress');

function updateScrollProgress() {
  if (scrollProgressBar) {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    
    const clientHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    
    const maxScroll = scrollHeight - clientHeight;
    const scrollProgress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(Math.max(scrollProgress, 0), 100);
    
    scrollProgressBar.style.width = `${clampedProgress}%`;
  }
}

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateScrollProgress);

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((el) => {
  observer.observe(el);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetSelector = this.getAttribute('href');
    if (!targetSelector || targetSelector === '#') {
      return;
    }

    const target = document.querySelector(targetSelector);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput ? emailInput.value : '';
    if (email) {
      alert('Thanks for subscribing! We will send you the latest updates.');
      emailInput.value = '';
    }
  });
}

// Dynamic navbar background on scroll
const nav = document.querySelector('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.95)';
    }
  });
}