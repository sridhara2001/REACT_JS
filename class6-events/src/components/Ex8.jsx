import React, { Component, Fragment } from 'react';

class Ex8 extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  message : 'Event Bind'
            }
      }

      clickHandler=()=>{
            this.setState({ 
                  message : 'Change state' 
            })
      }

      render() {
            return (
                  <Fragment>
                        <div className="container">
                              <div className="row">
                                    <div className="col">
                                          <div className="lead my-3 p-3 border rounded">
                                                <p><b>8) Binding with the help of arrow function</b></p>
                                                <p><b>Message : {this.state.message}</b></p>

                                                <button className="btn btn-outline-info" onClick={this.clickHandler}>Ex8 - Click Handler</button>
                                          </div>
                                    </div>
                              </div>
                        </div>                        
                  </Fragment>
            );
      }
}

export default Ex8;
