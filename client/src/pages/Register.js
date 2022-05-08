import React, {useEffect, useState} from 'react'
import Form from '../components/Form'
import { useAppContext } from '../context/appContext.js'
import Alert from '../components/Alert'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register=()=> {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()

  const { user, showAlert, displayAlert, isLoading, registerUser, loginUser } = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  
  const handleChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})  
  }

  const onSubmit = (e) => {
    e.preventDefault()  
    const {name, email, password, isMember}=values
    if(!email||!password||(!isMember&&!name)){
     displayAlert()
      return
    }
    const currentUser = {name, email, password}

    if(isMember){
      loginUser(currentUser);
    }else {
      registerUser(currentUser)
    }
  }

useEffect(()=>{
  if(user){
    setTimeout(()=>{
      navigate('/')
    },3000)
  }
},[user, navigate])

  return (
    <div className='register'>
        <header>
          <img src={logo} className='logo' alt='' width={'180px'}/>
        </header>
      <form className='form' onSubmit={onSubmit}>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}

        {!values.isMember&&(
        <Form
          type='text' 
          name='name'
          value={values.name}
          handleChange={handleChange}        
        />
        )}
        <Form
          type='email' 
          name='email'
          value={values.email}
          handleChange={handleChange}        
          />
        <Form
          type='password' 
          name='password'
          value={values.password}
          handleChange={handleChange}        
          />
        <button type='submit' className='btn-submit' disabled={isLoading}>Submit</button>
        <p>
        {values.isMember?'Not a member yet?':'Already a member?'}
        <button type='submit' onClick={toggleMember} className='btn-register' disabled={isLoading}>
        {values.isMember?'Register':'login'}</button>
        </p>
      </form>
    </div>
  )
}
export default Register