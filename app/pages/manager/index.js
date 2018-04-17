import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import Container from './container/index';
import DashBoard from './container/dashboard';
import Article from './container/article';

ReactDOM.render(
  <HashRouter>
    <Container>
      <Route exact path="/" component={DashBoard}></Route>
      <Route path="/dashboard" component={DashBoard}></Route>
      <Route path="/article" component={Article}></Route>
    </Container>
  </HashRouter>
  , document.getElementById('app'));