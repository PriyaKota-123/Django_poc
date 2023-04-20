import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import { Link, useNavigate, useNavigation } from 'react-router-dom';

function Sighnup() {
  const navigate = useNavigate()
  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [first_name, setFirstname] = useState()
  const [last_name, setLastname] = useState()
  const [Phonenumber, setPhonenumber] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()
  const [arr, setArr] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      username: username,
      email: email,
      first_name: first_name,
      last_name: last_name,
      mobile_number: Phonenumber,
      password: password,
      password2: password2

    }
    console.log(obj);

    // axios.post("http://192.168.7.233:8000/home/register/",obj

    // )

    axios.post("http://192.168.7.233:8000/home/register/", obj,
      {
        headers: {
          "X-CSRFToken": "APGa6KeRdeF1GuNpuREWH1reQ8wpZOnJrfKekony8gCBv3ogvFssJWUSbQ20KVXd"
        }
      }
    )
    navigate('/Login')
  }
  return (
    <div>
      <br></br>
      <Container>
        <Row className='mt-5'>
          <Col sm="3"></Col>
          <Col sm="3">
            <h1 className='signhead'>Signup</h1>
          </Col>
        </Row>
        <Form className="forming" >
          <Row className='mt-3'>
            <Col sm="3"></Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >

                <Form.Label >
                <h5 className='signhead'> Username</h5> 
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) =>setUserName(e.target.value)}
                />

              </Form.Group>
            </Col>
            <Col sm="3" >
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label  >
                <h5 className='signhead'>First Name</h5> 
                 
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter FirstName"
                  value={first_name}
                  onChange={(e) => setFirstname(e.target.value)}
                />

              </Form.Group>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col sm="3"></Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Last Name</h5> 
               
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter LastName"
                  value={last_name}
                  onChange={(e) => setLastname(e.target.value)}
                />

              </Form.Group>
            </Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Email</h5>                
                </Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </Form.Group>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col sm="3"></Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label  >
                <h5 className='signhead'>Phonenumber</h5>  
                 
                </Form.Label>

                <Form.Control
                  type="number"
                  placeholder="Enter Phonenumber"
                  value={Phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />

              </Form.Group>
            </Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Password</h5>
                  
                </Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </Form.Group>
            </Col>
            </Row>
              <Row className='mt-3'>
                <Col sm='3'></Col>
                <Col sm='3'>
                  <Form.Group controlId="formPlaintextEmail" >
                    <Form.Label >
                    <h5 className='signhead'>Confirm Password</h5>
                      
                    </Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Enter Confirm Password"
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                    />

                  </Form.Group>
                </Col>
              </Row>
              <Row className='mt-5 mb-5'>
                <Col sm='4'></Col>
                <Col sm='4'>

                  <button className='btn btn-secondary' id='buttonn' onClick={handleSubmit} >Signup</button>

                </Col>
               
              </Row>
             
              </Form>
              </Container>
        </div>
        )
}

        export default Sighnup
