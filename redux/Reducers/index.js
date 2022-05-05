import { combineReducers } from "redux";

import shoppingReducer from "./shopping-reducer.js";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;