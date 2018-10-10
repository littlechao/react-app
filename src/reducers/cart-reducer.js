// src/reducers/cart-reducer.js

import  { ADD_TO_CART,UPDATE_CART,DELETE_FROM_CART }  from '../actions/cart-actions';

const initialState = {
  cart: [
    {
      title: "测试", 
      time:"2018-10-10",
      content:"测试内容",
      done: false
    },
    {
      title: "测试1", 
      time:"2018-10-11",
      content:"测试内容1",
      done: false
    }
  ]
}

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }

    case UPDATE_CART: {
      return {
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }

    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }

    default:
      return state;
  }
}





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
