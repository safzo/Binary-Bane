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
});

// 2. MODAL LOGIC (Expandable Lists)
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
