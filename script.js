// Bila Procurement - Main JavaScript & Mobile Navigation

document.addEventListener('DOMContentLoaded', function() {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 40) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
            }
        });
    }

    // 2. Setup Mobile Navigation Drawer
    setupMobileDrawer();
});

function setupMobileDrawer() {
    // Determine active page
    const currentPath = window.location.pathname.toLowerCase();
    const isAbout = currentPath.includes('about.html');
    const isServices = currentPath.includes('services.html');
    const isContact = currentPath.includes('contact.html');
    const isHome = !isAbout && !isServices && !isContact;

    // Check if drawer already exists, if not create it
    let overlay = document.querySelector('.mobile-drawer-overlay');
    let drawer = document.querySelector('.mobile-drawer');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-drawer-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        document.body.appendChild(overlay);
    }

    if (!drawer) {
        drawer = document.createElement('div');
        drawer.className = 'mobile-drawer';
        drawer.setAttribute('role', 'dialog');
        drawer.setAttribute('aria-label', 'Mobile Navigation');
        drawer.innerHTML = `
            <div class="mobile-drawer-header">
                <a href="index.html" class="mobile-drawer-logo">
                    <img src="assets/logo_rb.png" alt="Bila Procurement Logo">
                    <span>Bila Procurement</span>
                </a>
                <button class="mobile-drawer-close" aria-label="Close menu">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <ul class="mobile-nav-links">
                <li>
                    <a href="index.html" class="${isHome ? 'active' : ''}">
                        <i class="fa-solid fa-house"></i> HOME
                    </a>
                </li>
                <li>
                    <a href="about.html" class="${isAbout ? 'active' : ''}">
                        <i class="fa-solid fa-building"></i> ABOUT US
                    </a>
                </li>
                <li>
                    <a href="services.html" class="${isServices ? 'active' : ''}">
                        <i class="fa-solid fa-truck-fast"></i> SERVICES
                    </a>
                </li>
                <li>
                    <a href="contact.html" class="${isContact ? 'active' : ''}">
                        <i class="fa-solid fa-envelope"></i> CONTACT
                    </a>
                </li>
            </ul>
            <div class="mobile-drawer-body">
                <a href="contact.html" class="btn btn-gold-solid mobile-drawer-btn">
                    <i class="fa-solid fa-file-invoice-dollar" style="margin-right: 6px;"></i> GET A QUOTE
                </a>
                <div class="mobile-contact-info">
                    <a href="tel:+252612448933" class="mobile-contact-item">
                        <i class="fa-solid fa-phone"></i> +252 61 244 8933
                    </a>
                    <a href="mailto:qamarprocurement@gmail.com" class="mobile-contact-item">
                        <i class="fa-solid fa-envelope"></i> qamarprocurement@gmail.com
                    </a>
                    <div class="mobile-contact-item">
                        <i class="fa-solid fa-location-dot"></i> Mogadishu, Somalia
                    </div>
                    <div class="mobile-social-links">
                        <a href="https://wa.me/252612448933" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=61586562456490" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.tiktok.com/@bilaprocurementandlogis?_r=1&_t=ZS-967D7Y0kADg" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.instagram.com/dayax.co?igsh=MWN1MXNhb2E5cjM3dg==" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(drawer);
    }

    // Toggle logic
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = drawer.querySelector('.mobile-drawer-close');

    function openDrawer() {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openDrawer();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeDrawer);
    }

    overlay.addEventListener('click', closeDrawer);

    // Close on link click
    const drawerLinks = drawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeDrawer();
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && drawer.classList.contains('active')) {
            closeDrawer();
        }
    });
}
