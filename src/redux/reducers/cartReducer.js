import * as Actions from "../actions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_CART:
      return state;
    default:
      return state;
  }
  // default: return state
};

export default cartReducer;
