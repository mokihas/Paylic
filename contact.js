document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_q4nrg3c'; // Replace with your Service ID
        const templateID = 'template_77ru82o'; // Replace with your Template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Sent!');
                form.reset();
            }, (err) => {
                alert('Failed...', JSON.stringify(err));
            });
    });
});
