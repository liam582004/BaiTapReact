import React from "react";

export default function ProductItem({ product, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(product)}>
      <img src={product.image} alt={product.name} height={400} />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}</p>
        <button className="btn btn-dark">Add to Carts</button>
      </div>
    </div>
  );
}
