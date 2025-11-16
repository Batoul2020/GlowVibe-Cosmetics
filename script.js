// Smooth scroll for CTA buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple cart alert (demo)
document.querySelectorAll('.btn-secondary').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Added to cart! (Demo)');
  });
});
