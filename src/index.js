import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Header from './components/Header'
import Welcome from './components/TitlePage'
import Results from './components/Results'
import Create from './components/Input'
ReactDOM.render(
 <div>
    <Header></Header>
  <Router>    
      <div>
      <aside>
        <Link to={`/`}></Link>
        <Link to={`/results`}></Link>
        <Link to={`/create`}></Link>
      </aside>
        <main>
            <Route exact path="/" render={Welcome} />
            <Route path="/results" render={Results} />
            <Route path="/create" render={Create} />
        </main>
      </div>
  </Router>
 </div>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
