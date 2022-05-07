import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div id="container">
        <header>
        <img src={logo} className='logo' alt='' width={'180px'}/>
        </header>
        <nav>
        </nav>
        <div id="content">
            <div id="content page">
                <h1>ETECube_React_Dev_Assignment </h1>
                <Link to='/register' className='login-button'>Login/ Register</Link>
            </div>   
        </div>       
</div>
  )
}

export default LandingPage