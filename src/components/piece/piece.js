import React, {useEffect, useRef} from 'react';
import { PieceContainer } from "./piece.styles";
import Part from "../part/part"

export default function Piece({ initialize, receive, piece}) {
  /** We maintain the piece updated to maintain the deviation of last N pieces*/
  const savedPiece = useRef()
  useEffect(() => {
    savedPiece.current = piece;
  }, [piece]);
  useEffect(() => {
    /** We create an interva to simulate that a piece is created each 10 seconds*/
    let interval = setInterval(function () {receive(savedPiece.current.piece)},10000);
    /** We initialize with N last deviations*/
    initialize(5)
    return () => clearInterval(interval)
  }, []);
  return  <PieceContainer>{ !piece.piece ?
            <p>Loading...</p> :
            /** Iterate on each part*/
            piece.piece.parts.map(part => <Part part={part}/>)}
          </PieceContainer>
}
