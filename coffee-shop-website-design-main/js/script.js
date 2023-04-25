let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});













// Get cart button and cart list
const cartBtn = document.getElementById('cart-btn');
const cartList = document.getElementById('cart-list');

// Add event listener to cart button
cartBtn.addEventListener('click', function() {
  // Toggle active class on cart list
  cartList.classList.toggle('active');
});

// Get menu items
const menuItems = document.querySelectorAll('.box');

// Add event listener to menu items
menuItems.forEach(function(item) {
  item.querySelector('.buy-btn').addEventListener('click', function() {
    // Get item details
    const name = item.querySelector('h3').textContent;
    const price = item.querySelector('.price').textContent;
    const imgSrc = item.querySelector('img').getAttribute('src');

    // Create new cart item
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="${imgSrc}">
      <div>
        <span>${name}</span>
        <span>${price}</span>
      </div>
      <button class="remove-btn">X</button>
    `;

    // Add new cart item to cart
    const cartItems = document.getElementById('cart-items');
    cartItems.appendChild(cartItem);

    // Update cart total
    const cartTotal = document.getElementById('cart-total');
    const currentTotal = parseFloat(cartTotal.textContent.replace('Total: $', ''));
    const newTotal = currentTotal + parseFloat(price.replace('$', ''));
    cartTotal.textContent = `Total: $${newTotal.toFixed(2)}`;

    // Get remove buttons
    const removeBtns = document.querySelectorAll('.remove-btn');

    // Add event listener to remove buttons
    removeBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Get parent element of remove button (which is the cart item)
        const cartItem = btn.parentElement;

        // Remove cart item from cart
        cartItem.remove();

        // Recalculate total price
        updateTotalPrice();
      });
    });
  });
});

// Function to update total price
function updateTotalPrice() {
  // Get cart items
  const cartItems = document.querySelectorAll('#cart-items li');

  // Calculate total price
  let total = 0;
  cartItems.forEach(function(item) {
    const priceStr = item.querySelector('span:last-child').textContent;
    const price = parseFloat(priceStr.replace('$', ''));
    total += price;
  });

  // Update cart total
  const cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

