// import { Button } from 'bootstrap';
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { UserName } from '../Actions/Action';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user } from '../Actions/Action';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../Components/Cssfiles/Login.css';

function Login(props) {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
    const[username,setUsername]=useState()
    const[password,setPassword]=useState()
    const[show,setShow]=useState(false)
    const[arr,setArr]=useState()
    const dispatch = useDispatch()
     const navigate=useNavigate()
     const dispath= useDispatch()
    const handleSubmit=(e)=>{
      setShow(true)
          e.preventDefault()
         const obj1={
            username:username,
            password:password
         }
        
         axios.post("http://192.168.7.233:8000/home/login1/", obj1).then((res)=>{
         
         props.details(res.data.is_superuser)
         dispath(user(res.data.is_superuser))

         console.log(res.data);
         localStorage.setItem("userid", res.data.data.User_Id)
         }
         )
              
         dispatch(UserName(username));
        navigate('/BusDestination')
    }
 
        const handleClose=()=>{
          setShow(false)
          
        }
  return (
        
 
<div className='loginbody'>

    <Card style={{ width: '27rem' ,margin:"62px 0px 0px 567px",borderRadius: "28px" }}  >
      
      <Card.Body>
        <h1 style={{color:"black" ,fontSize:"44px"}}>Login </h1>
        <Card.Text>
         <br></br>

        <Form >
     
        <Form.Label column >
         <h4> Username</h4>
        </Form.Label>
        <Col >
        <Form.Control
         style={{border: "1px solid #707070",
          borderradius :" 6px",width: "350px"}}
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
        </Col>
     
   
        <Form.Label column >
        <h4>  Password</h4>
        </Form.Label>
        <Col >
        <Form.Control
         style={{border: "1px solid #707070",
         borderradius :" 6px",width: "350px"}}
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
        </Col>
        <br></br>
        <Col>
     <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember Me</label>
     </Col>
    
    <Col>
     <a href="#" ><b>Forgot Password?</b></a>  
     <Link to='/Signup'style={{textAlign: "right",font: "normal normal normal 24px/38px Segoe UI",
color: "#4B4848",marginLeft:"30px"}}>Signup Account</Link>
    </Col>
    <br></br>
        <Col >      
          <Button onClick={handleSubmit} style={{ width: '22rem',color:"white" ,backgroundColor:"#000000"}}>Login</Button>
        </Col>
     
     
    </Form> 
    <Modal show={show} >
        <Modal.Body>
   Loggin sucessfully
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           ok
         </Button>        
        </Modal.Footer>
      </Modal>

      </Card.Text>
      
      </Card.Body>
    </Card>
   
    </div> 

  )
}

export default Login
