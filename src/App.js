import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import FetchNav from './components/Nav';
import FetchMovies from './components/Movies';
import './App.css';
const api = `https://api.themoviedb.org/3/movie/popular?api_key=dc4b7ad6e4b986a9636b0bef75dbd914&language=en-US&page=1`;

function App() {
  const [movies, setData] = useState([]);
  useEffect(() => {
    fetch(api)        
    .then(res => res.json())
    .then(data =>
        {
          console.log(data.results);
          setData(data.results);
        });        
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <FetchNav />
        <Switch>
          <Route exact path='/'>
            <p>HOME PAGE</p>
          </Route>
          <Route exact path='/movies'>
            <div className='moviecontainer'>
              {movies.length > 0 && movies.map(movie =>(
                  <FetchMovies key={movie.id} {...movie}/>
                ))}
            </div>
          </Route>
        </Switch>
      </BrowserRouter>        
    </div>
  );
}
export default App;
