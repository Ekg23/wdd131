document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("navMenu");

  toggleBtn.addEventListener("click", () => {
    // Toggle the 'active' class using conditional branching
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      toggleBtn.classList.remove("open");
    } else {
      navMenu.classList.add("active");
      toggleBtn.classList.add("open");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission

    // Collect form data
    const contactData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    // Save to localStorage
    localStorage.setItem("contactSubmission", JSON.stringify(contactData));

    // Optional: Show confirmation
    alert("Your message has been sent!");

    // Optional: Clear form
    form.reset();
  });
});