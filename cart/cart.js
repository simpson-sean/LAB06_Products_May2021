
//Import Cart Render function and import cart data from local storage
import { renderCartItem, getCartTotal } from './render-cart.js';
import { getCart } from '../cart/local-storage.js';

//Set constants to pull information from index
const anchor = document.querySelector('tbody');
const total = document.getElementById('total');
const cartItems = getCart();
const orderButton = document.getElementById('order-button');

//Loop through cart
for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);

}

const totalPrice = getCartTotal();

total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

if (cartItems.length === 0) {
    orderButton.disabled = true;
}

orderButton.addEventListener('click', () => {
    const inTheCart = JSON.stringify(cartItems, true, 2);
    alert(inTheCart);
    
    localStorage.clear();
    window.location.href = '../index.html';
});