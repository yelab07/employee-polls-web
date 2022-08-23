import React from "react";
import { connect } from "react-redux";

function LeaderBoard({ users }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <span>{user.name}</span>
                <br />
                {user.id}
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>

        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
      </table>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(LeaderBoard);
