import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { getReducer } from "./GetReducer";

export const rootReducer = combineReducers({
  getAllData: getReducer,
  carts: CartReducer,
});
