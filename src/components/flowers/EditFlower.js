import React, { Fragment, useContext } from 'react';

import FlowerContext from '../../context/flower/flowerContext';

import { Button } from 'react-bootstrap';

const EditFlower = ({ flower }) => {
  const flowerContext = useContext(FlowerContext);
  const { setCurrent, show, handleShow, handleClose } = flowerContext;

  const onClick = () => {
    setCurrent(flower);
    handleShow();
  };

  return (
    <Fragment>
      {localStorage.getItem('authenticate') && (
        <Button
          variant='outline-info'
          className='edit-button'
          onClick={onClick}
        >
          Edit
        </Button>
      )}
    </Fragment>
  );
};

export default EditFlower;
