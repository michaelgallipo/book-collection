import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BookInfo from './BookInfo';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const RoutedApp = (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/book" component={BookInfo}/>
    </div>
  </Router>
)

ReactDOM.render(RoutedApp, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
