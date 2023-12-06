import React from "react";
import SeatItem from "./SeatItem";
import { useSelector } from "react-redux";

export default function SeatList({ rows }) {
  const selectedStates = useSelector((state) => {
    return state.movieTicket.selectedSeats;
  });

  return (
    <div>
      <h1 className="text-center text-warning mb-5">ĐẶT VÉ XEM PHIM</h1>

      <h5 className="text-center text-white">Màn hình</h5>
      <div className="row">
        <div className="col-12 bg-warning p-5 mb-4 "></div>
        {rows.map((row) => (
          <div key={row.row} className="row">
            <p className="text-white">{row.row}</p>
            {row.seats.map((seat) => {
              const found = selectedStates.find(
                (item) => item.name === seat.name
              );

              return (
                <div key={seat.name} className="col-1">
                  <SeatItem seat={seat} isSelected={!!found} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
