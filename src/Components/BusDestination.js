
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
// import { Link, Navigate } from 'react-router-dom'
import '../Components/Cssfiles/Bar.css'
import { sending } from '../Actions/Action'
 import { Dat } from '../Actions/Action'
import { useDispatch } from 'react-redux'
import {  Link, useNavigate } from "react-router-dom";
import { Card,Row,Col } from 'react-bootstrap'
function BusDestination() {
  const [origin, setOrigin] = useState()
  const [destination_two, setdestination_two] = useState()
  const [date, setDate] = useState()
  const [arr1, setarr1] = useState([])
  const [Error,setError]=useState(false)
  const [details,setDetails]=useState()
  const [a,seta]=useState([])
  const [response, setResponse]=useState([0])
  const[info,setInfo]=useState([])
  const navigate = useNavigate();

const dispath=useDispatch()
  useEffect(() => {
    axios.get("http://192.168.7.233:8000/home/dest/").then(resp=>setarr1(resp.data))
  }, [])
  

  const handleSearch = () => {
   
    let obj3 = {
      origin: origin,
      destination_two: destination_two,
      date:date
    }
  
    axios.post("http://192.168.7.233:8000/home/busfilter/", obj3).then((resp=>{
      const d=resp.data
     dispath(sending(resp.data))
     dispath(Dat(obj3));
    
    }
    ))
   
   
    
 
  }
    const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }
const handleOrgin = (e) => {
    setOrigin(e.target.value)
  }
  const handleDestination = (e) => {
    setdestination_two(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
 
  return (

<div className='loginbody'>

<Card style={{ width: '27rem' ,margin:"30px 0px 0px 200px",borderRadius: "28px" }}  >
  
  <Card.Body>
    <h1 style={{color:"black" ,fontSize:"35px"}}>Booking Form</h1>
    <Card.Text>
  

    <Form >
 
    <Form.Label column>
     <h4 id='text'> Source</h4>
     </Form.Label>
     <Col >
     <select   className="col mb-3" id="inputPassword2"  value={origin} onChange={handleOrgin}>
                  <option>Source</option>
                  {arr1.map((e)=>(
                    <option value={e.destination}>{e.destination}</option>
                  ))}
                  
                </select>
                {Error&&origin.length<=0 ?
                <p>source can't be empty</p>:""}
                </Col>
                <Form.Label column >
    <h4 id='text'>  Destination</h4>
    </Form.Label>
    <Col>
    <select  className="col mb-3" id="inputPassword2"  vlaue={destination_two} onChange={handleDestination}>
                <option>Destination</option>
                  {arr1.map((e1)=>(
                <option value={e1.destination} disabled={e1.destination==origin}>{e1.destination}</option>
                    
                  ))}
                  
                </select>
                {Error&&destination_two.length<=0 ?
                <p>destination can't be empty</p>:""}
                </Col>
                <Form.Label column >
    <h4 id='text'>  Travel Date</h4>
    </Form.Label>
    <Col>
    <input type="date" className="col mb-5"   name="date" value={date} min={disablePastDate()} onChange={handleDate}
                 id ="date" />
                  {Error && date.length <= 0 ?
                <p> date can't be empty</p> : ""}
               </Col>
               <Col>
              <Link to='/slide3'>
              <button className='search mb-2' onClick={handleSearch}><b>Search</b></button>
              </Link>  

    </Col>
    </Form>
    </Card.Text>
      
      </Card.Body>
    </Card>
   
    </div> 











    /* <div className='settingimage'>
      <div class="row">
        <div className="col-lg-12 col-md-12 col-12" >

          <div class="col text-center pt-5" >

            <h1 style={{ fontSize: "3rem", color: "blue" }}>Book Bus Tickets</h1>
            <br></br>
            <table>
              <tr class="row">
              <td style={{marginLeft:'250px'}}>
          
                 <select   class="col" id="inputPassword2"  value={origin} onChange={handleOrgin}>
                  <option>Source</option>
                  {arr1.map((e)=>(
                    <option value={e.destination}>{e.destination}</option>
                  ))}
                  
                </select> 
               
                {Error&&origin.length<=0 ?
                <p>source can't be empty</p>:""}
             
                <select  class="col" id="inputPassword2"  vlaue={destination_two} onChange={handleDestination}>
                <option>Destination</option>
                  {arr1.map((e1)=>(
                <option value={e1.destination} disabled={e1.destination==origin}>{e1.destination}</option>
                    
                  ))}
                  
                </select>
                {Error&&destination_two.length<=0 ?
                <p>destination can't be empty</p>:""}
             
                <input type="date"   class="col"   name="date" value={date} min={disablePastDate()} onChange={handleDate}
                  id="date" />
                  {Error&&date.length<=0 ?
                <p>date can't be empty</p>:""}
               
              <Link to='/slide3'>
              <Button id='search' onClick={handleSearch}><b>Search</b></Button>
              </Link>  
                 
               
              </td>
              </tr>
            </table>

          </div>


        </div>
      </div>

    </div> */
  )
}

export default BusDestination
