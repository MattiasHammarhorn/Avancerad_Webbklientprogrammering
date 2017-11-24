import React, { Component } from 'react';

class ShoppingCart extends Component {

    render() {
        return (
            <div className="pt-5">
                Summa: {this.props.sum}
            </div>
        );
    }
}

export default ShoppingCart;