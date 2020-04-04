import React from "react";
import Square from "./Square";
import "../App.css";

const Row = ({ isEven, letters, numbers, index, setSpot, movable }) => {
  var arr = isEven ? letters.slice().reverse() : letters;
  var num = numbers[index];
  return (
    <div
      className="row"
      style={{ flexDirection: !isEven ? "" : "row-reverse" }}
    >
      {arr.map((x, i) => {
        return (
          <Square
          key={i}
            setSpot={setSpot}
            movable={movable}
            isOnBoard={true}
            pos={{ letter: x, number: num }}
            backgroundColor={i % 2 === 0 ? "grey" : "white"}
          />
        );
      })}
    </div>
  );
};

export default Row;
