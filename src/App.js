import React, { Component } from 'react';
import './App.css';

class App() extends Component {

  constructor() {
    super()

    this.state = {
      startState = true
    }
  }
  return (
    <div className="App">
      <header className="header">
        <p>
          Header info goes here.
        </p>
      </header>
    </div>
  );
}

export default App;
