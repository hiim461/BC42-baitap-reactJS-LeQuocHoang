import React from "react";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";

function RowSeat({ item }) {
  const listSelect = useSelector((state) => state.getData.listSelect);
  const dispatch = useDispatch();
  const handleSelect = (seatId) => {
    dispatch({ type: "book/select", payload: { isSelecting: true, seatId } });
  };
//   console.log(listSelect);
  return (
    <div className="col-md-10">
      <div className="row">
        {item.danhSachGhe.map((seat) => {
          if (!seat.tag) {
            return (
              <div className={`col-md-1 ${styles.seat}`} key={seat.soGhe}>
                <div
                  onClick={() => handleSelect(seat.soGhe)}
                  className={
                    seat.daDat
                      ? styles.seatDetailsFalse
                      : seat.isSelecting
                      ? styles.seatSelect
                      : styles.seatDetails
                  }
                >
                  <button className={styles.buttonSeat} disabled={seat.daDat}>
                    {seat.soGhe}
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className={`col-md-1 ${styles.tag}`} key={seat.soGhe}>
                <div className={styles.tag}>
                  <span>{seat.soGhe}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default RowSeat;
