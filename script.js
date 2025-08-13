// Client‑side script for portfolio site.
// Implements smooth fade transitions between pages and highlights the active
// navigation link based on the current page.

document.addEventListener('DOMContentLoaded', () => {
  // Fade in the page on load
  document.body.classList.add('fade-in');

  // Handle nav link clicks for fade-out before navigation
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // If the link is an internal page (ends with .html) then intercept
    const isInternal = href && href.endsWith('.html');
    if (isInternal) {
      link.addEventListener('click', event => {
        event.preventDefault();
        const target = link.getAttribute('href');
        // Add fade-out class and navigate after animation
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    }
  });

  // Highlight the current nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  // Remove any existing current classes
  navLinks.forEach(link => link.classList.remove('current'));
  navLinks.forEach(link => {
    const target = link.getAttribute('href');
    if (target === path) {
      link.classList.add('current');
    }
  });
});