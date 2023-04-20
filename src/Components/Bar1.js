import React, { useEffect, useState } from 'react'
import { NavItem, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/Cssfiles/Bar.css'
import { useSelector } from 'react-redux';
import { UserName } from '../Actions/Action';
import axios from 'axios';
import Logo1 from './Images/Logo1.jpg'
import profile from '../Components/Images/profile.jpg'
function Bar1(props) {
  const username=useSelector((state)=>state.display.username);
  const details=useSelector((states)=>states.display.superUser)
  console.log(details,"iam 17th line")

  const navigate=useNavigate()
  
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    console.log("outttt");
   props.details(undefined);
    //props.history.push('/Login');
  navigate("/Login")
    
   
  };
  return (

<div className='header'>
    <Navbar  style={{backgroundColor:"#FFFF00"}} expand="lg">
      <Container fluid>
      <img src={Logo1} className='logo'></img>
      <Link to='/BusDestination'><Nav.Link href="#action1" id='vl' ><b>Home</b></Nav.Link></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> 
        
        { !details ?<Nav
             className="me-auto my-2 my-lg-0"
            style={{maxHeight:'100px'}}
            navbarScroll>  
    <Link to="/Userhistory"><Nav.Link href="/Userhistory"id='vl'><b>My Bookings</b></Nav.Link></Link>        
      
    <Link to='/Contact'><Nav.Link href="#action1"id='vl'><b>Contact Us</b></Nav.Link></Link>
    </Nav>
        :null}

<Nav >
  <img src={profile} className="profile ms-5 mt-1"></img>
  <h5 className='profilename ms-2  mt-1'>{username}</h5>
          
            <button onClick={handleLogout} className="logout ms-5 " >Logout</button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  
    </div>



    // <div >
    // <Navbar  style={{backgroundColor:"#223c50"}} expand="lg">
    //   <Container fluid>
      
    //    <Link to='/BusDestination'><Nav.Link href="#action1" style={{color:"white"}}><b>Home</b></Nav.Link></Link>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //      { !details ?<Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{maxHeight:'100px'}}
    //         navbarScroll>
    //         {/* <Link to='/BusDestination'><Nav.Link href="#action1" style={{color:"white"}}><b>Home</b></Nav.Link></Link> */}
    //        <Link to="/Userhistory"><Nav.Link href="/Userhistory" style={{color:"white"}}><b>My Bookings</b></Nav.Link></Link> 
    //         <Link to='/Contact' style={{textDecoration:"none"}}><Nav.Link href="#action1" style={{color:"white"}}><b>Contact</b></Nav.Link></Link>
    //       </Nav>
    //     :null}
        
       
    //       <Nav>
    //       <b>  <NavDropdown title ={username} style={{backgroundColor:"white",marginRight:"85px"}}>
    //          <NavDropdown.Item onClick={handleLogout} ><b>Logout</b></NavDropdown.Item>
    //         </NavDropdown></b>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar> 
  
    // </div>
    

  )
}

export default Bar1

