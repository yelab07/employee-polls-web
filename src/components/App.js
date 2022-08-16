import { useEffect } from "react";
import { connect } from "react-redux";
import { handleIntitialData } from "../actions/shared";

function App(props) {
  useEffect(() => {
    props.dispatch(handleIntitialData());
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default connect()(App);
