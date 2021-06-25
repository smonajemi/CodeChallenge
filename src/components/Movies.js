import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Container,Row,Col} from 'react-bootstrap';
import '../App.css';
const API = 'https://image.tmdb.org/t/p/w500';
const Movies = ({poster_path, title,overview}) =>
<div className="movie">
    <Container>
        <Row>
            <Col size='10'>
                <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={API + poster_path} alt={title} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        {/* <Card.Text>{overview}</Card.Text> */}
                    </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Add to Favourits</Button>
                </Card.Footer>
                </Card>
            </Col>
        </Row>
    </Container>
</div>

export default Movies




// <Card style={{ width: '18rem' }}>

// <Card.Body>
//     <Card.Title>{title}</Card.Title>
//     <Card.Text>
//     Some quick example text to build on the card title and make up the bulk of
//     the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>