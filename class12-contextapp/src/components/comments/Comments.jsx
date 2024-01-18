import React, { Fragment, useContext } from 'react'
import { DataContext } from '../../context/Context';
import UserCard from '../users/usercard/UserCard';

const Comments = () => {
  const context = useContext(DataContext);
  // console.log("Users Component = ", context);
  // console.log(context.commentsAPI.comments);

  const [comments] = context.commentsAPI.comments;
  // console.log(comments);

  return (
    <Fragment>
      <div className="banner">
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-info">COMMENTS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className="row">
        {
          comments && comments.map((item, index)=>{
            return(<UserCard key={index} {...item} />)
          })
        }
        </div>
      </div>
    </Fragment>
  )
}

export default Comments