// Time Display and Menu Toggle
const timeDisplay = document.getElementById('time');
const navMenu = document.querySelector('#navigation ul');

// Toggle menu when time is clicked
timeDisplay.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        navMenu.classList.toggle('show');
    }
});

// Close menu when clicking outside or on links
document.addEventListener('click', (e) => {
    if (window.innerWidth >= 768) return;
    
    if (!e.target.closest('#navigation') && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    }
});



document.querySelectorAll('#navigation a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.remove('show');
            
        }
    });
});

// Fine roba del menu


// Scroll to top per bypassare il fatto che indirizzava solo fino al Main e non alla nav

document.getElementById("goTop").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Time API Function // TimeZoneDB
async function fetchTime() {
    const apiKey = 'UPL54EI95EIZ';
    const timezone = 'Europe/Rome';
    const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${timezone}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        if (data.status !== 'OK') throw new Error('API response error');

        const localDate = new Date(data.formatted);
        const formattedTime = localDate.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false // Use 24-hour format
        });
        
        timeDisplay.textContent = formattedTime;
    } catch (error) {
        console.error('Error fetching time:', error);
        // Fallback to local time if API fails
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
        });
    }
}

// Initialize and update time
fetchTime();
setInterval(fetchTime, 60000);
