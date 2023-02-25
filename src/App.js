import React from 'react';
import './App.css';
import Module from './components/module1.js'
import Home from './components/Home.js';
import Props from './components/Props.js';
import CComponent from './components/components.js'
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <p>Main Theme</p>
        <Module/>
      <CComponent/>
        </header>
      <Props name="prop1"/>
      <Props num="1"/>
      <Props someparam="smth"/>

    </div>

    </Router>

  );
}

export default App;
