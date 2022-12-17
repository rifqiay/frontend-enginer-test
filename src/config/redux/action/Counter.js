export const handleIncrement = (quantity) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: quantity,
  };
};

export const handleDecrement = (quantity) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: quantity,
  };
};
