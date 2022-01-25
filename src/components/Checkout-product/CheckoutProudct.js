import React from "react";
import "./CheckoutProduct.css";
import ShoppingCartOutlineIcon from "@material-ui/icons/ShoppingCartOutlined";

import { useDispatch } from "react-redux";
const CheckoutProudct = ({ id, title, image, rating, price }) => {
  let dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeItemFromBasket(id));
  };
  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product-image" />
      <div className="checkout-product-title">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <button onClick={removeItemFromBasket}>
          <i>
            <ShoppingCartOutlineIcon />
          </i>
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProudct;
