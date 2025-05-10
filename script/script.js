import { plans } from "../script/data.js";
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

let plansContainer = "";
plans.forEach((plans) => {
  plansContainer += `
   <div class="package-card animate-fadeInUp ">
      <div class="package-header ">
                        <h3 class="text-xl font-bold mb-2">${plans.name}</h3>
                        <div class="text-3xl font-bold">Ksh. ${plans.price}<span class="text-base font-normal">/mo</span></div>
                    </div>
                    <div class="p-6">
                        <ul class="mb-8">
                            <li class="feature-item">
                                <i class="fas fa-check text-success"></i>
                                <span>${plans.speed} Mbps Download</span>
                            </li>
                            <li class="feature-item">
                                <i class="fas fa-check text-success"></i>
                                <span>${plans.speed} Mbps Upload</span>
                            </li>
                            <li class="feature-item">
                                <i class="fas fa-check text-success"></i>
                                <span>${plans.features.speeds}</span>
                            </li>
                            <li class="feature-item">
                                <i class="fas fa-check text-success"></i>
                                <span>${plans.features.router}</span>
                            </li>
                        </ul>
                        <a href="${plans.buttonLink}" class="btn-primary w-full text-center block">${plans.buttonText}</a>
                    </div>
                </div>
                `;
});
document.querySelector(".js-package-details").innerHTML = plansContainer;
