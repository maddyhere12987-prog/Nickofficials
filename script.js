// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form submission placeholder
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for your message! I’ll get back to you soon.");
});