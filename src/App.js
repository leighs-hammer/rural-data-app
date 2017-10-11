import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Example from './components/Example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Example/>
      </div>
    );
  }
}

export default App;
