import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Clothing from "./Components/Clothing";
import Accessories from "./Components/Accessories";
import ProductDetails from "./Components/Pages/Details/ProductDetails";
import Product from "./Components/Pages/Details/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/product" element={<Product />} />
        <Route path="/old-page" element={<CustomRedirect />} />
      </Routes>
    </div>
  );
}

function CustomRedirect() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/new-page");
  }, [navigate]);

  return <p>Redirecting...</p>;
}

export default App;
