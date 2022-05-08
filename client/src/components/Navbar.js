import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext.js'


const Navbar = ({}) => {
  const {  logoutUser } = useAppContext()
  const {user} = useAppContext()

  const logout = (e) => {
    logoutUser();
}
  return (
    <div className='navbar'>
      <div className='navbar-btn-div'>Dashboard</div>
      <div className='navbar-btn-div'>
       <Link to='/register' className='btn-user' onClick={logout}>{user.name} | LOGOUT</Link>
      </div>
    </div>  
  )
}

export default Navbar