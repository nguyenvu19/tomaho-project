import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductComponent from "./components/product";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/product" element={<ProductComponent />} exact />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
