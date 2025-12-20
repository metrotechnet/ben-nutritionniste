/**
 * Ben Nutritionniste - Interactive JavaScript
 * Modern functionality for sports nutrition website
 */

// ===============================================
// DOCUMENT READY & INITIALIZATION
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeInstagramSection();
    initializeContactForm();
    initializeScrollToTop();
    initializeStatsAnimation();
    initializeSkillBars();
    initializeInstagramMetrics();
    initializeFooterAnimations();
});

// ===============================================
// NAVIGATION FUNCTIONALITY
// ===============================================
function initializeNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    if (mobileToggle && navMenu && mobileOverlay) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when overlay is clicked
        mobileOverlay.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
    
    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Close menu function
    function closeMobileMenu() {
        if (mobileToggle) mobileToggle.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        if (mobileOverlay) mobileOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Navbar effects on scroll
    window.addEventListener('scroll', updateNavbarEffects);
    
    // Scroll progress bar
    window.addEventListener('scroll', updateScrollProgress);
    
    // Auto-hide navbar on scroll
    initializeAutoHideNavbar();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    
    let current = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

function updateNavbarEffects() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

function updateScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${Math.min(scrolled, 100)}%`;
    }
}

function initializeAutoHideNavbar() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
}

// ===============================================
// SMOOTH SCROLLING
// ===============================================
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===============================================
// SCROLL ANIMATIONS
// ===============================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    document.querySelectorAll('.about-card, .service-card, .blog-card, .instagram-post, .contact-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===============================================
// INSTAGRAM SECTION
// ===============================================
function initializeInstagramSection() {
    const instagramPosts = document.querySelectorAll('.instagram-post');
    const highlightItems = document.querySelectorAll('.highlight-item');
    
    // Post interactions
    instagramPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Highlight interactions
    highlightItems.forEach(item => {
        item.addEventListener('click', function() {
            // Simulate opening Instagram story highlight
            window.open('https://www.instagram.com/ben.nutritionniste/', '_blank');
        });
    });
    
    // Initialize stats animation for Instagram section
    initializeInstagramStats();
}

// Nouvelle fonction pour ouvrir Instagram
function openInstagram() {
    window.open('https://www.instagram.com/ben.nutritionniste/', '_blank');
}

// Fonction pour partager Instagram
function shareInstagram() {
    if (navigator.share) {
        navigator.share({
            title: 'Ben Nutritionniste - Nutrition Sportive',
            text: 'Découvrez les conseils nutrition de Ben sur Instagram !',
            url: 'https://www.instagram.com/ben.nutritionniste/'
        });
    } else {
        // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
        const url = encodeURIComponent('https://www.instagram.com/ben.nutritionniste/');
        const text = encodeURIComponent('Découvrez les conseils nutrition de Ben sur Instagram !');
        
        // Essayer de copier le lien
        if (navigator.clipboard) {
            navigator.clipboard.writeText('https://www.instagram.com/ben.nutritionniste/');
            alert('Lien Instagram copié dans le presse-papiers !');
        } else {
            // Ouvrir une nouvelle fenêtre avec des options de partage
            const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            window.open(shareUrl, '_blank');
        }
    }
}

// Animation des statistiques Instagram
function initializeInstagramStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(number => {
                    animateInstagramCounter(number);
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });

    const statsSection = document.querySelector('.instagram-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

function animateInstagramCounter(element) {
    const target = parseInt(element.dataset.count);
    const format = element.dataset.format;
    const duration = 2500;
    const start = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function pour une animation fluide
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * easeOut);
        
        // Format du nombre
        let displayValue = current.toString();
        if (format === 'K' && current >= 1000) {
            displayValue = (current / 1000).toFixed(1) + 'K';
        } else if (format === 'K') {
            displayValue = current.toString() + (progress === 1 ? 'K' : '');
        }
        
        element.textContent = displayValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Valeur finale
            let finalValue = target.toString();
            if (format === 'K') {
                finalValue = (target / 1000).toFixed(1) + 'K';
            }
            element.textContent = finalValue;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// ===============================================
// INSTAGRAM METRICS ANIMATION
// ===============================================
function initializeInstagramMetrics() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricNumbers = entry.target.querySelectorAll('.metric-number');
                metricNumbers.forEach(number => {
                    animateMetricCounter(number);
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });

    const metricsSection = document.querySelector('.instagram-metrics');
    if (metricsSection) {
        observer.observe(metricsSection);
    }
}

function animateMetricCounter(element) {
    const target = parseInt(element.dataset.count);
    const format = element.dataset.format;
    const suffix = element.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * easeOut);
        
        // Format the number
        let displayValue = current.toString();
        if (format === 'K' && current >= 1000) {
            displayValue = (current / 1000).toFixed(1) + 'K';
        } else if (format === 'K') {
            displayValue = current.toString() + (progress === 1 ? 'K' : '');
        }
        
        element.textContent = displayValue + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Final value
            let finalValue = target.toString();
            if (format === 'K') {
                finalValue = (target / 1000).toFixed(1) + 'K';
            }
            element.textContent = finalValue + suffix;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// ===============================================
// CONTACT FORM
// ===============================================
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const messageTextarea = document.querySelector('#message');
    const characterCounter = document.querySelector('.character-counter .current');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleModernFormSubmission(this);
        });
    }
    
    // Character counter for textarea
    if (messageTextarea && characterCounter) {
        messageTextarea.addEventListener('input', function() {
            const length = this.value.length;
            characterCounter.textContent = length;
            
            // Change color based on length
            if (length > 450) {
                characterCounter.style.color = '#ef4444';
            } else if (length > 300) {
                characterCounter.style.color = '#f59e0b';
            } else {
                characterCounter.style.color = 'var(--primary-color)';
            }
        });
    }
    
    // Enhanced input animations
    const inputs = document.querySelectorAll('.modern-contact-form input, .modern-contact-form select, .modern-contact-form textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
}

function handleModernFormSubmission(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (validateModernForm(data)) {
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            
            // Reset form after success
            setTimeout(() => {
                form.reset();
                submitBtn.classList.remove('success');
                submitBtn.disabled = false;
                
                // Reset character counter
                const counter = document.querySelector('.character-counter .current');
                if (counter) {
                    counter.textContent = '0';
                    counter.style.color = 'var(--primary-color)';
                }
            }, 2000);
        }, 2500);
    } else {
        // Show validation errors
        showModernFormErrors(form);
    }
}

function validateModernForm(data) {
    const required = ['firstName', 'lastName', 'email', 'service', 'message'];
    return required.every(field => data[field] && data[field].trim() !== '');
}

function showModernFormErrors(form) {
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            field.addEventListener('input', function() {
                this.style.borderColor = '#e2e8f0';
            }, { once: true });
        }
    });
}

// Copy to clipboard function
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showCopySuccess();
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopySuccess();
    }
}

function showCopySuccess() {
    // Create temporary success message
    const message = document.createElement('div');
    message.textContent = 'Copié !';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 2000);
}

// Anciennes fonctions supprimées - remplacées par les nouvelles fonctions modernes

// ===============================================
// FOOTER ANIMATIONS
// ===============================================
function initializeFooterAnimations() {
    const footer = document.querySelector('.modern-footer');
    if (!footer) return;
    
    // Intersection Observer pour les animations d'apparition
    const footerElements = footer.querySelectorAll('.footer-brand-card, .footer-nav-column, .contact-premium-item');
    
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    footerElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        footerObserver.observe(element);
    });
    
    // Animation des particules en arrière-plan
    animateFooterParticles();
}

function animateFooterParticles() {
    const particles = document.querySelector('.footer-bg-particles');
    if (particles) {
        let offset = 0;
        
        function animate() {
            offset += 0.5;
            particles.style.transform = `translateY(${Math.sin(offset * 0.01) * 10}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    }
}

