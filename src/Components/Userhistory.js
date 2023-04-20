import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function Userhistory() {

  const [data, setData] = useState([])
  const id = localStorage.getItem('userid')
  useEffect(() => {
    console.log(id);
    axios.get(`http://192.168.7.233:8000/home/book/${id}/`).then(response => setData(response.data)
    
    )
  }, [])
  console.log(data);

  return (
 <div id="Atext">

       <center><b><h2  >Booking History</h2></b></center>
      {/* <table> */}
        
        {/* <thead className="btuser">
          <tr>
                <th>TicketID</th>
                <th>UserID</th>
                <th>Seat No</th>
                <th>DOJ</th>
                <th>BusID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>BookingId</th>
                <th>Mobile</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Price</th>
                <th>No_Tickets</th>
                <th>Bus Name </th>

          </tr>
        </thead>
         */}
<table class="table table-striped table-hover">
  <thead>
    <tr>
     
                <th  scope="col"><b>TicketID</b></th>
                <th  scope="col"><b>UserID</b></th>
                <th scope="col"><b>Seat_No</b></th>
                <th  scope="col"><b>DOJ</b></th>
                <th  scope="col"><b>BusID</b></th>
                <th  scope="col"><b>Name</b></th>
                <th  scope="col"><b>Age</b></th>
                <th  scope="col"><b>Gender</b></th>
                <th  scope="col"><b>BookingId</b></th>
                <th  scope="col"><b>Mobile</b></th>
                <th  scope="col"><b>Source</b></th>
                <th  scope="col"><b>Destination</b></th>
                <th  scope="col"><b>Price</b></th>
                <th  scope="col"><b>No_Tickets</b></th>
                <th  scope="col"><b>Bus Name </b></th>


    </tr>
  </thead>


        <tbody>
          {data.map((e, i) => (
            // <div key={i}>
              <tr key={i}>
              <td> {e.Ticket_id}</td>
                <td>{e.User_id}</td>
                <td>{e.seatno}</td>
                <td>{e.Date_of_journey}</td>
                <td>{e.Bus_id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>{e.Booking_id}</td>
                <td>{e.Phone_number}</td>
                <td>{e.source}</td>
                <td>{e.destination}</td>
                <td>{e.price}</td>
                <td>{e.no_tkt}</td>
                <td>{e.bus_name }</td>
              </tr>
            // </div>
            
         ) )}
        </tbody>
      </table>
    </div>
  )
}

export default Userhistory