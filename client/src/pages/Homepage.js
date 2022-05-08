import React from 'react'
import { useAppContext } from '../context/appContext.js'
import { Link } from 'react-router-dom';



const Homepage = () => {
  const {  logoutUser } = useAppContext()

  const logoutUsere = (e) => {
    logoutUser();
  
}
  /*
  const fetchData = async ()=>{
    try {
      const response = await fetch('/api/v1')
      const data = await response.json();
      console.log(data);
    } catch (error) {
        console.log(error); 
    }

  }
  useEffect(()=>{
    fetchData()
  },[])
  */


  return (
    <div>Homepage

<Link to='/register' className='btn-link' onClick={logoutUsere}>LOGOUT</Link>
<Link to='/companies' className='btn-link'>Companies</Link>
<Link to='/products' className='btn-link'>Products</Link>

    </div>
  )
}

export default Homepage