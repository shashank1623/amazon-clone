import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutProudct from "../../components/Checkout-product/CheckoutProudct";
import Subtotal from "../../components/Subtotal/Subtotal";
const Checkout = () => {
  const [basket, user] = useSelector((state) => state.data);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Your Shopping Basket</h3>
          <h2 className="checkout-title">
            {basket.length === 0
              ? "Your Shopping basket is empty"
              : "Your Shopping Basket"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
