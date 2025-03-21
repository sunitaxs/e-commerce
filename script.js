// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  const product = { name, price };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (cartItems && cartTotal) {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `
        <p>${item.name} - $${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(itemDiv);
      total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert('Thank you for your purchase!');
  cart = [];
  localStorage.removeItem('cart');
  renderCart();
}

// Render cart on page load
document.addEventListener('DOMContentLoaded', renderCart);