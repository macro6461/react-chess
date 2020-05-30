import React, { Component } from "react";
import Row from "./Row";
import Container from "./Container";
import Piece from "./Piece";
import Gutter from "./Gutter";
import ImageCropper from './ImageCropper';
import "../App.css";
import pieces from "../pieces.js";
import {checkPawn} from '../services.js'

const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

class Board extends Component {
  state = {
      gameStarted: false,
      view: true,
      movable: null,
      oppoPiece: null,
      taken: {white: [], black: []},
      turn: 0,
      pieces,
      piecesReset: pieces.slice()
  };

  reset = () => {
    var pieces = this.state.piecesReset.map(x=>{
      x.pos = x.init
      return x
    })
    this.setState({
      gameStarted: false,
      view: true,
      movable: null,
      taken: {white: [], black: []},
      turn: 0,
      pieces,
    });
  };

  changeView = () => {
    this.setState({
      view: !this.state.view
    });
  };

  setOppo = (oppoPiece) =>{
    if (this.state.movable){
      this.setState({
        oppoPiece
      },()=>{
        this.setSpot(oppoPiece.pos)
      })
    }
  };

  setMovable = x => {
    var movable
    if (this.state.movable) {
      movable = this.state.movable.id !== x.id ? x : null;
    } else {
      movable = x;
    }
    this.setState({
      movable
    });
  };

  setSpot = (pos2) => { 
    var movable = this.state.movable
    var taken= this.state.taken;
    if (movable.name === 'Pawn' && checkPawn(movable, pos2, this.state.oppoPiece, this.state.view)){
      var pieces = this.state.pieces.map(x => {
        if (x.id === this.state.movable.id) {
          x.pos = pos2;
        }
        return x;
      }).filter((x)=>{
        if (this.state.oppoPiece){
          return  x.id !== this.state.oppoPiece.id
        } else {
          return x
        }
      });

      if (this.state.oppoPiece){
        taken[this.state.oppoPiece.color].push(this.state.oppoPiece)
        this.setState({
          taken
        })
      }
  
      this.setState({
        pieces,
        gameStarted: true,
        turn: this.state.turn ? 0 : 1,
        movable: null,
        oppoPiece: null
      });
    } else {
      this.setState({oppoPiece:null})
    }
  };

  render() {
    return (
      <div className='board' style={{height: !this.props.fromPreview ? null : 'auto'}}>
      <div>
      {!this.props.fromPreview 
        ? <div onClick={!this.state.gameStarted ? this.changeView : this.reset} style={{display: 'block', margin: 'auto'}}>
          <p style={{minWidth: 100, cursor: 'pointer', textAlign: 'right'}}>{this.state.gameStarted ? "Reset" : "Change Sides"}</p>
        </div>
        : null 
      }
        <div id="boardOuter">
          <Container data={letters} id={"numberContainer"} letters={letters} />
          <Container data={numbers} id={"letterContainer"} letters={letters} />
          <div id="boardInner" style={{transform: this.state.view ? null : 'rotate(180deg)'}}>
            {this.state.pieces.map(x => {
              return (
                <Piece
                  key={x.id}
                  piece={x}
                  setMovable={this.setMovable}
                  movable={this.state.movable}
                  view={this.state.view}
                  letters={letters}
                  setOppo={this.setOppo}
                  turn={this.state.turn}
                />
              );
            })}
            {letters.map((x, i) => {
              return (
                <Row
                  key={x + numbers[i]}
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
        {!this.props.fromPreview
          ? <Gutter taken={this.state.taken} letters={letters} view={this.state.view}/>
          : null
        }
      </div>
      </div>
    );
  }
}

export default Board;
