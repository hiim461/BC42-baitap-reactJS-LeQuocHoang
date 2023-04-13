import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./main.module.css";

function DetailsSeat() {
  const { listSelect } = useSelector((state) => {
    const listSelect = state.getData.listSelect;
    return { listSelect };
  });
  const total = (listSelect) => {
    let tt = 0;
    if (listSelect.length === 0) {
      tt = 0;
    } else {
      tt = listSelect.reduce((acc, obj) => {
        return acc + obj.gia;
      }, 0);
    }
    return tt;
  };
  const dispatch = useDispatch();
  const handleBookTickets = (data) => {
    dispatch({ type: "book/book", payload: data });
  };
  const handleCancle = (seatId) => {
    dispatch({ type: "book/cancle", payload: seatId });
  };
  return (
    <div className="bg-white ps-2 pb-1 mt-5">
      <h1 className="text-center">Danh sách ghế bạn đang chọn</h1>
      <div className="">
        <div className={styles.desSeat}>
          <div className={styles.square} style={{backgroundColor:" rgb(173, 173, 173"}}></div>
          <span>Ghế đã đặt</span>
        </div>
        <div className={styles.desSeat}>
          <div className={styles.square} style={{backgroundColor:" rgb(28, 136, 24)"}}></div>
          <span>Ghế đang chọn</span>
        </div>
        <div className={styles.desSeat}>
          <div className={styles.square} style={{backgroundColor:" rgb(64, 63, 63)"}}></div>
          <span>Ghế chưa đặt</span>
        </div>
      </div>
      <table className="table">
        {total(listSelect) ? (
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Action</th>
            </tr>
          </thead>
        ) : null}
        <tbody>
          {listSelect.map((item) => {
            return (
              <tr key={item.soGhe}>
                <td>{item.soGhe}</td>
                <td>{item.gia.toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleCancle(item.soGhe)}
                  >
                    Hủy
                  </button>
                </td>
              </tr>
            );
          })}
          {total(listSelect) ? (
            <tr>
              <td>Tổng tiền</td>
              <td>{total(listSelect).toLocaleString()}</td>
            </tr>
          ) : null}
        </tbody>
      </table>
      {total(listSelect) ? (
        <button
          className="btn btn-success"
          onClick={() =>
            handleBookTickets(
              listSelect.map((it) => {
                return it.soGhe;
              })
            )
          }
        >
          Đặt vé
        </button>
      ) : null}
    </div>
  );
}

export default DetailsSeat;
