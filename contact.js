document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
        const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Sent!');
                form.reset();
            }, (err) => {
                alert('Failed...', JSON.stringify(err));
            });
    });
});