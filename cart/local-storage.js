
import { findById } from '../utils.js';

//Pull the cart from storage and see if anything is in it
export function getCart() {
    //Local storage needs a key which must be a 'string'
    const stringyCartGet = localStorage.getItem('CART');
    
    const parsedCart = JSON.parse(stringyCartGet);
    //look inside cart for content
    if (parsedCart) {
        //if cart exists, return it
        return parsedCart;

    } else {
        //if cart does not exist, create new cart {carts are arrays of items so we need a new array}
        return [];
    }
}



export function setCart(someCart) {
    const stringyCartSet = JSON.stringify(someCart);
    localStorage.setItem('CART', stringyCartSet);

}

export function addItemToCart(itemID) {
    const cart = getCart();
    const cartItem = findById(cart, itemID);
    if (cartItem) {
        cartItem.quantity++;

    } else {
        const newCartItem = { id: itemID, quantity: 1 };
        cart.push(newCartItem);
    }

    setCart(cart);
}