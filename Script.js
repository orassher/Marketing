let cart = [];
let total = 0;

// Add item to cart
function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  updateCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.product} - $${item.price} 
      <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

// Remove item from cart
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}
