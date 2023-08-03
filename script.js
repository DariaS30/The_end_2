document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('.contact-link');
    const contactFormPopup = document.getElementById('contactFormPopup');
    const closeBtn = contactFormPopup.querySelector('.close-btn');

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        contactFormPopup.classList.add('visible'); // Додаємо клас .visible для показу попапу
    });

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        contactFormPopup.classList.remove('visible'); // Видаляємо клас .visible для приховання попапу
    });
});





