// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useSelector } from 'react-redux';
// import {  useNavigate } from 'react-router-dom';
// function Pay() {
//   const [count,setcount]=useState([])
//   const obj=useSelector((state)=>state.display.data2)
//     const navigate=useNavigate();
//     let l=obj.length
//  let c=obj[0][0].price
//  useEffect(() => {
//   setcount(l*c)
//  }, [])
//     const handleclose=()=>{
//  navigate('/Buslayout')
//     }
//     const handlepay=()=>{
//       navigate('/PaymentCard')
//          }
//   return (
   
//      <div
//      className="modal show" 
//      style={{ display: 'block', color: 'black'  }} >
//      <Modal.Dialog  aria-labelledby="contained-modal-title-vcenter" centered>
//        <Modal.Header>
//        <Modal.Title><h2> Payment Confirm </h2></Modal.Title>
//        </Modal.Header>
         
//        <Modal.Body>      
//           <div>
//          <pre> <h1>Total Price  : {count} </h1></pre>         
//           </div>     
//       </Modal.Body>

//        <Modal.Footer>
//        <Button variant="primary" onClick={handlepay} >Proceed to Pay </Button>
//          <Button variant="secondary" onClick={handleclose}>Cancel</Button>
        
//        </Modal.Footer>
//      </Modal.Dialog>
//    </div>
//   )
// }

// export default Pay
