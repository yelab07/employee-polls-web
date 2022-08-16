import { combineReducers } from "redux";
import authedUser from "./authedUsers";
import users from "./users";
import questions from "./quetions";
export default combineReducers({
  authedUser,
  users,
  questions,
  // loadingBar: loadingBarReducer,
});
