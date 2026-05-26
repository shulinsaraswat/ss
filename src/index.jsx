import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';

const routes=<BrowserRouter basename="/ss">
  <Switch>
    <Route exact path='/' component={App}/>
  </Switch>
</BrowserRouter>

ReactDOM.render(
  routes,
  document.getElementById('root')
);
