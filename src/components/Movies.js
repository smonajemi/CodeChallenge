import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container,Row,Col} from 'react-bootstrap';
import '../lib/font-awesome/css/all.min.css';
import '../App.css';

const ImgApi = 'https://image.tmdb.org/t/p/w500';
const Movies = (props) =>
<div className="movie">
    <Container>
        <Row> 
            <Col>
                <Card style={{ width: '30rem'}}>
                    <Card.Img variant="top" src={ImgApi + props.poster_path} alt={props.title} className='cardImage'/>
                    <div class="overlay">
                        <div class="text">{props.title}</div>
                    </div>
                    <Card.Footer className="cardFooter">
                        <Row>
                            <Col>
                                <i className={`fas fa-plus ${props.isLiked ? 'liked' : ''}`} onClick={() => props.clickOnHandle()} id='cursor'></i>
                            </Col>
                            <Col>
                                <i className="fas fa-eye" id='colorStyle'>  {props.vote_count}</i>
                            </Col>
                        </Row>                     
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    </Container>
</div>

export default Movies