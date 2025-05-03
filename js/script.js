// Menu Hamburger
const menuBtn1 = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('#navigation ul');

menuBtn1.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuBtn1.innerHTML = navMenu.classList.contains('show') ? 'X' : '☰';
});

// Chiudi menu al click su link (mobile)
document.querySelectorAll('#navigation a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.remove('show');
            menuBtn.innerHTML = '☰';
        }
    });
});

