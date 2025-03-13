// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
    
    // Handle page loader
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Transform hamburger into X
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Form submission handling for Google Sheets
    const musicForm = document.getElementById('music-submission-form');
    if (musicForm) {
        musicForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const artistName = document.getElementById('artist-name').value;
            const email = document.getElementById('email').value;
            const genre = document.getElementById('genre').value;
            const socialLinks = document.getElementById('social-links').value;
            const musicLink = document.getElementById('music-link').value;
            const message = document.getElementById('message').value;
            
            // Success message (in a real implementation, you would connect to Google Sheets)
            const successMsg = document.querySelector('.success-message');
            const errorMsg = document.querySelector('.error-message');
            
            // Simulate form submission
            console.log('Form submitted with values:', {
                artistName,
                email,
                genre,
                socialLinks,
                musicLink,
                message
            });
            
            // Google Sheets API
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwYzAsV6LzNZNKbUd5y6r8-LYo6-jbzVo3p4x8Zj4uMTRJ9L531ncoPUuFch-Lgcx06lw/exec';
            
            // Simulate API call
            setTimeout(() => {
                successMsg.style.display = 'flex';
                musicForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }, 1500);
            
            
            //  Real implementation with Google Sheets would be:
            
            fetch(scriptURL, { 
                method: 'POST', 
                body: new FormData(musicForm)
            })
            .then(response => {
                successMsg.style.display = 'flex';
                musicForm.reset();
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                errorMsg.style.display = 'flex';
                setTimeout(() => {
                    errorMsg.style.display = 'none';
                }, 5000);
            });
            
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Google Sheets Integration
    function setupGoogleSheetsIntegration() {
 
    }
});