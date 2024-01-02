import axios from "axios";
import * as actionTypes from "./actionTypes";
export const loadDishes = (dishes) => {
  return {
    type: actionTypes.LOAD_DISHES,
    payload: dishes,
  };
};

export const getDishes = () => (dispatch) => {
  axios
    .get("http://localhost:9000/dishes")
    .then((response) => dispatch(loadDishes(response.data)))
    .catch((err) => console.log(err));
};

export const addToFavourites = (dish) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: dish,
  };
};

export const removeFavourite = (dish) => {
  return {
    type: actionTypes.REMOVE_FAVORITE,
    payload: dish,
  };
};
