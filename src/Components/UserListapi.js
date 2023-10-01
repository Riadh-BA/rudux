import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from '../JS/Actions/UserActionAPI'
import UserCardAPI from './UserCardAPI'

const UserListapi = () => {
    const dispatch=useDispatch()
    const users=useSelector(state=>state.userReducer.users)
    useEffect(()=>{
        dispatch(getuser)
    },[dispatch])

  return (
    <div>
        {users?.map(user=><UserCardAPI user={user} key={user.id}/>)}
    </div>
  )
}

export default UserListapi