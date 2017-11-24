import React, { Component } from 'react';
import Dishes from './components/dishes.js'
import ShoppingCart from './components/shopping-cart.js';
import { Container} from 'reactstrap';
import Menu from './components/loveJSON.json';
import Alternatives from './components/main-alternatives.js';
import './App.css';

class App extends Component {

  constructor() {
    
    super(); 

    this.state = {
      dishes:[],
      sum: 0,
      menu:[],
      options: []
    };


  }

  componentWillMount(){
    console.log(Menu)

    // this simulates fetching data from an API. Normally we don't have static data like this.
    this.setState({
      menu: Menu,
      dishes: [
        {
          name: 'Kebab',
          category: 'Meat',
          price: 90
        },
        {
          name: 'Rice',
          category: 'Vegan',
          price: 70
        },
        {
          name: 'Cheese-Salad',
          category: 'Vegetarian',
          price: 80
        },
      ],

    })
    
  }

  chooseMainAlternative(alternative) {

    let alternatives = [];

    Object.entries(this.state.menu.main).forEach(([key, value]) => {
      console.log(key);
      console.log(value);      
      console.log(alternative);
      if ( key === alternative) {
        alternatives = value;
        console.log(key + ' ' + value);  
        }
      }
    );
 

    this.setState({options: alternatives})

  }

  addToCart(price) {

        let amount = this.state.sum;
        amount += price;
        this.setState({sum: amount});
    
      }

  render() {

    return (
  
      <div>
        <Container className="App pt-5">
        <Alternatives menu={this.state.menu} chooseMainAlternative={this.chooseMainAlternative.bind(this)}/>

         <Dishes 
          //pass the state.dishes as props to Dishes
          dishes={this.state.dishes}
          menu = {this.state.options}

          //pass the AddToNavSum function to Dishes, and Dishes will pass it on to Dish
          addToNavSum={this.props.addToNavSum}

          //pass the addToCart function to Dishes, and Dishes will pass it on to Dish.
          addToCart={this.addToCart.bind(this)}
        />
        <ShoppingCart
          //send the state.sum to ShoppingCart
          sum={this.state.sum}
        />
        </Container>
        </div>
    );
  }
}

export default App;
