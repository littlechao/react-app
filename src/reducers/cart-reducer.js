// src/reducers/cart-reducer.js

import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART,
  SEARCH_CART
} from '../actions/cart-actions';

let task = localStorage.getItem("localTask");
const initialState = {
  cart: task ? JSON.parse(task) : []
}

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      localStorage.setItem("localTask",JSON.stringify([
        ...state.cart, action.payload
      ]))
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }

    case UPDATE_CART: {
      return {
        cart: state.cart.map((item) => {
          if (item.title === action.payload.title) {
            item.done = true;
          }
          return item;
        })
      }
    }

    case SEARCH_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.title !== action.payload.title)
      }
    }
    case DELETE_FROM_CART: {
      localStorage.setItem("localTask",JSON.stringify(
        state.cart.filter(item => item.title !== action.payload.title)
      ))
      return {
        ...state,
        cart: state.cart.filter(item => item.title !== action.payload.title)
      }
    }
    default:
      return state;
  }
}


// const fetchPosts = params => dispatch => {
//   dispatch(requestPosts(params))
//   return fetch(`https://www.reddit.com/r/${params}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(params, json)))
// }


// export const ADD_TO_CART = 'ADD_TO_CART';
// export const UPDATE_CART = 'UPDATE_CART';
// export const DELETE_FROM_CART = 'DELETE_FROM_CART';

// const initialState = {
//   cart: [
//     {
//       product: 'bread 700g',
//       quantity: 2,
//       unitCost: 90
//     },
//     {
//       product: 'milk 500ml',
//       quantity: 1,
//       unitCost: 47
//     }
//   ]
// }

// export const actions = {
//   addToCart: (product, quantity, unitCost) => {
//     return {
//       type: ADD_TO_CART,
//       payload: { product, quantity, unitCost }
//     }
//   },
//   updateCart: (product, quantity, unitCost) => {
//     return {
//       type: ADD_TO_CART,
//       payload: { product, quantity, unitCost }
//     }
//   },
//   deleteFromCart: (product) => {
//     return {
//       type: ADD_TO_CART,
//       payload: { product, quantity, unitCost }
//     }
//   }
// }
// export const cartReduce = (state=initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART: {
//       return {
//         ...state,
//         cart: [...state.cart, action.payload]
//       }
//     }

//     case UPDATE_CART: {
//       return {
//         cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
//       }
//     }

//     case DELETE_FROM_CART: {
//       return {
//         ...state,
//         cart: state.cart.filter(item => item.product !== action.payload.product)
//       }
//     }

//     default:
//       return state;
//   }
// }
