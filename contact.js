(function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Form fields
  const fields = {
    fullName: document.getElementById("fullName"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };

  // Error message elements
  const errorElements = {
    fullName: document.getElementById("fullName-error"),
    email: document.getElementById("email-error"),
    subject: document.getElementById("subject-error"),
    message: document.getElementById("message-error"),
  };

  // Validation rules
  const validators = {
    fullName: (value) => {
      if (!value.trim()) {
        return "Full name is required.";
      }
      return "";
    },

    email: (value) => {
      if (!value.trim()) {
        return "Email address is required.";
      }
      // Email regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return "Please enter a valid email address (e.g., name@example.com).";
      }
      return "";
    },

    subject: (value) => {
      if (!value.trim()) {
        return "Subject is required.";
      }
      return "";
    },

    message: (value) => {
      if (!value.trim()) {
        return "Message is required.";
      }
      if (value.trim().length < 10) {
        return "Message must be at least 10 characters long.";
      }
      return "";
    },
  };

  // Show error message
  function showError(fieldName, message) {
    const errorElement = errorElements[fieldName];
    const field = fields[fieldName];

    errorElement.textContent = message;
    field.classList.add("invalid");
    field.classList.remove("valid");
    field.setAttribute("aria-invalid", "true");
  }

  // Clear error message
  function clearError(fieldName) {
    const errorElement = errorElements[fieldName];
    const field = fields[fieldName];

    errorElement.textContent = "";
    field.classList.remove("invalid");
    field.classList.add("valid");
    field.setAttribute("aria-invalid", "false");
  }

  // Validate single field
  function validateField(fieldName) {
    const field = fields[fieldName];
    const value = field.value;
    const errorMessage = validators[fieldName](value);

    if (errorMessage) {
      showError(fieldName, errorMessage);
      return false;
    } else {
      clearError(fieldName);
      return true;
    }
  }

  // Validate all fields
  function validateForm() {
    let isValid = true;

    Object.keys(fields).forEach((fieldName) => {
      const fieldValid = validateField(fieldName);
      if (!fieldValid) {
        isValid = false;
      }
    });

    return isValid;
  }

  // Add real-time validation on blur
  Object.keys(fields).forEach((fieldName) => {
    const field = fields[fieldName];

    field.addEventListener("blur", () => {
      validateField(fieldName);
    });

    // Clear error on input (after initial blur)
    field.addEventListener("input", () => {
      if (errorElements[fieldName].textContent) {
        validateField(fieldName);
      }
    });
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Hide previous success message if visible
    successMessage.style.display = "none";

    // Validate all fields
    const isValid = validateForm();

    if (isValid) {
      // Show success message
      successMessage.style.display = "flex";

      // Reset form
      form.reset();

      // Clear all validation states
      Object.keys(fields).forEach((fieldName) => {
        fields[fieldName].classList.remove("valid", "invalid");
        fields[fieldName].removeAttribute("aria-invalid");
        errorElements[fieldName].textContent = "";
      });

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

      // Focus on success message for screen readers
      successMessage.focus();
    } else {
      // Focus on first invalid field
      const firstInvalidField = Object.keys(fields).find((fieldName) =>
        fields[fieldName].classList.contains("invalid")
      );

      if (firstInvalidField) {
        fields[firstInvalidField].focus();
      }
    }
  });
})();
