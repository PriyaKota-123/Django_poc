import React, { useEffect, useState } from 'react'

import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../Components/Cssfiles/Bar.css'
import Logo1 from './Images/Logo1.jpg'
function Bar() {
  return (
    <div className='header'>
    <Navbar  style={{backgroundColor:"#FFFF00"}} expand="lg">
      <Container fluid>
      <img src={Logo1} className='logo'></img>
       {/* <Link to="/Cursole"><Navbar.Brand href="#" style={{color:"black"}} className="bus ms-5  px-3 "><b>Buses</b></Navbar.Brand></Link> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">            
             
         <div>
         <Link to='/About1' style={{textDecoration:"none"}}><Navbar.Brand href="#action1" className="bus1 px-5 pt-2"style={{color:"black"}}><b>About Us</b></Navbar.Brand></Link>
         </div>
         <Link to='/Login' style={{textDecoration:"none"}}><Navbar.Brand href="#action1" className="me-auto" style={{color:"#ffffff"}}><button className='Login'><div className='logintext'>Login</div></button></Navbar.Brand></Link>
       
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  
    </div>
    

  )
}

export default Bar

