import React from "react";
import "./ProductList.css";
import { Button, CardBody, Container } from "reactstrap";
const ProductList = ({ id, title, img, price, des, children }) => {
  console.log("render products");
  return (
    <Container>
      <CardBody>
        <div className="pic">
          <img src={img}></img>
        </div>
      </CardBody>
      <CardBody>
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
        </div>
        <CardBody style={{ display: "flex" }}>
          {" "}
          <Button className="m-2" color="success">
            View
          </Button>
          <Button className="m-2" color="success">
            Buy
          </Button>
        </CardBody>
      </CardBody>
    </Container>
  );
};

export default ProductList;
