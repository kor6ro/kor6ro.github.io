// Theme Toggle
const themeSwitch = document.querySelector('#checkbox');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeSwitch.checked = theme === 'dark';
}

themeSwitch.addEventListener('change', function() {
    const theme = this.checked ? 'dark' : 'light';
    applyTheme(theme);
});

// Set initial theme to light
applyTheme('light');

// Photo Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.photo-slide');
const totalSlides = slides.length;

function updateSlider() {
    const slider = document.getElementById('photoSlider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Cards Layout Handler
function adjustProjectLayout() {
    const container = document.querySelector('.project-container');
    const cards = container.querySelectorAll('.project-card');
    const cardCount = cards.length;
    
    // Reset classes
    container.className = 'project-container';
    
    // Add specific class based on card count for better layout
    if (cardCount === 1) {
        container.classList.add('single-card');
    } else if (cardCount === 2) {
        container.classList.add('two-cards');
    } else if (cardCount === 3) {
        container.classList.add('three-cards');
    } else if (cardCount === 5) {
        container.classList.add('five-cards');
    }
}

// Run layout adjustment when DOM is loaded
document.addEventListener('DOMContentLoaded', adjustProjectLayout);

// Add resize event listener to handle layout changes
window.addEventListener('resize', adjustProjectLayout);

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    // Set initial state for animation
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('mobile-active');
}

// Add click handlers for gallery navigation
document.addEventListener('DOMContentLoaded', function() {
    // Make photo slides clickable for navigation
    const photoSlides = document.querySelectorAll('.photo-slide');
    photoSlides.forEach((slide, index) => {
        slide.addEventListener('click', function() {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // Add keyboard navigation for gallery
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
});

// Touch/swipe support for mobile gallery
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
    const photoGallery = document.querySelector('.photo-gallery');
    
    photoGallery.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    photoGallery.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - next slide
            } else {
                prevSlide(); // Swipe right - previous slide
            }
        }
    }
});