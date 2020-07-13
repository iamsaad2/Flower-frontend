import React, { useContext, Fragment, useEffect } from 'react';

import FlowerContext from '../../context/flower/flowerContext';

import { ListGroup } from 'react-bootstrap';

const Directory = () => {
  const flowerContext = useContext(FlowerContext);

  const { flowers, getFlowers } = flowerContext;

  useEffect(() => {
    getFlowers();
  }, []);

  return (
    <Fragment>
      <ListGroup variant='flush'>
        {flowers.map((f) => (
          <Fragment>
            <ListGroup.Item>{f.water}</ListGroup.Item>
            <ListGroup.Item>{f.earth}</ListGroup.Item>
            <ListGroup.Item>{f.earth2}</ListGroup.Item>
            <ListGroup.Item>{f.air}</ListGroup.Item>
            <ListGroup.Item>{f.air2}</ListGroup.Item>
            <ListGroup.Item>{f.air3}</ListGroup.Item>
            <ListGroup.Item>{f.air4}</ListGroup.Item>
            <ListGroup.Item>{f.fire}</ListGroup.Item>
            <ListGroup.Item>{f.fire2}</ListGroup.Item>
            <ListGroup.Item>{f.fire3}</ListGroup.Item>
            <ListGroup.Item>{f.fire4}</ListGroup.Item>
            <ListGroup.Item>{f.fire5}</ListGroup.Item>
            <ListGroup.Item>{f.fire6}</ListGroup.Item>
            <ListGroup.Item>{f.fire7}</ListGroup.Item>
            <ListGroup.Item>{f.fire8}</ListGroup.Item>
          </Fragment>
        ))}
      </ListGroup>
    </Fragment>
  );
};

export default Directory;
