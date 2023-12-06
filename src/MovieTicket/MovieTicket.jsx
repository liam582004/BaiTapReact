import React from "react";
import Tickets from "./Tickets";
import SeatList from "./SeatList";
import data from "./data.json";

export default function MovieTicket() {
  return (
    <div className=" bg-dark">
      <div className="container">
        <div className="row ">
          <div className="col-7">
            <SeatList rows={data} />
          </div>
          <div className="col-5">
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  );
}
