import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dishes from './components/dishes.js';
import Options from './components/options.js';
import ShoppingCart from './components/shopping-cart.js';
import Navigation from './components/navigation.js';
import { Container } from 'reactstrap';
import './App.css';
import MyJSON from './components/foods.json';

class App extends Component {

  constructor() {

    // We need to call super in order to use setState
    super();

    this.state = {
      options: [],
      dishes: [],
      sum: 0
    };
  }

  componentWillMount() {

    // We declare an array and fill it with the contents in the first position of the jSon-file.
    let array = [];

    //console.log(MyJSON);
    MyJSON.options.forEach((key, i) => {
      array.push(key[0]);
      // console.log(array);
    });

    //This simulates a response from an API. Change this to your own food ideas.
    this.setState({

      // We assign the values of the array that received objects from the jSon-file, on to our state dishes-property.
      options: array
    });
    
  }

  filterProducts(test) {

    let alternatives = [];
    
    Object.entries(MyJSON.options).forEach(([key, value]) => {
      
      if ( value[0] === test) {
        alternatives = value;
        console.log(alternatives);
      }
    })
    
    this.setState({ dishes : alternatives });
  }

  addToCart( price ) {
    
    // The price parameter has been passed up from Dish, via Dishes
    console.log('App.js säger att det kostar ' + price + 'kr');
    
    // The state should not be changed, it should be updated, as we're doing here.
    // State should be immutable, thus we pluck state out and change it without touching it directly
    let amount = this.state.sum;
    amount += price;
    this.setState({sum : amount});
  }

  render() {
    
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Container className="App pt-5">        
            <Route exact path='/' render={props => <Options{...props}
              options={this.state.options}
              filterProducts={this.filterProducts.bind(this)}
              dishes={this.state.dishes}
              addToCart={this.addToCart.bind(this)}
              />}
            />
            <Route path='/shopping-cart' render={props => <ShoppingCart{...props}
              sum={this.state.sum} />}
            />
          </Container>
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;

/* options={this.state.options}

filterProducts={this.filterProducts.bind(this)} */
            
// Pass the state.dishes as props to Projects
/* dishes={this.state.filteredOptions}
          
// Pass the addToCart function to Projects, and Projects will pass it on to Item.
addToCart={this.addToCart.bind(this)} */
            
// Send the state.sum to ShoppingCart
/* sum={this.state.sum}  */ 