import React, { useState } from "react";
import Base from "./Base";
import ProductData from "./ProductData";
import "./Products.css";
import ProductList from "./ProductList";

const Products = () => {
  const [products, setProducts] = useState(ProductData);
  return (
    <Base>
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
    </Base>
  );
};

export default Products;