// ===============================================
// SCROLL TO TOP FUNCTIONALITY
// ===============================================
function initializeScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.setAttribute('aria-label', 'Retour en haut');
    
    // Style the button
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2563EB, #1D4ED8);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
            scrollToTopBtn.style.transform = 'translateY(10px)';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(0) scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}

// ===============================================
// UTILITY FUNCTIONS
// ===============================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
}

/**
 * Throttle function to limit function execution
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Get scroll position
 */
function getScrollPosition() {
    return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
    };
}

// ===============================================
// PERFORMANCE OPTIMIZATIONS
// ===============================================

// Optimize scroll events
const optimizedScrollHandler = throttle(function() {
    updateActiveNavLink();
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Lazy loading for images (if needed)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize smooth scroll functionality
initializeSmoothScroll();

// Optional: Initialize lazy loading if needed
// initializeLazyLoading();

// ===============================================
// ERROR HANDLING
// ===============================================
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can send this to an error reporting service
});

// ===============================================
// SKILL BARS ANIMATION
// ===============================================
function initializeSkillBars() {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-bar[data-width]');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 200);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    const skillsSection = document.querySelector('.about-skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
}

// ===============================================
// STATS ANIMATION
// ===============================================
function initializeStatsAnimation() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number[data-count]');
                statNumbers.forEach(animateStatNumber);
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // Observe Instagram stats
    const instagramStats = document.querySelector('.instagram-stats');
    if (instagramStats) {
        statsObserver.observe(instagramStats);
    }
}

function animateStatNumber(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const suffix = element.getAttribute('data-suffix') || '';
    const format = element.getAttribute('data-format');
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        let displayValue = Math.floor(current);
        
        // Handle special formatting
        if (format === 'K' && target >= 1000) {
            displayValue = (current / 1000).toFixed(1) + 'K';
        } else {
            displayValue = Math.floor(current) + suffix;
        }
        
        element.textContent = displayValue;
    }, 16);
}

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You can send this to an error reporting service
});

// Console welcome message
console.log(`
🥗 Ben Nutritionniste Website
🚀 Version: 2.0.0
📧 Contact: contact@ben-nutritionniste.fr
🌐 Instagram: @ben.nutritionniste

Website loaded successfully!
`);