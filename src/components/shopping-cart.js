import React, { Component } from 'react';

class ShoppingCart extends Component {

    render() {
        return (
            // display the sum passed from App
            <div className="pt-5">
               summa: {this.props.sum}
            </div>
        )
    }
}

export default ShoppingCart;