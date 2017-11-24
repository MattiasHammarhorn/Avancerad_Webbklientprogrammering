import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Option extends Component {

    handleFilter(event)
 {
    let test = event.currentTarget.innerHTML;
    
    this.props.filterProducts(test);
 }
    render() {
       // console.log(this.props.itemToChildcomponent);
        return (
            <div>
                <Button color='success' 
                onClick={this.handleFilter.bind(this)}
                >
                    {this.props.itemToChildcomponent}
                </Button>
            </div>
        );
    }
}

export default Option;