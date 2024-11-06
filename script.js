// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarList = document.querySelector('.navbar-list');

menuToggle.addEventListener('click', () => {
    navbarList.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.navbar-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarList.classList.remove('active');
    });
});

// Petition form handling
const petitionForm = document.getElementById('petition-form');
const signatureList = document.getElementById('signature-list');

if (petitionForm) {
    petitionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        let isValid = true;

        // Simple validation checks for name and email
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('invalid');
            isValid = false;
        } else {
            nameInput.classList.remove('invalid');
        }

        if (!emailInput.value.includes('@')) {
            emailInput.classList.add('invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('invalid');
        }

        // Add valid signatures to the list
        if (isValid && signatureList) {
            const listItem = document.createElement('li');
            listItem.textContent = `${nameInput.value} - ${emailInput.value}`;
            signatureList.appendChild(listItem);

            // Clear form fields
            nameInput.value = '';
            emailInput.value = '';
        }
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add your contact form submission logic here
        console.log('Contact form submitted');
    });
}