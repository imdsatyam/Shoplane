import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="main">
      <div>
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="productfeature flex flex-row flex-wrap mx-72 mt-24 mb-20"
          >
            <div className="productimage" style={{ width: "35%" }}>
              <img
                src={product.photos[0]}
                alt={`Product ${product.id}`}
                style={{ width: "100%" }}
              />
            </div>
            <div className="productdetails ml-14" style={{ width: "60%" }}>
              <h1 className="text-6xl font-medium pb-5">{product.name}</h1>
              <h4 className="text-3xl tracking-widest pb-5">{product.brand}</h4>
              <h3 className="text-3xl tracking-widest pb-5">
                Price: Rs{" "}
                <span className="text-green-600 font-semibold">
                  {product.price}
                </span>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product;
