import React, { useState, useEffect } from "react";

function ProductForm({ onSubmit, product }) {
  //state input
  const [values, setValues] = useState({
    productName: "",
    type: "",
    description: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    setValues(product);
  }, [product]);

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    handleResetForm();
  };

  const handleResetForm = () => {
    setValues({
      productName: "",
      type: "",
      description: "",
      image: "",
      price: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Name</label>
          <input
            name="productName"
            value={values.productName}
            onChange={handleChange}
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="mb-2">
          <label className="form-label">Type</label>
          <input
            name="type"
            value={values.type}
            onChange={handleChange}
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="mb-2">
          <label className="form-label">Description</label>
          <input
            name="description"
            value={values.description}
            onChange={handleChange}
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="mb-2">
          <label className="form-label">Image</label>
          <input
            name="image"
            value={values.image}
            onChange={handleChange}
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="mb-2">
          <label className="form-label">Price</label>
          <input
            name="price"
            value={values.price}
            onChange={handleChange}
            className="form-control"
            type="text"
          ></input>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <button type="button" onClick={handleResetForm} className="btn btn-secondary ms-1">
          Reset
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
