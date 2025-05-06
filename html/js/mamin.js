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
        
        // Mobile touch support - UPDATED for full expansion
        card.addEventListener('click', function(e) {
            if (window.matchMedia("(hover: none)").matches) {
                const isActive = this.classList.contains('active');
                
                // Close all cards first
                document.querySelectorAll('.project-card').forEach(otherCard => {
                    otherCard.classList.remove('active');
                    gsap.to(otherCard, { height: "200px", duration: 0.3 });
                });
                
                // Only open this one if it wasn't already active
                if (!isActive) {
                    this.classList.add('active');
                    // Animate to full content height
                    const contentHeight = this.querySelector('.hover-content').scrollHeight;
                    gsap.to(this, { height: contentHeight + "px", duration: 0.3 });
                } else {
                    gsap.to(this, { height: "200px", duration: 0.3 });
                }
                
                e.preventDefault();
                e.stopPropagation();
            }
        });
    });

    // Initialize mobile state
    if (window.matchMedia("(hover: none)").matches) {
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.height = "200px";
        });
        document.querySelectorAll('.hover-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});
