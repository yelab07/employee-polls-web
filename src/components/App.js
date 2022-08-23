import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleIntitialData } from "../actions/shared";
// import LoadingBar from "react-redux-loading-bar";

import Dashboard from "./Dashboard";
import "../App.css";
import Nav from "./Nav";

import { Route, Routes } from "react-router-dom";
import LeaderBoard from "./LeaderBoard";
import NewPolls from "./NewPolls";
import Poll from "./Poll";

function App(props) {
  useEffect(() => {
    props.dispatch(handleIntitialData());
  }, []);
  return (
    <Fragment>
      {/* <LoadingBar /> */}

      <div className="container">
        {props.loggedIn && <Nav />}
        {/* {props.loading === true ? null : ( */}
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/questions/:id" element={<Poll />} />
          <Route path="/new" element={<NewPolls />} />
        </Routes>
        {/* )} */}
      </div>
    </Fragment>
  );
}
const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});
export default connect(mapStateToProps)(App);
