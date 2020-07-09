import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AddFlower from '../flowers/AddFlower';

const Navigation = () => {
  const url = new URL(window.location);

  return (
    <Fragment>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Flower in Black</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/' className='links'>
              Home
            </Nav.Link>
          </Nav>
          <Nav className='navbar'>
            <NavDropdown title='Dates' id='basic-nav-dropdown '>
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
            </NavDropdown>
            {url.pathname.indexOf('/flower') >= 0 && (
              <Nav.Link>
                <AddFlower />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
