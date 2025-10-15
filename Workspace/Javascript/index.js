document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.animais-container');
    const items = document.querySelectorAll('.animal');
    
    if (items.length === 0) {
        return;
    }
    const itemsPerView = 2;
    const totalItems = items.length;
    let currentIndex = 0;

    function showNextItems() {
        currentIndex += itemsPerView;

        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        const offset = -currentIndex * (100 / itemsPerView);
        
        container.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextItems, 5000);
});
