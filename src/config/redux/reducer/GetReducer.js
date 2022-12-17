const initialState = {
  film: [],
};

export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA_SUCCESS":
      return {
        ...state,
        film: action.payload,
      };
    default:
      return state;
  }
};
