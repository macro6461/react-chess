import React, { Component } from "react";
import Row from "./Row";
import Container from "./Container";
import Piece from "./Piece";
import "../App.css";
import pieces from "../pieces.js";
const piecesReset = pieces.slice();

const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

class Board extends Component {
  state = {
      gameStarted: false,
      view: true,
      movable: null,
      turn: 0,
      pieces: pieces
  };

  reset = () => {
    this.setState({
      gameStarted: false,
      view: true,
      movable: null,
      turn: 0,
      pieces: piecesReset
    });
  };

  changeView = () => {
    this.setState({
      view: !this.state.view
    });
  };

  setMovable = x => {
    var movable;
    if (this.state.movable) {
      movable = this.state.movable.id !== x.id ? x : null;
    } else {
      movable = x;
    }
    this.setState({
      movable
    });
  };

  setSpot = spot => {
    var pieces = this.state.pieces.map(x => {
      if (x.id === this.state.movable.id) {
        x.pos = spot;
      }
      return x;
    });

    this.setState({
      movable: null,
      pieces,
      gameStarted: true,
      turn: this.state.turn ? 0 : 1
    });
  };

  render() {
    return (
      <div>
        <div id="boardOuter">
          <Container data={letters} id={"numberContainer"} letters={letters} />
          <Container data={numbers} id={"letterContainer"} letters={letters} />
          <div id="boardInner">
            {this.state.pieces.map(x => {
              return (
                <Piece
                  key={x.id}
                  piece={x}
                  setMovable={this.setMovable}
                  movable={this.state.movable}
                  view={this.state.view}
                  letters={letters}
                  turn={this.state.turn}
                />
              );
            })}
            {letters.map((x, i) => {
              return (
                <Row
                  letters={letters}
                  numbers={numbers}
                  index={i}
                  isEven={i % 2 === 0}
                  movable={this.state.movable}
                  setSpot={this.state.movable ? this.setSpot : null}
                />
              );
            })}
          </div>
        </div>
        <br />
        <div
          style={{ display: "block", margin: "auto", width: 100 }}
          onClick={!this.state.gameStarted ? this.changeView : this.reset}
        >
          {this.state.gameStarted ? "Reset" : "Change Sides"}
        </div>
      </div>
    );
  }
}

export default Board;
