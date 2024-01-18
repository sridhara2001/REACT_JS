import React, { Component } from 'react';

class Address extends Component {
      constructor(props) {
            super(props);
      }
      render() {
            const {address, city, state, postalCode, coordinates}  = this.props.address;
            return (
                  <div>
                        <p>
                              <b>Address : </b>
                              <span> {address} </span>
                        </p>
                                                                        
                        <p>
                              <b>City : </b>
                              <span> {city} </span>
                        </p>
                        
                        <p>
                              <b>State : </b>
                              <span> {state} </span>
                        </p> 

                        <p>
                              <b>Postal Code : </b>
                              <span> {postalCode} </span>
                        </p>

                        <p>
                              <b>Coordinates : </b>
                              <span>lat : {coordinates.lat} - lng : {coordinates.lng} </span>
                        </p>
                  </div>
            )
      }
}

export default Address
