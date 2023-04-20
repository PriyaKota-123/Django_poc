import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sending1 } from '../Actions/Action'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function BusDetails() {
   const {data}=useSelector((state)=>state.display);
   const dat=useSelector((state)=>state.display.dat);
 const dispatch=useDispatch();
  const Handlebus=(e,i)=>{
    let obj={
      bus_name:e.bus_name,
      price:e.price,
      source:e.source,
      destination_one:e.destination_one,
      id:e.id
    }
     dispatch(sending1(obj));
      
  }
  console.log(dat);
  return (
    <div className="mt-3">
      <Container>
        <Row>
    
        <h2 className="result sm-5">Search Result:</h2>
     
      </Row>
      
     
        <Row>
        <div className='stdhead'>
          <Col sm="4">
          <h5 className="std mt-1">From : {dat.origin} to {dat.destination_two}</h5>
          </Col>
          <Col sm="6">
          
          <h5 className='ms-3  mt-1'> Date :{dat.date} </h5>
          </Col>
          <Col sm="3">
          <Link to="/BusDestination"> <h5 className='change mt-1'>Change Search</h5></Link>
            </Col>
        </div>
        </Row>
       
        {data.map((e,i)=>(
          <div className='mt-3'>
           <Row >
              <Col sm="1">
            <h5 className='rh'><b> {e.id}</b></h5>
              </Col>
              <Col sm="3">
              <h5 className='rh'> <b>{e.bus_name} </b> </h5>   
             {e.nos} Seater - {e.bus_type} Bus <br></br>
             Vehicle Number - {e.vehicle_num}<br></br>
             Driver Ph - {e.driver_no}
              
              </Col>
              <Col sm="2">
              <h5 className='rh'><b>Dep.Time : {e.start_time}</b></h5>
              </Col>
              <Col sm="2">
              <h5 className='rh'><b>Arr.Time : {e.arrival_time}</b></h5>
              </Col>
              <Col sm="2">
              <h5 className='rh'><b>Rs. {e.price}/-</b><br></br>
               <b>(per ticket)</b></h5>
              </Col>
              <Col sm="2">
              <Link to="/BusLayout" ><button className='book' key={i}onClick={()=>Handlebus(e,i)}>  Book Now</button></Link>
             
              </Col>
             
           </Row>
           <hr></hr>
          </div>
        ))}
     
      </Container>
      {/* <Table striped bordered hover size="sm">
      <thead id='btext'>
        <tr>
          <th>ID</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Bus_Name</th>
          <th>Vehicle_Num</th>
          <th>Start_Time</th>
          <th>Arrival_Time</th>
          <th>Driver_Ph:No</th>
          <th>Price</th>
          <th>No_Of_Seats</th>
          <th>Remaining_Seats</th>
          <th>Bus_Type</th>
          <th>Booking</th>
        </tr>
        </thead>
        <tbody>         
                {data.map((e,i)=>(
                 <tr key={i}>
                     <td>{e.id}</td>
                    <td>{e.source}</td>
                    <td>{e.destination_one}</td>
                    <td>{e.bus_name}</td>
                 
                    <td>{e.vehicle_num}</td>
                    <td>{e.start_time}</td>
                    <td>{e.arrival_time}</td>
                    <td>{e.driver_no}</td>
                    <td>{e.price}</td>
                    <td>{e.nos}</td>
                    <td>{e.rem}</td>
                    <td>{e.bus_type}</td>
                    <td>  <Link to="/BusLayout" ><a href="#" key={i}onClick={()=>Handlebus(e,i)}>SelectSeats</a></Link></td>
                  </tr>
                ))}
            
            
        </tbody>
    
      </Table> */}
    </div>
  )
}

export default BusDetails
