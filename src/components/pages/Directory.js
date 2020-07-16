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
            <ListGroup.Item>{f.winfo}</ListGroup.Item>
            <ListGroup.Item>{f.earth}</ListGroup.Item>
            <ListGroup.Item>{f.einfo}</ListGroup.Item>
            <ListGroup.Item>{f.earth2}</ListGroup.Item>
            <ListGroup.Item>{f.einfo2}</ListGroup.Item>
            <ListGroup.Item>{f.air}</ListGroup.Item>
            <ListGroup.Item>{f.ainfo}</ListGroup.Item>
            <ListGroup.Item>{f.air2}</ListGroup.Item>
            <ListGroup.Item>{f.ainfo2}</ListGroup.Item>
            <ListGroup.Item>{f.air3}</ListGroup.Item>
            <ListGroup.Item>{f.ainfo3}</ListGroup.Item>
            <ListGroup.Item>{f.air4}</ListGroup.Item>
            <ListGroup.Item>{f.ainfo4}</ListGroup.Item>
            <ListGroup.Item>{f.fire}</ListGroup.Item>
            <ListGroup.Item>{f.finfo}</ListGroup.Item>
            <ListGroup.Item>{f.fire2}</ListGroup.Item>
            <ListGroup.Item>{f.finfo2}</ListGroup.Item>
            <ListGroup.Item>{f.fire3}</ListGroup.Item>
            <ListGroup.Item>{f.finfo3}</ListGroup.Item>
            <ListGroup.Item>{f.fire4}</ListGroup.Item>
            <ListGroup.Item>{f.finfo4}</ListGroup.Item>
            <ListGroup.Item>{f.fire5}</ListGroup.Item>
            <ListGroup.Item>{f.finfo5}</ListGroup.Item>
            <ListGroup.Item>{f.fire6}</ListGroup.Item>
            <ListGroup.Item>{f.finfo6}</ListGroup.Item>
            <ListGroup.Item>{f.fire7}</ListGroup.Item>
            <ListGroup.Item>{f.finfo7}</ListGroup.Item>
            <ListGroup.Item>{f.fire8}</ListGroup.Item>
            <ListGroup.Item>{f.finfo8}</ListGroup.Item>
          </Fragment>
        ))}
      </ListGroup>
    </Fragment>
  );
};

export default Directory;
