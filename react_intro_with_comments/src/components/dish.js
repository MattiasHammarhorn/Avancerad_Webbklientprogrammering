import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Dish extends Component {

    handleClick() {
        console.log(this.props.dishItem.price);
        
        let price = this.props.dishItem.price;

        // Dish recieved addToCart from Dishes, which recieved it from App, where it is declared.

        this.props.addToCart(price);
    }

    render() {
        return (
            <div>
                <strong>{this.props.dishItem.name}: </strong>
                <p>{this.props.dishItem.category}</p>
                <p>{this.props.dishItem.price} kr</p>
                <Button color='success'

                // we need to use bind in order to call a function from a click-event.
                onClick={this.handleClick.bind(this)} 
                >köp
                </Button>

            </div>
        )
    }
}

export default Dish;