import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Header
            title={"IN THE LOOP"}
          />
      </div>
    );
  }
}

export default App;
