import React from 'react'
import {  Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import SideNavigation from './SideNavigation.js';



const Homepage = () => {
  return (
    <div>     
      <SideNavigation/><Navbar/>
      <div className='content'>
        <Outlet />
      </div>

    </div>
  )
}

export default Homepage