import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "../reducers/CaroselReducer";
const rootReducer = combineReducers({
  //state of entire app
  CarouselReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
