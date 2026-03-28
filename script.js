// ================================
// SAFE SCRIPT (NO BREAK ERRORS)
// ================================

// Run only after page loads
document.addEventListener("DOMContentLoaded", function () {

  // ================================
  // 1. COUNTER ANIMATION
  // ================================
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target') || 0;

    let count = 0;
    const speed = 30;

    const updateCount = () => {
      const increment = target / 50;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target + "%";
      }
    };

    if (target > 0) {
      updateCount();
    }
  });

  // ================================
  // 2. SCROLL FADE-IN ANIMATION
  // ================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // run once

  // ================================
  // 3. SMOOTH SCROLL (NAV LINKS)
  // ================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ================================
  // 4. BUTTON HOVER MICRO EFFECT
  // ================================
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    });
  });

});
