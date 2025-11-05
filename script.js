let cartCount = 0;

const cartCounter = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount;
        alert("Producto añadido al carrito!");
    });
});
