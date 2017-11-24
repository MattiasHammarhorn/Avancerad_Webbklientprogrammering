import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Dish extends Component {
    
    handleClick() {
        console.log(this.props.itemToChildcomponent.price);
        
        let price = this.props.itemToChildcomponent.price;
        
        // Dish received addToCart from Projects, which was received from App, where it was declared.

        this.props.addToCart(price);
    }

    render() {
        return (
            <div>
                <strong>{this.props.itemToChildcomponent.name}: </strong>
                {/* <p>{this.props.itemToChildcomponent.category}</p> */}
                <p>{this.props.itemToChildcomponent.price} kr</p>
                <Button color='success' 

                // We need to use bind in order to call a function from a click-event.
                onClick={this.handleClick.bind(this)}>
                    Köp
                </Button>
            </div>
        );
    }
}

export default Dish;