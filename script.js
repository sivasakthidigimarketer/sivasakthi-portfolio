const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 50;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 30);
    } else {
      counter.innerText = target + "%";
    }
  };

  update();
});

  updateCounter();
}

let counterStarted = false;
function startCounters() {
  if (counterStarted) return;
  const metricsSection = document.querySelector('.metrics-strip');
  if (!metricsSection) return;

  const top = metricsSection.getBoundingClientRect().top;
  if (top < window.innerHeight - 80) {
    counters.forEach(runCounter);
    counterStarted = true;
  }
}

window.addEventListener('scroll', startCounters);
window.addEventListener('load', startCounters);
