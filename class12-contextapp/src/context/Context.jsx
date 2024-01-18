import React, { createContext } from 'react'
import UsersAPI from '../API/UsersAPI';
import CommentsAPI from '../API/CommentsAPI';
import PostsAPI from './../API/PostsAPI';

// Init Context
export const DataContext = createContext();

const Context = (props) => {
      const data = {
            userAPI : UsersAPI(),
            commentsAPI : CommentsAPI(),
            postsAPI : PostsAPI()
      };
  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  )
}

export default Context;