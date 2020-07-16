import React, { useContext, Fragment } from 'react';
import FlowerContext from '../../context/flower/flowerContext';

import { Button } from 'react-bootstrap';

const DeleteFlower = ({ flower }) => {
  const { _id } = flower;

  const flowerContext = useContext(FlowerContext);

  const { deleteFlower, clearCurrent } = flowerContext;

  const onDelete = () => {
    deleteFlower(_id);
    clearCurrent();
  };

  return (
    <Fragment>
      {localStorage.getItem('authenticate') && (
        <Button variant='outline-danger' className='button' onClick={onDelete}>
          Delete
        </Button>
      )}
    </Fragment>
  );
};

export default DeleteFlower;
