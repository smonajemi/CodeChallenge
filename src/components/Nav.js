import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';
function FetchNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand='lg' fixed="top">
        <Navbar.Brand href="/" id='navBrand'>Sina</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto nv-links'>
            <Link to='/' id='navLink'>Home</Link>
            <Link to='/liked' id='navLink'>Liked Movies</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  )
}
export default FetchNav