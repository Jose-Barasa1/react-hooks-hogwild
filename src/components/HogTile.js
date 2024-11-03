import React from "react";
import "./style.css"

const HogTile = ({ hog, isHidden, toggleHide, onClick }) => {
  if (isHidden) return null;

  return (
    <div className="hogTile" onClick={onClick} style={{ cursor: "pointer" }}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} width="150" />
      <button onClick={(e) => { e.stopPropagation(); toggleHide(); }}>
        {isHidden ? "Unhide" : "Hide"}
      </button>
    </div>
  );
};

export default HogTile;

