import { fork, all } from 'redux-saga/effects'
import initialize from './initialize/initialize'
import piece from './piece/piece'

export default function* rootSaga() {
  yield all([
     fork(initialize),
      fork(piece)
  ])
}
