import * as actionTypes from "../cardTypes"

const INITIAL_STATE = {
  products: [
    {
        id: '1',
        name: '1مانتو',
        price: 350000,
        image: '/assets/img/1.jpeg',
      },
      {
        id: '2',
        name: '2مانتو ',
        price: 240000,
        image: '/assets/img/2.jpeg',
      },
      {
        id: '3',
        name: '3مانتو',
        price: 100000,
        image: '/assets/img/745d541ad790b78faffe99ff9277f83c.jpeg',
    },
    {
      id: '4',
      name: '4مانتو',
      price: 400000,
      image: '/assets/img/1.jpeg',
    },
    {
      id: '5',
      name: 'مانتو5',
      price: 240000,
      image: '/assets/img/2.jpeg',
    },
    {
      id: '6',
      name: 'مانتو 6ا',
      price: 100000,
      image: '/assets/img/745d541ad790b78faffe99ff9277f83c.jpeg',
    },
    {
      id: '7',
      name: 'مانتو 7',
      price: 140000,
      image: '/assets/img/1.jpeg',
    },
    {
      id: '8',
      name: 'مانتو 8 ',
      price: 240000,
      image: '/assets/img/2.jpeg',
    },
    {
      id: '9',
      name: 'مانتو 9',
      price: 100000,
   
      image: '/assets/img/745d541ad790b78faffe99ff9277f83c.jpeg',
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
