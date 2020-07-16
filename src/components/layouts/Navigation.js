import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AddFlower from '../flowers/AddFlower';
import Password from '../pages/Password';

import { Link } from 'react-router-dom';

const Navigation = () => {
  const url = new URL(window.location);

  return (
    <Fragment>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>Black Lotus Savings</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/' className='links'>
              Home
            </Nav.Link>
            {url.pathname.indexOf('/flower') >= 0 && (
              <Nav.Link href='/password'>Owner</Nav.Link>
            )}
          </Nav>
          <Nav className='navbar mr-5'>
            {url.pathname.indexOf('/flower') >= 0 &&
              localStorage.getItem('authenticate') && (
                <Fragment>
                  <Nav.Link>
                    <Password />
                    <AddFlower />
                  </Nav.Link>
                </Fragment>
              )}

            <Nav.Link href='/directory'>Directory</Nav.Link>

            <NavDropdown title='Dates' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/flower'>All Flowers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/flower/june-28th'>
                June 28th
              </NavDropdown.Item>
              <NavDropdown.Item href='/flower/july-5th'>
                July 5th
              </NavDropdown.Item>
              <NavDropdown.Item href='/flower/july-12th'>
                July 12th
              </NavDropdown.Item>

              <NavDropdown.Item href='/flower/july-19th'>
                July 19th
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
