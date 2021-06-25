import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/Nav';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
const API = `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1`;

function App() {
  const [movies, setData] = useState([]);
  const [favoriteMovies, setFavorites] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setData(data.results);
      });
  }, [])

  const addTolist = (movie) => {
    movie.isLiked = true;
    const newList = [...favoriteMovies, movie];
    setFavorites(newList);
  }
  const removeFromList = (movie) => {
    movie.isLiked = false;
    const newList = favoriteMovies.filter(mv => mv.id !== movie.id);
    setFavorites(newList);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <div className='headerText'>          
              <h1>Select your favorit movie</h1>
            </div>
            <div className='moviecontainer'>
              {movies.length > 0 && movies.map(movie => (
                <Movies key={movie.id} {...movie} clickOnHandle={() => addTolist(movie)} />
              ))}
            </div>
          </Route>
          <Route exact path='/liked'>
            <div className='headerText'><h1>Select your favorit movie</h1></div>
            <div className='moviecontainer'>
              {favoriteMovies.length > 0 && favoriteMovies.map(movie => (
                <Movies key={movie.id} {...movie} clickOnHandle={() => removeFromList(movie)} />
              ))}
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
