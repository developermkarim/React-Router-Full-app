
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner01 from '../../../images/banner/banner1.jpg';
import banner02 from '../../../images/banner/banner2.jpg';
import banner03 from '../../../images/banner/banner3.jpg';
const Banner = () => {
    return (
       <>
       <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner03}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner01}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner02}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </>
    );
};

export default Banner;