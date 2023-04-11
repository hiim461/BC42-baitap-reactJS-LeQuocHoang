import React from "react";
import main from "./main.module.css";
import ListSeat from "./ListSeat";
import DetailsSeat from "./DetailsSeat";

function BookTickets() {
  return (
    <div className="container-fluid">
      <h1 className={`bg-warning text-center ${main.header}`}>Ticket Box</h1>

      <div className="row mt-3">
        <div className="col-md-9">
          <ListSeat />
        </div>
        <div className="col-md-3">
          <DetailsSeat />
        </div>
      </div>
    </div>
  );
}

export default BookTickets;
