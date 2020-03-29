import React from "react";
import "../App.css";

const Piece = props => {
  var { piece, letters, view, movable, turn } = props;
  var { teamId, pos, id, code, color } = piece;
  var dir;

  if (teamId === 0 && piece.name !== "Pawn") {
    dir = 0;
  } else if (teamId === 0 && piece.name === "Pawn") {
    dir = 25;
  } else if (teamId === 1 && piece.name === "Pawn") {
    dir = 150;
  } else {
    dir = 175;
  }

  dir = (pos.number - 1) * 25;

  const outerStyle = {
    bottom: view ? null : dir,
    top: !view ? null : dir,
    left: letters.indexOf(pos.letter) * 25,
    border: movable && movable.id === id ? "solid 1px red" : ""
  };

  return (
    <div
      className="piece"
      style={outerStyle}
      onClick={teamId === turn ? () => props.setMovable(piece) : null}
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
