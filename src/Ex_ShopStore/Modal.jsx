import React from "react";

export default function Modal({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="row m-6">
      <div className="col-4">
        <h3>{product.name}</h3>
        <img
          src={product.image}
          alt={product.name}
          height={400}
          className="mx-auto d-block"
        />
      </div>
      <div className="col-8">
        <h3>Thông tin sản phẩm</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Tên gọi khác</td>
              <td>{product.alias}</td>
            </tr>
            <tr>
              <td>Mô tả chi tiết</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>Tóm tắt</td>
              <td>{product.shortDescription}</td>
            </tr>
            <tr>
              <td>Chất lượng</td>
              <td>{product.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
