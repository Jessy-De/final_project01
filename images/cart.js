// Sample cart data
const products = [
  { id: 1, name: "Product 1", price: 29.99, quantity: 1 },
  { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
  { id: 3, name: "Product 3", price: 19.99, quantity: 1 },
];

// Update the displayed total price
function updateTotal() {
  let total = 0;
  products.forEach((product) => {
    total += product.price * product.quantity;
  });
  document.getElementById("total-price").innerText = total.toFixed(2);
}

// Increase the quantity of a product
function increaseQuantity(id) {
  const product = products.find((p) => p.id === id);
  product.quantity++;
  document.getElementById(`quantity-${id}`).innerText = product.quantity;
  updateTotal();
}

// Decrease the quantity of a product
function decreaseQuantity(id) {
  const product = products.find((p) => p.id === id);
  if (product.quantity > 1) {
    product.quantity--;
    document.getElementById(`quantity-${id}`).innerText = product.quantity;
    updateTotal();
  }
}

// Remove a product from the cart
function removeItem(id) {
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    document.querySelector(`#cart-item-${id}`).remove();
    updateTotal();
  }
}

// Initialize the cart
document.addEventListener("DOMContentLoaded", () => {
  updateTotal();
});
