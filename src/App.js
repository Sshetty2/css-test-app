import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './all.css';
import Button from '@material-ui/core/Button';



import Card from './Card'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import * as Colors from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
      primary: { main: '#212121' },
      secondary: Colors.white, 
    },
    type: 'dark'
  }
);




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bobCards:[card1, card2, card3],
      winnieCards: [card1, card2, card3],
      thomasCards: [card1, card2, card3],
      georgeCards: [card1, card2, card3],
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
    
      <React.Fragment>
        
          <div className="box">
            <div className="box1">

                <Card name = 'Winnie' />
                <Card />                  
                <Card />
                <Button  color="primary">
                  Add
                </Button>
            </div>
            <div className="box2">
                <Card name = 'Bob'  />
                  {this.state.bobsCards.map((x, i) =>{
                    return <Card key = {i} card = {x}/>
                  }}
                
                <Card />
                <Button  color="primary">
                  Add
                </Button>
            </div>
            <div className="box3">
                <Card name = 'Thomas' />
                <Card />
                <Card />
                <Button  color="primary">
                  Add
                </Button>
            </div>
            <div className="box4">
                <Card name = 'George' />
                <Card />
                <Card />
                <Button  color="primary">
                  Add
                </Button>
            </div>
          </div>




        <div className='footer'>
          <div className = 'footer-content'>   
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </React.Fragment>
    );  
  }
}


export default App;
