const checkBlocked = (piece, pos2, oppoPiece,) =>{
    
}

export const checkPawn = (piece, pos2, oppoPiece, view) =>{
    var spaces;
    var isFirstMove = piece.init.letter === piece.pos.letter 
        && piece.init.number === piece.pos.number
    if (view){
        if (piece.color === 'white'){
            spaces = piece.pos.number - pos2.number
        } else {
            spaces = pos2.number - piece.pos.number
        }
    } else {
        if (piece.color === 'black'){
            spaces = pos2.number - piece.pos.number
        } else {
            spaces = piece.pos.number - pos2.number
        }
    }
    if (spaces > 0){
       // spaces = (view && piece.color === 'white') || (!view && piece.color === 'white') ? Math.abs(pos2.number - piece.pos.number) : pos2.number - piece.pos.number
        var letter = piece.pos.letter !== pos2.letter
        if (oppoPiece){
            if (spaces === 1 && letter){
                return true
            }
        } else {
            if ((spaces === 1 || (isFirstMove && spaces === 2)) && !letter){
                return true
            }
        }
    } 
};