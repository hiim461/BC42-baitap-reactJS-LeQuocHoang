import React, { useState } from "react";
import data from "./data.json";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

function ShoeShop() {
  //state open/close modal
  const [isOpen, setIsOpen] = useState(false);
  //state quản lý sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">461 Store</h1>
      <ProductList
        onGetProduct={handleGetProduct}
        onOpen={() => {
          setIsOpen(true);
        }}
        products={data}
      />
      <ProductDetails
        product={selectedProduct}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default ShoeShop;
