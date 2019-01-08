import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let options = {
  mode: 'cors',  //tried both with and without
  method: 'GET',
  credentials: 'include',
  cache: 'no-cache'
};

export default class About extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="react-transition"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}>

        <div className='about-page'>
          <div className='about-content'>
            <h1 className='section-title'>About Me</h1>
            <br />
            I create a high-quality web front end and backend which work, making for you profit, creating advertising of your company and delivering aesthetic pleasure to you and your visitors.

I am a professional Web Developer who builds and edits websites band backend for mobile on a daily basis. I am very confident in my skills as a Web Developer and my ability to complete all kinds of project.

I have experience in:

- Developing websites with python, django, php, laravel, zend, smarty
- Node.js, React.js, Angular.js, socket.io, firebase
- HTML, СSS, PHP, Javascript, JQuery, php composer
- AWS EC2, Lambda, Elastic Beantalk, ECS, Bucket
- docker, docker-compose, jenkins, devops
- Elastic Search, MySQL, PostgreSQL
- Linux System Administration
- Working and configuring ready-made JQuery Solutions
- git, jira, bitbucket

My mission is to provide professional and high quality services that meet expectations.

            <div className = "linkclass">
              <a href="https://github.com/CMBStudioProgram">
                <i className="fa fa-github" aria-hidden="true">https://github.com/CMBStudioProgram</i>
              </a>
              <a href="http://linkedin.com/in/CMBStudio">
                <i className="fa fa-linkedin-square" aria-hidden="true">http://linkedin.com/in/CMBStudio</i>
              </a>
              <a href="http://facebook.com/CMBStudio">
                <i className="fa fa-facebook-square" aria-hidden="true">http://facebook.com/CMBStudio</i>
              </a>
              <a href="mailto:CMBStudio@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true">CMBStudio@gmail.com</i>
              </a>
            </div>
          </div>

          <img className='portrait' src='images/about_picture.jpg'></img>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
