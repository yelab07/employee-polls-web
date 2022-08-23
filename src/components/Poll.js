import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Poll() {
  return <div>Poll</div>;
}
const mapStateToProps = ({ authedUser, users, questions }) => {
  // try {
  const question = Object.values(questions).find(
    (question) => question.id === useParams().id
  );
  const author = Object.values(users).find(
    (user) => user.id === question.author
  );
  return { authedUser, question, author };
  // } catch (e) {
  // return <Navigate to="/404"/>;
  // throw new Error(`Question or user is not found.\n ${e}`);
  // }
};
export default connect(mapStateToProps)(Poll);
