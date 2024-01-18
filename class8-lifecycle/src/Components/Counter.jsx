import React, { Component, Fragment } from 'react';
import  ReactDOM  from "react-dom";

class Counter extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  isActive: false
            };
            console.log("THIS IS APP CONSTRUCTOR METHOD..!");
      }
      
      componentWillMount(){
            console.log("Component will Mount (Deprecated)");
          }

      componentDidMount(){
            console.log("Component did Mount called");
      }

      // User Defined Method
      updateCounter(){
            ReactDOM.render(
                  <React.StrictMode>
                    <Counter counterProps={this.props.counterProps + 1} />
                  </React.StrictMode>,
                  document.getElementById("renderHere")
            );
      }

      // Deprecated
      componentWillReceiveProps(nP, nC) {
            console.log('component will receive props');
            console.log("New Props =", nP);
            console.log("New State =", nC);

            if (nP.counterProps > 5) {
                  this.setState({
                        isActive: true
                  });
            }
      }

      // Decision Maker
      shouldComponentUpdate(nP,nS){
            console.log(" Should Component Update");
            console.log("newProps =", nP);
            console.log("newState =", nS);
            return true;
      }

      // Deprecated
      componentWillUpdate(nP,nS){
            console.log("Component Will Update");
            console.log("newProps =", nP);
            console.log("newState =", nS);
      }
      
      render() {
            console.log("This is a Counter Render Method..!");
            return (
                  <Fragment>
                        <div className="container">
                              <div className="row">
                                    <div className="col">
                                          <h1 className="text-primary text-center">Counter</h1>
                                    </div>
                              </div>
                              <hr />
                              <div className="row">
                                    <div className="col text-center">
                                          <h1>{this.props.counterProps}</h1>
                                          <div className='lead p-3 border text-center'>
                                                {
                                                      this.state.isActive ? <h1 className='text-success'>WELCOME TO LIFECYCLE METHODS</h1> : (
                                                            <div>
                                                                  <h1 className="text-secondary">Need More Counts</h1>
                                                                  <button type='button' className="btn btn-outline-warning" onClick={this.updateCounter.bind(this)}>Add +1 (Update Props value)</button>
                                                            </div>
                                                      )
                                                }
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </Fragment>
            );
      }

      componentDidUpdate(oP, oS){
            console.log("Component Did Update");
            console.log("oldProps =", oP);
            console.log("oldState =", oS);
      }

      componentWillUnmount(){
            console.log("Component Successfully Unmounted");
      }
}

export default Counter;
