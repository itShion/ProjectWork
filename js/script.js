// Toggle Navigation Overlay
const menuBtn = document.getElementById('menu-btn');
const navOverlay = document.getElementById('nav-overlay');

menuBtn.addEventListener('click', () => {
    navOverlay.style.opacity = navOverlay.style.opacity === '1' ? '0' : '1';
    navOverlay.style.pointerEvents = navOverlay.style.pointerEvents === 'all' ? 'none' : 'all';
});
