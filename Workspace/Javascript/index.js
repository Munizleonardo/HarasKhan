document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do carrossel
    const container = document.querySelector('.animais-container');
    const items = document.querySelectorAll('.animal');
    
    // Verifica se existem itens antes de prosseguir
    if (items.length === 0) {
        return;
    }

    // Variáveis de controle
    const itemsPerView = 2;
    const totalItems = items.length;
    let currentIndex = 0;

    function showNextItems() {
        // Calcula o próximo índice
        // Avança de 2 em 2
        currentIndex += itemsPerView;

        // Se o próximo índice ultrapassar o número de itens,
        // volta para o início.
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }

        // Calcula o deslocamento. Como cada item ocupa 50% (100% / itemsPerView),
        // o deslocamento é o índice atual vezes 50%.
        const offset = -currentIndex * (100 / itemsPerView);
        
        // Aplica a transformação CSS para mover o contêiner
        container.style.transform = `translateX(${offset}%)`;
    }

    // Inicia o carrossel, 5 segundos por slide
    setInterval(showNextItems, 5000);
});
