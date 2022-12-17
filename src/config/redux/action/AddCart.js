export const addCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const DeleteCart = (item) => {
  return {
    type: "DELETE_CART",
    payload: item,
  };
};

export const OrderCart = (cart) => {
  return {
    type: "ORDER",
    payload: cart,
  };
};
