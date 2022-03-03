import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "../reducers/CaroselReducer";
import { ManageTheatreReducer } from "../reducers/ManageTheatreReducer";
import { ManageUserReducer } from "../reducers/ManageUserReducer";
import { MovieListReducer } from "../reducers/MovieListReducer";
const rootReducer = combineReducers({
  //state of entire app
  CarouselReducer,
  MovieListReducer,
  ManageTheatreReducer,
  ManageUserReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
