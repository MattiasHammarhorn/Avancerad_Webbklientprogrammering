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


    // add chosenMenu to state
    // add function that sets chosenMenu
    // add sum to state
    // add function that updates sum
 
    this.state= {
      menu: Menu
    }
  }

  componentWillMount(){
    console.log(this.state.menu);
  }

  render() {

    const textProp = 'this is my textprop from App.js';

    return (
      <div className="App">
        <Navbar_Component></Navbar_Component>
        <Cuisines_Component 
          test={"text from app.js sent to Cuisines_Component"}
          menu={this.state.menu}
        ></Cuisines_Component>
      </div>
    );
  }
}

export default App;
