import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import AppBar from './AppBar';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import * as Colors from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/';

const theme = createMuiTheme({
    palette: {
      primary: grey[900],
      secondary: Colors.white, // Switching the dredark mode on is a single property value change.
    },
    type: 'dark'
  }
);

// const theme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
//   overwrites = {
      //   appBar: {
      //     color: Colors.blueGrey800,
      //     textColor: Colors.grey100
      //   }
      // },
  
// });


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
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar />
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
      </MuiThemeProvider>
    );  
  }
}


export default App;
