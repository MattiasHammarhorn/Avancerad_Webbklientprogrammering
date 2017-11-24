import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Dish extends Component {

    handleClick() {
     
        //let price = this.props.dishItem.price;
        let price = this.props.foodItem.price;

        // Dish recieved addToCart from Dishes, which recieved it from App, where it is declared.
        this.props.addToCart(price);
        // Dish recieved addToNavSum from Dishes, which recieved it from App,
        // wich recieved it from Navigation, where it is declared.
        this.props.addToNavSum(price);
    }

    render() {

        return(
            <div>
            <strong>{this.props.foodItem.name}: </strong>
            <p>{this.props.foodItem.category}</p>
            <p>{this.props.foodItem.price} kr</p>
            <Button color='success'

            // we need to use bind in order to call a function from a click-event.
            onClick={this.handleClick.bind(this)} 
            >köp
            </Button>

        </div>
        )

        /* return (
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
        ) */
    }
}

export default Dish;