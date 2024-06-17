document.addEventListener("DOMContentLoaded", function () {
    const headerHeight = document.querySelector('header').offsetHeight;
    const subNavHeight = document.querySelector('.sub-nav').offsetHeight;
    const totalOffset = headerHeight + subNavHeight;

    document.querySelectorAll('.sub-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.offsetTop - totalOffset;

            window.scrollTo({
                top: targetPosition + 60,
                behavior: 'smooth'
            });
        });
    });
});


