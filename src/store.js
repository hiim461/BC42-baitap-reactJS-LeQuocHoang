import { configureStore } from "@reduxjs/toolkit";
import data from "./main/data.json";

let listSelect = [];
function getData(state = { data, listSelect }, action) {
  switch (action.type) {
    case "book/select": {
      const selectSeatsArr = state.data.map((item) => {
        const selectSeats = item.danhSachGhe.map((it) => {
          if (it.soGhe === action.payload.seatId) {
            if (!it.isSelecting) {
              return { ...it, isSelecting: action.payload.isSelecting };
            } else {
              return { ...it, isSelecting: !action.payload.isSelecting };
            }
          }
          return it;
        });
        return { ...item, danhSachGhe: selectSeats };
      });
      for (let i = 0; i < selectSeatsArr.length; i++) {
        let xxx = selectSeatsArr[i].danhSachGhe.reduce((total, it) => {
          return (total = [...total, it]);
        }, []);
        listSelect = [...listSelect, ...xxx];
      }
      listSelect = listSelect.reduce(function (acc, obj) {
        const found = acc.some((el) => el.soGhe === obj.soGhe);
        if (!found) {
          if (obj.isSelecting) {
            acc.push(obj);
          }
        } else {
          if (!obj.isSelecting) {
            let index = acc.findIndex((seat) => seat.soGhe === obj.soGhe);
            acc.splice(index, 1);
          }
        }
        return acc;
      }, []);
      listSelect = listSelect.filter((it) => !it.daDat);

      return {
        ...state,
        data: selectSeatsArr,
        listSelect,
      };
    }
    case "book/book": {
      const listUpdate = state.data.map((item) => {
        const listUpdatePerRow = item.danhSachGhe.map((it) => {
          let index = action.payload.findIndex((number) => number === it.soGhe);
          if (index === -1) {
            return it;
          }
          return { ...it, daDat: true };
        });
        return { ...item, danhSachGhe: listUpdatePerRow };
      });
      listSelect = [];
      return { ...state, data: listUpdate, listSelect };
    }
    case "book/cancle": {
      const listSeats = state.data.map((item) => {
        const listSeatsPerRow = item.danhSachGhe.map((it) => {
          if (it.soGhe === action.payload) {
            return { ...it, isSelecting: false };
          }
          return it;
        });
        return { ...item, danhSachGhe: listSeatsPerRow };
      });
      for (let i = 0; i < listSeats.length; i++) {
        let xxx = listSeats[i].danhSachGhe.reduce((total, it) => {
          return (total = [...total, it]);
        }, []);
        listSelect = [...listSelect, ...xxx];
      }
      listSelect = listSelect.reduce(function (acc, obj) {
        const found = acc.some((el) => el.soGhe === obj.soGhe);
        if (!found) {
          if (obj.isSelecting) {
            acc.push(obj);
          }
        } else {
          if (!obj.isSelecting) {
            let index = acc.findIndex((seat) => seat.soGhe === obj.soGhe);
            acc.splice(index, 1);
          }
        }
        return acc;
      }, []);
      listSelect = listSelect.filter((it) => !it.daDat);
      return { ...state, data: listSeats, listSelect };
    }
    default:
      return state;
  }
  return state;
}

// function getSelectReducer(state = { listSelect }, action) {
//   switch (action.type) {
//     // case value:

//     default:
//       return state;
//   }
// }

const store = configureStore({
  reducer: {
    getData,
  },
});
export default store;
