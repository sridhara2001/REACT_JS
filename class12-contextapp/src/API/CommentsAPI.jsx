import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const CommentsAPI = () => {
  const [comments, setComments] = useState([]);

      // useCallback will return a memorized version of the callback that only changes if one of the inputs has changed
      const getComments = useCallback(()=>{
            axios.get(`/comments`).then((out)=>{
                  console.log(out);
                  console.log(out.data);
                  setComments(out.data);
            }).catch(error => toast.error(error.message));
      }, []);

      useEffect(()=>{getComments()}, []);
  return {comments: [comments, setComments]}
}

export default CommentsAPI