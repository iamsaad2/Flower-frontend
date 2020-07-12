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
            <h3>Black Lotus Savings Club</h3>
            <p>Sou-Sou Savings Club</p>
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
            <h3>Save Money</h3>
            <p>Join Our Club to Save Money</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel'
            src={flower3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Flower in Black</h3>
            <p>All gifts are due by Sunday 5pm</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default Home;
