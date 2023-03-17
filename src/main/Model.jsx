import React, { useState } from "react";
import main from "./main.module.css";

function Model() {
  const [glassUrl, setGlassUrl] = useState("./img/v1.png");
  return (
    <div className="container">
      <div className="row">
        <div className={main.body}>
          <div className="col-sm-3">
            <img src={glassUrl} alt="layout" className={main.imgLayout} />
            <img
              src="./img/model.jpg"
              alt="model"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-sm-3">
            <img
              src="./img/model.jpg"
              alt="model"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className={main.glasses}>
        <div className="col-sm-10" style={{ backgroundColor: "#ffc0cb6b" }}>
          <div className="row">
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v1.png")}>
              <img
                src="./img/v1.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v2.png")}>
              <img
                src="./img/v2.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v3.png")}>
              <img
                src="./img/v3.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v4.png")}>
              <img
                src="./img/v4.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v5.png")}>
              <img
                src="./img/v5.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v6.png")}>
              <img
                src="./img/v6.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v7.png")}>
              <img
                src="./img/v7.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v8.png")}>
              <img
                src="./img/v8.png"
                alt="g1"
                style={{ maxWidth: "100%", padding: "10px" }}
              />
            </div>
            <div className="col-sm-2" onClick={() => setGlassUrl("./img/v9.png")}>
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

export default Model;
