import React from "react";
import style from "./main.module.css";
import data from "./data.json";
function Glasses() {
  return (
    <div className="container">
      <div className={style.glasses}>
        <div className="col-sm-10" style={{ backgroundColor: "#ffc0cb6b" }}>
          <div className="row">
            <div className="col-sm-2">
              <img
                src="./img/v1.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2">
              <img
                src="./img/v2.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2">
              <img
                src="./img/v3.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2">
              <img
                src="./img/v4.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2">
              <img
                src="./img/v5.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2">
              <img
                src="./img/v6.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2">
              <img
                src="./img/v7.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2">
              <img
                src="./img/v8.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2">
              <img
                src="./img/v9.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glasses;
