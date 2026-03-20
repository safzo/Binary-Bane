document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE MENU LOGIC
    const hamBtn = document.getElementById('hamBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamBtn && mobileMenu) {
        hamBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamBtn.innerHTML = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });

        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamBtn.innerHTML = '☰';
            });
        });
    }

    // 2. BACK TO TOP LOGIC
    const topBtn = document.getElementById("backToTop");
    
    if (topBtn) {
        // Show/Hide button on scroll
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }
        };

        // Smooth scroll to top
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// 3. MODAL LOGIC (Global functions)
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

// Close modal when clicking the dark background
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});
