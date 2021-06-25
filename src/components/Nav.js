import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import '../App.css';
function FetchNav (){
    return (
        <div>
        <Navbar bg="dark" variant="dark"expand='lg' fixed="top">
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                  <Nav.Link  href='/' id='navLink'>Home</Nav.Link>
                  <Nav.Link  href='/movies' id='navLink'>Movies</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
          <br />
      </div>
    )
}

export default FetchNav