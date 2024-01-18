import React, { Component, Fragment } from 'react';

class Ex9 extends Component {
      constructor(props){
            super(props)
      }

      printMessage(){
            console.log("This is a message");
      }
      showAlert(){
            alert("Button was Clicked");
      }
      clickHandler(){
            this.printMessage();
            this.showAlert();
      }

      render() {
            return (
                  <Fragment>
                        <div className="container">
                              <div className="row">
                                    <div className="col">
                                          <div className="lead my-3 p-3 border rounded">
                                                <p><b>9) Call Multiple functions inside an onClick event handler</b></p>
                                                <button className='btn btn-outline-info' onClick={this.clickHandler.bind(this)}>Ex9 - Click Handler</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </Fragment>
            );
      }
}

export default Ex9;
