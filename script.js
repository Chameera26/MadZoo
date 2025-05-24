document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const navLinks = document.getElementById('navLinks');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Optional: close menu on link click (mobile UX)
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
});
