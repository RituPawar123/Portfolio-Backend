import { applyMiddleware, combineReducers, createStore } from "redux";
import ageReducer from "./reducers/ageReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  age: ageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
