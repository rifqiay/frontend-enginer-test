const initialState = {
  cart: [],
  qty: 0,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.qty === 0) {
        let Cart = {
          id: action.payload.imdbID,
          name: action.payload.Title,
          image: action.payload.Poster,
          quantity: 1,
        };
        state.cart.push(Cart);
      } else {
        let _cart = {
          id: action.payload.imdbID,
          name: action.payload.Title,
          image: action.payload.Poster,
          quantity: 1,
        };
        state.cart.push(_cart);
      }
      return {
        ...state,
        qty: state.qty + 1,
      };
    case "INCREASE_QUANTITY":
      state.qty++;
      state.cart[action.payload].quantity++;
      return {
        ...state,
      };
    case "DECREASE_QUANTITY":
      let quantity = state.cart[action.payload].quantity;
      if (quantity > 1) {
        state.qty--;
        state.cart[action.payload].quantity--;
      }
      return {
        ...state,
      };
    case "DELETE_CART":
      let quantity_ = null;
      let idCheck = null;
      state.cart.map((item) => {
        if (item.id === action.payload.imdbID) {
          idCheck = item.id;
          quantity_ = item.quantity;
        }
      });
      return {
        ...state,
        qty: state.qty - quantity_,
        cart: state.cart.filter((item) => {
          return item.id !== idCheck;
        }),
      };
    case "ORDER":
      return {
        cart: [],
        qty: 0,
      };
    default:
      return state;
  }
};
