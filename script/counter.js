function animateCounter(element, target, duration = 4000) {
  const start = 0;
  const increment = target / (duration / 16); // Roughly 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(timer);
      current = target;
    }
    element.textContent = Math.floor(current).toLocaleString() + "+";
  }, 16);
}

// Start animation when element is in view
function startCounterWhenVisible() {
  const counterElement = document.getElementById("customerCounter");
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounter(counterElement, 300);
      observer.unobserve(counterElement);
    }
  });

  observer.observe(counterElement);
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", startCounterWhenVisible);
