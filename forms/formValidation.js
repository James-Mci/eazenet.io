document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const submitText = document.getElementById("submitText");
  const submitSpinner = document.getElementById("submitSpinner");
  const successMessage = document.getElementById("successMessage");

  // Add input validation
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitText.textContent = "Sending...";
    submitSpinner.classList.remove("hidden");

    try {
      // Simulate form submission (replace with actual fetch/AJAX call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      successMessage.textContent =
        "Thank you! Your message has been sent successfully. We will contact you shortly.";
      successMessage.classList.remove("hidden");
      form.reset();

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitText.textContent = "Send Message";
      submitSpinner.classList.add("hidden");
    }
  });

  // Add real-time validation
  form.querySelectorAll("input, select, textarea").forEach((input) => {
    input.addEventListener("input", function () {
      validateField(this);
    });

    // Also validate when leaving the field (blur)
    input.addEventListener("blur", function () {
      validateField(this);
    });
  });

  // Phone number formatting
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function () {
    // Remove any non-digit characters
    this.value = this.value.replace(/\D/g, "");

    // Validate phone field
    validateField(this);
  });

  function validateField(field) {
    const errorElement = document.getElementById(`${field.id}Error`);

    if (field.checkValidity()) {
      field.classList.remove("border-red-500");
      field.classList.add("border-gray-300");
      errorElement.classList.add("hidden");
      return true;
    } else {
      field.classList.remove("border-gray-300");
      field.classList.add("border-red-500");

      // Set appropriate error messages
      let errorMessage = "";
      if (field.validity.valueMissing) {
        errorMessage = "This field is required";
      } else if (field.validity.typeMismatch) {
        if (field.type === "email") {
          errorMessage = "Please enter a valid email address";
        }
      } else if (field.validity.patternMismatch) {
        if (field.id === "phone") {
          errorMessage = "Please enter a valid 9-digit Kenyan phone number";
        }
      } else if (field.validity.tooShort || field.validity.tooLong) {
        errorMessage = `Please enter between ${field.minLength} and ${field.maxLength} characters`;
      } else {
        errorMessage = field.validationMessage;
      }

      errorElement.textContent = errorMessage;
      errorElement.classList.remove("hidden");
      return false;
    }
  }

  function validateForm() {
    let isValid = true;

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }
});
