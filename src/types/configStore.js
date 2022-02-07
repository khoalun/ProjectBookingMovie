import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "../reducers/CaroselReducer";
import { MovieListReducer } from "../reducers/MovieListReducer";
const rootReducer = combineReducers({
  //state of entire app
  CarouselReducer,
  MovieListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
