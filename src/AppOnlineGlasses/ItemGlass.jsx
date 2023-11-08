import React from "react";

export default function ItemGlass({ glass, onSelect }) {
  const { id, url, name } = glass;
  return (
    <div>
      <img
        style={{ cursor: "pointer" }}
        src={url}
        alt={name}
        height={60}
        onClick={() => onSelect(glass)}
      />
    </div>
  );
}
