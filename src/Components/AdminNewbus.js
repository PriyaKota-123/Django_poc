import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container,  } from 'react-bootstrap';

function AdminNewbus() {
  const[source,setSource]=useState()
  const[destination_one,setDestination_two]=useState()
  const[bus_name,setBus_name]=useState()
  const[vehicle_num,setVechilenum]=useState()
   const[driver_no,setDriver_no]=useState()
   const[start_time,setStart_time]=useState()
   const[arrival_time,setarrival_time]=useState()
   const[price,setPrice]=useState()
   const[seat,setSeat]=useState()
   const[remaining,setRemaining]=useState()
   const[bustype,setBustype]=useState()
   const[arr,setArr]=useState([])
useEffect(()=>{
axios.get("http://192.168.7.233:8000/home/dest/").then(resp=>setArr(resp.data))

},[])
// console.log(arr)

   const handleSource=(e)=>{
    setSource(e.target.value)
   }
   const handleDestination=(e)=>{
    setDestination_two(e.target.value)
   }
   const handleBusname=(e)=>{
    setBus_name(e.target.value)
   }
   const handleVechile=(e)=>{
     setVechilenum(e.target.value)
   }
   const handleDriver=(e)=>{
    setDriver_no(e.target.value)
   }
   const handleStart=(e)=>{
    setStart_time(e.target.value)
   }
   const handleArrival=(e)=>{
    setarrival_time(e.target.value)
   }
   const handlePrice=(e)=>{
    setPrice(e.target.value)
   }
   const handleseats=(e)=>{
    setSeat(e.target.value)
   }
const handleRemaining=(e)=>{
  setRemaining(e.target.value)
}
const handlebustype=(e)=>{
setBustype(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventDefault()
const obj={
  source:source,
  destination_one:destination_one,
  driver_no:driver_no,
  bus_name:bus_name,
  vehicle_num:vehicle_num,
  start_time:start_time,
  price:price,
  arrival_time:arrival_time,
  bus_type:bustype,
  nos:seat,
  rem:remaining
}
console.log(obj)
axios.post("http://192.168.7.233:8000/home/bus/",obj)
setSource('')
setDestination_two('')
setBus_name('')
setVechilenum('')
setDriver_no('')
setStart_time('')
setarrival_time('')
setPrice('')
setSeat('')
setRemaining('')
setBustype('')
}
  return (
    <div >
      <div>
     <Container>
     <Row className='mt-5'>
          <Col sm="3"></Col>
          <Col sm="3">
            <h1 className='signhead'>Add New Bus</h1>
          </Col>
        </Row>
    <Form className="forming" >
          <Row className='mt-3'>
            <Col sm="3"></Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >

                <Form.Label >
                <h5 className='signhead'>Source</h5> 
                </Form.Label>

                <select  class="form-control" id="opt"  value={source} onChange={handleSource}>
                <option><h5>Add Source</h5></option>
                {arr.map((e1)=>(
                 <option><h5>{e1.destination}</h5></option>
                ))}         
              </select>

              </Form.Group>
            </Col>
            <Col sm="3" >
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label  >
                <h5 className='signhead'>Destination</h5> 
                 
                </Form.Label>

                <select  class="form-control" id='opt'  value={destination_one} onChange={handleDestination}>
                <option><h5>Add Destination</h5></option>
                {arr.map((e1)=>(
                 <option><h5>{e1.destination}</h5></option>
                ))}
                
              </select>

              </Form.Group>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col sm="3"></Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Bus Name</h5> 
               
                </Form.Label>

                <Form.Control
                  type="text"
               
                  value={bus_name} onChange={handleBusname}
                />

              </Form.Group>
            </Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Vehicle No.</h5>                
                </Form.Label>

                <Form.Control
                  type="text"
                  value={vehicle_num} onChange={handleVechile}
                />

              </Form.Group>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col sm="3"></Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label  >
                <h5 className='signhead'>Driver No.</h5>  
                 
                </Form.Label>

                <Form.Control
                  type="number"
                  value={driver_no} onChange={handleDriver}
                />

              </Form.Group>
            </Col>
            <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Start Time</h5>
                  
                </Form.Label>

                <Form.Control
                  type='text'
                  value={start_time} onChange={handleStart}
                />

              </Form.Group>
            </Col>
            </Row>
              <Row className='mt-3'>
                <Col sm='3'></Col>
                <Col sm='3'>
                  <Form.Group controlId="formPlaintextEmail" >
                    <Form.Label >
                    <h5 className='signhead'>Arrival Time</h5>
                      
                    </Form.Label>

                    <Form.Control
                      type="text"
                      value={arrival_time} onChange={handleArrival}
                    />

                  </Form.Group>
                </Col>
                <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Price</h5>
                  
                </Form.Label>

                <Form.Control
                  type='text'
                  value={price} onChange={handlePrice}
                />

              </Form.Group>
            </Col>
              </Row>

              <Row className='mt-3'>
                <Col sm='3'></Col>
                <Col sm='3'>
                  <Form.Group controlId="formPlaintextEmail" >
                    <Form.Label >
                    <h5 className='signhead'>No.of Seats</h5>
                      
                    </Form.Label>

                    <Form.Control
                     type='number'
                     value={seat} onChange={handleseats}
                    />

                  </Form.Group>
                </Col>
                <Col sm="3">
              <Form.Group controlId="formPlaintextEmail" >
                <Form.Label >
                <h5 className='signhead'>Remaining Seats</h5>
                  
                </Form.Label>

                <Form.Control
                  type='number'
                  value={remaining} onChange={handleRemaining}
                />

              </Form.Group>
            </Col>
              </Row>
              <Row className='mt-3'>
                <Col sm='3'></Col>
                <Col sm='3'>
                  <Form.Group controlId="formPlaintextEmail" >
                    <Form.Label >
                    <h5 className='signhead'>Bus Type</h5>
                      
                    </Form.Label>

                    <Form.Control
                     type='text'
                     value={bustype} onChange={handlebustype}
                    />

                  </Form.Group>
                </Col>
                
              </Row>

              <Row className='mt-5 mb-5'>
                <Col sm='4'></Col>
                <Col sm='4'>

                  <button className='paybutton mb-5'  onClick={handleSubmit} >Submit</button>

                </Col>
               
              </Row>
             
              </Form>
              </Container>
</div>

          </div>
       
  )
}

export default AdminNewbus
