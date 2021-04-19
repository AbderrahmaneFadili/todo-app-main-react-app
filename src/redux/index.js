import { createStore, applyMiddleware, combineReducers } from "redux";
import themeReducer from "./reducers/themeReducers";
import filterReducer from "./reducers/filterReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  themeReducer: themeReducer,
  filterReducer: filterReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase })),
);

export default store;
