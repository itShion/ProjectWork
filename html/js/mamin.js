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

    // Enhance blob animations
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach(blob => {
        gsap.to(blob, {
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            duration: 20 + Math.random() * 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Desktop hover effect
        card.addEventListener('mouseenter', function() {
            if (!window.matchMedia("(hover: none)").matches) {
                gsap.to(this.querySelector('.default-content'), { opacity: 0, duration: 0.3 });
                gsap.to(this.querySelector('.hover-content'), { opacity: 1, duration: 0.3 });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!window.matchMedia("(hover: none)").matches) {
                gsap.to(this.querySelector('.default-content'), { opacity: 1, duration: 0.3 });
                gsap.to(this.querySelector('.hover-content'), { opacity: 0, duration: 0.3 });
            }
        });
        
        // Mobile touch support
        card.addEventListener('click', function() {
            if (window.matchMedia("(hover: none)").matches) {
                // Close other open cards
                document.querySelectorAll('.project-card').forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('active');
                    }
                });
                // Toggle this card
                this.classList.toggle('active');
            }
        });
    });

    // Initialize mobile state
    if (window.matchMedia("(hover: none)").matches) {
        document.querySelectorAll('.hover-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});
