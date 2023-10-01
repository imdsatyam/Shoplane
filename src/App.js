import "./App.css";
import { Routes, Route } from "react-router-dom";
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
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
