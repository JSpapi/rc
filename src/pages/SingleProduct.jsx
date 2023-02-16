import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../data";
export const SingleProduct = () => {
  const { productId } = useParams();
  const { id, img, name, desc, price } = data.find((p) => p.id === +productId);
  return (
    <section className="section-padding singleProduct">
      <div className="container">
        <div className="singleProduct__content">
          <div className="singleProduct__content-left">
            <img src={img} alt={name} />
          </div>
          <div className="singleProduct__content-right">
            <h1 className="singleProduct__content-title">{name}</h1>
            <p className="singleProduct__content-price">${price} USD</p>
            <p className="singleProduct__content-info">{desc}</p>

            <NavLink to="/products" className="btn" style={{background: '#942e2e'}}>
              Back to products
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
