import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import PlaceImage from '../../Assets/img_confirm.png'

function OrderConfirm() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="main">
      <Menu />
      <div className="order-confirmation flex justify-center items-center flex-col my-40">
        <img style={{height:'300px'}} src={PlaceImage} alt="" />
        <h1 className="text-4xl font-semibold">Order Placed Successfully!!</h1>
        <p className="text-3xl my-10">
        We have sent you an email with the order details
        </p>
        <button
          onClick={handleBackToHome}
          className="w-64 h-16 rounded-lg text-white text-2xl tracking-widest font-bold"
          style={{ background: "var(--Icon-Color)" }}
        >
          Back to Home
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default OrderConfirm;
