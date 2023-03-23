import React from "react";

function ProductDetails({ isOpen, onClose, product }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        style={{ display: "block" }}
        className="modal show fade"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shoes's details</h5>
              <button
                onClick={onClose}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-5">
                  <img src={product.image} alt={product.name} width="100%" />
                </div>
                <div className="col-sm-7" >
                  <table className="table">
                    <tbody
                      style={{ display: "table-cell", verticalAlign: "middle" }}
                    >
                      <tr>
                        <td>Product's Name</td>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>{product.price}$</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{product.description}</td>
                      </tr>
                      <tr>
                        <td>Quantity in stock</td>
                        <td>{product.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={onClose}
                type="button"
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default ProductDetails;
