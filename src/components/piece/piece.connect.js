import {initializeRequest, receivePiece} from "../../actions";
import {connect} from "react-redux";
import Piece from "./piece"

const mapStateToProps = state => {
  return {
    piece: state.piece
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initialize: n => dispatch(initializeRequest(n)),
    receive: piece => dispatch(receivePiece(piece))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Piece)