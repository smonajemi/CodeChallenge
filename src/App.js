import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import NavBar from './components/Nav';
import Movies from './components/Movies';

const api = `https://api.themoviedb.org/3/movie/popular?api_key=dc4b7ad6e4b986a9636b0bef75dbd914&language=en-US&page=1`;
function App() {
  const [movies, setData] = useState([]);
  const [favoriteMovies, setFavorites] = useState([]);

  useEffect(() => {
    fetch(api)        
    .then(res => res.json())
    .then(data =>
        {
          console.log(data.results);
          setData(data.results);
        });        
  },[])

  const addTolist = (movie) => {
    const newList = [...favoriteMovies,movie];
    setFavorites(newList);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <div className='headerText'><h1>Select your favorit movie</h1></div>
          <div className='moviecontainer'>
              {movies.length > 0 && movies.map(movie =>(
                  <Movies key={movie.id} {...movie}/>
                ))}
            </div>
          </Route>
          <Route exact path='/liked'>
          <div className='headerText'><h1>Select your favorit movie</h1></div>
          <div className='moviecontainer'>
              {favoriteMovies.length > 0 && favoriteMovies.map(movie =>(
                  <Movies key={movie.id} {...movie} clickOnHandle={addTolist}/>
                ))}
            </div>
          </Route>
        </Switch>
      </BrowserRouter>        
    </div>
  );
}
export default App;
