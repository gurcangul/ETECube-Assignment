import React, {useState} from 'react'
import Form from '../components/Form'
import { useAppContext } from '../context/appContext.js'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register=()=> {
  const [values, setValues] = useState(initialState)
  const { showAlert, displayAlert } = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  
  // global context and useNavigate later
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
    console.log(values);
  }

  return (
    <div className='register'>
      <form className='form' onSubmit={onSubmit}>
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert&&<div className='alert alert-danger'>alert goes here</div>}

        {/* name input */}
        {!values.isMember&&(
        <Form
          type='text' 
          name='name'
          value={values.name}
          handleChange={handleChange}        
        />
        )}
        {/* email input */}
        <Form
          type='email' 
          name='email'
          value={values.email}
          handleChange={handleChange}        
          />
        {/* password input */}
        <Form
          type='password' 
          name='password'
          value={values.password}
          handleChange={handleChange}        
          />
        <button type='submit' className='btn btn-block'>Submit</button>
        <p>
        {values.isMember?'Not a member yet?':'Already a member?'}
        <button type='submit' onClick={toggleMember} className='member-btn'>
        {values.isMember?'Register':'login'}</button>
        </p>
      </form>
    </div>
  )
}
export default Register