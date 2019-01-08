import React from 'react';
import {Link} from 'react-router-dom';
require('react-router-dom');
export default class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar">
        <li className="logo"><a href="#">
          <img className="fa fa-code" aria-hidden="true"></img> Gold <span style={{fontStyle: "italic", color: "#676666"}}>Time</span>
        </a></li>
        <ul className="nav-items">

        </ul>
      </div>
    );
  }
}
