import { renderCartItem, getCartTotal } from './render-cart.js';
import { instrumentList } from '../data/instruments.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');
 
for (let item of cartItems) {
    const tableRow = renderCart(item);

    anchor.append(tableRow);

}

const totalPrice = getCartTotal();

total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});