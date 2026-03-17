document.addEventListener('DOMContentLoaded', () => {
    const hamBtn = document.getElementById('hamBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamBtn) {
        hamBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamBtn.innerHTML = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Close menu when a link is clicked
    const links = document.querySelectorAll('.mobile-menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamBtn.innerHTML = '☰';
        });
    });
});
