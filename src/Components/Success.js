import React from 'react'
import { Card, Col,Row,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Success() {
  
    const navigate=useNavigate();
    const handleclose=()=>{
 navigate('/BusDestination')
    }
  return (
    <div className="mt-5 mb-5">
      <Container>
    <Card >
    <Card.Body>     
      <Card.Text>
         <div className='success  mt-5 "'>
           <h2 className="mt-2">Payment Successfull</h2>
        

          <h4 className="mt-2 mb-5">Your Booking has been Confirmed</h4>
          

           <h4 className="mt-2 mb-5">Thank You!! Visit Again</h4>
           </div>
      </Card.Text>  
       </Card.Body>
     </Card>
     <Row>
      <Col sm="9"></Col>
      <Col sm="3"><button className="mb-5 mt-5 paybutton" onClick={handleclose}>Back</button></Col>
     </Row>
     </Container>
 </div>
  /* <div className="modal show"  */
  /* //    style={{ display: 'block', color: 'black',textAlign:'center'  }} >
  //    <Modal.Dialog  aria-labelledby="contained-modal-title-vcenter" centered>
  //      <Modal.Header>
  //      <Modal.Title><h2 style={{color:'blue',textAlign:"center"} }id="book">Booking Status </h2></Modal.Title>
  //      </Modal.Header>
  //    <br></br> <h2 style={{color:'Green'}}> Payment Successfull</h2> <br></br>
  //     <h4 style={{color:'Green'}}> Your Booking has been Confirmed.</h4>


  //      <Modal.Body>
  //     <h3></h3>
      
  //     </Modal.Body>

  //      <Modal.Footer>
       
  //        <Button variant="secondary" onClick={handleclose}>Back</Button>
        
  //      </Modal.Footer>
  //    </Modal.Dialog>
  //  </div> */
  
  )
}

export default Success
