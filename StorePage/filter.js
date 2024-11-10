let cart = [];

function addToCart(name, price, img, desc) {
    cart.push({ name, price, img, desc });
    alert(`${name} added to cart!`);
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in local storage
}

function showCart() {
    const cartPage = document.getElementById('cart-page');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    // Retrieve cart from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    if (storedCart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        storedCart.forEach(item => {
            cartItemsContainer.innerHTML += `<p>${item.name} - Rs. ${item.price}</p>`;
        });
    }

    cartPage.style.display = 'block'; // Show cart page
}

function clearCart() {
    cart = []; // Clear the cart
    localStorage.removeItem('cart'); // Remove cart from local storage
    alert('Cart cleared!');
    showCart(); // Refresh cart display
}

function checkout() {
    alert('Proceeding to checkout...');
    // You can add further checkout logic here
}

function filterProducts() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    const categories = Array.from(document.querySelectorAll('.category:checked')).map(cb => cb.value);
    const brands = Array.from(document.querySelectorAll('.brand:checked')).map(cb => cb.value);
    const priceRange = document.getElementById('price-range').value;

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        const category = product.getAttribute('data-category');
        const brand = product.getAttribute('data-brand');
        const price = parseInt(product.getAttribute('data-price'));

        const matchesSearch = name.includes(searchValue);
        const matchesCategory = categories.length === 0 || categories.includes(category);
        const matchesBrand = brands.length === 0 || brands.includes(brand);
        const matchesPrice = price <= priceRange;

        if (matchesSearch && matchesCategory && matchesBrand && matchesPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function updatePriceLabel() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    priceValue.innerText = priceRange.value;
}

document.getElementById('filter-header').addEventListener('click', function (e) {
    if (document.getElementById('filter-content').style.display == 'block'
    ) {
        document.getElementById('filter-content').style.display = 'none'
    } else {
        document.getElementById('filter-content').style.display = 'block'
    }
})