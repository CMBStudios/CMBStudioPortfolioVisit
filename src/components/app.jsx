import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
// components
import Home from './home';
import Navbar from './navbar';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import {Link} from 'react-router-dom';
require('react-router-dom');
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={Projects}>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById("root");
  ReactDOM.render(appRouter, root);
});
