import { createStore, applyMiddleware, combineReducers } from "redux";
import themeReducer from "./reducers/themeReducers";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

const rootReducer = combineReducers({
  themeReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
);

export default store;
