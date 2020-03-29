import React from "react";
import "../App.css";

const Square = ({ backgroundColor, val, isOnBoard, pos, setSpot, movable }) => {
  var className = !isOnBoard ? "label" : "square";

  const handleClick = () => {
    if (setSpot) {
      setSpot(pos);
    }
  };

  return (
    <div
      className={className}
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      {val}
    </div>
  );
};

export default Square;
