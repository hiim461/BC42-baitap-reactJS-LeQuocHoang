import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Notifi({ type }) {
  const showNotification = (type) => {
    let notifi = {
      icon: "success",
      timer: 1000,
      timerProgressBar: true,
    };
    switch (type) {
      case "update":
        Swal.fire({
          ...notifi,
          title: "Update Success",
          text: "Update product success!",
        });
        break;
      case "create":
        Swal.fire({
          ...notifi,
          title: "Create Success",
          text: "Create new product success!",
        });
        break;
      case "delete":
        Swal.fire({
          ...notifi,
          title: "Delete Success",
          text: "Delete product success!",
        });
        break;
    }
  };
  return <div className="">{showNotification(type)}</div>;
}

export default Notifi;
