import React from "react";
import styles from "./main.module.css";
import { useSelector, useDispatch } from "react-redux";
import RowSeat from "./RowSeat";

function ListSeat() {
  const { data } = useSelector((state) => {
    const data = state.getData.data;
    return { data };
  });
  return (
    <div>
      <div className=" text-bg-dark">
        <h3 className="text-center">Screen</h3>
        <div className={styles.screen}></div>
        <div style={{ height: "50px" }}></div>
      </div>
      <div className="">
        <ul className="p-0">
          {data.map((item) => {
            return (
              <li key={item.hang} style={{ listStyleType: "none" }}>
                <div className={`row ${styles.row} my-2`}>
                  <div className={`col-md-1 text-start ${styles.tag}`}>
                    <span>{item.hang}</span>
                  </div>
                  <RowSeat item={item} />
                  <div className={`col-md-1 text-end ${styles.tag}`}>
                    <span>{item.hang}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListSeat;
