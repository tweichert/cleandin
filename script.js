document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Verhindert das Neuladen der Seite

            // Hier würde normalerweise der Code für den Versand der Daten an einen Server stehen.
            // Für diese statische Website simulieren wir eine erfolgreiche Übermittlung.

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Einfache Validierung
            if (name && email && message) {
                formMessage.textContent = 'Vielen Dank für Ihre Nachricht, ' + name + '! Wir werden uns in Kürze bei Ihnen melden.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset(); // Formular zurücksetzen
            } else {
                formMessage.textContent = 'Bitte füllen Sie alle Felder aus.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        });
    }
});
