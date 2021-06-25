import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';

function FetchNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand='lg' fixed="top">
        <Navbar.Brand href="/" id='navBrand'><b>Sina Monajemi</b></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto nv-links'>
            <Link to='/' id='navLink'><b>Home</b></Link>
            <Link to='/liked' id='navLink'><b>Liked Movies</b></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  )
}
export default FetchNav;