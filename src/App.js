import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo2 from './kisspng.png'
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {ProductName: "Chai", Price: 10},
        {ProductName: "Chang", Price: 20},
        {ProductName: "Chai", Price: 10},
        {ProductName: "Chang", Price: 20},
        {ProductName: "Chai", Price: 10},
        {ProductName: "Chang", Price: 20},
        {ProductName: "Chai", Price: 10},
        {ProductName: "Chang", Price: 20},
        {ProductName: "Chai", Price: 10},
        {ProductName: "Chang", Price: 20}
      ],
      title: "Hello from KendoReact!", 
      skip: 0
    }
  }
  render() {
    return (
      <div>
        <div className="App">

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
          <div className="grid">
            <Grid data={this.state.data} style = {{height: '15vh'}}>
                <GridColumn field="ProductName" title="Product name"/>
                <GridColumn field="Price"/>
            </Grid>
          </div>
        </div>
        <div className='footer'>
          <div className = 'footer-content'>   
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );  
  }
}


export default App;
