import React, { Component } from 'react';

class BankDetails extends Component {
      constructor(props) {
            super(props);
      }
  render() {
      const {cardExpire, cardNumber, cardType, currency, iban}  = this.props.bank;
      return (
            <div>
            <p>
                        <b>Expiry Date : </b>
                        <span> {cardExpire} </span>
                  </p>
                                                                  
                  <p>
                        <b>Card Number : </b>
                        <span> {cardNumber} </span>
                  </p>
                  
                  <p>
                        <b>Card Type : </b>
                        <span> {cardType} </span>
                  </p> 

                  <p>
                        <b>Currency Type : </b>
                        <span> {currency} </span>
                  </p>

                  <p>
                        <b>IFSC CODE : </b>
                        <span> {iban} </span>
                  </p>
            </div>
    )
  }
}

export default BankDetails
