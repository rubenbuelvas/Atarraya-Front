import { LOGIN, LOGOUT, ADD_TO_CART } from '../constants/action-types.js';

export function login(user) {
    console.log("login");
    return {
        type: LOGIN,
        payload: {
            user: user
        }
    }
}

export function logout() {
    console.log("logout");
    return {
        type: LOGOUT
    }
}

export function addToCart(product, amount) {
    console.log("addToCart");
    return {
        type: ADD_TO_CART,
        payload: {
            product: product,
            amount: amount
        }
    }
}