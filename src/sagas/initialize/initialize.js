import {takeEvery, put, call} from "redux-saga/effects"
import actionTypes from "../../constants/"

export default function* initializeSaga() {
  yield takeEvery(actionTypes.INITIALIZE_REQUEST, workerSaga)
}

export function* workerSaga({n}) {
  try {
    const data = yield call(apiFetch, n)
    yield put({ type: actionTypes.INITIALIZE_SUCCESS, piece: data })
    yield put({ type: actionTypes.RECEIVE_PEACE, piece: data })
  } catch (error) {
    yield put({ type: actionTypes.INITIALIZE_FAILURE, error })
  }
}
/** Initialize piece*/
const apiFetch = n => {
  let partA = {
    id: 'part A',
    status: 0,
    features: [
      {
        status: 0,
        id: 'Seam',
        params: [
          { id: 'x',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'y',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'z',
            dev:0,
            status:1,
            history: new Array(n),
            devOutTol: 3
          },
          { id: 'length',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'diameter',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
        ]
      },
      {
        status: 0,
        id: 'Hole',
        params: [
          { id: 'x',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'y',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'z',
            dev:0,
            status:1,
            history: new Array(n),
            devOutTol: 3
          },
          { id: 'length',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'meter',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'diameter',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
        ]
      },
      {
        status: 0,
        id: 'Slot',
        params: [
          { id: 'x',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'y',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'z',
            dev:0,
            status:1,
            history: new Array(n),
            devOutTol: 3
          },
          { id: 'length',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'diameter',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
        ]
      },
      {
        status: 0,
        id: 'Seam',
        params: [
          { id: 'length',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'diameter',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
        ]
      },
      {
        status: 0,
        id: 'Seam',
        params: [
          { id: 'x',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'y',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          },
          { id: 'length',
            dev:0,
            status:0,
            history: new Array(n),
            devOutTol: 0
          }
        ]
      },
    ]
  }
  return {status: 0, parts:[partA]}
};
