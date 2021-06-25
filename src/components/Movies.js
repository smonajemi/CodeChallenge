import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Container,Row,Col,Grid} from 'react-bootstrap';
import '../App.css';
import '../lib/font-awesome/css/all.min.css';
const API = 'https://image.tmdb.org/t/p/w500';
const Movies = ({poster_path, title,overview}) =>
<div className="movie">
    <Container>
        <Row> 
            <Col size='10'>
                <Card style={{ width: '20rem'}}>
                    <Card.Img variant="top" src={API + poster_path} alt={title} class='cardImage'/>
                    <Card.Body>
                        <Card.Title class='cardTitle' >{title}</Card.Title>
                        {/* <Card.Text>{overview}</Card.Text> */}
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary"><i class="fas fa-thumbs-up"></i></Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    </Container>
</div>
export default Movies