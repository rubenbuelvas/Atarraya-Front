import { LOGIN, LOGOUT, ADD_TO_CART, EMPTY_CART } from '../constants/action-types.js';

const rootReducer = (state = {currentUser: {}, loggedIn: false, cart: []}, action) => {
  switch(action.type) {
    case LOGIN:
      return Object.assign({}, state, { 
        currentUser: action.payload.user, 
        loggedIn: true
      });

    case LOGOUT:
      return Object.assign({}, state, { 
        currentUser: {}, 
        loggedIn: false 
      });
    
    case ADD_TO_CART:
      return Object.assign({}, state, {
        cart: [
          ...state.cart,
          { product: action.payload.product, amount: action.payload.amount }
        ]
      })
    
    case EMPTY_CART:
      return Object.assign({}, state, {
        cart: []
      })      

    default:
      return state;
  }
};

export default rootReducer;