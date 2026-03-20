document.addEventListener('DOMContentLoaded', () => {
    // Scroll function
    window.onscroll = function() {
    scrollFunction();
    };
    
    function scrollFunction() {
        const topBtn = document.getElementById("backToTop");
        if (topBtn) {
            // Show button after scrolling 300px
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }
        }
    }
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

// Smooth scroll to top when clicked
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
