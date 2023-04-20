import React from 'react'
import '../Components/Cssfiles/Footer.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import footerlogo2 from '../Components/Images/footerlogo2.jpg'
import Row from 'react-bootstrap/Row';
import test1 from '../Components/Images/test1.jpg'
 
 function Footer(){
  return(
     
          <div className="footer pt-5">
              {/* <div className="footer-sub">
                  <div className="footer-Left">
                       <div>
                           <ul>
                               <p>About redBus</p>
                               <li><a href="">About Us</a></li>
                               <li><a href="">Contact Us</a></li>
                               <li><a href="">Mobile Version</a></li>
                               <li><a href="">redBus on Mobile</a></li>
                               <li><a href="">Sitemap</a></li>
                               <li><a href="">Offers</a></li>
                               <li><a href="">Careers</a></li>
                               <li><a href="">Values</a></li>
                           </ul>
                       </div>
                       <div>
                           <ul>
                               <p>About redBus</p>
                               <li><a href="">T & C</a></li>
                               <li><a href="">Privacy Policy</a></li>
                               <li><a href="">FAQ</a></li>
                               <li><a href="">Blog</a></li>
                               <li><a href="">Bus Operator Registration</a></li>
                               <li><a href="">Agent Registration</a></li>
                               <li><a href="">Insurance Partner</a></li>
                               <li><a href="">User Agreement</a></li>
                           </ul>
                       </div>
                       <div>
                           <ul>
                               <p> Global Sites</p>
                               <li><a href="">India</a></li>
                               <li><a href="">Singapore</a></li>
                               <li><a href="">Malaysia</a></li>
                               <li><a href="">redBus on Mobile</a></li>
                               <li><a href="">Indonesia</a></li>
                               <li><a href="">Peru</a></li>
                               <li><a href="">Colombia</a></li>
                              
                           </ul>
                       </div>
                       <div>
                           <ul>
                               <p>Our Partners</p>
                               <li><a href="">Goibibo</a></li>
                               <li><a href="">Makemytrip</a></li>
                          
                          
                           </ul>
                       </div>
                  </div>
                  <div className="footer-Right">
                         <div>
                             <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt="redbuslogo" />
                         </div>
                         <div className="footer-right-details">redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</div>
                         <div>
                             <a href="https://www.facebook.com/redbus.in/">
                                 <span ><img style={{width:"86px"}} src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" /></span>
                             </a>
                             <a href="https://twitter.com/redBus_in">
                                 <span  ><img style={{width:"50px" ,color:"#d7d7d7"}} src="https://www.svgrepo.com/show/11841/twitter.svg" alt="" /></span>
                             </a>
                         </div>
                         <div style={{float:"left" ,marginTop:"15px"}}>
                             <span>Ⓒ</span>
                             <span>2021 ibibogroup All rights reserved</span>
                         </div>
                  </div>
              </div> */}
     <Container>

<Row >
<Col sm="4">
    <div className='log'>
   
    <img src={footerlogo2} width={55} height={40} ></img>
    <h2 className='ms-3'>
       24/7 Travel
    </h2>
    </div>
    </Col>
    <Col sm="8">
    <h4>Our Services</h4>
    </Col>
</Row>
<Row  >
    <Col sm="4">
<h5 className='mt-3'>
   Travel 24/7 is a mobile or web software Bus booking Application  designed to provide customers with a personalized
     easy-to-utilize user experience for booking  tickets online. It stores 
     customers personal data records, scheduled routes, frequent trips, drop points, and other information
    </h5>
    </Col>
 <Col sm="3">
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">  Volvo Bus</h5>
    </div>

    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">  Orange Bus</h5>
    </div>
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">  Dolphin Bus</h5>
    </div>
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">   Geepee Travels</h5>
    </div>
 </Col>

 <Col sm="3">
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">   Vijay Travels</h5>
    </div>

    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">PVR Travels</h5>
    </div>
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3"> Gayatri Travels</h5>
    </div>
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3"> Kavan Travels</h5>
    </div>
 </Col>
 <Col sm="2">
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">  SR Travels</h5>
    </div>

    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">Kaveri Travels</h5>
    </div>
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3">Diamond Travels</h5>
    </div>
    <div className='log' >
    <img src={test1} width={25} height={25} className="mt-1"></img>
    <h5 className="mt-1 ms-3"> RC Travels</h5>
    </div>
 </Col>
   

</Row>







     </Container>

              
          </div>
  )
}
export default Footer