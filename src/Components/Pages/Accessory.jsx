import React, { useEffect, useState } from "react";

function Accessory() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
      );
      const data = await response.json();

      const filteredData = data.slice(5, 10);
      setProducts(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="Accessory mt-4 md:mt-40">
      <h1 className="ml-4 md:ml-32 text-5xl font-bold">
        Accessories for Men and Women
      </h1>
      <div className="accessoryiteams flex flex-col md:flex-row mx-2 md:mx-56">
        {products.map((product) => (
          <div className="product mx-3 my-4 md:my-8" key={product.id}>
            <a href={`/product/${product.id}`}>
              <div className="productimage">
                <img src={product.preview} alt={product.name} />
              </div>
              <div className="productdetails text-center">
                <p className="text-3xl pt-2 md:pt-4">{product.name}</p>
                <h4
                  className="text-xl py-2 md:py-4 font-bold"
                  style={{ color: "var(--Product-Color)" }}
                >
                  {product.brand}
                </h4>
                <h3
                  className="text-2xl pb-2 md:pb-4 font-bold"
                  style={{ color: "var(--Icon-Color)" }}
                >
                  {product.price}
                </h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessory;