// Apply Form Validation
const applyForm = document.getElementById("applyForm");

if (applyForm) {
    applyForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const position = document.getElementById("position").value.trim();
        const message = document.getElementById("message").value.trim();
        const consent = document.getElementById("consent").checked;

        if (fullName === "" || email === "" || phone === "" || position === "" || message === "") {
            alert("Please complete all required fields before submitting your application.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!consent) {
            alert("Please confirm that your information is accurate before submission.");
            return;
        }

        alert("Your application has been submitted successfully.");
        applyForm.reset();
    });
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const contactName = document.getElementById("contact-name").value.trim();
        const contactEmail = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const contactMessage = document.getElementById("contact-message").value.trim();

        if (contactName === "" || contactEmail === "" || subject === "" || contactMessage === "") {
            alert("Please fill in all contact form fields.");
            return;
        }

        if (!validateEmail(contactEmail)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Your message has been sent successfully.");
        contactForm.reset();
    });
}

// Email Validation Function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}