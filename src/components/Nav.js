import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
function Nav({ dispatch, authedUserId }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
        {/* <li>
          <Link to="/logout">Logout</Link>
        </li> */}
        <li>
          <Link to=""></Link>
        </li>
      </ul>
    </nav>
  );
}
const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Nav);
