import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import About from './about.js';
import Author from './author.js';
import App from './../App';
import '../App.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    // Toggle dropdown menu on smaller devices
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navSum: 0,
    };


    this.props = {
      chosenOption: ''
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  addToNavSum(price){
    let amount = this.state.navSum;
    amount += price;
    this.setState({navSum: amount});
  }

  storeOption(option) {
    //TODO change this.props.option 
    // send it to dishes. if? statement checks for it
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link className="navbar-brand"  to="/">Home</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem className="navbar-brand">{this.state.navSum}
                </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/author">Author</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route  exact path='/' render={(props) => <App{...props}  
                addToNavSum={this.addToNavSum.bind(this)} />}
        />
        <Route path='/about' component={About}/>
        <Route path='/author' component={Author}/>
      </div>
    );
  }
}

export default Navigation;





