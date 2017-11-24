import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Option from './option.js';
import Dishes from './dishes.js';

class Options extends Component {
  render() {
    
    let optionsChoices = [];

    this.props.options.forEach( (item, i) => {
      optionsChoices.push(
        <Col key={i}>
          <Option 
            itemToChildcomponent={item}
            filterProducts={this.props.filterProducts}
          />
        </Col>
      );

  })
                
    return (
      <div className="options pb-5">
        <Row>
          {optionsChoices}          
        </Row>
        <Row className="pt-5">
          <Dishes 
            dishes={this.props.dishes}
            addToCart={this.props.addToCart}
          />
        </Row>
        
      </div>
      
      );
    }
}

export default Options;

// let optionsChoices = this.props.options.map( (item, i) => {
      //   return (
      //     <Col key={i}>
      //       <Option 
      //         itemToChildcomponent={item}
      //         filterProducts={this.props.filterProducts}
      //       />
      //     </Col>
      //   );
