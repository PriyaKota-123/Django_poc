import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login';

function Logout() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate(Login)
        e.preventDefault()
    
        }
  return (

    <div>
    
   
      <button onClick={handleSubmit}>Logout</button>
    </div>
  )
}

export default Logout
