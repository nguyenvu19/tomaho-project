import * as Actions from "../actions";

const initialState = {
  products: [
    {
      id: 1,
      name: "Bàn",
      image: "https://noithattoz.com/wp-content/uploads/2020/06/ban-chan-sat-1m2-BUD84-sp.jpg",
      price: 100000,
      tax: 10,
    },
    {
      id: 2,
      name: "Ghế ",
      image: "https://product.hstatic.net/1000181810/product/ghe-nhua-chan-go-eames-trang-1_c39e0ca6959c41bcac18f8b5544a959a_master.jpg",
      price: 200000,
      tax: 10,
    },
    {
      id: 3,
      name: "Ghế 2",
      image: "https://winchair.vn/wp-content/uploads/2019/10/Gh%E1%BA%BF-nh%E1%BB%B1a-Dori-m%C3%A0u-xanh-1.jpg",
      price: 200000,
      tax: 10,
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
