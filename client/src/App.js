import React, { Component } from 'react';
import './App.css';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
