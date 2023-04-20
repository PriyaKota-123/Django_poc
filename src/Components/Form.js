import React, { useEffect, useState } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
import {sending2} from '../Actions/Action'
function Form(props) {
    const info=useSelector((state)=>state.display.data1)
    const dispatch= useDispatch()
    const [name, setPassenger_name] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState('')
    let obj4=[]
  
     const [user, setUser]=useState({
      name:'',
      gender:'',
      seatno:props.seatnumber,
      bus_name:info.bus_name,
      price:info.price,
      source:info.source,
      destination:info.destination_one
              })
    const handleName=(e)=>{
      
      setUser({...user,name:e.target.value})     
    }
    const handleAge=(e)=>{
      setUser({...user,age:e.target.value}) 
         
    }
    const handlegender=(e)=>{
      
      setUser({...user,gender:e.target.value}) 
      obj4.push({...user});
     const result= obj4.map((x)=>{
          x['gender']= e.target.value
          return x
      })
      console.log(result)
      dispatch(sending2(result)) 
   }
  
  return (
    <div className='fom'>   

         <form>   
             <b> Name  </b><input type="text" id="in" value={name} name='name' onChange={handleName} ></input>   
             <b> Age  </b><input type="number"   id="in" value={age} name="age" onChange={handleAge}></input>    
           <br></br> <b>Gender <input type="radio" value="Male" name="Gender" onChange={handlegender} /> Male
           <input type="radio" value="Female" name="Gender" onChange={handlegender} /> Female</b>    
             <br></br>
               <b> SeatNo </b><input type="text"  id="in" value={props.seatnumber}  ></input>   
               <b> Bus Name </b><input type="text"   id="in" value={info.bus_name}  ></input>  
          
           </form>  
           <hr></hr>
            </div> 
             )
      }
export default Form




































