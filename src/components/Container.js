import React from "react";
import Square from "./Square.js";

const Container = ({ data, id }) => {
  return (
    <div id={id}>
      {data.map(x => {
        return <Square isOnBoard={false} val={x} />;
      })}
    </div>
  );
};

export default Container;
