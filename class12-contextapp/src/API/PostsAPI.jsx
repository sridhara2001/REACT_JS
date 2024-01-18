import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const PostsAPI = () => {
  const [posts, setPosts] = useState([]);

      // useCallback will return a memorized version of the callback that only changes if one of the inputs has changed
      const getPosts = useCallback(()=>{
            axios.get(`/posts`).then((out)=>{
                  console.log(out);
                  console.log(out.data);
                  setPosts(out.data);
            }).catch(error => toast.error(error.message));
      }, []);

      useEffect(()=>{getPosts()}, []);
      
  return {users: [posts, setPosts]}
}

export default PostsAPI