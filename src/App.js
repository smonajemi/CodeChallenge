import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import FetchNav from './components/Nav';
import FetchMovies from './components/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FetchNav />
        <Switch>
          <Route exact path='/'>
            <p>HOME PAGE</p>
          </Route>
          <Route exact path='/movies'>
            <FetchMovies />
          </Route>
        </Switch>
      </BrowserRouter>
            
         
    </div>
  );
}

export default App;
