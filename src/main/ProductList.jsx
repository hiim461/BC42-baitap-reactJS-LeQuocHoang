import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, onOpen, onGetProduct }) {
  const handleGetProduct = (product) => {
    onGetProduct(product);
  };
  return (
    <div className="row" height="100%">
      {products.map((item) => {
        return (
          <div key={item.id} className="col-sm-4 p-3 d-flex align-items-stretch" >
            <ProductItem onGetProduct={handleGetProduct} onOpen={onOpen} product={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
