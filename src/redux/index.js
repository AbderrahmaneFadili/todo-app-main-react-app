import { createStore, combineReducers } from "redux";
import themeReducer from "./reducers/themeReducers";

const rootReducer = combineReducers({
  themeReducer,
});

const store = createStore(rootReducer);

export default store;
