import React from 'react'

const UserCard = (props) => {
      const {name, email, phone, website, username} = props;
  return (
      <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
            <div className="card my-3 shadow">
                  <div className="card-header bg-info">
                        <h4 className="text-white text-center">{name}</h4>
                  </div>
                  <div className="card-body">
                        <ul className="list-group">
                              <li className="list-group-item text-info">
                                    <i className="bi bi-envelope-at"></i>
                                    <span className='float-end'>{email}</span>
                              </li>
                              <li className="list-group-item text-info">
                                    <i className="bi bi-phone-vibrate"></i>
                                    <span className='float-end'>{phone}</span>
                              </li>
                              <li className="list-group-item text-info">
                                    <i className="bi bi-browser-chrome"></i>
                                    <span className='float-end'>{website}</span>
                              </li>
                              <li className="list-group-item text-info">
                                    <i className="bi bi-person-add"></i>
                                    <span className='float-end'>{username}</span>
                              </li>
                        </ul>
                  </div>
            </div>
      </div>
  )
}

export default UserCard