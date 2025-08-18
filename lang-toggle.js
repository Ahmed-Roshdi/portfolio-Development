// Language Toggle System - Unified for all pages
(function() {
    'use strict';

    let langToggle = null;
    let currentLang = localStorage.getItem("lang") || "en";

    // Map English <-> Arabic counterpart files for all pages
    const langPairs = {
        'index.html': 'index-ar.html',
        'index-ar.html': 'index.html',
        'ai.html': 'ai-ar.html',
        'ai-ar.html': 'ai.html',
        'cybersecurity.html': 'cybersecurity-ar.html',
        'cybersecurity-ar.html': 'cybersecurity.html',
        'programming_development.html': 'programming-ar.html',
        'programming-ar.html': 'programming_development.html',
        'graphic_design_content_creation.html': 'graphic-design-ar.html',
        'graphic-design-ar.html': 'graphic_design_content_creation.html',
        'audio_photo_lighting.html': 'audio-photo-ar.html',
        'audio-photo-ar.html': 'audio_photo_lighting.html',
        'content_writing_translation.html': 'content-writing-ar.html',
        'content-writing-ar.html': 'content_writing_translation.html',
        'emarketing.html': 'emarketing-ar.html',
        'emarketing-ar.html': 'emarketing.html',
        'science_research.html': 'science-research-ar.html',
        'science-research-ar.html': 'science_research.html',
        'vfx_editing.html': 'vfx-editing-ar.html',
        'vfx-editing-ar.html': 'vfx_editing.html'
    };

    function createLanguageToggle() {
        const navControls = document.querySelector(".nav-controls");
        if (!navControls) {
            console.error("Nav controls not found");
            return;
        }
        
        // Check if language toggle already exists
        const existingToggle = document.getElementById("langToggle");
        if (existingToggle) {
            langToggle = existingToggle;
            return;
        }
        
        langToggle = document.createElement("button");
        langToggle.className = "lang-toggle";
        langToggle.id = "langToggle";
        langToggle.innerHTML = "English <i class=\"fas fa-globe\"></i>";
        navControls.insertBefore(langToggle, navControls.firstChild);

        // Add event listener (assigned after we decide behavior)
        
        // Update initial state text/dir
        updateLangToggleText();
        attachToggleBehavior();
    }

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
        if (typeof translations === 'undefined') {
            console.warn('Translations not loaded yet');
            return null;
        }
        
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

    function attachToggleBehavior() {
        if (!langToggle) return;
        const file = (window.location.pathname.split('/').pop() || '').toLowerCase();
        const mapped = langPairs[file];
        // If we have a dedicated counterpart page, navigate instead of inline translating
        if (mapped) {
            langToggle.onclick = () => {
                window.location.href = mapped;
            };
        } else {
            // Fallback to in-page translation (mainly for index)
            langToggle.onclick = toggleLanguage;
        }
    }

    function toggleLanguage() {
        currentLang = currentLang === "en" ? "ar" : "en";
        localStorage.setItem("lang", currentLang);
        applyTranslations();
        updateLangToggleText();
    }

    // Initialize when DOM is ready
    function initializeLangToggle() {
        createLanguageToggle();
        // If page relies on inline translations (no mapped counterpart), load and apply
        const file = (window.location.pathname.split('/').pop() || '').toLowerCase();
        if (!langPairs[file] || file === 'index.html' || file === 'index-ar.html') {
            loadTranslations();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLangToggle);
    } else {
        initializeLangToggle();
    }

    // Also initialize on window load as backup
    window.addEventListener('load', () => {
        if (!langToggle) {
            console.log('Reinitializing language toggle...');
            initializeLangToggle();
        }
    });

})();

