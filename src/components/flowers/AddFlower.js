import React, { useState, useContext, useEffect, Fragment } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import FlowerContext from '../../context/flower/flowerContext';

const AddFlower = () => {
  const flowerContext = useContext(FlowerContext);

  const { addFlower, clearCurrent, current } = flowerContext;

  useEffect(() => {
    if (current !== null) {
      setFlower(current);
    } else {
      setFlower({
        name: '',
        water: '',
        earth: '',
        earth2: '',
        air: '',
        air2: '',
        air3: ' ',
        air4: '',
        fire: '',
        fire2: '',
        fire3: '',
        fire4: '',
        fire5: '',
        fire6: '',
        fire7: '',
        fire8: '',
        date: 'July 12th',
      });
    }
  }, [flowerContext, current]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [flower, setFlower] = useState({
    name: '',
    water: '',
    earth: '',
    earth2: '',
    air: '',
    air2: '',
    air3: ' ',
    air4: '',
    fire: '',
    fire2: '',
    fire3: '',
    fire4: '',
    fire5: '',
    fire6: '',
    fire7: '',
    fire8: '',
    date: 'July 12th',
  });

  const {
    name,
    water,
    earth,
    earth2,
    air,
    air2,
    air3,
    air4,
    fire,
    fire2,
    fire3,
    fire4,
    fire5,
    fire6,
    fire7,
    fire8,
    date,
  } = flower;

  const onChange = (e) =>
    setFlower({ ...flower, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    addFlower(flower);

    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  console.log(flower);

  return (
    <Fragment>
      <Button variant='primary' className='link' onClick={handleShow}>
        Add Flower
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Flower</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Flower Name</Form.Label>
              <Form.Control
                placeholder='Enter Flower Name'
                name='name'
                value={name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Water</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='water'
                value={water}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Earth</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='earth2'
                value={earth2}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Air</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='air'
                value={air}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Fire</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='fire'
                value={fire}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Fire</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='fire2'
                value={fire2}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Air</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='air2'
                value={air2}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Fire</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='fire3'
                value={fire3}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Fire</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='fire4'
                value={fire4}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Earth</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='earth'
                value={earth}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Air</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='air3'
                value={air3}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Fire</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='fire5'
                value={fire5}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Fire</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='fire6'
                value={fire6}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Air</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='air4'
                value={air4}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Fire</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='fire7'
                value={fire7}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Fire</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                name='fire8'
                value={fire8}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                as='select'
                name='date'
                value={date}
                onChange={onChange}
              >
                <option>July 12th</option>
                <option>July 5th</option>
                <option>June 28th</option>
              </Form.Control>
            </Form.Group>

            <Button variant='primary' type='submit' onClick={onSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default AddFlower;
