// Toggle Navigation Overlay
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('#navigation ul');
    const nav = document.querySelector('#navigation');
    const video = document.getElementById('myVideo');
    
    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('show');
        menuBtn.innerHTML = isExpanded ? '☰' : 'X';
    });
    
    // Close menu when clicking on links (mobile)
    document.querySelectorAll('#navigation a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                menuBtn.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('show');
                menuBtn.innerHTML = '☰';
            }
        });
    });
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Video loading fallback
    video.addEventListener('error', () => {
        const fallbackImg = document.createElement('img');
        fallbackImg.src = '../Medias/background-fallback.jpg';
        fallbackImg.alt = 'Background fallback';
        document.getElementById('video-container').appendChild(fallbackImg);
        video.remove();
    });
    
    // Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
    // Smooth scroll for footer links
    document.querySelectorAll('#footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
        });
    });

});
