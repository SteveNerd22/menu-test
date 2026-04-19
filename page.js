document.addEventListener('DOMContentLoaded', function() {
    const langButton = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('#langOptions a');

    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const newLang = this.getAttribute('data-lang');
            const newFlag = this.getAttribute('data-flag');

            langButton.querySelector('.flag').textContent = newFlag;
            langButton.querySelector('.label').textContent = newLang;

            console.log("Lingua selezionata:", newLang);
        });
    });
})