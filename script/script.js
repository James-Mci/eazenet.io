// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobileMenuButton");
const closeMobileMenu = document.getElementById("closeMobileMenu");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "";
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "";
  });
});

// FAQ accordion functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("i");

    // Toggle answer visibility
    answer.classList.toggle("hidden");

    // Rotate icon
    icon.classList.toggle("transform");
    icon.classList.toggle("rotate-180");

    // Close other open answers
    document.querySelectorAll(".faq-question").forEach((q) => {
      if (q !== question) {
        q.nextElementSibling.classList.add("hidden");
        q.querySelector("i").classList.remove("transform", "rotate-180");
      }
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInUp");
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".animate-fadeInUp").forEach((element) => {
  observer.observe(element);
});
