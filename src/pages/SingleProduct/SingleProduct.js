import React from "react";
import "./SingleProduct.css";
import ShoppingCartOutlineIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useParams } from "react-router-dom";
import { products } from "../../utils/ProductsData";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions";
const SingleProduct = () => {
  let { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);
  let dispatch = useDispatch();
  const addItemToBasket = () => {
    const item = {
      id: singleProduct.id,
      rating: singleProduct.rating,
      title: singleProduct.title,
      price: singleProduct.price,
      image: singleProduct.image,
      specification: singleProduct.specification,
      detail: singleProduct.detail,
    };
    dispatch(addToBasket(item));
  };
  return (
    <div className="single-product-container">
      <img
        className="single-produt-ad"
        src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        alt=""
      />
      <div>
        <div className="single-product">
          <img
            src={singleProduct.image}
            className="single-product-image"
            alt=""
          />
          <div className="single-product-info">
            <div className="single-product-title">{singleProduct.title}</div>
            <div className="single-product-rating">
              {Array(singleProduct.rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))}
            </div>
            <p className="single-product-price">
              Price: <strong>$</strong>
              <strong>{singleProduct.price}</strong>
            </p>
            <div className="single-product-specification">
              <h4>Specification</h4>
              {singleProduct.specification &&
                singleProduct.specification.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </div>
            <div className="single-product-discription">
              <h4>Product Discription</h4>
              <p>{singleProduct.detail}</p>
            </div>
            <button onClick={addItemToBasket}>
              <i>
                <ShoppingCartOutlineIcon />
              </i>
              Add To Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
