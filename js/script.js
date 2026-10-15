/* ============================================================
   NQ LANGUAGE SWITCHER (IT / EN)
   - Italian is the default and is also the markup in index.html
   - Preference is saved in localStorage; ?lang=en or ?lang=it
     in the URL overrides it
   - To add a string: add a data-i18n="key" (plain text),
     data-i18n-html="key" (text with <br>), data-i18n-placeholder,
     data-i18n-alt or data-i18n-aria attribute in the HTML,
     then add the key to BOTH dictionaries below.
   ============================================================ */

(() => {
    "use strict";

    const STORAGE_KEY = "nq_lang";
    const DEFAULT_LANG = "it";
    const SUPPORTED = ["it", "en"];
    const FLAGS = { it: "img/it-flag.png", en: "img/en-flag.svg" };

    const translations = {

        it: {
            "top.italian": "Prodotti italiani di Alta Qualità",
            "top.selection": "Selezione dei migliori produttori",
            "top.quality": "Qualità garantita",
            "top.shipping": "Spedizione in tutta Europa",
            "lang.choose": "Scegli la lingua",

            "nav.home": "Home",
            "nav.products": "Prodotti",
            "nav.categories": "Categorie",
            "nav.about": "Chi Siamo",
            "nav.contact": "Contatti",
            "search.placeholder": "Cerca un prodotto...",
            "search.aria": "Cerca un prodotto",
            "search.button": "Cerca",

            "hero.subtitle": "AUTENTICITÀ • QUALITÀ • TRADIZIONE",
            "hero.title": "Scopri il vero<br>sapore dell'Italia",
            "hero.description": "Selezioniamo con cura i migliori prodotti alimentari<br>italiani per portare sulla tua tavola la qualità,<br>la tradizione e la passione del nostro territorio.",
            "hero.cta": "Esplora la nostra collezione",
            "hero.video": "Guarda il video",
            "hero.handwritten": "Il gusto<br>della vera<br>Italia",
            "slider.prev": "Slide precedente",
            "slider.next": "Slide successiva",
            "slider.goTo": "Vai alla slide {n}",

            "cat.eyebrow": "LE NOSTRE CATEGORIE",
            "cat.title": "Un viaggio nei sapori italiani",
            "cat.pasta": "Varietà di<br>PASTA",
            "cat.rice": "Varietà di<br>RISO",
            "cat.cured": "Varietà di<br>SALUMI",
            "cat.cheese": "Varietà di<br>Formaggi",
            "cat.preserves": "<br>SOTTOLI",
            "cat.honey": "<br>MIELE",
            "cat.tuna": "<br>TONNO",
            "cat.truffles": "<br>TARTUFI",
            "cat.doppio": "<br>DOPPIO SENSO",
            "cat.drinks": "<br>ALCOLICI",
            "alt.rice": "Riso",
            "alt.cured": "Salumi",
            "alt.cheese": "Formaggi",
            "alt.preserves": "Sottoli",
            "alt.honey": "Miele",
            "alt.tuna": "Tonno",
            "alt.truffles": "Tartufi",
            "alt.drinks": "Alcolici",

            "prod.eyebrow": "I NOSTRI PRODOTTI",
            "prod.title": "Prodotti in evidenza",
            "prod.desc": "Qualità, tradizione e sapori autentici selezionati per te.",
            "prod.viewAll": "Vedi tutti i prodotti",
            "tab.all": "Tutti",
            "tab.pasta": "Pasta",
            "tab.rice": "Riso",
            "tab.cured": "Salumi",
            "tab.cheese": "Formaggi",
            "tab.honey": "Miele",
            "badge.pasta": "PASTA",
            "badge.rice": "RISO",
            "badge.cured": "SALUMI",
            "badge.cheese": "FORMAGGI",
            "badge.honey": "MIELE",
            "prod.rice": "Riso Carnaroli",
            "prod.salami": "Salame Strolghino",
            "prod.cheese": "Caciocavallo Affinato in Grotta",
            "prod.cheese.code": "NQF903 - 1,6 kg",
            "prod.honey": "Miele di Alianto Italia",
            "common.italy": "Italia",
            "common.learnMore": "Scopri di più",

            "story.overlay": "La tradizione<br>che unisce i sapori",
            "story.eyebrow": "LA NOSTRA STORIA",
            "story.title": "Passione italiana,<br>qualità senza compromessi",
            "story.desc": "Noi, la qualità, da oltre 20 anni selezioniamo i migliori prodotti alimentari italiani, per offrirti un'esperienza di gusto autentica. Dalle specialità regionali ai grandi classici, portiamo sulla tua tavola il meglio del nostro territorio, con l'obiettivo di far vivere la vera tradizione italiana in ogni momento.",

            "feat.1.title": "Prodotti selezionati",
            "feat.1.text": "Solo le migliori eccellenze italiane",
            "feat.2.text": "Tradizione e autenticità",
            "feat.3.text": "Sicurezza e rispetto delle origini",
            "feat.4.title": "Passione per il buon cibo",
            "feat.4.text": "Un viaggio di sapori",

            "footer.nav": "NAVIGAZIONE",
            "footer.stay": "RESTA AGGIORNATO",
            "footer.newsText": "Iscriviti alla nostra newsletter per ricevere novità e offerte.",
            "footer.email": "La tua email",
            "footer.subscribe": "Iscriviti",
            "footer.address": "INDIRIZZO",
            "footer.addressLines": "Viale C. Sabatini, 161<br>00144 Roma - Italia",
            "footer.rights": "Tutti i diritti riservati.",

            "wishlist.add": "Aggiungi ai preferiti",
            "wishlist.remove": "Rimuovi dai preferiti",
            "news.enter": "Inserisci il tuo indirizzo email.",
            "news.invalid": "Inserisci un indirizzo email valido.",
            "news.unavailable": "L'iscrizione alla newsletter non è ancora disponibile.",
            "news.submitting": "Invio della richiesta in corso...",
            "news.success": "Grazie! La tua iscrizione è andata a buon fine.",
            "news.failed": "Impossibile iscriversi al momento. Riprova."
        },

        en: {
            "top.italian": "High-Quality Italian Products",
            "top.selection": "Selection of the best producers",
            "top.quality": "Guaranteed quality",
            "top.shipping": "Shipping across Europe",
            "lang.choose": "Choose language",

            "nav.home": "Home",
            "nav.products": "Products",
            "nav.categories": "Categories",
            "nav.about": "About Us",
            "nav.contact": "Contact",
            "search.placeholder": "Search for a product...",
            "search.aria": "Search for a product",
            "search.button": "Search",

            "hero.subtitle": "AUTHENTICITY • QUALITY • TRADITION",
            "hero.title": "Discover the true<br>taste of Italy",
            "hero.description": "We carefully select the finest Italian food products<br>to bring quality, tradition and the passion<br>of our land to your table.",
            "hero.cta": "Explore our collection",
            "hero.video": "Watch the video",
            "hero.handwritten": "The taste<br>of true<br>Italy",
            "slider.prev": "Previous slide",
            "slider.next": "Next slide",
            "slider.goTo": "Go to slide {n}",

            "cat.eyebrow": "OUR CATEGORIES",
            "cat.title": "A journey through Italian flavors",
            "cat.pasta": "Variety of<br>PASTA",
            "cat.rice": "Variety of<br>RICE",
            "cat.cured": "Variety of<br>CURED MEATS",
            "cat.cheese": "Variety of<br>CHEESES",
            "cat.preserves": "PRESERVES<br>IN OIL",
            "cat.honey": "<br>HONEY",
            "cat.tuna": "<br>TUNA",
            "cat.truffles": "<br>TRUFFLES",
            "cat.doppio": "<br>DOPPIO SENSO",
            "cat.drinks": "ALCOHOLIC<br>DRINKS",
            "alt.rice": "Rice",
            "alt.cured": "Cured meats",
            "alt.cheese": "Cheeses",
            "alt.preserves": "Preserves in oil",
            "alt.honey": "Honey",
            "alt.tuna": "Tuna",
            "alt.truffles": "Truffles",
            "alt.drinks": "Alcoholic drinks",

            "prod.eyebrow": "OUR PRODUCTS",
            "prod.title": "Featured products",
            "prod.desc": "Quality, tradition and authentic flavors selected for you.",
            "prod.viewAll": "View all products",
            "tab.all": "All",
            "tab.pasta": "Pasta",
            "tab.rice": "Rice",
            "tab.cured": "Cured meats",
            "tab.cheese": "Cheeses",
            "tab.honey": "Honey",
            "badge.pasta": "PASTA",
            "badge.rice": "RICE",
            "badge.cured": "CURED MEATS",
            "badge.cheese": "CHEESES",
            "badge.honey": "HONEY",
            "prod.rice": "Carnaroli Rice",
            "prod.salami": "Strolghino Salami",
            "prod.cheese": "Cave-Aged Caciocavallo",
            "prod.cheese.code": "NQF903 - 1.6 kg",
            "prod.honey": "Italian Ailanthus Honey",
            "common.italy": "Italy",
            "common.learnMore": "Learn more",

            "story.overlay": "The tradition<br>that unites flavors",
            "story.eyebrow": "OUR STORY",
            "story.title": "Italian passion,<br>uncompromising quality",
            "story.desc": "For over 20 years, Noi, la qualità has been selecting the finest Italian food products to offer you an authentic taste experience. From regional specialties to great classics, we bring the best of our land to your table, with the aim of keeping true Italian tradition alive in every moment.",

            "feat.1.title": "Selected products",
            "feat.1.text": "Only the finest Italian excellence",
            "feat.2.text": "Tradition and authenticity",
            "feat.3.text": "Safety and respect for origins",
            "feat.4.title": "Passion for good food",
            "feat.4.text": "A journey of flavors",

            "footer.nav": "NAVIGATION",
            "footer.stay": "STAY UPDATED",
            "footer.newsText": "Subscribe to our newsletter to receive news and offers.",
            "footer.email": "Your email",
            "footer.subscribe": "Subscribe",
            "footer.address": "ADDRESS",
            "footer.addressLines": "Viale C. Sabatini, 161<br>00144 Rome - Italy",
            "footer.rights": "All rights reserved.",

            "wishlist.add": "Add to wishlist",
            "wishlist.remove": "Remove from wishlist",
            "news.enter": "Please enter your email address.",
            "news.invalid": "Please enter a valid email address.",
            "news.unavailable": "Newsletter registration is not available yet.",
            "news.submitting": "Submitting your request...",
            "news.success": "Thank you! Your subscription request was successful.",
            "news.failed": "Unable to subscribe right now. Please try again."
        }
    };

    let currentLang = DEFAULT_LANG;

    /* Translate a key (used by the other components too) */

    function t(key, vars) {

        let text = translations[currentLang]?.[key]
            ?? translations[DEFAULT_LANG][key]
            ?? key;

        if (vars) {
            Object.keys(vars).forEach(name => {
                text = text.replace(`{${name}}`, vars[name]);
            });
        }

        return text;
    }

    /* Which language should load first? */

    function detectLanguage() {

        const fromUrl = new URLSearchParams(window.location.search).get("lang");

        if (SUPPORTED.includes(fromUrl)) return fromUrl;

        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (SUPPORTED.includes(saved)) return saved;
        } catch (error) {
            // Browser storage may be unavailable.
        }

        return DEFAULT_LANG;
    }

    /* Write the chosen language into the page */

    function applyLanguage(lang) {

        currentLang = lang;

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });

        document.querySelectorAll("[data-i18n-html]").forEach(el => {
            el.innerHTML = t(el.dataset.i18nHtml);
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
        });

        document.querySelectorAll("[data-i18n-alt]").forEach(el => {
            el.setAttribute("alt", t(el.dataset.i18nAlt));
        });

        document.querySelectorAll("[data-i18n-aria]").forEach(el => {
            el.setAttribute("aria-label", t(el.dataset.i18nAria));
        });

        /* Sync every language switcher (top bar + footer) */

        document.querySelectorAll("[data-lang-switcher]").forEach(switcher => {

            const flag = switcher.querySelector("[data-lang-flag]");
            const code = switcher.querySelector("[data-lang-code]");

            if (flag) flag.src = FLAGS[lang];
            if (code) code.textContent = lang.toUpperCase();

            switcher.querySelectorAll("[data-lang]").forEach(option => {
                option.setAttribute(
                    "aria-selected",
                    String(option.dataset.lang === lang)
                );
            });

        });

        document.dispatchEvent(
            new CustomEvent("nq:languagechange", { detail: { lang } })
        );
    }

    function setLanguage(lang, persist = true) {

        if (!SUPPORTED.includes(lang)) return;

        applyLanguage(lang);

        if (!persist) return;

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            // Browser storage may be unavailable.
        }
    }

    /* Dropdown behaviour */

    function initSwitchers() {

        const switchers = Array.from(
            document.querySelectorAll("[data-lang-switcher]")
        );

        function close(switcher) {

            switcher.classList.remove("is-open");

            switcher
                .querySelector("[aria-haspopup]")
                ?.setAttribute("aria-expanded", "false");
        }

        switchers.forEach(switcher => {

            const toggle = switcher.querySelector("[aria-haspopup]");

            if (!toggle) return;

            toggle.addEventListener("click", event => {

                event.stopPropagation();

                const willOpen = !switcher.classList.contains("is-open");

                switchers.forEach(close);

                if (willOpen) {
                    switcher.classList.add("is-open");
                    toggle.setAttribute("aria-expanded", "true");
                }

            });

            switcher.querySelectorAll("[data-lang]").forEach(option => {

                option.addEventListener("click", () => {

                    setLanguage(option.dataset.lang);

                    close(switcher);

                    toggle.focus();

                });

            });

        });

        document.addEventListener("click", event => {

            switchers.forEach(switcher => {
                if (!switcher.contains(event.target)) close(switcher);
            });

        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") switchers.forEach(close);

        });
    }

    window.NQ_I18N = {
        t,
        getLanguage: () => currentLang,
        setLanguage
    };

    document.addEventListener("DOMContentLoaded", () => {

        initSwitchers();

        setLanguage(detectLanguage(), false);

    });

})();


