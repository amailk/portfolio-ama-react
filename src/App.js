import React, { Component } from 'react';
import {Header, ProjectList} from './components'
import './App.css';

var data = require("../db.json");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ProjectList projects={data.projects}/>
        <footer>Ama Liyanage 2016</footer>
      </div>
    );
  }
}

export default App;
