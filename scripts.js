document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Toggle
    const themeSwitch = document.querySelector('#checkbox');
    let isDarkMode = true; // Default to dark mode

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        isDarkMode = (theme === 'dark');
        if (themeSwitch) {
            themeSwitch.checked = isDarkMode;
        }
    }

    themeSwitch.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    // Set initial theme
    applyTheme('dark');

    // Mobile Navigation (Hamburger Menu)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Photo Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.photo-slide');
    const totalSlides = slides.length;
    const slider = document.getElementById('photoSlider');

    if (slides.length > 0) {
        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        window.nextSlide = function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        window.prevSlide = function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
        
        setInterval(nextSlide, 5000);
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.project-card, #about p, .photo-gallery, #contact p, .social-icons');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});