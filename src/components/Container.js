import React from "react";
import Square from "./Square.js";

const Container = ({ data, id }) => {
  return (
    <div id={id}>
      {data.map((x, i) => {
        return <Square key={i} isOnBoard={false} val={x} opacity={1} backgroundColor={'white'}/>;
      })}
    </div>
  );
};

export default Container;
