import * as Actions from "../actions/actions";

const initialState = {
  products: [
    {
      id: 1,
      name: "Don hang 1",
      price: 123,
      tax: 123,
      total: 246,
    },
    {
      id: 2,
      name: "Don hang 2",
      price: 234,
      tax: 234,
      total: 468,
    },
    {
      id: 3,
      name: "Don hang 3",
      price: 134,
      tax: 134,
      total: 268,
    },
  ],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
  }
  // default: return state
};

export default orderReducer;
