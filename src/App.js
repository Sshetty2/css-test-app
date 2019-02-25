import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body className='container'>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="box-1">
            <h2>Sample Container</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In delectus mollitia sapiente reiciendis eos laborum! Itaque ipsam cupiditate maiores, possimus minima culpa totam optio et at velit molestias, praesentium architecto.
            </p>
          </div>
        </body>
      </div>
    );  
  }
}

export default App;
