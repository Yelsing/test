import {takeEvery, put, call} from "redux-saga/effects"
import actionTypes from "../../constants/"

/** Fake backend*/
export default function* newPieceSaga() {
  yield takeEvery(actionTypes.RECEIVE_PEACE, workerSaga)
}

export function* workerSaga({ piece }) {
  try {
    const data = yield call(newPiece, piece)
    yield put({ type: actionTypes.UPDATE_PIECE, piece: data })
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_FAILURE, error })
  }
}

const newPiece = (piece) => {
  /** Initialization of piece status*/
  piece.status = 0
  piece.parts.forEach(part => {
    /** Initialization of part status*/
    part.status = 0
    part.features.forEach(feature => {
      /** Initialization of feature status*/
      feature.status = 0
      feature.params.forEach(param => {
        /** Generate random deviation*/
        param.dev = Math.floor((Math.random() * 5))
        /** Remove last deviation from first position and append new value at last*/
        param.history = param.history.slice(1, param.history.length)
        param.history.push(param.dev)
        /** Sum the last N deviations*/
        param.devOutTol = getSum(param.history)
        /** Generate random status*/
        param.status = Math.floor((Math.random() * 3))
        /** Accumulate status for feature*/
        feature.status += param.status
      })
      /** Calculate rounded status for feature*/
      feature.status = Math.round(feature.status / feature.params.length)
      /** Accumulate status for part*/
      part.status += feature.status
    })
    /** Calculate rounded status for part*/
    part.status = Math.round(part.status / part.features.length)
    /** Accumulate status for piece*/
    piece.status += part.status
      })
  /** Calculate rounded status for piece*/
  piece.status = Math.round(piece.status / piece.parts.length)
  return piece
}

const getSum = array => array.reduce((a, b) => a + b, 0)