import { useState } from "react";
import ListProduct from "./ListProduct";
import Modal from "./Modal";
import data from "./data.json";

export default function ShopStore() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectedProduct = (product) => setSelectedProduct(product);

  return (
    <div className="container">
      <ListProduct products={data} onSelect={handleSelectedProduct} />
      <Modal product={selectedProduct} />
    </div>
  );
}
