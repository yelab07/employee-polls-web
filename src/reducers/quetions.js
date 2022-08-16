import { RECEIVE_QUESTIONS } from "../actions/quetions";

export default function quetsions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.quetsions };
    default:
      return state;
  }
}
