(function() {
    'use strict';

    // Language Translation System
    let langToggle = null;
    
    function createLanguageToggle() {
        const navControls = document.querySelector(".nav-controls");
        if (!navControls) {
            console.error("Nav controls not found");
            return;
        }
        
        langToggle = document.createElement("button");
        langToggle.className = "lang-toggle";
        langToggle.id = "langToggle";
        langToggle.innerHTML = "English <i class=\"fas fa-globe\"></i>";
        navControls.insertBefore(langToggle, navControls.firstChild);
    }

    let currentLang = localStorage.getItem("lang") || "en";

    function loadTranslations() {
        fetch("translations.js")
            .then(response => response.text())
            .then(text => {
                const translationsScript = document.createElement("script");
                translationsScript.innerHTML = text;
                document.head.appendChild(translationsScript);
                translationsScript.onload = () => {
                    applyTranslations();
                };
            })
            .catch(error => console.error("Error loading translations.js:", error));
    }

    function applyTranslations() {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            const translatedText = getTranslation(key);
            if (translatedText) {
                element.innerHTML = translatedText;
            }
        });
        updateLangToggleText();
    }

    function getTranslation(key) {
        const keys = key.split(".");
        let result = translations[currentLang];
        for (const k of keys) {
            if (result && result[k] !== undefined) {
                result = result[k];
            } else {
                console.warn(`Translation key not found: ${key} for language ${currentLang}`);
                return null;
            }
        }
        return result;
    }

    function updateLangToggleText() {
        if (!langToggle) return;
        
        if (currentLang === "en") {
            langToggle.innerHTML = "العربية <i class=\"fas fa-globe\"></i>";
            document.documentElement.setAttribute('dir', 'ltr');
        } else {
            langToggle.innerHTML = "English <i class=\"fas fa-globe\"></i>";
            document.documentElement.setAttribute('dir', 'rtl');
        }
    }

    function toggleLanguage() {
        currentLang = currentLang === "en" ? "ar" : "en";
        localStorage.setItem("lang", currentLang);
        applyTranslations();
        updateLangToggleText();
    }

    // Theme Management
    let currentTheme = localStorage.getItem('theme') || 'light';
    let themeToggle = null;

    // Initialize theme on page load
    function initializeTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon();
    }

    // Update theme icon based on current theme
    function updateThemeIcon() {
        if (!themeToggle) return;
        
        const sunIcon = themeToggle.querySelector('.fa-sun');
        const moonIcon = themeToggle.querySelector('.fa-moon');
        
        if (currentTheme === 'dark') {
            if (sunIcon) sunIcon.style.display = 'inline-block';
            if (moonIcon) moonIcon.style.display = 'none';
        } else {
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'inline-block';
        }
    }

    // Theme Toggle Functionality
    function toggleTheme() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        
        // Update theme icon
        updateThemeIcon();
        
        // Add smooth transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
        
        console.log('Theme switched to:', currentTheme);
    }

    // Initialize everything when DOM is loaded
    function initializeApp() {
        // Create language toggle button
        createLanguageToggle();
        
        // Event listener for language toggle button
        if (langToggle) {
            langToggle.addEventListener("click", toggleLanguage);
        }

        // Call loadTranslations on initial app load
        loadTranslations();
        
        // Initialize theme
        initializeTheme();
        
        // Setup theme toggle
        themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
            console.log('Theme toggle button initialized');
        } else {
            console.error('Theme toggle button not found');
        }

        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }));
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Navbar background change on scroll
        function updateNavbarBackground() {
            const navbar = document.querySelector('.navbar');
            if (!navbar) return;
            
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            
            if (window.scrollY > 100) {
                if (isDark) {
                    navbar.style.background = 'rgba(18, 18, 18, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            } else {
                if (isDark) {
                    navbar.style.background = 'rgba(18, 18, 18, 0.95)';
                    navbar.style.boxShadow = 'none';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = 'none';
                }
            }
        }

        window.addEventListener('scroll', updateNavbarBackground);

        // Active navigation link highlighting
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Contact form handling with EmailJS
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            // Initialize EmailJS with demo credentials (user needs to replace with their own)
            emailjs.init("demo_public_key"); // يجب استبدالها بالمفتاح الحقيقي
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form elements
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const btnText = submitBtn.querySelector('.btn-text');
                const btnLoading = submitBtn.querySelector('.btn-loading');
                
                // Show loading state
                btnText.style.display = 'none';
                btnLoading.style.display = 'inline-block';
                submitBtn.disabled = true;
                
                // Get form data
                const formData = new FormData(this);
                const templateParams = {
                    from_name: formData.get('from_name'),
                    from_email: formData.get('from_email'),
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                    to_name: 'Ahmed Roshdi'
                };
                
                // Simple validation
                if (!templateParams.from_name || !templateParams.from_email || !templateParams.subject || !templateParams.message) {
                    showNotification('Please fill in all fields', 'error');
                    resetSubmitButton();
                    return;
                }
                
                if (!isValidEmail(templateParams.from_email)) {
                    showNotification('Please enter a valid email address', 'error');
                    resetSubmitButton();
                    return;
                }
                
                // For demo purposes, show success message
                // In production, replace with actual EmailJS service
                setTimeout(() => {
                    showNotification('Demo: Message would be sent successfully! Replace with your EmailJS credentials.', 'success');
                    contactForm.reset();
                    resetSubmitButton();
                }, 2000);
                
                // Uncomment and configure for production:
                /*
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                    .then(function(response) {
                        console.log('Email sent successfully:', response);
                        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                        contactForm.reset();
                    })
                    .catch(function(error) {
                        console.error('Email sending failed:', error);
                        showNotification('Failed to send message. Please try again or contact me directly.', 'error');
                    })
                    .finally(function() {
                        resetSubmitButton();
                    });
                */
                
                function resetSubmitButton() {
                    btnText.style.display = 'inline-block';
                    btnLoading.style.display = 'none';
                    submitBtn.disabled = false;
                }
            });
        }

        // Scroll to top button
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        `;
        
        document.body.appendChild(scrollToTopBtn);

        // Show/hide scroll to top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });

        // Scroll to top functionality
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add hover effects
        scrollToTopBtn.addEventListener('mouseenter', () => {
            scrollToTopBtn.style.transform = 'translateY(-3px)';
            scrollToTopBtn.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.4)';
        });

        scrollToTopBtn.addEventListener('mouseleave', () => {
            scrollToTopBtn.style.transform = 'translateY(0)';
            scrollToTopBtn.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.3)';
        });

        console.log('App initialized successfully');
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

    // Also initialize on window load as backup
    window.addEventListener('load', () => {
        if (!themeToggle) {
            console.log('Reinitializing theme toggle...');
            themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', toggleTheme);
                updateThemeIcon();
            }
        }
    });

})();



    // Notification system for user feedback
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 350px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            line-height: 1.4;
        `;
        
        // Style the close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            margin-left: 10px;
            float: right;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }


// Mobile Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                
                // On mobile, toggle the dropdown
                if (window.innerWidth <= 768) {
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});


// Enhanced Animations and Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate stats counters
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                // Stagger animation for skill items
                if (entry.target.classList.contains('skills-grid')) {
                    staggerAnimation(entry.target.querySelectorAll('.skill-item'));
                }
                
                // Stagger animation for project cards
                if (entry.target.classList.contains('projects-grid')) {
                    staggerAnimation(entry.target.querySelectorAll('.project-card'));
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.section-title, .stat-number, .skills-grid, .projects-grid').forEach(el => {
        observer.observe(el);
    });

    // Counter animation function
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target')) || parseInt(element.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
            }
        }, 16);
    }

    // Stagger animation function
    function staggerAnimation(elements) {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.animation = `fadeInUp 0.6s ease-out both`;
            }, index * 100);
        });
    }

    // Enhanced typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }

    // Enhanced parallax scrolling
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Enhanced mouse cursor effects
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.opacity = '0.7';
    });

    // Enhanced hover effects for interactive elements
    document.querySelectorAll('a, button, .project-card, .skill-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.opacity = '0.3';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '0.7';
        });
    });

    // Enhanced form validation with animations
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        input.addEventListener('invalid', () => {
            input.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                input.style.animation = '';
            }, 500);
        });
    });

    // Shake animation for invalid inputs
    const shakeKeyframes = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = shakeKeyframes;
    document.head.appendChild(style);

    // Enhanced loading states for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('loading')) return;
            
            this.classList.add('loading');
            const originalText = this.textContent;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            setTimeout(() => {
                this.classList.remove('loading');
                this.innerHTML = originalText;
            }, 2000);
        });
    });

    // Enhanced page transitions
    function fadeInPage() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    // Apply page transition on load
    fadeInPage();

    // Enhanced scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Enhanced theme transition with particle effects
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            createParticleEffect(themeToggle);
        });
    }

    function createParticleEffect(element) {
        const rect = element.getBoundingClientRect();
        const particles = 12;
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--primary-color);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / particles) * Math.PI * 2;
            const velocity = 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => particle.remove();
        }
    }

    console.log('Enhanced animations and interactions loaded successfully!');
});

