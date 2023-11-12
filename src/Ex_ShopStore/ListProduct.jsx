import React from "react";
import ProductItem from "./ProductItem";

export default function ListProduct({ products, onSelect }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-4">
          <ProductItem product={product} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}
