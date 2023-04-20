
import './App.css';
import Bar from './Components/Bar';
import Sighnup from './Components/Sighnup';
import Login from './Components/Login';
import BusDestination from './Components/BusDestination';
import BusDetails from './Components/BusDetails';
import BusLayout from './Components/BusLayout';
import Footer from './Components/Footer';
import AdminNav from './Components/AdminNav';
import Adminhistory from './Components/Adminhistory';
import AdminDestination from './Components/AdminDestination';
import AdminSighnin from './Components/AdminSighnin';
import Cursole from './Components/Cursole';
import { useEffect, useState } from 'react';
import AdminNewbus from './Components/AdminNewbus';
import Dis from './Components/Dis';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customer from './Components/Customer';
import Pay from './Components/Pay';
import Success from './Components/Success';
import Bar1 from './Components/Bar1';
import PaymentCard from './Components/PaymentCard';
import Userhistory from './Components/Userhistory';
import About from './Components/About1'
import Contact from './Components/Contact';
import Logout from './Components/Logout';


function App(props) {
  const [arr, setArr] = useState()


  const handleEvent = (e) => {
    setArr(e)

  }

console.log(arr)

  return (
    <div className="App">
        {arr == undefined ?
        <BrowserRouter>
          <Bar />

          <Routes>
            <Route path='/' element={<About />} />           
            <Route path='/Login' element={<Login details={handleEvent} />} />
            <Route path='/Signup' element={<Sighnup />} />
            <Route path='/BusDestination' element={<BusDestination />} />       
            <Route path='/About1' element={<About/>} />  
          </Routes>
          
          <Footer />
        </BrowserRouter>

        :
        arr == true ?
          <BrowserRouter>
            <AdminNav details={handleEvent} />
            <Routes>
              <Route path='/adminhistory' element={<Adminhistory />} />
              <Route path='/admindestination' element={<AdminDestination />} />
              <Route path='/adminSighnin' element={<AdminSighnin />} />
              <Route path='/BusDestination' element={<BusDestination />} />
              <Route path='/slide3' element={<BusDetails />} />
              <Route path='/BusLayout' element={<BusLayout />} />
              <Route path='/Customer' element={<Customer />} />
              <Route path='/Pay' element={<Pay />} />
              <Route path='/AdminNewBus' element={<AdminNewbus />} />
              <Route path='/Success' element={<Success />} />
            
              <Route path='/PaymentCard' element={<PaymentCard />} />
              <Route path='/Success' element={<Success />} />
              <Route path='/Login' element={<Login details={handleEvent} /> } />
              <Route/>
            </Routes> 
            <Footer />          
          </BrowserRouter>
          :
          <BrowserRouter>
            <Bar1 details={handleEvent} />
            <Routes>
              <Route path='/' element={<BusDestination />} />
              <Route path='/BusDestination' element={<BusDestination />} />
              <Route path='/slide3' element={<BusDetails />} />
              <Route path='/BusLayout' element={<BusLayout />} />
              <Route path='/Customer' element={<Customer />} />
              <Route path='/Userhistory' element={<Userhistory />} />
              <Route path='/Pay' element={<Pay />} />
              <Route path='/Success' element={<Success />} />
              <Route path='/PaymentCard' element={<PaymentCard />} />
              <Route path='/Login' element={<Login details={handleEvent} /> } />
              <Route path='/Contact' element={<Contact/>} />                
             <Route path='/Success' element={<Success />} />
            </Routes>
            <Footer />
          </BrowserRouter>
      }   
     
   
    </div>
  );
}

export default App;
