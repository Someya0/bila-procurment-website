// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Mobile menu toggle (placeholder for actual functionality)
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    alert('Mobile menu clicked! (Implement drawer here)');
});
