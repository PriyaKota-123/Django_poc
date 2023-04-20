import axios from 'axios'
import React, { useState } from 'react'
import '../Components/Cssfiles/Buslayout.css'
import Form from './Form'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
 


function BusLayout() {
    const [upper ] = useState(["U3", "U6", "U9", "U12", "U15", "U18", "U21", "U24", "U27", "U30"])
    const [upper1] = useState(["U2", "U5", "U8", "U11", "U14", "U17", "U20", "U23", "U26", "U29"])
    const [upper2] = useState(["U1", "U4", "U7", "U10", "U13", "U16", "U19", "U22", "U25", "U28"])
    const [Lower ] = useState(["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"])
    const [Lower1] = useState(["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"])
    const [Lower2] = useState(["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"])
    const [arr, setArr] = useState([])
    const [arr1, setArr1] = useState([])
    const [mobile, setMobile] = useState([])
    const [isError, setIsError] = useState(false);
    let navigate=useNavigate()
    const [no_tckts, setno_tckts] = useState([])
    // const [age, setAge] = useState()
    const info=useSelector((state)=>state.display.data1)
    const datee=useSelector((state)=>state.display.dat)
    const cusdetails=useSelector((state)=>state.display.data2)
    // const date=useSelector((state)=>state.display.date)
    const dispatch= useDispatch()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState('')
    const [no_tkt, setSeatno] = useState()
   const [show, setShow] = useState(false);
   const [details,setDetails]=useState([]);
   const [isBackgroundRed,setIsBackgroundRed]=useState(false);
   const [ind,setInd]=useState([])
   const [ind1,setInd1]=useState([])
   const [ind2,setInd2]=useState([])
   const [ind3,setInd3]=useState([])
   const [ind4,setInd4]=useState([])
   const [ind5,setInd5]=useState([])
    const clicking = (e,i6) => {
        setShow(true);
        setInd(i6) 
        if (arr.indexOf(e) === -1 ) {
            setSeatno(e)
            arr.push(e)
            let b = [...arr]
            setArr(b)  
            
             
        }       
        
            setIsBackgroundRed(true) 
      
       
        
        if(arr[arr.indexOf(e)]===e && isBackgroundRed ){       
            let i=arr.indexOf(e)       
           arr.splice(i,1)   
           setIsBackgroundRed(false) 
           setInd('') 
         if(arr.length<1){
            setShow(false)
         }    
         }
    
    console.log(ind ,"ind");
     
    }      
    const clicking1 = (e1,i1) => {
        setShow(true);
        setInd1(i1)
                
        if (arr.indexOf(e1) === -1) {
            setSeatno(e1)
            arr.push(e1)
            let b = [...arr]
            setArr(b)                    
        }        
            setIsBackgroundRed(true) 

        if(arr[arr.indexOf(e1)]===e1 && isBackgroundRed ){       
            let i=arr.indexOf(e1)       
           arr.splice(i,1)   
           setIsBackgroundRed(false) 
           setInd1('')
         if(arr.length<1){
            setShow(false)
         }    
         }  
       
    }     
    
    const clicking2 = (e,i2) => {
        setShow(true);
       setInd2(i2)            
        if (arr.indexOf(e) === -1) {
            setSeatno(e)
            arr.push(e)
            let b = [...arr]
            setArr(b)    
        }  
        setIsBackgroundRed(true)  
        if(arr[arr.indexOf(e)]===e && isBackgroundRed ){       
            let i=arr.indexOf(e)       
           arr.splice(i,1)   
           setIsBackgroundRed(false) 
           setInd2('')
         if(arr.length<1){
            setShow(false)
         }    
         }      
           
    }   
    const clicking3 = (e,i3) => {
        setShow(true);
       setInd3(i3)            
        if (arr.indexOf(e) === -1) {
            setSeatno(e)
            arr.push(e)
            let b = [...arr]
            setArr(b)    
        }  
        setIsBackgroundRed(true)
        if(arr[arr.indexOf(e)]===e && isBackgroundRed ){       
            let i=arr.indexOf(e)       
           arr.splice(i,1)   
           setIsBackgroundRed(false) 
           setInd3('')
         if(arr.length<1){
            setShow(false)
         }    
         }      
      
    } 
    const clicking4 = (e,i4) => {
        setShow(true);
       setInd4(i4)            
        if (arr.indexOf(e) === -1) {
            setSeatno(e)
            arr.push(e)
            let b = [...arr]
            setArr(b)    
        }  
        setIsBackgroundRed(true) 
        if(arr[arr.indexOf(e)]===e && isBackgroundRed ){       
            let i=arr.indexOf(e)       
           arr.splice(i,1)   
           setIsBackgroundRed(false) 
           setInd4('')
         if(arr.length<1){
            setShow(false)
         }    
         }      
        
                
    }      
    const clicking5 = (e,i5) => {
        setShow(true);
       setInd5(i5)            
        if (arr.indexOf(e) === -1) {
            setSeatno(e)
            arr.push(e)
            let b = [...arr]
            setArr(b)    
        }  
        setIsBackgroundRed(true) 
        if(arr[arr.indexOf(e)]===e && isBackgroundRed ){       
            let i=arr.indexOf(e)       
           arr.splice(i,1)   
           setIsBackgroundRed(false) 
           setInd5('')
         if(arr.length<1){
            setShow(false)
         }    
         }      
       
                 
    }    
   const handleuser=()=>{   
   }          
    const handlemobile=(e)=>{
      setMobile(e.target.value);  
    //   setno_tckts(cusdetails.length) 
    
    let b=cusdetails.length
    setno_tckts(b)  
    }    
     let obj={
        cusdetails:cusdetails,
        Phone_number:mobile,
        no_tkts:no_tckts,
        Bus_id:info.id,
        Date_of_journey:datee.date,
        User_id:localStorage.getItem("userid")
     }
     console.log(info.id);
     console.log(datee.date);

    const handleSubmit = (f, e) => {
        f.preventDefault()
        
        
       console.log(obj);
          axios.post("http://192.168.7.233:8000/home/passenger/", obj);
        setShow(false)
        navigate('/Customer')
     }
    const handleClose=()=>{
        setShow(false);
        setArr([]);
        
    }    
    
    return (
        
            <Container className='cont'>
                <Row>
                
            
               
                <Col sm="3"className='' >
                    
                    <div class="seatWrap borderdtd">
                      
                        <div class="seats ">
                          
                           <Row>
                            <Col sm="3" >
                            <div  >
                                {
                                    upper.map((e,i6) => (

                                        <div id="booked" key={i6}
                                            onClick={() => clicking(e,i6)}
                                            className={ ind===i6 && isBackgroundRed || (upper.includes(e) == arr.includes(e)) ? 'background-red' : 'background-blue'}
                                            style={{
                                                width: "28px",
                                                height: "41px",
                                                border: "1px solid black",
                                                fontSize: "13px", 
                                                display: "flex"
                                            }}><div  className="booked " ></div><div>{e}</div></div>

                                    ))
                                }
                            </div>
                            
                            </Col>
                           <Col sm="2"></Col>

                            <Col sm="3">

                            <div >
                                {
                                    upper1.map((e1,i1) => (

                                        <div id='booked' key={i1} onClick={() => clicking1(e1,i1)}
                                         className={ ind1===i1 && isBackgroundRed || (upper1.includes(e1) == arr.includes(e1)) ? 'background-red' : 'background-blue'}
                                         style={{
                                            width: "28px",
                                            height: "41px",
                                            border: "1px solid black",
                                            fontSize: "13px", fontWeight: "100",
                                            display: "flex",
                                          
                                        }}><div ></div><div >{e1}</div></div>

                                    ))
                                }
                            </div>

                            </Col>
                            <Col sm="3">

                            <div >
                                {
                                    upper2.map((e,i2) => (

                                        <div key={i2} onClick={() => clicking2(e,i2)}
                                         className={ ind2===i2 && isBackgroundRed || (upper2.includes(e) == arr.includes(e)) ? 'background-red' : 'background-blue'}
                                        style={{
                                            width: "28px",
                                            height: "41px",
                                            border: "1px solid black",
                                            fontSize: "13px", fontWeight: "100",
                                            display: "flex",
                                            
                                        }}><div  ></div><div>{e}</div></div>

                                    ))
                                }
                            </div>
                            </Col>
                            </Row>
                        </div>
                    </div>
                 </Col>
                 <Col sm="3" className=''>
                    <div class="seatWrap borderdtd">
                       
                        <div class="seats">
                           <Row>
                            <Col sm="3">
                            <div >
                                {
                                    Lower.map((e,i3) => (

                                        <div key={i3} onClick={() => clicking3(e,i3)} 
                                         className={ ind3===i3 && isBackgroundRed || (Lower.includes(e) == arr.includes(e)) ? 'background-red' : 'background-blue'}
                                        style={{
                                            width: "28px",
                                            height: "41px",
                                            border: "1px solid black",
                                            fontSize: "13px", fontWeight: "100",
                                            display: "flex",

                                        }}><div  ></div><div>{e}</div></div>

                                    ))
                                }
                            </div>
                          </Col> 
                          <Col sm="2"></Col>
                          <Col sm="3">
                            <div >
                                {
                                    Lower1.map((e,i4) => (

                                        <div key={i4} onClick={() => clicking4(e,i4)} 
                                         className={ ind4===i4 && isBackgroundRed || (Lower1.includes(e) == arr.includes(e)) ? 'background-red' : 'background-blue'}
                                        style={{
                                            width: "28px",
                                            height: "41px",
                                            border: "1px solid black",
                                            fontSize: "13px", fontWeight: "100",
                                            display: "flex",

                                        }}><div ></div><div  >{e}</div></div>

                                    ))
                                }
                            </div>
                            </Col>
                             <Col sm="3">
                            <div >
                                {
                                    Lower2.map((e,i5) => (
                                        <div key={i5} onClick={() => clicking5(e,i5)}
                                         className={ ind5===i5 && isBackgroundRed || (Lower2.includes(e) == arr.includes(e)) ? 'background-red' : 'background-blue'}
                                        style={{
                                            width: "28px",
                                            height: "41px",
                                            border: "1px solid black",
                                            fontSize: "13px", fontWeight: "100",
                                            display: "flex",

                                        }}><div ></div><div>{e}</div></div>

                                    ))
                                }
                            </div>
                            </Col>
                            </Row>
                        </div>
                    </div>
                    </Col>
                {/* </div> */}
         <Col sm="6">

            <div>
                                {show ?
                                <div className='modalpop'>
                                <div
                                className="modalshow"
                                style={{ display: 'block', position: 'initial' }} >
                                <Card   id="boxmodel">
                                  <Card.Body  >
                                
                          
                                 
                                 
                                  <Card.Text  id="modalshow">
                                  <form >
                                  <h4>Booking Form</h4>
                                    {arr.map((f1,i) => 
                                  
                                               (
                                        <div key={i}>
                                         <Form seatnumber={f1} handle={handleuser()} /><br></br> 
                                        
     
                                        </div>
                                    ))}
                                    <div>
                                      <h5>Mobile No : +91 <input type="tel"  maxLength={10} placeholder="Mobile Number" onChange={handlemobile}/> </h5>
                                    </div>
                                    <Row>
                                     <Col sm="6"></Col>
                                     <Col sm="3">
                                    <button className='paybutton' onClick={handleClose}>Close</button>
                                    </Col>
                                    <Col sm="3">
                                    <button className='paybutton' onClick={handleSubmit}>Submit</button>
                                    </Col>
                                    </Row>
                                    </form>
                                    </Card.Text>
                                  </Card.Body>
                                  </Card>
                              </div>
                              </div>
                               
                                    : null}

                               
                            </div>
                            </Col>
                            </Row>
            </Container>
                           
    )
}

export default BusLayout
