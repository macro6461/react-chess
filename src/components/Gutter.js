import React from 'react';
import Piece from './Piece';
import '../App.css'

const Gutter = (props) =>{

    const {white, black} = props.taken

    return (
        <div style={{transform: !props.view ? null : 'rotate(180deg)' }}>
            <div className="gutter">
                {white.map(x=>{
                    return <Piece
                        key={x.id}
                        piece={x}
                        setMovable={null}
                        movable={null}
                        view={null}
                        letters={props.letters}
                        setOppo={null}
                        turn={null}
                  />
                })}
            </div>
            <div className="gutter">
                {black.map(x=>{
                    return <Piece
                        key={x.id}
                        piece={x}
                        setMovable={null}
                        movable={null}
                        view={null}
                        letters={props.letters}
                        setOppo={null}
                        turn={null}
                />
                })}
            </div>

        </div>
    )
}

export default Gutter;