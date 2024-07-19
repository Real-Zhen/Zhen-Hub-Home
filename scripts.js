// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    agreeButton.addEventListener('click', function() {
        termsPopup.classList.add('hidden');
        content.classList.add('active');
      });
    agreeButton.addEventListener('click', function() {
        termsPopup.classList.add('hidden');
        setTimeout(function() {
            termsPopup.style.display = 'none';
            content.classList.add('active');
        }, 500); // Match this to the transition duration in CSS
    });
});