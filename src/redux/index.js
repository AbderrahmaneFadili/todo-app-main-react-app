import { createStore, applyMiddleware, combineReducers } from "redux";
import themeReducer from "./reducers/themeReducers";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

const rootReducer = combineReducers({
  themeReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
);

export default store;
