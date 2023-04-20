import React, { useEffect, useState } from 'react'
import { Button, Container, FormControl, FormLabel } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Components/Cssfiles/AdminDestination.css'
import axios from 'axios';

function AdminDestination() {
const[destination,setDestination]=useState()

  const handleDestination=(e)=>{
    e.preventDefault()
   console.log(destination)
    
let obj1={
  destination:destination
}
axios.post("http://192.168.7.233:8000/home/dest/",obj1)
setDestination('')
  }
  const handleClick=(e)=>{

setDestination(e.target.value)
  }
  return (
    <div>
      <Container className='mt-5'>
        <Row>
          <Col sm="3"></Col>
          <Col sm="4">
           
          <h1 className='newlocation mb-3'>Add New Location</h1>
        
         
          
        
            
                <h5 className='signhead mb-2'><b>Location</b></h5> 
                 <Row sm="12">
               

                <input
                  type="text"
                 className='mb-5 '
                
                  value={destination}
                  onChange={handleClick}
                />

</Row>
         
          
         <Row>
          <button  onClick={handleDestination} className="paybutton1">Submit</button>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
    // <div>
    //  <form className="middle">
    //     <label>Location:</label>
    //     <input type="text" value={destination} onChange={handleClick}></input>
    //     <button onClick={handleDestination} >Add Location</button>
    //  </form>
    // </div>
  )
}

export default AdminDestination
