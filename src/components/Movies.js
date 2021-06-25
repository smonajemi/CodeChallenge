import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';


function FetchMovies(){   
    let movieList = [];
    const api = `https://api.themoviedb.org/3/movie/popular?api_key=dc4b7ad6e4b986a9636b0bef75dbd914&language=en-US&page=1`;
    const [data, setData] = useState();
        fetch(api)        
        .then(res => res.json())
        .then(data =>
            {
                data.results.map((movie) =>
                    movieList.push(movie.title)
                    );
                
                console.log(movieList);  
                setData(movieList);
                                  
            })
        .catch(error => console.error(error));
    return (
      <div>
          <br />
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <pre> {JSON.stringify(data,null,2)}</pre>
      </div>
    )
}

export default FetchMovies