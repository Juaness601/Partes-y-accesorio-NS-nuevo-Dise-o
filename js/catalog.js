// Filtros del catálogo
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category');
    const priceFilter = document.getElementById('price');
    const productCards = document.querySelectorAll('.product-card');
    
    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;
        
        productCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardPrice = card.dataset.price;
            
            const categoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;
            const priceMatch = selectedPrice === 'all' || cardPrice === selectedPrice;
            
            if (categoryMatch && priceMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    if (categoryFilter && priceFilter) {
        categoryFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('change', filterProducts);
    }

    console.log(minombre);
    let color = "rojo";
     if (true) {
        var minombre = "Juan";
        let color = "azul";
     }
    console.log(minombre);
    console.log(color);
});