import React, { Component, Fragment } from "react";
import  ReactDOM  from "react-dom";
import Counter from "./Components/Counter";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name : "Mounting Phase",
    };
  console.log("THIS IS APP CONSTRUCTOR METHOD..!")
  }

// User Defined Mount Method
  mount() {
    ReactDOM.render(
      <React.StrictMode>
        <Counter counterProps={0} />
      </React.StrictMode>,
      document.getElementById("renderHere")
    );
  }

// User Defined Unmount Method
  unmount() {
    console.log("component Unmounted!");
    ReactDOM.unmountComponentAtNode(document.getElementById("renderHere"));
  }

  render() {
    console.log("THIS IS RENDER METHOD..!")
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-success text-center">LIFECYCLE</h1>
            </div>
          </div>
          <hr />
          <div className="row my-3">
            <div className="col">
              <button type="button" className="btn btn-outline-success" onClick={this.mount.bind(this)}>Mount</button>
              <button type="button" className="btn btn-outline-danger float-end" onClick={this.unmount.bind(this)}>Unmount</button>
            </div>
          </div>
          <hr />
        </div>
        <section id="renderHere"></section>
      </Fragment>
    )
  }
}

export default App;
