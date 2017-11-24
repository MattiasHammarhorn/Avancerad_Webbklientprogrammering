import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './../App.js';
import ShoppingCart from '../components/shopping-cart.js';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';

class Navigation extends Component {
    render() {
        
        return (
            <div>
                <Navbar color='success'>
                    <Nav>
                        <NavItem>
                            <Link className='nav-link' to='/'>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to='/shopping-cart'>Shopping Cart</Link>
                        </NavItem>
                        <hr />
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
