import React from "react";
import Model from "./Model";
import Header from "./Header";
import styles from "./main.module.css";
import Glasses from "./Glasses";
import Footer from "./Footer";
import data from "./data.json";

function GlassShop() {
  return (
    <div
      style={{
        backgroundImage: "url(./img/background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="container">
        <Model />
        <Footer />
      </div>
    </div>
  );
}

export default GlassShop;
