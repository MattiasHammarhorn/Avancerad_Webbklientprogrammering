import React, { Component } from 'react';
import {Container, NavbarToggler, Collapse, Button, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Navbar_Component extends Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        };
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Container>
                    <NavbarBrand href="#">Restaurant</NavbarBrand>
                    <NavbarToggler onClick={this.toggle.bind(this)} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="navbar-nav mr-auto">
                        <NavItem >
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="#">Shopping Cart</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Container>
    </Nav>
        )
       
       
    }
}

export default Navbar_Component