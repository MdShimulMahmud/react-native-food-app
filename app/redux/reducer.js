import * as actionTypes from "../redux/actionTypes";

const initialState = {
  dishes: [],
  favourites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_DISHES:
      return {
        ...state,
        dishes: action.payload,
      };

    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favourites: state.dishes.concat(action.payload),
      };

    case actionTypes.REMOVE_FAVORITE: {
      return {
        ...state,
        favourites: state.favourites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};

export default reducer;
