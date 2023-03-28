import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";
import axios from "axios";

function ProductManagement() {
  //state danh sach san pham
  const [products, setProducts] = useState([]);

  //state san pham duoc chon
  const [product, setProduct] = useState({});

  //state searchName
  const [searchByName, setSearchByName] = useState("");

  //Call API get products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://640acb7a65d3a01f98076160.mockapi.io/products",
        {
          params: {
            productName: searchByName || undefined,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      alert(error);
    }
  };

  //Submit Form
  const handleSubmit = async (product) => {
    const { id, ...payLoad } = product;
    try {
      if (id) {
        // update
        await axios.put(
          `https://640acb7a65d3a01f98076160.mockapi.io/products/${id}`,
          payLoad
        );
      } else {
        //add
        await axios.post(
          `https://640acb7a65d3a01f98076160.mockapi.io/products`,
          payLoad
        );
      }
      fetchProducts();
    } catch (error) {
      alert(error);
    }
  };

  //Select product
  const handleSelectProduct = (product) => {
    setProduct(product);
  };

  //Delete product by id
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `https://640acb7a65d3a01f98076160.mockapi.io/products/${productId}`
      );
      fetchProducts();
    } catch (error) {
      alert(error);
    }
  };

  //Search
  const handleSearch = (searchName) => {
    setSearchByName(searchName);
  };

  //useEffect
  useEffect(() => {
    fetchProducts();
  }, [searchByName]);
  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark my-4">Product Management</h1>

      <div className="card">
        <div className="card-header text-light bg-dark">Product Form</div>
        <div className="card-body">
          <ProductForm onSubmit={handleSubmit} product={product} />
        </div>
      </div>

      <div className="mt-3 d-flex justify-content-end">
        <SearchProduct onSearch={handleSearch} />
      </div>

      <div className="mt-3 ">
        <ProductList
          onSelectProduct={handleSelectProduct}
          onDeleteProduct={handleDeleteProduct}
          products={products}
        />
      </div>
    </div>
  );
}

export default ProductManagement;
