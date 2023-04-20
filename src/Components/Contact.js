import axios from 'axios';
import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {  useNavigate } from 'react-router-dom';

function Contact() {
  const navigate=useNavigate()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const [origin, setOrigin] = useState()
  const [bus_name, setBusName] = useState()
  const [destination, setDestination] = useState()
  const [bus_No, setBusno] = useState()
  const [driver_phono, setDriverphono] = useState()
  
 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
     name:name,
      email: email,
      subject: subject,
      message: message,
      origin: origin,
      bus_name:bus_name,
      destination: destination,
      bus_No: bus_No,
      driver_phono:driver_phono
    }
    console.log(obj); 
        axios.post("http://192.168.7.233:8000/home/cont/", obj)
  }
 
  return (
    <Container>
    <Row className='mt-5'>
      <Col sm="3"></Col>
      <Col sm="3">
        <h1 className='signhead'>Contact</h1>
      </Col>
    </Row>
    <Form className="forming" >
      <Row className='mt-3'>
        <Col sm="3"></Col>
        <Col sm="3">
          <Form.Group controlId="formPlaintextEmail" >

            <Form.Label >
            <h5 className='signhead'>Name</h5> 
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </Form.Group>
        </Col>
        <Col sm="3" >
          <Form.Group controlId="formPlaintextEmail" >
            <Form.Label  >
            <h5 className='signhead'> Email</h5> 
             
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
            <Form.Label >
            <h5 className='signhead'>Subject</h5> 
           
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter the Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

          </Form.Group>
        </Col>
        <Col sm="3">
          <Form.Group controlId="formPlaintextEmail" >
            <Form.Label >
            <h5 className='signhead'>Message</h5>                
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Write a Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col sm="3"></Col>
        <Col sm="3">
          <Form.Group controlId="formPlaintextEmail" >
            <Form.Label  >
            <h5 className='signhead'>Source</h5>  
             
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Source"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />

          </Form.Group>
        </Col>
        <Col sm="3">
          <Form.Group controlId="formPlaintextEmail" >
            <Form.Label >
            <h5 className='signhead'>BusName</h5>
              
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter BusName"
              value={bus_name}
              onChange={(e) => setBusName(e.target.value)}
            />

          </Form.Group>
        </Col>
        </Row>
          <Row className='mt-3'>
            <Col sm='3'></Col>
            <Col sm='3'>
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Destination</h5>
                  
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter the Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />

              </Form.Group>
            </Col>
            <Col sm='3'>
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Bus Number</h5>
                  
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter the Bus Number"
                  value={bus_No}
                  onChange={(e) => setBusno(e.target.value)}
                />

              </Form.Group>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col sm='3'></Col>
            <Col sm='3'>
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Driver Number</h5>
                  
                </Form.Label>

                <Form.Control
                  type="number"
                  placeholder="Enter the Driver Number"
              value={driver_phono}
              onChange={(e) => setDriverphono(e.target.value)}
                />

              </Form.Group>
            </Col>
            </Row>
          <Row className='mt-5 mb-5'>
            <Col sm='4'></Col>
            <Col sm='4'>

              <button className='btn btn-secondary' id='buttonn'  onClick={handleSubmit} >Submit</button>

            </Col>
           
          </Row>
         
          </Form>
          </Container>
    // <div>
    //   <center><h1>CONTACT FORM</h1></center>
    //   <Form className="forming" >
     
    //   <Form.Group as={Row} className="mb-3" controlId="formPlaintextName" >
    //       <Form.Label column sm="4">
    //         Name
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="text"
    //           placeholder="enter name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
    //       <Form.Label column sm="4">
    //         Email
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="email"
    //           placeholder="enteremail"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextSubject" >
    //       <Form.Label column sm="4">
    //        Subject
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="text"
    //           placeholder="enter the subject"
    //           value={subject}
    //           onChange={(e) => setSubject(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextMessage" >
    //       <Form.Label column sm="4">
    //         Message
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="text"
    //           placeholder="write a message"
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextOrigin" >
    //       <Form.Label column sm="4">
    //         Origin
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="text"
    //           placeholder="enter origin"
    //           value={origin}
    //           onChange={(e) => setOrigin(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextBusName" >
    //       <Form.Label column sm="4">
    //         BusName
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="text"
    //           placeholder="enter bus name"
    //           value={bus_name}
    //           onChange={(e) => setBusName(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextDestination" >
    //       <Form.Label column sm="4">
    //         Destination
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="text"
    //           placeholder="enter the destination"
    //           value={destination}
    //           onChange={(e) => setDestination(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextBusNumber" >
    //       <Form.Label column sm="4">
    //         Bus Number
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="text"
    //           placeholder="enter the bus no"
    //           value={bus_No}
    //           onChange={(e) => setBusno(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextDriverNumber" >
    //       <Form.Label column sm="4">
    //        Driver Number
    //       </Form.Label>
    //       <Col sm="6">
    //         <Form.Control
    //           type="number"
    //           placeholder="enter the driver number"
    //           value={driver_phono}
    //           onChange={(e) => setDriverphono(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Col sm="12">
    //       {/* <Link to="/Login"> */}
    //         <button className='btn btn-secondary' id='buttonn' onClick={handleSubmit}>Submit</button>
    //         {/* </Link> */}
    //     </Col>


    //   </Form>

    // </div>
   
  )
}

export default Contact
