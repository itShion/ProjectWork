const HiddenElements = document.querySelectorAll('.hidden');

const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

HiddenElements.forEach((el) => Observer.observe(el));


const slides = document.querySelectorAll('.slide');
const TitleDisplay = document.getElementById('language-name');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i == index) {
        slide.style.display = 'block';
        } else {
        slide.style.display = 'none';
        }
    });
    
    let title = 'Not Found'; 
    
    let titleElement = slides[index].querySelector('i');
    
    if (titleElement && titleElement.getAttribute('title')) {
      title = titleElement.getAttribute('title');
    }
    
    TitleDisplay.textContent = title;
}

// Automatic slider (swipe every 4 sec)
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4000);

// Iniziale
showSlide(currentIndex);
