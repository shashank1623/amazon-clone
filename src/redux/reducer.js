import * as types from "./actionTypes";

const intialState = {
  loading: false,
  basket: [],
  user: null,
  error: null,
};
const basketReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.ADD_TO_BASKET:
      const newBasket = [...state.basket, action.payload];
      return {
        ...state.basket,
        basket: newBasket,
      };

    case types.REMOVE_FROM_BASKET:
      let updatedBasket = [...state.basket];
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        updatedBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: updatedBasket,
      };
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default basketReducer;
