import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { UserName } from '../Actions/Action';
import { useSelector } from 'react-redux';
import Bar1 from './Bar1';
import Logo1 from './Images/Logo1.jpg'
import profile from '../Components/Images/profile.jpg'
import '../Components/Cssfiles/Bar.css'
function AdminNav(props) {
  const username=useSelector((state)=>state.display.username) 
  const[count,setCount]=useState(0)

  const navigate=useNavigate()
  const handleLogout=()=>{
    sessionStorage.removeItem('token');
    console.log("outttt");
  setCount(1)
  props.details(undefined);
  navigate("/Login")

    }
   
const handleEvent=(e)=>{
console.log(e,"iam 23 line")

}
if(count===1){
  <Bar1/>
}

   
    
  
  return (
    <div className='header'>
      <Navbar style={{ backgroundColor:"#FFFF00"}}expand="lg">
      <Container fluid>
      <img src={Logo1} className='logo'></img>
      <Link to='/BusDestination'><Nav.Link href="#action1" id='vl' ><b>Home</b></Nav.Link></Link>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Link to ='/adminhistory'><Nav.Link href="#action1"  id='vl' ><b>Admin History</b></Nav.Link></Link>
          <Link to='/admindestination'><Nav.Link href="#action1" id='vl' ><b>Add New Location </b></Nav.Link></Link> 
          <Link to='/AdminNewBus'> <Nav.Link href="#action1"  id='vl' ><b>Add New Bus</b></Nav.Link></Link>
          </Nav>
          <Nav >
  <img src={profile} className="profile ms-5 mt-1"></img>
  <h5 className='profilename ms-2  mt-1'>{username}</h5>
          
            <button onClick={handleLogout} className="logout ms-5 " >Logout</button>
           
          </Nav>
        
        
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </div>
  )
}

export default AdminNav
