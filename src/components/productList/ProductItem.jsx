import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./ProductList.module.scss";

export const ProductItem = ({ product }) => {
  return (
    <article className={cl.card}>
      <div className={cl.card__img}>
        <img src={product.img} alt={product.name} />
      </div>

      <div className={cl.card__body}>
        <h5 className={cl.card__title}>{product.name}</h5>
        <p className={cl.card__price}>${product.price} USD</p>
      </div>
      <NavLink
        className="btn"
        style={{ background: "#4c66d9" }}
        to={`/products/${product.id}`}
      >
        More Info
      </NavLink>
    </article>
  );
};
