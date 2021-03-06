import React, { useState, useContext, useEffect, Fragment } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import FlowerContext from '../../context/flower/flowerContext';

const AddFlower = () => {
  const flowerContext = useContext(FlowerContext);

  const {
    addFlower,
    clearCurrent,
    current,
    updateFlower,
    show,
    handleShow,
    handleClose,
  } = flowerContext;

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
        winfo: '',
        einfo: '',
        einfo2: '',
        ainfo: '',
        ainfo2: '',
        ainfo3: '',
        ainfo4: '',
        finfo: '',
        finfo2: '',
        finfo3: '',
        finfo4: '',
        finfo5: '',
        finfo6: '',
        finfo7: '',
        finfo8: '',
      });
    }
  }, [flowerContext, current]);

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
    winfo: '',
    einfo: '',
    einfo2: '',
    ainfo: '',
    ainfo2: '',
    ainfo3: '',
    ainfo4: '',
    finfo: '',
    finfo2: '',
    finfo3: '',
    finfo4: '',
    finfo5: '',
    finfo6: '',
    finfo7: '',
    finfo8: '',
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
    winfo,
    einfo,
    einfo2,
    ainfo,
    ainfo2,
    ainfo3,
    ainfo4,
    finfo,
    finfo2,
    finfo3,
    finfo4,
    finfo5,
    finfo6,
    finfo7,
    finfo8,
  } = flower;

  const onChange = (e) => {
    setFlower({ ...flower, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addFlower(flower);
    } else {
      updateFlower(flower);
    }

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

            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Water Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='winfo'
                value={winfo}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Earth Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='einfo'
                value={einfo}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Air Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='ainfo'
                value={ainfo}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Fire Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='finfo'
                value={finfo}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Fire Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='finfo2'
                value={finfo2}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label> Air Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='ainfo2'
                value={ainfo2}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Fire Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='finfo3'
                value={finfo3}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Fire Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='finfo4'
                value={finfo4}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Earth Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='einfo2'
                value={einfo2}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Air Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='ainfo3'
                value={ainfo3}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Fire Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='finfo5'
                value={finfo5}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Fire Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='finfo6'
                value={finfo6}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Air Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='ainfo4'
                value={ainfo4}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Fire Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='finfo7'
                value={finfo7}
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
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Fire Info</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                name='finfo8'
                value={finfo8}
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
                <option>July 19th</option>
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
