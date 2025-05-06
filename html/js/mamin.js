document.addEventListener('DOMContentLoaded', function() {
    // Floating menu active state
    const menuItems = document.querySelectorAll('.floating-menu a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Remove the existing project card hover effect and replace with:
const projectCards = document.querySelectorAll('.project-card');
let isAnimating = false;

projectCards.forEach(card => {
    // Reset shine position when not hovering
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            '--shine-position': '100%',
            duration: 0.4
        });
    });
    
    // Track mouse position for dynamic shine
    card.addEventListener('mousemove', (e) => {
        if (isAnimating) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate angle from center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
        
        // Apply dynamic shine
        card.style.setProperty('--shine-angle', `${angle}deg`);
        card.style.setProperty('--shine-position', `${x/rect.width * 100}%`);
    });
});
});