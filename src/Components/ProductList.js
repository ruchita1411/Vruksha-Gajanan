import React from "react";
import "./ProductList.css";
const ProductList = ({ id, title, img, price, des, children }) => {
  console.log("render products");
  return (
    <div className="container">
      <div className="pic">
        <img src={img}></img>
      </div>
      <div
        style={{
          marginLeft: "10px",
          display: "inline-block",
          marginBottom: "16px",
        }}
      >
        <div className="title" style={{ color: "#588157", fontSize: "20px" }}>
          <strong>{title}</strong>
        </div>
        <div className="price">
          <span>₹</span>
          {price}
        </div>
        <div className="description">
          <strong>Description:</strong>{" "}
          <span style={{ marginLeft: "3%" }}>{des}</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProductList;
