import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../data";
export const SingleProduct = () => {
  const { productId } = useParams();
  const { id, img, name, desc, price } = data.find((p) => p.id === +productId);
  return (
    <section className="sectiont-title">
      <div className="container">
        <div className="singleProduct__content">
          <div className="singleProduct__content-left">
            <img src="" alt="" />
          </div>
          <div className="singleProduct__content-right">
            <h1></h1>
            <p></p>
            <p></p>

            <NavLink to="/products" className="btn">
              Back to products
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
