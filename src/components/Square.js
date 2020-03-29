import React from "react";
import "../App.css";

const Square = ({ backgroundColor, val, isOnBoard, pos, setSpot }) => {
  var className = !isOnBoard ? "label" : "square";

  const handleClick = () => {
    console.log(pos);
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
