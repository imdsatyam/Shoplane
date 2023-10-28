import React, { useEffect, useState } from "react";
import { useCart } from "./Cartcontest";
import Menu from "../Menu";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, dispatch } = useCart();
  const [productImages, setProductImages] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductImages() {
      try {
        const response = await fetch(
          "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
        );
        const data = await response.json();
        const imageMap = {};
        data.forEach((product) => {
          imageMap[product.id] = product.photos[0];
        });
        setProductImages(imageMap);
      } catch (error) {
        console.error("Error fetching product images:", error);
      }
    }

    fetchProductImages();
  }, []);

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "INCREMENT_QUANTITY", itemId: item.id });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREMENT_QUANTITY", itemId: item.id });
  };

  const placeOrder = () => {
    dispatch({ type: "CLEAR_CART" });
    navigate("/orderconfirm");
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div className="main">
      <Menu />
      <div className="checkout mx-4 mt-4 md:mx-10 md:mt-10 lg:mx-44 lg:mt-32">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Checkout</h1>
        <h3 className="mt-2 text-2xl md:mt-4 md:text-3xl lg:text-4xl">
          Total Items: {cart.length}
        </h3>
      </div>
      <div className="checkoutdetails mx-4 mt-4 md:mx-10 md:mt-6 lg:mx-44 lg:mt-10 mb-4 md:mb-10 flex flex-col-reverse md:flex-row justify-between">
        <div className="product-list w-full md:w-6/12">
          {cart.map((item) => (
            <div
              className="itemdetails mb-4 md:mb-10 p-4 md:p-10 flex flex-row rounded"
              key={item.id}
            >
              <div className="productimage">
                <img
                  src={productImages[item.id]}
                  alt={item.name}
                  className="w-72 h-72 md:w-48 md:h-48 lg:w-36 lg:h-36"
                />
              </div>
              <div className="productdetails my-auto mx-2 md:mx-2">
                <h2 className="text-2xl md:text-3xl font-medium">{item.name}</h2>
                <p className="text-2xl mt-2 md:mt-4">Price: Rs {item.price}</p>
                <div className="quantity w-3/12 md:w-4/12 mt-2 md:mt-4 justify-between">
                  <button
                    onClick={() => decreaseQuantity(item)}
                    className="quantity-button float-left first:ml-0 text-xl md:text-2xl font-semibold flex w-6 h-6 md:w-8 md:h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white text-green-500"
                  >
                    -
                  </button>
                  <span className="text-2xl ml-6 md:ml-14">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="quantity-button float-right first:ml-0 text-xl md:text-2xl font-semibold flex w-6 h-6 md:w-8 md:h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white text-green-500"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="itemdetails w-full md:w-4/12 h-1/4 mb-4 md:mb-10 p-4 md:p-10 rounded">
          <div className="amount">
            <h1 className="text-2xl md:text-3xl">Total Amount</h1>
            <h3 className="text-xl md:text-2xl mt-2 md:mt-4">
              Total Amount: Rs{" "}
              <span className="text-2xl md:text-3xl font-bold">
                {totalAmount.toFixed(2)}
              </span>
            </h3>
          </div>
          <div className="order">
            <button
              className="mt-10 w-48 h-12 md:w-56 md:h-16 rounded-lg text-white text-xl md:text-2xl tracking-widest font-bold"
              style={{ background: "var(--Icon-Color)" }}
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
