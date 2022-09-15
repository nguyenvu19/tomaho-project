import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CartComponent from "./components/cart";
import Heading from "./components/header";
import ProductComponent from "./components/product";
import store from "./redux/store";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Heading />
        <Routes>
          <Route path="/" element={<Navigate replace to="/product" />} />
          <Route path="/product" element={<ProductComponent />} />
          <Route path="/cart" element={<CartComponent />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
