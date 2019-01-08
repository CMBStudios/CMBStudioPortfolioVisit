import React from 'react';
import {Link} from 'react-router-dom';
require('react-router-dom');
export default class Project extends React.Component {

  render() {
    let project;
    if (this.props.filter === "all" || this.props.filter === this.props.app_name ) {
      project = 
        <tr className="">
          <td>{this.props.cnt}</td>
          <td>{this.props.app_name}</td>
          <td>{this.props.ip}</td>
          <td>{this.props.time}</td>
        </tr>;
    }
console.log(project);
    return (
        {project}
    );
  }
}
