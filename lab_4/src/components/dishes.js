import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import Dish from './dish.js';

class Dishes extends Component {
  render() {

    let dishesItems = [];
    console.log(this.props.dishes[1]);
  
    if(this.props.dishes[1] === undefined) {
      console.log('undefined')
      dishesItems.push(
        <div>undefined</div>
      )
    } else {
      this.props.dishes[1].forEach( (item, i) => {
        dishesItems.push(
         <Col key={i}>
         <Dish 
           itemToChildcomponent={item}
           addToCart={this.props.addToCart}
         />
       </Col>
        )
      });
    }

    return (
      <Row className="dishes">
        {dishesItems}
      </Row>
    );
  }
}

export default Dishes;

// let filteredItems = [];
    // this.props.filteredOptions.forEach( (item, i) => {
      
    //         filteredItems.push(
    //           <Col key={i}>
    //             <Option 
    //               itemToChildcomponent={item}
    //               addToCart={this.props.addToCart}
    //             />
    //           </Col>
    //         );
    //       })
