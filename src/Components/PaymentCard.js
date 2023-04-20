import React, { useEffect, useState } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import Success from "./Success";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

 function PaymentCard() {
  const dat=useSelector((state)=>state.display.dat);
  const data1=useSelector((state)=>state.display.data1);
  const username=useSelector((state)=>state.display.username);
  const obj=useSelector((state)=>state.display.data2)
 let l=obj.length
  // const [mask, setMask] =useState("************");
    const [spinner, setSpinner] = useState(false);
    const [success, setSuccess] = useState(false);
    const [pcard,setPcard]=useState(true);
    const [card,setCard]=useState('')
    const [total ,setTotal] =useState([]);
    const [count1,setCount1]=useState(data1.price);
    let count=l*count1
 let total1=count+27
    //  let navigate=useNavigate()
  
  console.log(total1);
  console.log(count);
  console.log(count1);
  
 const Handlecardnum=(e)=>{
  
     setCard(e.target.value)
    //  setMask("************")
 }
 const HandleArrow=()=>{
    setSpinner(true)
   setPcard(false)
   setTimeout(() => {
    setSuccess(true)
    setSpinner(false)
   }, 3000);
    }
  return (
<div className="mt-4 mb-2">
{pcard ? <Container>
  <Row>   
    <h1 className="result sm-5">Make Payment :</h1>
  </Row>
  <Row>
        <div className='stdhead py-1 '>
        <Col sm="5 ">
          <h5 className="std"> <b>{data1.bus_name} : {data1.source} to {data1.destination_one}</b> </h5>
            </Col>
            <Col sm="7" >
            <h5 className="ms-5"> <b>Date : {dat.date}</b></h5>
          </Col> 
        
        </div>
        </Row>
       
       <Row>
        <Col sm="8">
          <Row>
        <div className="cards mt-5 mb-5  ">
           <div className=" card">
            <Card>
              <Card.Body>
                 <Card.Text>
                  <Row >
                    <Col sm="4">
                  <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" height={40}></img>
                  </Col>
                  </Row>
                  <Row>
                  <b className="cardno"> **** **** **** 1060</b>
                    </Row>
                   
                     <div className="cardexp">
                    
                      <span>Expiry date:10/23 </span>
                      <span className="ms-5 px-2"> Name:Kumar </span>
                     
                 
                      </div>
                    

                 </Card.Text>
              </Card.Body>
            </Card>
           </div>

           <div className="ms-3 card">
           <Card>
              <Card.Body>
                 <Card.Text>
                  <Row >
                    <Col sm="4">
                  <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png" height={40}></img>
                  </Col>
                  </Row>
                  <Row>
                  <b className="cardno"> **** **** **** 1060</b>
                    </Row>
                   
                     <div className="cardexp">
                    
                      <span>Expiry date:10/23 </span>
                      <span className="ms-5 px-2"> Name:Kumar </span>
                     
                 
                      </div>
                    

                 </Card.Text>
              </Card.Body>
            </Card>
           </div>

           <div className="ms-3 card">
           <Card>
              <Card.Body>
                 <Card.Text>
                  <Row >
                    <Col sm="4">
                  <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png" height={40}></img>
                  </Col>
                  </Row>
                  <Row>
                  <b className="cardno"> **** **** **** 1060</b>
                    </Row>
                   
                     <div className="cardexp">
                    
                      <span>Expiry date:10/23 </span>
                      <span className="ms-5 px-2"> Name:Kumar </span>
                     
                 
                      </div>
                    

                 </Card.Text>
              </Card.Body>
            </Card>
           </div>

        </div>
        </Row>
        <div className="paytext">
        <Row>
          <h2>Payments Methods</h2>
        </Row>
        <Row>
          <h5 className="cardtype py-2">PayPal</h5>
          <h5 className="cardtype py-2">Credit Card</h5>
        </Row>
        <Form>
         
        <Col sm="9" >
          <Row>
            <Col>
          <h6 className="paytext">Card Number</h6>
          <Form.Control type="text" id="forminput"  maxLength={16}placeholder="---- ---- ---- ----" onChange={Handlecardnum}
                    value={card}></Form.Control>
         </Col> 
         </Row>
          <Row className="mt-2">
            <Col sm="6">
          <h6 className="paytext">Valid Upto</h6>
          <Form.Control type="text" maxLength={5} id="forminput" placeholder="MM/DD" ></Form.Control>
          </Col>
          <Col sm="6">
          <h6 className="paytext">CVV</h6>
          <Form.Control type="password" maxLength={3} id="forminput" placeholder="---" ></Form.Control>
          </Col>
          </Row>
         <Row className="mt-2 mb-5">
         <Col>
          <h6 className="paytext">Name on Card</h6>
          <Form.Control type="text" id="forminput"  ></Form.Control>
         </Col> 
         </Row>
         <Row>
        <Col sm="2"></Col>
         <Col sm="8">
         <button className="mb-5 paybutton" onClick={HandleArrow}>Proceed to Pay</button>
        </Col>
         </Row>
          </Col>
       
        </Form>
       
        
        
        
        </div>
        </Col>

        <Col sm="4">
        <div >

               <Card className=" mt-4" id="boxmodel">
              <Card.Body>
                 <Card.Text>
                 <Row>
                 <h2> Bill Details : </h2>
                 </Row>
                 <Row>
                  <Col sm="6">
                 <h5> Bill to :</h5>
                 </Col><Col sm="6"> <h5>{username} </h5></Col>
                 </Row>
                 <Row>
                 <Col sm="6">
                 <h5>  From :</h5>
                 </Col><Col sm="6"> <h5>{data1.source}</h5></Col>
                 </Row>
                 <Row>
                 <Col sm="6">
                  
                 <h5>To :</h5>  </Col><Col sm="6"> <h5>{data1.destination_one}</h5></Col>
                 </Row>
                 <Row>
                 <Col sm="6">
                 <h5>Journey date : </h5></Col><Col sm="6"> <h5> {dat.date}</h5></Col>
                 </Row>
                 <Row>
                 <Col sm="6">
                 <h5>Billing date : </h5></Col><Col sm="6"> <h5>{dat.date}</h5></Col>
                 </Row>
                 <Row>
                 <Col sm="6">
                 <h5> Pickup Point : </h5></Col><Col sm="6"> <h5> {data1.source}</h5></Col>
                 </Row>
                 <Row>
                 <Col sm="6">
                 <h5>Sub-total : </h5></Col><Col sm="6"> <h5> Rs. {count} /- </h5></Col>
                 </Row>
                 <Row>
                 <Col sm="6">
                 <h5>Tax :  </h5></Col><Col sm="6"> <h5>  Rs. 27 /-</h5></Col>
                 </Row>
                 <hr></hr>
                 <Row>
                 <Col sm="6">
                 <h3>Total :  </h3></Col><Col sm="6"> <h3> Rs. {total1} /- </h3></Col>
                 </Row>
                 </Card.Text>
              </Card.Body>
            </Card>
        </div>
        </Col>
       </Row>

  </Container>
  : null}

   {/* {pcard ?  <MDBContainer fluid className="py-5 gradient-custom" >
      <MDBRow className="d-flex justify-content-center py-5"id="pcard">
        <MDBCol md="7" lg="5" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <MDBRow className="d-flex align-items-center">
                <MDBCol size="9">
                  <MDBInput
                    label="Card Number"
                    id="form1"
                  
                     maxLength={16}
                    placeholder="Card Number"
                    onChange={Handlecardnum}
                    value={card}
                  />
                </MDBCol>
                <MDBCol size="3">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="64px"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <MDBInput
                    label="Cardholder's Name"
                    id="form2"
                    type="text"
                    placeholder="Cardholder's Name"
                  />
                </MDBCol>

                <MDBCol size="6">
                  <MDBInput
                    label="Expiration"
                    id="form2"
                    type="text"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="CVV"
                    id="form2"
                    type="password"
                    maxLength={3}
                    placeholder="&#9679;&#9679;&#9679;"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBBtn color="info" rounded size="lg" onClick={HandleArrow}>
                    <MDBIcon fas icon="arrow-right" />
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer> 
    : null}
  {spinner ? <div class="d-flex justify-content-center" className="py-5 gradient-custom">
  <div class="spinner-border" role="status"  id='pcard1'>
    <span class="visually-hidden">Loading...</span>
  </div>
</div>:null
    }
    { success ? <Success />:null

    } */}
   
  
    {spinner ? <div class="d-flex justify-content-center" className=" gradient-custom">
    <div class="spinner-border" role="status"  id='pcard1'>
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>:null
      }
      { success ? <Success />:null
  
      }


 </div> ); 
}
 
export default PaymentCard