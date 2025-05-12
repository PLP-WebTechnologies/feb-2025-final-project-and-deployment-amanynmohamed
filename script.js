// Consolidated and fixed addToCart function
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to the cart!`);
}

// Change button text on hover
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.textContent = 'Click to Add to Cart';
    });

    button.addEventListener('mouseout', () => {
        button.textContent = 'Add to Cart';
    });
});
