import React from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import Accueil from "./components/Accueil";
import Products from "./components/Products";

import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <div className="global-container">

            <ul className="navBar">
              <Link to="/"><li>Home</li></Link> 
              <Link to="/products"><li>Produits</li></Link>
            </ul>
          <Switch>
            <Route exact path="/" component={Accueil} />

            <Route path="/products"  component={Products} />  
          </Switch>
           

         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
