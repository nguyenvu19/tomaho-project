import * as Actions from "../actions";

const initialState = {
  products: [
    {
      id: 1,
      name: "San pham 1",
      image: "1.png",
      price: 123,
      tax: 456,
    },
    {
      id: 2,
      name: "San pham 2",
      image: "2.png",
      price: 789,
      tax: 234,
    },
    {
      id: 3,
      name: "San pham 3",
      image: "3.png",
      price: 456,
      tax: 567,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CREATE_NEW_PRODUCT: {
      return state;
    }

    default:
      return state;
  }
};

export default productReducer;
