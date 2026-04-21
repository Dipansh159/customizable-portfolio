// State Management
const defaultSettings = {
    primaryColor: '#f97316',
    secondaryColor: '#ec4899',
    heroBg: '#0f172a',
    sectionBg: '#ffffff',
    textColor: '#111827',
    cardBg: '#f3f4f6',
    fontFamily: "'Inter', sans-serif",
    borderRadius: 16,
    layoutStyle: 'default',
    animationLevel: 'medium',
    yourName: 'John Doe',
    tagline: 'Creative Developer & Designer',
    bio: 'I am a passionate developer and designer who loves turning complex problems into simple, beautiful solutions. With over 5 years of experience in web development, I specialize in creating user-centered digital experiences that make a real impact.',
    contactEmail: 'hello@portfolio.com',
    sections: {
        hero: true,
        about: true,
        projects: true,
        skills: true,
        experience: true,
        contact: true
    }
};
let settings = { ...defaultSettings };
// DOM Elements
const root = document.documentElement;
const body = document.body;
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
// Customization Panel Elements
const customizeToggle = document.getElementById('customizeToggle');
const customizeOverlay = document.getElementById('customizeOverlay');
const customizePanel = document.getElementById('customizePanel');
const customizeClose = document.getElementById('customizeClose');
const customizeTabs = document.querySelectorAll('.customize-tab');
const customizeSections = document.querySelectorAll('.customize-section');
const resetBtn = document.getElementById('resetSettings');
// Input Elements
const primaryColorInput = document.getElementById('primaryColor');
const secondaryColorInput = document.getElementById('secondaryColor');
const heroBgInput = document.getElementById('heroBg');
const sectionBgInput = document.getElementById('sectionBg');
const textColorInput = document.getElementById('textColor');
const cardBgInput = document.getElementById('cardBg');
const borderRadiusInput = document.getElementById('borderRadius');
const radiusValue = document.getElementById('radiusValue');
const inputName = document.getElementById('inputName');
const inputTagline = document.getElementById('inputTagline');
const inputBio = document.getElementById('inputBio');
const inputEmail = document.getElementById('inputEmail');
const bioCharCount = document.getElementById('bioCharCount');
// Content Elements
const logoIcon = document.getElementById('logoIcon');
const logoText = document.getElementById('logoText');
const footerLogoIcon = document.getElementById('footerLogoIcon');
const footerLogoText = document.getElementById('footerLogoText');
const heroTitle = document.getElementById('heroTitle');
const heroTagline = document.getElementById('heroTagline');
const heroBio = document.getElementById('heroBio');
const aboutBio = document.getElementById('aboutBio');
const contactEmail = document.getElementById('contactEmail');
// Apply Settings
function applySettings() {
    // CSS Variables
    root.style.setProperty('--primary-color', settings.primaryColor);
    root.style.setProperty('--secondary-color', settings.secondaryColor);
    root.style.setProperty('--hero-bg', settings.heroBg);
    root.style.setProperty('--section-bg', settings.sectionBg);
    root.style.setProperty('--text-color', settings.textColor);
    root.style.setProperty('--card-bg', settings.cardBg);
    root.style.setProperty('--font-family', settings.fontFamily);
    root.style.setProperty('--border-radius', settings.borderRadius + 'px');
    // Animation Level
    body.className = body.className.replace(/anim-\w+/g, '');
    body.classList.add('anim-' + settings.animationLevel);
    // Content Updates
    const firstName = settings.yourName.split(' ')[0];
    const initial = firstName.charAt(0).toUpperCase();
    logoIcon.textContent = initial;
    logoText.textContent = firstName;
    footerLogoIcon.textContent = initial;
    footerLogoText.textContent = firstName;
    heroTitle.textContent = settings.yourName;
    heroTagline.textContent = settings.tagline;
    heroBio.textContent = settings.bio.substring(0, 100) + '...';
    aboutBio.textContent = settings.bio;
    contactEmail.textContent = settings.contactEmail;
    contactEmail.href = 'mailto:' + settings.contactEmail;
    // Section Visibility
    Object.entries(settings.sections).forEach(([section, visible]) => {
        const el = document.getElementById(section);
        if (el) {
            el.style.display = visible ? '' : 'none';
        }
    });
    // Update Input Values
    primaryColorInput.value = settings.primaryColor;
    secondaryColorInput.value = settings.secondaryColor;
    heroBgInput.value = settings.heroBg;
    sectionBgInput.value = settings.sectionBg;
    textColorInput.value = settings.textColor;
    cardBgInput.value = settings.cardBg;
    borderRadiusInput.value = settings.borderRadius;
    radiusValue.textContent = settings.borderRadius;
    inputName.value = settings.yourName;
    inputTagline.value = settings.tagline;
    inputBio.value = settings.bio;
    inputEmail.value = settings.contactEmail;
    bioCharCount.textContent = settings.bio.length;
}
// Event Listeners - Colors
document.querySelectorAll('.color-preset').forEach(btn => {
    btn.addEventListener('click', () => {
        settings.primaryColor = btn.dataset.color;
        applySettings();
    });
});
primaryColorInput.addEventListener('input', (e) => {
    settings.primaryColor = e.target.value;
    applySettings();
});
secondaryColorInput.addEventListener('input', (e) => {
    settings.secondaryColor = e.target.value;
    applySettings();
});
heroBgInput.addEventListener('input', (e) => {
    settings.heroBg = e.target.value;
    applySettings();
});
sectionBgInput.addEventListener('input', (e) => {
    settings.sectionBg = e.target.value;
    applySettings();
});
textColorInput.addEventListener('input', (e) => {
    settings.textColor = e.target.value;
    applySettings();
});
cardBgInput.addEventListener('input', (e) => {
    settings.cardBg = e.target.value;
    applySettings();
});
// Typography
document.querySelectorAll('.font-option').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.font-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        settings.fontFamily = btn.dataset.font;
        applySettings();
    });
});
borderRadiusInput.addEventListener('input', (e) => {
    settings.borderRadius = parseInt(e.target.value);
    radiusValue.textContent = settings.borderRadius;
    applySettings();
});
// Layout
document.querySelectorAll('.layout-option').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.layout-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        settings.layoutStyle = btn.dataset.layout;
    });
});
// Animation
document.querySelectorAll('.animation-option').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.animation-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        settings.animationLevel = btn.dataset.anim;
        applySettings();
    });
});
// Content
inputName.addEventListener('input', (e) => {
    settings.yourName = e.target.value;
    applySettings();
});
inputTagline.addEventListener('input', (e) => {
    settings.tagline = e.target.value;
    applySettings();
});
inputBio.addEventListener('input', (e) => {
    settings.bio = e.target.value;
    bioCharCount.textContent = e.target.value.length;
    applySettings();
});
inputEmail.addEventListener('input', (e) => {
    settings.contactEmail = e.target.value;
    applySettings();
});
// Section Toggles
document.querySelectorAll('.toggle-switch').forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        const section = toggle.dataset.section;
        settings.sections[section] = toggle.classList.contains('active');
        applySettings();
    });
});
// Panel Toggle
customizeToggle.addEventListener('click', () => {
    customizeOverlay.classList.add('active');
    customizePanel.classList.add('active');
});
function closePanel() {
    customizeOverlay.classList.remove('active');
    customizePanel.classList.remove('active');
}
customizeClose.addEventListener('click', closePanel);
customizeOverlay.addEventListener('click', closePanel);
// Tabs
customizeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        customizeTabs.forEach(t => t.classList.remove('active'));
        customizeSections.forEach(s => s.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});
