import React from "react";
import ItemGlass from "./ItemGlass";

export default function ListGlasses({ glasses, onSelect }) {
  return (
    <div className="container">
      <div className="row text-center">
        {glasses.map((glass) => (
          <div className="col-2" key={glass.id}>
            <ItemGlass glass={glass} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}
