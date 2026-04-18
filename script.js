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

// 5. Tilt-In Transitions for Heading and Subheadings
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // use the viewport
        threshold: 0.2 // trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                
                // Stop observing after it happens once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Tell the observer to watch every element with our class
    const tiltElements = document.querySelectorAll('.tilt-in-element');
    tiltElements.forEach(el => observer.observe(el));
});
