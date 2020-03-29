import React from "react";
import "../App.css";

const Piece = props => {
  var { piece, letters, view, movable, turn } = props;
  var { teamId, pos, id, code, color } = piece;

  var dir = (pos.number - 1) * 25;

  var outerStyle={
    left: letters.indexOf(pos.letter) * 25,
    border: movable && movable.id === id ? "solid 1px red" : "",
    top: dir,
    transform: view ? null : 'rotate(180deg)'
  }

  return (
    <div
      className="piece"
      style={outerStyle}
      onClick={teamId === turn ? () => props.setMovable(piece) : ()=>props.setOppo(piece)}
      key={id}
    >
      {code ? (
        <p dangerouslySetInnerHTML={{ __html: `${code}` }} />
      ) : (
        <div
          style={{
            backgroundColor: color,
            border: teamId < 1 ? "solid 1px black" : "solid 1px white"
          }}
        >
          <span
            style={{
              fontSize: 5,
              color: color === "black" ? "white" : "black"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Piece;
