import React from "react";
import Base from "./Base";
import ProductData from "./ProductData";

const Products = () => {
  return (
    <Base>
      <div className="container mt-5">
        {ProductData.map((currElm) => {
          return (
            <>
              <div className="row">
                <div className="col-md-3">
                  <div className="col-md-12">
                    <img
                      className=" img-fluid"
                      src={currElm.img}
                      alt={currElm.title}
                    />
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h3>{currElm.title}</h3>
                      <p>{currElm.price}</p>
                    </div>
                    <button>View</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Base>
  );
};

export default Products;
