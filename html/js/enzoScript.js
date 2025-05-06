document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const menuList = document.getElementById('menuList');
  const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.querySelectorAll('.menuList a'); // Seleziona tutti i link

  // Apre/chiude il menu
  hamburgerButton.addEventListener('click', () => {
    menuList.classList.toggle('open');
    toggleIcon();
  });

  // Chiude il menu quando si clicca un link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuList.classList.contains('open')) {
        menuList.classList.remove('open');
        toggleIcon();
      }
    });
  });

  // Funzione per cambiare icona
  function toggleIcon() {
    menuIcon.classList.toggle('ri-menu-line');
    menuIcon.classList.toggle('ri-close-line');
  }
});