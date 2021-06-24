import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

function FetchNav (){
    return (
        <div>
        <Navbar bg='light' expand='lg'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                  <Nav.Link  href='/'>Home</Nav.Link>
                  <Nav.Link  href='/movies'>Liked Movies</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
          <br />
      </div>
    )
}

export default FetchNav