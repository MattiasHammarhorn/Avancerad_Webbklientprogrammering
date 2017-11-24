import React, { Component } from 'react';
import './App.css';
import Navbar_Component from './components/navbar_component.js'
import Menu from './menu.json';
import Cuisines_Component from './components/cuisines_component.js'

// parent app. This will hold data to be shared to the rest of the application, sum, foodCategory.
// Will also import and render navbar.

class App extends Component {

  constructor(){
    super();

    this.setChosenCuisine = this.setChosenCuisine.bind(this);
    
    // add chosenMenu to state
    // add function that sets chosenMenu
    // add sum to state
    // add function that updates sum
 
    this.state = ({
      menu: Menu,
      chosenMenu: ''
    });
  }

setChosenCuisine(cuisine) {
  // We do NOT want to modify our state
  // we simply add another value to it
  console.log(cuisine);
  this.setState= ({
    chosenCuisine: cuisine
  });
}

  componentWillMount(){
    console.log(this.state.menu);
  }

  render() {

    const textProp = 'this is my textprop from App.js';

    return (
      <div className="App">
        chosenCuisine: {this.setChosenCuisine}
        <Navbar_Component></Navbar_Component>
        <Cuisines_Component 
          test={"text from app.js sent to Cuisines_Component"}
          menu={this.state.menu}
          setChosenCuisine={this.setChosenCuisine}
        ></Cuisines_Component>
      </div>
    );
  }
}

export default App;
