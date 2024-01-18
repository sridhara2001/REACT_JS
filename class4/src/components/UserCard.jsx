import React, { Component, Fragment } from 'react';
import Address from './Address';
import BankDetails from './BankDetails';

class UserCard extends Component {
      constructor(props) {
            super(props);
      }
      render() {
            const {firstName, lastName, image, email, address, bank} = this.props;
            return (
                  <Fragment>
                        <div className="container">
                              <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                          <div className="card my-2 text-center">
                                                <div className="card-header">
                                                      <img src={image ? image : "#"} alt="" className='rounded-circle img-fluid' />
                                                </div>

                                                <div className="card-body">
                                                      <h4 className='card-title text-center'>{firstName + " " + lastName}</h4>
                                                      <p className="text-secondary">
                                                            <i class="bi bi-envelope-open-fill p-1"></i>
                                                            <span className="text-primary">{email}</span>
                                                      </p>
                                                      <details>
                                                            <summary>Address</summary>
                                                            <Address address= {address} />
                                                      </details>
                                                      <details>
                                                            <summary>Bank</summary>
                                                            <BankDetails bank= {bank} />
                                                      </details>
                                                </div>
                                          </div> 
                                    </div>
                              </div>
                        </div>
                  </Fragment>
            );
      }
}

export default UserCard;
