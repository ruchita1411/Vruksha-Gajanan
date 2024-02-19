import React, { useEffect, useState } from "react";
import Base from "./Base";
import ProductData from "./ProductData";
import "./Products.css";
import ProductList from "./ProductList";
import { Container } from "reactstrap";
import { loadProduct } from "../Components/Services/ProductService";

const Products = () => {
  const [products, setProducts] = useState(ProductData);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    loadProduct()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Base>
      <Container>
        <div className="Container" style={{ marginTop: "4rem" }}>
          {products.map((product) => (
            <ProductList
              keys={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              des={product.des}
            ></ProductList>
          ))}
        </div>
      </Container>
    </Base>
  );
};

export default Products;
