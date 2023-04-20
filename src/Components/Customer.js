import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  Col,  Row } from "react-bootstrap";
function Customer() {
  
  const [count,setcount]=useState([])
    const navigate=useNavigate();
 const obj=useSelector((state)=>state.display.data2)
 const dat=useSelector((state)=>state.display.dat);
 const data1=useSelector((state)=>state.display.data1);
 let l=obj.length
 let c=obj[0][0].price
 useEffect(() => {
  setcount(l*c)
 }, [])
 console.log(count);
//  useEffect(() => {
//  axios.get()
//  }, [input])

 const handlepay=()=>{
    navigate('/PaymentCard')
 }
 const handleClose=()=>{
  navigate('/BusLayout')
}
console.log(count)
  return (
      <div className='confirm mt-5 mb-5'>
        <Container>
        <Row>   
    <h2 className="result sm-5">Booking Confirmed</h2>
  </Row>
  <Row>
        <div className='stdhead py-1 mb-5'>
        <Col sm="5 ">
          <h5 className="std"> <b>{data1.bus_name} : {data1.source} to {data1.destination_one}</b> </h5>
            </Col>
            <Col sm="7" >
            <h5 className="ms-5 "> <b>Date : {dat.date}</b></h5>
          </Col> 
        
        </div>
        </Row>
 <Card id="carddp">
      <Card.Body>     
        <Card.Text>
<Row>
  <h4 className='mt-3 mb-3'>Booking Details:</h4>
</Row>
<Row>
  <Col sm="1">
  <h5>S.NO</h5>
  </Col>
  <Col sm="3">
  <h5>Name</h5>
  </Col>
  <Col sm="1">
  <h5>Age</h5>
  </Col>
  <Col sm="2">
  <h5>Gender</h5>
  </Col>
  <Col sm="2">
  <h5>Seat.No</h5>
  </Col>
  <Col sm="3">
  <h5>Bus Name</h5>
  </Col>
  <hr></hr>
</Row>
{obj.map((e,i)=>
                 (
                     <div key={i}>
<Row>
  <Col sm="1">
  <h6>{i+1}</h6>
  </Col>
  <Col sm="3">
  <h6>{e[0].name}</h6>
  </Col>
  <Col sm="1">
  <h6>{e[0].age}</h6>
  </Col>
  <Col sm="2">
  <h6>{e[0].gender}</h6>
  </Col>
  <Col sm="2">
  <h6>{e[0].seatno}</h6>
  </Col>
  <Col sm="3">
  <h6>{e[0].bus_name}</h6>
  </Col>
  <hr></hr>         
</Row>
</div> ))} 
<Row id='hrs'>    
<hr ></hr>
</Row> 
<Row>
  <Col sm="8"></Col>
  <Col sm="4"> Total  Rs. {count}/-</Col>
</Row>
 </Card.Text>
       
      </Card.Body>
    </Card>
    <Row>
      <Col sm="8"></Col>
      <Col sm="2">
    <button className="mb-5 mt-3 paybutton" onClick={handleClose}>Cancel</button></Col>
    <Col sm="2"><button className="mb-5 mt-3 paybutton" onClick={handlepay}>Proceed to Pay</button></Col>
          </Row>
    </Container>
      </div>

    // <div
    //   className="modal show" 
    //   style={{ display: 'block', position: 'initial'  }}>
    //   <Modal.Dialog  size="lg">
    //     <Modal.Header >
    //       <Modal.Title><h2>Confirm Booking Details </h2></Modal.Title>
    //     </Modal.Header>

    //     <Modal.Body>
    //         {obj.map((e,i)=>
    //             (
    //                 <div key={i}>
    //       <h3><pre>Name         :    {e[0].name}</pre></h3>
    //       <h3><pre>Age          :    {e[0].age}</pre></h3>
    //       <h3><pre>Gender       :    {e[0].gender}</pre></h3>
    //       <h3><pre>SeatNo       :    {e[0].seatno}</pre></h3>
    //       <h3><pre>BusName      :    {e[0].bus_name}</pre></h3>
    //       <h3><pre>Ticket Price :    {e[0].price}   </pre></h3>
/*          
          <hr></hr>
                    </div>
                
            ))
          
             } 
             <div> <h3><pre>no_tickets : {obj.length}     </pre></h3></div>
             <div> <h3><pre>Total Price : {count} </pre></h3></div>
             </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handlepay}>Proceed to Pay </Button>
        </Modal.Footer>
        </Modal.Dialog>
    </div> */
  );
}


   
export default Customer
