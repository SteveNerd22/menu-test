document.addEventListener('DOMContentLoaded', function() {
    const langWrapper = document.querySelector('.dropdown');
    const langButton = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('#langOptions a');
    const langMenu = document.getElementById('langOptions');

    langButton.addEventListener('click', function(e) {
        e.stopPropagation();
        langMenu.classList.toggle('show');
    });

    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();

            const newLang = this.getAttribute('data-lang');
            const newFlag = this.getAttribute('data-flag');
            langButton.querySelector('.flag').textContent = newFlag;
            langButton.querySelector('.label').textContent = newLang;

            langMenu.classList.remove('show');
        });
    });

    document.addEventListener('click', function(e) {
        if (!langWrapper.contains(e.target)) {
            langMenu.classList.remove('show');
        }
    });
});