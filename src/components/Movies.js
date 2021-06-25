import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container,Row,Col} from 'react-bootstrap';
import '../lib/font-awesome/css/all.min.css';
import '../App.css';
const API = 'https://image.tmdb.org/t/p/w500';
const Movies = (props) =>
<div className="movie">
    <Container>
        <Row> 
            <Col>
                <Card style={{ width: '20rem'}}>
                    <Card.Img variant="top" src={API + props.poster_path} alt={props.title} className='cardImage'/>
                    <Card.Footer className="cardFooter">
                        <Row>
                            <Col>
                                <i className="fas fa-thumbs-up like" onClick={() => props.clickOnHandle()}></i>
                            </Col>
                            <Col>
                                <i className="fas fa-eye">  {props.vote_count}</i>
                            </Col>
                        </Row>                     
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    </Container>
</div>
export default Movies