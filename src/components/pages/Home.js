import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import flower from './pink-flower-2343170.jpg';
import flower2 from './pink-flowers-photograph-1083822.jpg';
import flower3 from './nature-summer-purple-yellow-36753.jpg';

const Home = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption className=''>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

          <img
            className='d-block w-100 carousel'
            src={flower}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel'
            src={flower2}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel'
            src={flower3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default Home;
