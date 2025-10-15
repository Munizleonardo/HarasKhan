document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.team-slide');
    
    if (slides.length === 0) {
        return;
    }

    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add('active');
    }
    setInterval(showNextSlide, 4000);
});