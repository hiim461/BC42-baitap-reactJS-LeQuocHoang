import React, { useState } from "react";
import main from "./main.module.css";
import data from "./data.json";

function Model() {
  const [ele, setEle] = useState({url: "./img/v1.png", name: "GUCCI G8850U",desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." });
  // 
  const handleClick = (h1, h2, h3) => {
    setEle({url: `${h1}`, name:`${h2}`, desc: `${h3}` });
  };
  return (
    <div className="container">
      <div className="row">
        <div className={main.body}>
          <div className="col-sm-3" style={{position:"relative"}}>
            <img src={ele.url} alt="layout" className={main.imgLayout} id="glLayout" />
            <img
              src="./img/model.jpg"
              alt="model"
              style={{ maxWidth: "100%" }}
            />
            <div className={main.tag}>
              <h3>{ele.name}</h3>
              <p>{ele.desc}</p>
            </div>
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
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-sm-2"
                  onClick={() => handleClick(`${item.url}`, `${item.name}`, `${item.desc}`)}
                >
                  <img
                    src={item.url}
                    alt={data.name}
                    style={{ maxWidth: "100%", padding: "10px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
