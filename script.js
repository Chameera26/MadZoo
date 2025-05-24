function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');

  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    drop.addEventListener('click', () => {
      drop.classList.toggle('open');
    });
  });
}
