// Toggle Navigation Overlay
const menuBtn = document.getElementById('menu-btn');
const navOverlay = document.getElementById('nav-overlay');

menuBtn.addEventListener('click', () => {
    navOverlay.style.opacity = navOverlay.style.opacity === '1' ? '0' : '1';
    navOverlay.style.pointerEvents = navOverlay.style.pointerEvents === 'all' ? 'none' : 'all';
});

// ----------------------------------MAMINS CODE----------------------------------------- 
document.querySelectorAll('.feature-grid').forEach(grid => {
    grid.addEventListener('mouseenter', () => {
        const content = grid.querySelector('.feature-content');
        const name = content.querySelector('.device-name');
        const details = content.querySelector('.device-details');
        
        name.style.display = 'none';
        details.style.display = 'block';
    });
    
    grid.addEventListener('mouseleave', () => {
        const content = grid.querySelector('.feature-content');
        const name = content.querySelector('.device-name');
        const details = content.querySelector('.device-details');
        
        name.style.display = 'block';
        details.style.display = 'none';
    });
});