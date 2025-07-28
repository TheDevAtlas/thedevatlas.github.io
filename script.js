// Function to load HTML content into specified elements
async function loadHTMLIncludes() {
    try {
        // Load header
        const headerResponse = await fetch('/header.html');
        if (headerResponse.ok) {
            const headerHTML = await headerResponse.text();
            document.getElementById('header-include').innerHTML = headerHTML;
            
            // Initialize mobile menu after header is loaded
            initializeMobileMenu();
        } else {
            console.error('Failed to load header.html');
        }

        // Load footer
        const footerResponse = await fetch('/footer.html');
        if (footerResponse.ok) {
            const footerHTML = await footerResponse.text();
            document.getElementById('footer-include').innerHTML = footerHTML;
        } else {
            console.error('Failed to load footer.html');
        }
    } catch (error) {
        console.error('Error loading HTML includes:', error);
    }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');
    const body = document.body;

    if (!hamburger || !nav) {
        console.error('Mobile menu elements not found');
        return;
    }

    // Toggle mobile menu
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        // Close mobile menu if window is resized to desktop size
        if (window.innerWidth > 920) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHTMLIncludes();
});