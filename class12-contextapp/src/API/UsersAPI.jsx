import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UsersAPI = () => {
      const [users, setUsers] = useState([]);

      // useCallback will return a memorized version of the callback that only changes if one of the inputs has changed
      const getUsers = useCallback(()=>{
            axios.get(`/users`).then((out)=>{
                  console.log(out);
                  console.log(out.data);
                  setUsers(out.data);
            }).catch(error => toast.error(error.message));
      }, []);

      useEffect(()=>{getUsers()}, []);
      
  return {users: [users, setUsers]}
}

export default UsersAPI