import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <ReactCSSTransitionGroup
          transitionName="react-transition"
          transitionAppear={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}>
        <p className="title">Gold Time</p>
        <p className="description">Software Developer</p>

        <div className="home-icons">
          <a href="https://github.com/CMBStudioProgram">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="http://linkedin.com/in/CMBStudio">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a href="http://facebook.com/CMBStudio">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a href="mailto:CMBStudio@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
