import React, { Fragment } from 'react'
import Address from './Address'
import Bank from './Bank'

const UserCard = (props) => {
  return (
    <Fragment>
      <div className="container">
            <div className="row">
                  <div className="col-12 my-2">
                        <div className="border p-2 lead radius text-center">
                              <h4 className="bg-secondary p-3 text-white">User Details</h4>
                              <p><b>Id :</b> {props.id}</p>
                              <p><b>Name :</b> {props.name}</p>
                              <p><b>Email :</b> {props.email}</p>
                              <p><b>Age :</b> {props.age} Years</p>
                              <p><b>City :</b> {props.address.city}</p>
                              <p><b>PinCode :</b> {props.address.pin}</p>

                              <div className="border p-2 lead my-2">
                                    <Address {...props.address}/>
                              </div>

                              <div className="border p-2 lead">
                                    {
                                          props.bank.map((item, index)=>{
                                                return(<Bank key={index} {...item} />)
                                          })
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      </div>
    </Fragment>
  )
}

export default UserCard
