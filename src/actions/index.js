import actionTypes from "../constants/"

export function receivePiece(piece) {
  return {
    type: actionTypes.RECEIVE_PEACE,
    piece
  }
}

export function updatePiece(piece) {
  return {
    type: actionTypes.UPDATE_PIECE,
    piece
  }
}

export function initializeRequest(n) {
  return { type: actionTypes.INITIALIZE_REQUEST, n}
}

export function initializeSuccess(piece) {
  return {
    type: actionTypes.INITIALIZE_SUCCESS,
    piece
  }
}

export function initializeError(error) {
  return {
    type: actionTypes.INITIALIZE_FAILURE,
    error
  }
}