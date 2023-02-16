import React from "react";
import { ProductList } from "../components/productList/ProductList";

export const Products = () => {
  return (
    <section className="products section-padding">
      <h2 className="section-title">Our Products</h2>
      <div className="container">
        <div className="products__content">
          <ProductList />
        </div>
      </div>
    </section>
  );
};
