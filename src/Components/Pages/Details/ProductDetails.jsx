import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Footer from "../Footer";
import Copyright from "../Copyright";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchProduct();
  }, [productId]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="main">
      <Menu />
      {product && (
        <div className="productfeature flex flex-row flex-wrap mx-72 mt-24 mb-20">
          <div className="productimage" style={{ width: "35%" }}>
            <img
              src={product.photos[selectedImageIndex]}
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
            <h3 className="text-3xl tracking-widest pb-5">Description</h3>
            <h5 className="text-xl tracking-widest pb-5">
              {product.description}
            </h5>
            <h4 className="text-3xl tracking-widest pb-5">Product Preview</h4>
            <div className="imagepreview flex flex-row pb-10">
              {product.photos.map((photo, index) => (
                <img
                  key={index}
                  className={`Imagepre p-2 m-3 rounded-lg cursor-pointer ${
                    index === selectedImageIndex ? "selected" : ""
                  }`}
                  style={{ width: "15%", height: "30%" }}
                  src={photo}
                  alt={`Product Preview ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
            <a href="/#">
              <button
                className="w-56 h-16 rounded-lg text-white text-2xl tracking-widest font-bold"
                style={{ background: "var(--Icon-Color)" }}
              >
                Add to Cart
              </button>
            </a>
          </div>
        </div>
      )}
      <Footer />
      <Copyright />
    </div>
  );
}

export default ProductDetails;
