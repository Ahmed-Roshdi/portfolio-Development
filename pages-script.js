(function() {
    'use strict';

    // Language Translation System
    let langToggle = null;
    
    // Inject a unified header and footer across all pages for a consistent experience
    function injectHeaderFooter() {
        try {
            const navbar = document.querySelector('.navbar');
            const footer = document.querySelector('.footer');

            const homeHref = 'https://ahmed-roshdi.github.io/portfolio/';

            // Build Expertise dropdown links
            const expertiseDropdown = `
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-translate="nav.expertise">Expertise</a>
                    <ul class="dropdown-menu">
                        <li><a href="ai.html" class="dropdown-link">Artificial Intelligence</a></li>
                        <li><a href="cybersecurity.html" class="dropdown-link">Cybersecurity</a></li>
                        <li><a href="programming_development.html" class="dropdown-link">Programming & Development</a></li>
                        <li><a href="graphic_design_content_creation.html" class="dropdown-link">Graphic Design & Content Creation</a></li>
                        <li><a href="audio_photo_lighting.html" class="dropdown-link">Audio, Photo & Lighting</a></li>
                        <li><a href="content_writing_translation.html" class="dropdown-link">Content Writing & Translation</a></li>
                        <li><a href="vfx_editing.html" class="dropdown-link">VFX & Video Editing</a></li>
                        <li><a href="emarketing.html" class="dropdown-link">E-Marketing</a></li>
                        <li><a href="science_research.html" class="dropdown-link">Science & Research</a></li>
                    </ul>
                </li>`;

            // Build section links dynamically if sections exist on page
            function buildSectionLinks() {
                const links = [];
                if (document.getElementById('services')) links.push('<li class="nav-item"><a href="#services" class="nav-link">Services</a></li>');
                if (document.getElementById('portfolio')) links.push('<li class="nav-item"><a href="#portfolio" class="nav-link">Portfolio</a></li>');
                if (document.getElementById('tools')) links.push('<li class="nav-item"><a href="#tools" class="nav-link">Tools</a></li>');
                if (document.getElementById('stats')) links.push('<li class="nav-item"><a href="#stats" class="nav-link">Stats</a></li>');
                if (document.getElementById('certifications')) links.push('<li class="nav-item"><a href="#certifications" class="nav-link">Certifications</a></li>');
                if (document.getElementById('projects')) links.push('<li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>');
                if (document.getElementById('contact')) links.push('<li class="nav-item"><a href="#contact" class="nav-link" data-translate="nav.contact">Contact</a></li>');
                return links.join('');
            }

            // Create navbar if missing
            let navbarEl = navbar;
            if (!navbarEl) {
                navbarEl = document.createElement('nav');
                navbarEl.className = 'navbar';
                document.body.insertBefore(navbarEl, document.body.firstChild);
            }

            if (navbarEl) {
                navbarEl.innerHTML = `
                    <div class="nav-container">
                        <div class="nav-logo">
                            <a href="${homeHref}" data-translate="nav.home">Ahmed Roshdi</a>
                        </div>
                        <ul class="nav-menu">
                            <li class="nav-item"><a href="${homeHref}" class="nav-link" data-translate="nav.home">Home</a></li>
                            ${expertiseDropdown}
                            ${buildSectionLinks()}
                        </ul>
                        <div class="nav-controls">
                            <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
                                <i class="fas fa-sun"></i>
                                <i class="fas fa-moon"></i>
                            </button>
                            <div class="hamburger">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div>
                        </div>
                    </div>
                `;
            }

            // Create footer if missing
            let footerEl = footer;
            if (!footerEl) {
                footerEl = document.createElement('footer');
                footerEl.className = 'footer';
                document.body.appendChild(footerEl);
            }

            if (footerEl) {
                footerEl.innerHTML = `
                    <div class="container">
                        <div class="footer-content">
                            <p data-translate="footer.copyright">© 2025 Ahmed Roshdi. All rights reserved.</p>
                            <p data-translate="footer.builtWith">Built with ❤️ and lots of ☕</p>
                        </div>
                    </div>
                `;
            }
        } catch (e) {
            console.warn('Header/Footer injection failed:', e);
        }
    }

    // Ensure base styles and icon fonts are present
    function ensureBaseAssets() {
        const head = document.head;
        if (!head) return;

        function hasLink(hrefIncludes) {
            return Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(l => (l.getAttribute('href') || '').includes(hrefIncludes));
        }
        function addStylesheet(href) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            head.appendChild(link);
        }

        // Ensure new core stylesheet is present
        if (!hasLink('core.css')) {
            addStylesheet('core.css');
        }
        if (!hasLink('font-awesome') && !hasLink('cdnjs.cloudflare.com/ajax/libs/font-awesome')) {
            addStylesheet('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
        }
        // Keep page-specific fonts; we do not override Arabic Cairo font
        if (!hasLink('fonts.googleapis.com') && document.documentElement.getAttribute('dir') !== 'rtl') {
            addStylesheet('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        }
    }
    
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
        // Inject consistent header/footer and ensure styles before translations
        injectHeaderFooter();
        ensureBaseAssets();

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

        console.log('App initialized successfully');
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

