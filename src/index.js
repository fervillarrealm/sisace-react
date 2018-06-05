import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './index.css';
import App from './App';
import Error404 from './scenes/error/error404';

window.React = React;

render(
  <Router>
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={300}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="*" component={Error404} />
          </Switch>
        </CSSTransition>
    </TransitionGroup>
  </Router>,
  document.getElementById('root')
);
