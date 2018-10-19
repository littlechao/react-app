// // src/actions/cart-actions.js

// export const ADD_TO_CART = 'ADD_TO_CART';
// export const UPDATE_CART = 'UPDATE_CART';
// export const DELETE_FROM_CART = 'DELETE_FROM_CART';

// export function addToCart(product, quantity, unitCost) {
//   return {
//     type: ADD_TO_CART,
//     payload: { product, quantity, unitCost }
//   }
// }

// export function updateCart(product, quantity, unitCost) {
//   return {
//     type: UPDATE_CART,
//     payload: {
//       product,
//       quantity,
//       unitCost
//     }
//   }
// }

// export function deleteFromCart(product) {
//   return {
//     type: DELETE_FROM_CART,
//     payload: {
//       product
//     }
//   }
// }


// src/actions/cart-actions.js

export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const SEARCH_CART = 'SEARCH_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

// {
//   title: "测试1", 
//   time:"2018-10-11",
//   content:"测试内容1",
//   done: false
// }
export function addToCart(params) {
  return {
    type: ADD_TO_CART,
    payload: params
  }
}

export function updateCart(title) {
  return {
    type: UPDATE_CART,
    payload: {
      title
    }
  }
}

export function deleteFromCart(title) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      title
    }
  }
}
export function searchCart(title) {
  return {
    type: SEARCH_CART,
    payload: {
      title
    }
  }
}