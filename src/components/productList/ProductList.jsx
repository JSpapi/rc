import React from "react";
import { ProductItem } from "./ProductItem";
import cl from "./ProductList.module.scss";

import data from "../../data";
export const ProductList = () => {
  return (
    <div className={cl.cards}>
      {data.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};
