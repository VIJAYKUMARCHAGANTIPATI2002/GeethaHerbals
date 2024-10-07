// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const mobileMenu = document.querySelector('.mobile-menu');

//     menuToggle.addEventListener('click', () => {
//         mobileMenu.classList.toggle('active');
//     });

//     // Close mobile menu when clicking outside of it
//     document.addEventListener('click', (event) => {
//         if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
//             mobileMenu.classList.remove('active');
//         }
//     });

//     // Prevent menu from closing when clicking inside
//     mobileMenu.addEventListener('click', (event) => {
//         event.stopPropagation();
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     // Existing menu toggle code
//     const menuToggle = document.querySelector('.menu-toggle');
//     const mobileMenu = document.querySelector('.mobile-menu');

//     menuToggle.addEventListener('click', () => {
//         mobileMenu.classList.toggle('active');
//     });

//     document.addEventListener('click', (event) => {
//         if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
//             mobileMenu.classList.remove('active');
//         }
//     });

//     mobileMenu.addEventListener('click', (event) => {
//         event.stopPropagation();
//     });

//     // New code for zoom-in effect on scroll
//     const zoomText = document.getElementById('zoomText');
    
//     window.addEventListener('scroll', () => {
//         const rect = zoomText.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//             zoomText.classList.add('zoom-in');
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     // Existing menu toggle code
//     const menuToggle = document.querySelector('.menu-toggle');
//     const mobileMenu = document.querySelector('.mobile-menu');

//     menuToggle.addEventListener('click', () => {
//         mobileMenu.classList.toggle('active');
//     });

//     document.addEventListener('click', (event) => {
//         if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
//             mobileMenu.classList.remove('active');
//         }
//     });

//     mobileMenu.addEventListener('click', (event) => {
//         event.stopPropagation();
//     });

//     // IntersectionObserver for zoom-in effect
//     const zoomText = document.getElementById('zoomText');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 zoomText.classList.add('zoom-in');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.4 // Trigger when 30% of the element is visible
//     });

//     observer.observe(zoomText);
// });


document.addEventListener('DOMContentLoaded', () => {
    // Using Intersection Observer for the zoom-in effect
    const zoomText = document.getElementById('zoomText');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                zoomText.classList.add('zoom-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the element is visible
    });

    observer.observe(zoomText);

});



document.addEventListener('DOMContentLoaded', () => {
    // Existing code for menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!menuToggle?.contains(event.target) && !mobileMenu?.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // New code for scrolling and image reveal
    const productCards = document.querySelectorAll('.product-card');
    const fullImageSection = document.getElementById('fullImageSection');
    const fullImage = document.getElementById('fullImage');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // Set the image source to match the clicked card
            const imageSrc = card.querySelector('img').src;
            fullImage.src = imageSrc;

            // Reveal the full-image section
            fullImageSection.classList.remove('hidden');

            // Scroll to the full-image section
            fullImageSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Display loading screen for 3 seconds
    const loadingScreen = document.getElementById('loading-screen');

    setTimeout(() => {
        loadingScreen.style.opacity = '0'; // Start fading out the loading screen
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Remove it from view after fade-out
        }, 500); // Time for the fade-out transition
    }, 2500); // Duration of loading screen (3 seconds)
});


document.addEventListener("DOMContentLoaded", () => {
    // Show loading screen for 3 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.display = "none";
    }, 2500);
});

// function showFullImage(imageSrc, productName) {
//     const fullImageSection = document.getElementById("fullImageSection");
//     const fullImage = document.getElementById("fullImage");
//     const productPageLink = document.getElementById("productPageLink");
//     const productPageText = document.getElementById("productPageText");

//     // Set the image source
//     fullImage.src = imageSrc;

//     // Set the link and text for each product page
//     productPageLink.href = productName.toLowerCase().replace(/ /g, "-") + ".html"; // Creates links like "herbs-&-spices.html"
//     productPageText.innerText = `Buy high-quality ${productName} today!`;

//     // Show the full image section
//     fullImageSection.classList.remove("hidden");
// }


function showFullImage(imageSrc, productName) {
    const fullImageSection = document.getElementById("fullImageSection");
    const fullImage = document.getElementById("fullImage");
    const productPageLink = document.getElementById("productPageLink");
    const productPageText = document.getElementById("productPageText");

    // Set the image source
    fullImage.src = imageSrc;

    // Set the link to always point to "herbs-&-spices.html"
    productPageLink.href = "herbs-&-spices.html";
    productPageText.innerText = `Buy high-quality ${productName} today!`;

    // Show the full image section
    fullImageSection.classList.remove("hidden");
}