// Reset
resetBtn.addEventListener('click', () => {
    settings = { ...defaultSettings };
    // Reset UI states
    document.querySelectorAll('.font-option').forEach(b => b.classList.remove('active'));
    document.querySelector('.font-option[data-font="\'Inter\', sans-serif"]').classList.add('active');
    document.querySelectorAll('.layout-option').forEach(b => b.classList.remove('active'));
    document.querySelector('.layout-option[data-layout="default"]').classList.add('active');
    document.querySelectorAll('.animation-option').forEach(b => b.classList.remove('active'));
    document.querySelector('.animation-option[data-anim="medium"]').classList.add('active');
    document.querySelectorAll('.toggle-switch').forEach(t => t.classList.add('active'));
    applySettings();
});
// Navbar Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});
// Project Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// Contact Form
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const messageInput = contactForm.querySelector('textarea');
const charCount = contactForm.querySelector('.char-count');
messageInput.addEventListener('input', () => {
    charCount.textContent = messageInput.value.length + '/500 characters';
});
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
});
// Back to Top
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate skill bars
            if (entry.target.classList.contains('skill-card')) {
                const bar = entry.target.querySelector('.skill-progress-bar');
                if (bar) {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.width + '%';
                    }, 200);
                }
            }
        }
    });
}, observerOptions);
document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in').forEach(el => {
    observer.observe(el);
});
// Initialize
applySettings();