import React from "react";
import Model from "./Model";
import Header from "./Header";
import styles from "./main.module.css";
import Glasses from "./Glasses";
import Footer from "./Footer";

function GlassShop() {
  return (
    <div style={{ backgroundImage: "url(./img/background.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"auto" }}>
      <Header />
      <div className="container">
        <Model />
        <Footer/>
      </div>
    </div>
  );
}

export default GlassShop;
