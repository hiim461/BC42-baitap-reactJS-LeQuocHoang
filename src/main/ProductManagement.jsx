import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";
import axios from "axios";
import Notifi from "./Notifi";

function ProductManagement() {
  //state danh sach san pham
  const [products, setProducts] = useState([]);

  //state san pham duoc chon
  const [product, setProduct] = useState({});

  //state searchName
  const [searchByName, setSearchByName] = useState("");

  //state notify
  const [showNotifi, setShowNotifi] = useState({ isShow: false, type: "" });

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
    setShowNotifi({ isShow: false, type: "" });
  };

  //Submit Form
  const handleSubmit = async (product) => {
    const { id, ...payLoad } = product;
    try {
      if (id) {
        // update
        // debugger;
        await axios.put(
          `https://640acb7a65d3a01f98076160.mockapi.io/products/${id}`,
          payLoad
        );
        setShowNotifi({ isShow: true, type: "update" });
      } else {
        //create
        await axios.post(
          `https://640acb7a65d3a01f98076160.mockapi.io/products`,
          payLoad
        );
        setShowNotifi({ isShow: true, type: "create" });
      }
      fetchProducts();
    } catch (error) {
      alert(error);
    }
    // setShowNotifi({ isShow: false, type: "" });
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
      setShowNotifi({ isShow: true, type: "delete" });
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
    setShowNotifi({ isShow: true, type: "loading" });
    fetchProducts();
  }, [searchByName]);
  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark my-4">Product Management</h1>

      <div className="card">
        <div className="card-header text-light bg-dark">Product Form</div>
        <div className="card-body">
          <ProductForm
            onResetNoti={() => setShowNotifi({ isShow: false, type: "" })}
            onSubmit={handleSubmit}
            product={product}
          />
        </div>
      </div>

      <div className="mt-3">
        {showNotifi.isShow && <Notifi type={showNotifi.type} />}
      </div>

      <div className="mt-3 d-flex justify-content-end">
        <SearchProduct onSearch={handleSearch} />
      </div>

      <div className="mt-3 ">
        <ProductList
          onResetNoti={() => setShowNotifi({ isShow: false, type: "" })}
          onSelectProduct={handleSelectProduct}
          onDeleteProduct={handleDeleteProduct}
          products={products}
        />
      </div>
    </div>
  );
}

export default ProductManagement;