/* ============================================================
   NQ PREMIUM WEBSITE INTERACTIONS
   Hero Slider + Product Filter + Wishlist + Newsletter
   Version: 5.0
   ============================================================ */

(() => {
    "use strict";

    const t = (key, vars) => window.NQ_I18N.t(key, vars);

    document.addEventListener("DOMContentLoaded", () => {

        /* ====================================================
           01. HERO SLIDER
           ==================================================== */

        function initHeroSlider() {

            const slider = document.querySelector(".hero-slider");

            if (!slider || slider.dataset.initialized === "true") return;

            const slides = Array.from(
                slider.querySelectorAll(".slide")
            );

            const dots = Array.from(
                slider.querySelectorAll(".slider-dots .dot")
            );

            const prevBtn = slider.querySelector(".nav-prev");
            const nextBtn = slider.querySelector(".nav-next");
            const slideCount = slider.querySelector(".slide-count");

            if (!slides.length) return;

            slider.dataset.initialized = "true";

            const AUTOPLAY_DELAY = 6000;
            const SWIPE_THRESHOLD = 50;

            const motionPreference = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            );

            let currentSlide = Math.max(
                0,
                slides.findIndex(slide =>
                    slide.classList.contains("active")
                )
            );

            let autoplayTimer = null;
            let touchStartX = 0;

            const totalSlides = slides.length;

            /* Number Formatter */

            function formatNumber(number) {
                return String(number).padStart(2, "0");
            }

            /* Update Slider */

            function updateSlider(index) {

                currentSlide =
                    (index + totalSlides) % totalSlides;

                slides.forEach((slide, i) => {

                    const isActive = i === currentSlide;

                    slide.classList.toggle("active", isActive);

                    slide.setAttribute(
                        "aria-hidden",
                        String(!isActive)
                    );

                    slide.inert = !isActive;

                });

                dots.forEach((dot, i) => {

                    const isActive = i === currentSlide;

                    dot.classList.toggle("active", isActive);

                    dot.setAttribute(
                        "aria-current",
                        isActive ? "true" : "false"
                    );

                    dot.setAttribute(
                        "aria-label",
                        t("slider.goTo", { n: i + 1 })
                    );

                });

                /* Update Slide Counter */

                if (slideCount) {

                    slideCount.innerHTML = `
                        <span class="current">
                            ${formatNumber(currentSlide + 1)}
                        </span>

                        <span class="separator">/</span>

                        <span class="total">
                            ${formatNumber(totalSlides)}
                        </span>
                    `;

                }

                restartAutoplay();
            }

            /* Next Slide */

            function nextSlide() {
                updateSlider(currentSlide + 1);
            }

            /* Previous Slide */

            function previousSlide() {
                updateSlider(currentSlide - 1);
            }

            /* Stop Autoplay */

            function stopAutoplay() {

                if (autoplayTimer !== null) {

                    window.clearInterval(autoplayTimer);

                    autoplayTimer = null;

                }

            }

            /* Pause check: keyboard focus only (hover no longer pauses) */

            function isPaused() {

                try {
                    return (
                        slider.contains(document.activeElement) &&
                        document.activeElement.matches(":focus-visible")
                    );
                } catch (error) {
                    return false;
                }

            }

            /* Start Autoplay */

            function startAutoplay() {

                stopAutoplay();

                if (totalSlides <= 1) return;

                /*
                 * The timer always runs. Whether to pause is checked
                 * at every tick, so autoplay can never get "stuck"
                 * because an event was missed.
                 */

                autoplayTimer = window.setInterval(() => {

                    if (isPaused()) return;

                    nextSlide();

                }, AUTOPLAY_DELAY);

            }

            function restartAutoplay() {
                startAutoplay();
            }

            /* Navigation Buttons */

            nextBtn?.addEventListener("click", nextSlide);

            prevBtn?.addEventListener(
                "click",
                previousSlide
            );

            /* Pagination Dots */

            dots.forEach((dot, index) => {

                dot.addEventListener("click", () => {

                    updateSlider(index);

                });

            });

            /* Pause When Focused */

            slider.addEventListener("focusin", () => {
                // paused by isPaused() while keyboard focus is inside
            });

            slider.addEventListener("focusout", () => {

                window.requestAnimationFrame(() => {

                    if (!slider.contains(document.activeElement)) {
                        startAutoplay();
                    }

                });

            });

            /* Touch Swipe */

            slider.addEventListener("touchstart", event => {

                touchStartX =
                    event.changedTouches[0].screenX;

            }, { passive: true });

            slider.addEventListener("touchend", event => {

                const touchEndX =
                    event.changedTouches[0].screenX;

                const difference =
                    touchStartX - touchEndX;

                if (
                    Math.abs(difference) < SWIPE_THRESHOLD
                ) {
                    return;
                }

                if (difference > 0) {
                    nextSlide();
                } else {
                    previousSlide();
                }

            }, { passive: true });

            /* Keyboard Navigation */

            slider.addEventListener("keydown", event => {

                if (event.key === "ArrowRight") {

                    event.preventDefault();
                    nextSlide();

                }

                if (event.key === "ArrowLeft") {

                    event.preventDefault();
                    previousSlide();

                }

            });

            /* Browser Tab Visibility */

            document.addEventListener(
                "visibilitychange",
                () => {

                    startAutoplay();

                }
            );

            /* Reduced Motion */

            motionPreference.addEventListener?.(
                "change",
                startAutoplay
            );

            /* Initialize */

            slider.setAttribute(
                "aria-roledescription",
                "carousel"
            );

            document.addEventListener("nq:languagechange", () => {

                dots.forEach((dot, i) => {

                    dot.setAttribute(
                        "aria-label",
                        t("slider.goTo", { n: i + 1 })
                    );

                });

            });

            updateSlider(currentSlide);

        }


        /* ====================================================
           02. PRODUCT FILTER TABS
           ==================================================== */

        function initProductTabs() {

            const section =
                document.querySelector(".nq-s2-wrapper");

            if (!section) return;

            const tabs = Array.from(
                section.querySelectorAll(".nq-s2-tab")
            );

            const products = Array.from(
                section.querySelectorAll(
                    ".nq-s2-prod-card[data-category]"
                )
            );

            if (!tabs.length) return;

            function activateTab(selectedTab) {

                const filter =
                    selectedTab.dataset.filter || "all";

                /* Update Active Tab */

                tabs.forEach(tab => {

                    const isActive =
                        tab === selectedTab;

                    tab.classList.toggle(
                        "active",
                        isActive
                    );

                    tab.setAttribute(
                        "aria-selected",
                        String(isActive)
                    );

                    if (tab.matches("button")) {
                        tab.tabIndex = isActive ? 0 : -1;
                    }

                });

                /* Filter Products */

                products.forEach(product => {

                    const categories = (
                        product.dataset.category || ""
                    )
                    .toLowerCase()
                    .split(/\s+/)
                    .filter(Boolean);

                    const shouldShow =
                        filter.toLowerCase() === "all" ||
                        categories.includes(
                            filter.toLowerCase()
                        );

                    product.hidden = !shouldShow;

                });

            }

            /* Click Events */

            tabs.forEach(tab => {

                tab.addEventListener("click", () => {

                    activateTab(tab);

                });

            });

            /* Keyboard Navigation for Button Tabs */

            tabs.forEach((tab, index) => {

                tab.addEventListener("keydown", event => {

                    if (
                        event.key !== "ArrowRight" &&
                        event.key !== "ArrowLeft" &&
                        event.key !== "Home" &&
                        event.key !== "End"
                    ) {
                        return;
                    }

                    event.preventDefault();

                    let nextIndex = index;

                    if (event.key === "ArrowRight") {
                        nextIndex = (index + 1) % tabs.length;
                    }

                    if (event.key === "ArrowLeft") {
                        nextIndex =
                            (index - 1 + tabs.length) % tabs.length;
                    }

                    if (event.key === "Home") {
                        nextIndex = 0;
                    }

                    if (event.key === "End") {
                        nextIndex = tabs.length - 1;
                    }

                    activateTab(tabs[nextIndex]);

                    tabs[nextIndex].focus();

                });

            });

            /* Initialize Existing Active Tab */

            const initialTab =
                tabs.find(tab =>
                    tab.classList.contains("active")
                ) || tabs[0];

            activateTab(initialTab);

        }


        /* ====================================================
           03. PRODUCT WISHLIST
           ==================================================== */

        function initWishlist() {

            const section =
                document.querySelector(".nq-s2-wrapper");

            if (!section) return;

            const STORAGE_KEY = "nq_wishlist_v1";

            let wishlist = [];

            try {

                const stored = JSON.parse(
                    localStorage.getItem(STORAGE_KEY) || "[]"
                );

                wishlist = Array.isArray(stored)
                    ? stored.map(String)
                    : [];

            } catch (error) {

                wishlist = [];

            }

            const hearts = section.querySelectorAll(
                ".nq-s2-prod-card[data-product-id] .nq-s2-heart"
            );

            /* Update Heart UI */

            function updateHeart(heart, isActive) {

                heart.classList.toggle(
                    "active",
                    isActive
                );

                heart.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );

                heart.setAttribute(
                    "aria-label",
                    isActive
                        ? t("wishlist.remove")
                        : t("wishlist.add")
                );

                const icon = heart.querySelector("i");

                if (icon) {

                    icon.classList.toggle(
                        "fa-solid",
                        isActive
                    );

                    icon.classList.toggle(
                        "fa-regular",
                        !isActive
                    );

                }

            }

            /* Restore Wishlist */

            hearts.forEach(heart => {

                const card =
                    heart.closest(".nq-s2-prod-card");

                const productId =
                    card?.dataset.productId;

                if (!productId) return;

                updateHeart(
                    heart,
                    wishlist.includes(productId)
                );

            });

            document.addEventListener("nq:languagechange", () => {

                hearts.forEach(heart => {

                    updateHeart(
                        heart,
                        heart.classList.contains("active")
                    );

                });

            });

            /* Event Delegation */

            section.addEventListener("click", event => {

                const heart =
                    event.target.closest(".nq-s2-heart");

                if (!heart || !section.contains(heart)) {
                    return;
                }

                const card =
                    heart.closest(".nq-s2-prod-card");

                const productId =
                    card?.dataset.productId;

                if (!productId) return;

                const exists =
                    wishlist.includes(productId);

                if (exists) {

                    wishlist = wishlist.filter(
                        id => id !== productId
                    );

                } else {

                    wishlist.push(productId);

                }

                updateHeart(heart, !exists);

                /* Save Wishlist */

                try {

                    localStorage.setItem(
                        STORAGE_KEY,
                        JSON.stringify(wishlist)
                    );

                } catch (error) {

                    // Browser storage may be unavailable.

                }

            });

        }


        /* ====================================================
           04. NEWSLETTER FORM
           ==================================================== */

        function initNewsletter() {

            const form = document.getElementById(
                "nq-s3-newsletter-form"
            );

            if (!form) return;

            const emailInput =
                form.querySelector('input[type="email"]');

            const submitButton =
                form.querySelector('button[type="submit"], button:not([type])');

            if (!emailInput) return;

            /* Create Inline Status Message */

            let status = document.getElementById(
                "nq-s3-newsletter-status"
            );

            if (!status) {

                status = document.createElement("p");

                status.id = "nq-s3-newsletter-status";

                status.className =
                    "nq-s3-newsletter-status";

                status.setAttribute(
                    "role",
                    "status"
                );

                status.setAttribute(
                    "aria-live",
                    "polite"
                );

                form.insertAdjacentElement(
                    "afterend",
                    status
                );

            }

            emailInput.setAttribute(
                "aria-describedby",
                status.id
            );

            /* Clear old message when the language changes */

            document.addEventListener("nq:languagechange", () => {

                status.textContent = "";

                status.classList.remove("success", "error");

            });

            /* Display Status */

            function showStatus(message, type) {

                status.textContent = message;

                status.classList.remove(
                    "success",
                    "error"
                );

                status.classList.add(type);

            }

            /* Form Submission */

            form.addEventListener("submit", async event => {

                event.preventDefault();

                const email =
                    emailInput.value.trim();

                if (!email) {

                    showStatus(
                        t("news.enter"),
                        "error"
                    );

                    emailInput.focus();

                    return;
                }

                if (!emailInput.checkValidity()) {

                    showStatus(
                        t("news.invalid"),
                        "error"
                    );

                    emailInput.focus();

                    return;
                }

                /*
                 * IMPORTANT:
                 * Connect your real newsletter API here.
                 *
                 * Until a backend is connected, this form
                 * must not claim that an email was registered.
                 */

                const endpoint = form.dataset.endpoint;

                if (!endpoint) {

                    showStatus(
                        t("news.unavailable"),
                        "error"
                    );

                    return;
                }

                const originalButtonContent =
                    submitButton?.innerHTML;

                try {

                    if (submitButton) {

                        submitButton.disabled = true;

                        submitButton.setAttribute(
                            "aria-busy",
                            "true"
                        );

                        submitButton.textContent = "...";

                    }

                    showStatus(
                        t("news.submitting"),
                        "success"
                    );

                    const response = await fetch(endpoint, {

                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            email: email
                        })

                    });

                    if (!response.ok) {

                        throw new Error(
                            "Newsletter request failed"
                        );

                    }

                    showStatus(
                        t("news.success"),
                        "success"
                    );

                    form.reset();

                } catch (error) {

                    showStatus(
                        t("news.failed"),
                        "error"
                    );

                } finally {

                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.removeAttribute(
                            "aria-busy"
                        );

                        submitButton.innerHTML =
                            originalButtonContent;

                    }

                }

            });

        }


        /* ====================================================
           INITIALIZE ALL COMPONENTS
           ==================================================== */

        initHeroSlider();

        initProductTabs();

        initWishlist();

        initNewsletter();

    });

})();