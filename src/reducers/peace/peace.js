import constants from "../../constants/index"

export default function peace(state = [], action) {
  switch (action.type) {
    case constants.UPDATE_PIECE:
      return { piece: action.piece };
    case constants.UPDATE_FAILURE:
      return { error: action.error};
    case constants.INITIALIZE_SUCCESS:
      return { piece: action.piece };
    case constants.INITIALIZE_FAILURE:
      return { error: action.error};
    default:
      return state
  }
}