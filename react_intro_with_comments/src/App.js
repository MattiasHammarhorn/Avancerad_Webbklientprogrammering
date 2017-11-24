import React, { Component } from 'react';
import Dishes from './components/dishes.js';
import ShoppingCart from './components/shopping-cart.js';
import { Container} from 'reactstrap';
import './App.css';

class App extends Component {

  constructor() {
    // we need to call super in order to use setState
    super();

    this.state = {
      dishes:[],
      sum: 0
    }
  }

  componentWillMount(){
    
    //this simulates a respons from an API. Change this to your own food ideas.
    this.setState({

      dishes: [
        {
          name: 'Kebab',
          category: 'Meat',
          price: 90
        },
        {
          name: 'Spring Rolls',
          category: 'Vegan',
          price: 70
        },
        {
          name: 'Fried Cheese',
          category: 'Vegetarian',
          price: 80
        },
      ]

    });
  }

  addToCart(price) {

    //the price parameter has been passed up from Dish, via Dishes
    
    console.log('app.js säger att det kostar '+ price + 'kr');
  
    // the state should not be changed, it should be updated, as we're doing here.
    let amount = this.state.sum;
    amount += price;
    this.setState({sum: amount});
  
  }

  render() {
    return (
      <Container className="App pt-5">
        <Dishes 
          //pass the state.dishes as props to Dishes
          dishes={this.state.dishes}

          //pass the addToCart function to Dishes, and Dishes will pass it on to Dish.
          addToCart={this.addToCart.bind(this)}
        />
        <ShoppingCart
          //send the state.sum to ShoppingCart
          sum={this.state.sum}
        />
      </Container>
    );
  }
}

export default App;
