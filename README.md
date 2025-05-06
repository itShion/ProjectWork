# ProjectWork - B Y D a.k.a Black Yellow Dark 

Dove abbiamo preso i media:

# Index
Video di sfondo della Mercedes : https://www.youtube.com/watch?v=-Uvu92Z_wnE&ab_channel=Mercedes-Benz

Logo del sito: https://www.google.com/search?q=robin+hsr+meme+face&sca_esv=e1777292a8dddf0d&udm=2&biw=1536&bih=776&sxsrf=AHTn8zqpqFUVd0IEAsnrM1HgRHnMWATqCQ%3A1746562398227&ei=Xm0aaL_QDfiMxc8P1ou80QI&oq=robin+meme+hsr&gs_lp=EgNpbWciDnJvYmluIG1lbWUgaHNyKgIIATIHEAAYgAQYEzIIEAAYExgIGB4yCBAAGBMYCBgeMggQABgTGAgYHjIIEAAYExgIGB4yCBAAGBMYCBgeMggQABgTGAgYHjIIEAAYExgIGB5I7iBQAFgAcAV4AJABAJgBAKABAKoBALgBAcgBAJgCBaACGpgDAIgGAZIHATWgBwCyBwC4BwA&sclient=img#vhid=Ze8hv5CQR_6SPM&vssid=mosaic

Foto delle auto come icone : Unsplash

# Pagina di Enzo

Pinterest per le immagini delle auto
Wikipedia per le icone

# Pagina di Ayman

# Pagina di Mohammed


# Come funzionano i nostri javascript:

# Index | Time Display

// 1. Toggle Menu al click sull'orario
timeDisplay.addEventListener('click', () => {
    if (window.innerWidth < 768) { // Solo su mobile
        navMenu.classList.toggle('show'); // Aggiunge/rimuove la classe 'show'
    }
});


// 2. Chiudi menu quando si clicca fuori
document.addEventListener('click', (e) => {
    if (window.innerWidth >= 768) return; // Ignora su desktop
    
    // Se clicco fuori dal menu E il menu è aperto
    if (!e.target.closest('#navigation') && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show'); // Chiudi il menu
    }
});

// 3. Chiudi menu al click sui link
document.querySelectorAll('#navigation a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.remove('show'); // Chiudi il menu
        }
    });
});

# Index | Scroll verso l'alto per bypassare il fatto che tornasse solo in sezione Main

document.getElementById("goTop").addEventListener("click", function(e) {
    e.preventDefault(); // Blocca il comportamento default
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" // Scroll animato
    });
});

# Index | API TimeZoneDB

async function fetchTime() {
    const timezone = 'Europe/Rome'; // Fuso orario
    
    try {
        // 1. Fetch all'API
        const response = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${timezone}`);
        
        // 2. Controlla errori
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        if (data.status !== 'OK') throw new Error('API response error');

        // 3. Formatta l'ora (es: "14:30")
        const localDate = new Date(data.formatted);
        timeDisplay.textContent = localDate.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false // Formato 24h
        });
        
    } catch (error) {
        // 4. Fallback all'ora locale se l'API fallisce
        console.error('Error fetching time:', error);
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }
}

// Esegui subito e poi ogni minuto
fetchTime();
setInterval(fetchTime, 60000); 


# Pagina di Enzo 

<!-- Apertura/chiusura del menu al click sull'icona hamburger -->

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

  // Funzione per cambiare icona da hamburger a 'X'
  function toggleIcon() {
    menuIcon.classList.toggle('ri-menu-line');
    menuIcon.classList.toggle('ri-close-line');
  }
});
