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

const btn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.navigation ul');
const navLinks = document.querySelectorAll('.navigation a');


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
}, 2000);

// Iniziale
showSlide(currentIndex);


/* Gestione navigation bar for mobile*/

btn.addEventListener('click', () => {
  navList.classList.toggle('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 769) {
      navList.classList.remove('show');
    }
  });
});

/* Theme switch lightmode/darkmode */

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode == "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  if(darkmode != "active"){
    enableDarkmode()
  }
  else{
    disableDarkmode()
  }
})