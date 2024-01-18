import React, { Fragment, useContext } from 'react'
import { DataContext } from '../../context/Context';
import UserCard from '../users/usercard/UserCard';

const Posts = () => {
  const context = useContext(DataContext);
  // console.log("Posts Component = ", context);
  // console.log(context.postsAPI.posts);

  const [users] = context.postsAPI.users;
  // console.log(posts);

  return (
    <Fragment>
      <div className="banner">
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-info">POSTS</h1>
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

export default Posts