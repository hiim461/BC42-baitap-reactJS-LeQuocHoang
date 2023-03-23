import React from "react";

function ProductItem({ product, onOpen, onGetProduct }) {
  const handleClick = (product) => {
    onOpen();
    onGetProduct(product);
  };
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="100%" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}$</p>
        <p className="card-text">{product.shortDescription}</p>
        <button onClick={()=> handleClick(product)} className="btn btn-primary">
          Details
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
