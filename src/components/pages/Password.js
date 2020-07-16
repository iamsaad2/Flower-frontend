import React, { useState, useEffect, useContext } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import { withRouter, useLocation } from 'react-router-dom';

const Password = ({ history }) => {
  let currentLocation = useLocation();

  console.log(currentLocation);
  const [authenticate, setAuthenticate] = useState(false);

  const [password, setPassword] = useState({
    pass: '',
  });

  const { pass } = password;

  const onChange = (e) =>
    setPassword({ ...password, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (pass === 'flower') {
      handleClose();
      history.push('/flower');
    } else {
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    localStorage.setItem('authenticate', true);
    setShow(false);
    setAuthenticate(localStorage.getItem('authenticate'));
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    // if (!localStorage.getItem('authenticate')) handleShow();

    if (
      currentLocation.pathname === '/password' &&
      !localStorage.getItem('authenticate')
    )
      handleShow();
  }, []);

  return (
    <>
      <Modal show={show} backdrop='static' keyboard={false}>
        <Modal.Header>
          <Modal.Title>Enter Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='pass'
                value={pass}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default withRouter(Password);
