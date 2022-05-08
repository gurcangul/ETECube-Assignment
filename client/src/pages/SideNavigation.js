import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const SideNavigation = () => {
  return (
    <div className='SideNavigation'>
      <header className='header-navi'>
        <img src={logo} alt="" class="logo-navigation" width={'150px'}/>
    </header>
      <div className='navi-menu'>
      <Link to='/home' className='navi-link'>Home</Link>
      <Link to='/companies' className='navi-link'>Companies</Link>
      <Link to='/products' className='navi-link'>Products</Link>      </div>
    </div>
  )
}

export default SideNavigation