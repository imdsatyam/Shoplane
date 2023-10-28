import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Clothing from "./Components/Clothing";
import Accessories from "./Components/Accessories";
import ProductDetails from "./Components/Pages/Details/ProductDetails";
import Product from "./Components/Pages/Details/Product";
import Checkout from "./Components/Pages/Checkout/Checkout";
import OrderConfirm from "./Components/Pages/OrderConfirm";
import { CartContextProvider } from "./Components/Pages/Checkout/Cartcontest";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderconfirm" element={<OrderConfirm />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
