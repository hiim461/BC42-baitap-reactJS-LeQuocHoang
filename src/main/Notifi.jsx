import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Notifi({ type }) {
  const showNotification = (type) => {
    switch (type) {
      case "update":
        Swal.fire({
          title: "Update Success",
          text: "Update product success!",
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
        });
        break;
      case "create":
        Swal.fire({
          title: "Create Success",
          text: "Create new product success!",
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
        });
        break;
      case "delete":
        Swal.fire({
          title: "Delete Success",
          text: "Delete product success!",
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
        });
        break;
      case "loading":
        Swal.fire({
          title: "Loading",
          text: "Loading products..",
          icon: "info",
          timer: 10000000000000000000,
          timerProgressBar: true,
        });
        break;
    }
  };
  return <div className="">{showNotification(type)}</div>;
}

export default Notifi;
