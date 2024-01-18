import React, { Fragment, useContext } from 'react'
import './Users.css'
import { DataContext } from './../../context/Context';
import UserCard from './usercard/UserCard';

const Users = () => {
  const context = useContext(DataContext);
  // console.log("Users Component = ", context);
  // console.log(context.userAPI.users);

  const [users] = context.userAPI.users;
  // console.log(users);

  return (
    <Fragment>
      <div className="banner">
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-info">USERS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className="row">
        {
          users && users.map((item, index)=>{
            return(<UserCard key={index} {...item} />)
          })
        }
        </div>
      </div>
    </Fragment>
  )
}

export default Users