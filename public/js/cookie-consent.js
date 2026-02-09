/**
 * Cookie Consent Banner - Loi 25 (Québec) Compliance
 * Blocks analytics until user gives explicit consent.
 */
(function () {
    'use strict';

    var CONSENT_KEY = 'ben_cookie_consent'; // 'accepted' | 'refused'

    /**
     * Load Firebase Analytics scripts dynamically, then initialise.
     */
    function loadAnalytics() {
        // Prevent double-loading
        if (window.__benAnalyticsLoaded) return;
        window.__benAnalyticsLoaded = true;

        var appScript = document.createElement('script');
        appScript.src = 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js';
        appScript.onload = function () {
            var analyticsScript = document.createElement('script');
            analyticsScript.src = 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics-compat.js';
            analyticsScript.onload = function () {
                var initScript = document.createElement('script');
                initScript.src = 'js/analytics.js';
                document.head.appendChild(initScript);
            };
            document.head.appendChild(analyticsScript);
        };
        document.head.appendChild(appScript);
    }

    /**
     * Show the consent banner.
     */
    function showBanner() {
        var banner = document.getElementById('cookie-consent-banner');
        if (banner) banner.classList.add('visible');
    }

    /**
     * Hide the consent banner.
     */
    function hideBanner() {
        var banner = document.getElementById('cookie-consent-banner');
        if (banner) banner.classList.remove('visible');
    }

    /**
     * Save the user's choice and act on it.
     */
    function setConsent(value) {
        try {
            localStorage.setItem(CONSENT_KEY, value);
        } catch (e) {
            // Private browsing – cookie banner will show again next visit
        }
        hideBanner();
        if (value === 'accepted') {
            loadAnalytics();
        }
    }

    /**
     * Allow the user to change their choice from the footer link.
     */
    window.openCookieSettings = function () {
        try {
            localStorage.removeItem(CONSENT_KEY);
        } catch (e) { /* ignore */ }
        showBanner();
    };

    // --- Initialise on DOM ready ---
    function init() {
        var consent = null;
        try {
            consent = localStorage.getItem(CONSENT_KEY);
        } catch (e) { /* ignore */ }

        if (consent === 'accepted') {
            loadAnalytics();
        } else if (consent === 'refused') {
            // Do nothing – respect the refusal
        } else {
            // First visit: show banner
            showBanner();
        }

        // Wire up buttons
        var acceptBtn = document.getElementById('cookie-accept');
        var refuseBtn = document.getElementById('cookie-refuse');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', function () {
                setConsent('accepted');
            });
        }
        if (refuseBtn) {
            refuseBtn.addEventListener('click', function () {
                setConsent('refused');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
