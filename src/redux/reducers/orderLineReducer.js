import * as Actions from "../actions/actions";

const initialState = {
  products: [
    {
      idProduct: 1,
      amount: 1,
      price: 123,
      tax: 123,
      total: 246,
    },
    {
      idProduct: 2,
      amount: 2,
      price: 123,
      tax: 123,
      total: 369,
    },
    {
      idProduct: 3,
      amount: 1,
      price: 123,
      tax: 123,
      total: 246,
    },
  ],
};

const orderLineReducer = (state = initialState, action) => {
  switch (action.type) {
  }
  // default: return state
};

export default orderLineReducer;
