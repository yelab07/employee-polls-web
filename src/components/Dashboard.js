import { connect } from "react-redux";

import React from "react";

function Dashboard({ authedUser, questions, users }) {
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  return (
    <div>
      <div className="dashboardDiv">
        <div className="list-books-title">
          <h1>New Questions</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {questions.filter(unanswered).map((question) => (
                  <li key={question.id} className="book">
                    <div className="book-top">
                      <div
                        className="book-cover "
                        //  question={question} author={users[question.author]}
                      >
                        <p className="book-title">{question.author}</p>
                        <p className="book-authors">
                          {new Date(question.timestamp).toDateString()}
                        </p>
                        <button className="book-shelf-changer">Show</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardDiv">
        <div className="list-books-title">
          <h1>Done</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {questions.filter(answered).map((question) => (
                  <li key={question.id} className="book">
                    <div className="book-top">
                      <div
                        className="book-cover "
                        //  question={question} author={users[question.author]}
                      >
                        <p className="book-title">{question.author}</p>
                        <p className="book-authors">
                          {new Date(question.timestamp).toDateString()}
                        </p>
                        <button className="book-shelf-changer">Show</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});
export default connect(mapStateToProps)(Dashboard);
