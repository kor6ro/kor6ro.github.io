document.addEventListener('DOMContentLoaded', function() {

    // --- THEME TOGGLE ---
    const themeSwitch = document.querySelector('#checkbox');
    // Set default theme to dark
    document.documentElement.setAttribute('data-theme', 'dark');
    themeSwitch.checked = true;

    // Listen for theme changes
    themeSwitch.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    });


// --- MOBILE NAVIGATION (HAMBURGER MENU) ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    // Gunakan kelas 'open' untuk animasi dan 'nav-active' untuk menampilkannya
    navLinks.classList.toggle('nav-active');
    setTimeout(() => { // Beri sedikit jeda agar transisi slide-in terlihat
        navLinks.classList.toggle('open');
    }, 10);
    
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Function to close the menu
function closeMenu() {
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
        
        // Tunggu animasi selesai sebelum menyembunyikannya
        setTimeout(() => {
            navLinks.classList.remove('nav-active');
        }, 400); // Durasi harus sama dengan transisi di CSS
    }
}

// Close menu when a navigation link is clicked
links.forEach(link => {
    link.addEventListener('click', closeMenu);
});


    // --- PHOTO SLIDER ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.photo-slide');
    const slider = document.getElementById('photoSlider');
    
    if (slides.length > 0) {
        const totalSlides = slides.length;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Make nextSlide and prevSlide globally accessible for HTML onclick
        window.nextSlide = function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        window.prevSlide = function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);
    }


    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the .project-card class and other sections
    const elementsToAnimate = document.querySelectorAll('.project-card, #about p, .photo-gallery, #contact p, .social-icons');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});