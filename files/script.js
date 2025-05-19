document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    const typedElement = document.querySelector('#typing-output');
    if (typedElement) {
        var typed = new Typed("#typing-output", {
            strings: ["Seamless User Experiences", "Innovative Web Solutions", "User-Centric Designs"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
            onBegin: function(self) {
                console.log("Typed.js animation started.");
            },
            onComplete: function(self) {
                console.log("Typed.js animation completed.");
            },
            onDestroy: function(self) {
                console.log("Typed.js animation destroyed.");
            }
        });
    } else {
        console.error("Typed.js target element with ID 'typing-output' not found.");
    }

    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links-container');
    const navLinks = document.querySelectorAll('.nav-links a'); // Get all the navigation links

    if (hamburgerMenu && navLinksContainer) {
        hamburgerMenu.addEventListener('click', function() {
            navLinksContainer.classList.toggle('show-menu');
        });

        // Add click event listeners to each navigation link to close the menu
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinksContainer.classList.remove('show-menu'); // Close the menu
            });
        });
    }

    // Scroll effect on navbar (assuming 'navbar' ID exists - it doesn't in your HTML)
    const navbarElement = document.querySelector('.navbar'); // Changed to class selector
    if (navbarElement) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                navbarElement.classList.add('scrolled');
            } else {
                navbarElement.classList.remove('scrolled');
            }
        });
    } else {
        console.warn("Navbar element with class 'navbar' not found for scroll effect.");
    }

    // Form submission listener (form element not found)
    const form = document.querySelector('form'); // Select the form element
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // This stops the form from submitting
            // You will need to add your form submission logic here (e.g., using fetch)
            console.log("Form submission prevented. Implement your submission logic.");
        });
    } else {
        console.warn("Form element not found.");
    }
});

const form = document.querySelector("form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevents reload

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  });