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
        notifi = {
          ...notifi,
          title: "Update Success",
          text: "Update product success!",
        };
        Swal.fire({ ...notifi });
        break;
      case "create":
        notifi = {
          ...notifi,
          title: "Create Success",
          text: "Create new product success!",
        };
        Swal.fire({ ...notifi });
        break;
      case "delete":
        notifi = {
          ...notifi,
          title: "Delete Success",
          text: "Delete product success!",
        };
        Swal.fire({ ...notifi });
        break;
      case "loading":
        notifi = {
          ...notifi,
          title: "Delete Success",
          text: "Delete product success!",
          timer: 10000000000000000000,
        };
        Swal.fire({ ...notifi });
        break;
    }
  };
  return <div className="">{showNotification(type)}</div>;
}

export default Notifi;
