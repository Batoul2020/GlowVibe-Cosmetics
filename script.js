// Smooth scrolling for internal links
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

// Add-to-cart demo alert
document.querySelectorAll('.btn-secondary').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Added to cart! (Demo only)');
  });
});
