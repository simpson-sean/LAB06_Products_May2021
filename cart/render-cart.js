// we know we will need our raw instrument data because that's where the name and price live
import { instrumentList } from '../data/instruments.js';


// we know we will need findById because that's where the quantity lives
import { findById } from '../utils.js';
import { getCart } from '../cart/local-storage.js';

// instrumentList has price, name, etc
// cartItem has id, quantity
// this function should take in a cart item and return a table row with all the good data

const cartInstruments = getCart();


export function renderCartItem(cartItems) {
    // cart item has only: quantity and id
    // we need price and the name of the item
    // the price and the name live in the rows of the other array
    // to get the name and the species, we need to get the id from the cartItem and go find the corresponding animal in the feltAnimals array. luckily we have a function that can do just that!
    const instrumentID = findById(instrumentList, cartItems.id);

    // then all we have to do is make some DOM elements
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    // and inject the name from the instruments
    nameTd.textContent = instrumentID.name;
    
    // the quantity from the cart item
    quantityTd.textContent = cartItems.quantity;
    
    // and the price from the instrument
    priceTd.textContent = instrumentID.price.toLocaleString('en-US', { 
        style: 'currency',
        currency: 'USD',
    });

    const total = instrumentID.price * cartItems.quantity;

    totalTd.textContent = total.toLocaleString('en-US', { 
        style: 'currency',
        currency: 'USD',
    });
    
    // append those to our tr
    tr.append(nameTd, quantityTd, priceTd, totalTd);
    
    // and return that tr
    return tr;
}

export function getCartTotal() {
    let accumulator = 0;

    for (let item of cartInstruments) {
        const instrumentTotal = findById(instrumentList, item.id);

        const total = item.quantity * instrumentTotal.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}