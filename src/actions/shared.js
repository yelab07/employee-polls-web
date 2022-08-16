import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./quetions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleIntitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
