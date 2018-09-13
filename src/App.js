import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BodyCard from './components/BodyCard'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: {
        hola: 'hello', 
        adios: 'bye'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Palabras diarias</h1>
        </header>
        <BodyCard words = {this.state.words} />
      </div>
    );
  }
}

export default App;
