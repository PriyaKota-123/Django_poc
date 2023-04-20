import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Busses from '../Components/Images/Busses.jpg'
import Busses1 from '../Components/Images/Busses1.jpg'
import Busses3 from '../Components/Images/Busses3.jpg'

function Cursole() {
  return (
    <Carousel>
    <Carousel.Item interval={1500}>
        <img
            className="d-block"
            src={Busses}
            alt="Second slide" width="100%" height="700"
        />
        <Carousel.Caption>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
        <img
            className="d-block"
            src={Busses1}
           
            alt="Third slide" width="100%" height="700"
        />
        <Carousel.Caption>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
        <img
            className="d-block"
            src={Busses3}
            alt="First slide" width="100%" height="700"
        />
        <Carousel.Caption>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
      
  )
}

export default Cursole
