import React, { Component } from 'react';

import Navbar from './components/navbar';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Projects />
      </div>
    );
  }
}

export default App;
