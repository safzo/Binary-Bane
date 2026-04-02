document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE MENU LOGIC
    const hamBtn = document.getElementById('hamBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu'); // New: Target the X inside the menu

    if (hamBtn && mobileMenu) {
        // Open logic
        hamBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            // Background remains scrollable or we can add overflow = 'hidden' here
        });

        // New: Dedicated Close logic for the X icon
        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        }

        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                // Removed the hamBtn.innerHTML swap to keep the icon as ☰
            });
        });
    }

    // 2. BACK TO TOP LOGIC
    const topBtn = document.getElementById("backToTop");
    
    if (topBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }
        };

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
// 3. TYPWRITER LOGIC
const textElement = document.getElementById('typewriter');
const phrases = [
    "Help Businesses buy back time",
    "Provide Data-Driven Solutions",
    "Optimize Operations",
    "Solve Problems" // The final goal
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    const isLastPhrase = phraseIndex === phrases.length - 1;
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // Snappy typing speeds
    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
        // End of phrase reached
        if (isLastPhrase) {
            setTimeout(() => {
                textElement.classList.add('highlight-orange');
                document.querySelector('.cursor').style.display = 'none';
            }, 500);
            return; 
        }
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex++;
    }

    setTimeout(type, typeSpeed);
}

// Start the effect
window.onload = type;

// 4. MODAL LOGIC (Global functions)
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

// 5. Pixel Pal Cursor Effect
document.addEventListener('mousemove', (e) => {
    const pal = document.querySelector('.pixel-pal-wrapper');
    if (!pal) return;

    const rect = pal.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const degree = angle * (180 / Math.PI) + 90; // Adjust offset based on sprite direction

    pal.style.transform = `rotate(${degree}deg)`;
});
