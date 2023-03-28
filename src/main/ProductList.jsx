import React from "react";

function ProductList({ products,onDeleteProduct, onSelectProduct }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.type}</td>
              <td>{product.description}</td>
              <td><img src={product.image} alt={product.productName} width="68px" height="68px" /></td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => onSelectProduct(product)} className="btn btn-warning">Edit</button>
                <button onClick={() => onDeleteProduct(product.id)} className="btn btn-danger ms-1">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductList;
