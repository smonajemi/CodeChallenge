import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import React, { useState } from 'react';

function FetchMovies(){
    
    const api = 'https://api.themoviedb.org/3/movie/550?api_key=dc4b7ad6e4b986a9636b0bef75dbd914';
    const [data, setData] = useState([]);
    
    const apiroute = () => {
        fetch(api)
        
        .then(response => response.json())
        .then(data => 
            {
                console.log(data)
                setData(data);
            })
        .catch(error => console.error(error));
    }
    return (        
      <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link  onClick={apiroute}>Liked Movies</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
          <br />
        <pre> {JSON.stringify(data,null,2)}</pre>
      </div>
    )
}

export default FetchMovies