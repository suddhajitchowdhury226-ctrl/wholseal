import React from "react";
import "./Itemcard.scss";
import { useNavigate } from "react-router-dom";

export const Itemcard = ({ image, title, company, price, stock, id }) => {
  const router = useNavigate();
  return (
    <div
      onClick={() => {
        router(`/products-details/${id}`);
      }}
      key={id}
      className="PS__ProductCardWrapper"
    >
      <div className="productImg__wrapper">
        <img src={image} alt="wholesale-retailer.com" />
      </div>
      <div className="PS__productInfoWrapper">
        <div className="productInfo__left">
          <p>{company}</p>
          <h4>{title}</h4>
        </div>
        <div className="productInfo__right">
          <h3>${price}.00</h3>
          <p>{stock}</p>
        </div>
      </div>
    </div>
  );
};
