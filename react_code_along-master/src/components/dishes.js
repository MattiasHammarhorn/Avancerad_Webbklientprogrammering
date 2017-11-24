import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import Dish from './dish.js';

class Dishes extends Component {

  render() {


    let mainMenu = [];
    let test = '';

    /* for (let property in this.props.menu.main) {
      if (this.props.menu.main.hasOwnProperty(property)) {
      }
    } */
    /* Object.keys(main).forEach( (key, i) => {

        console.log(main[i])
      }
    ) */
    
    let menuArray = [];

    if (this.props.menu.length === 0) {
      return(
        <div>
        <br/>
        <br/> 
          Please select one of the above
        </div>
      )
        
    } else {
      menuArray = this.props.menu.map((foodItem, i) => {
        
              return (
                <Col  key={i}>
                <Dish
                  //pass individual dishItems to each Dish
                  foodItem={foodItem}
             
                  //pass addToCart to Dish 
                  addToCart={this.props.addToCart}
        
                  //pass addToNavSum to Dish 
                  addToNavSum={this.props.addToNavSum}
                />
              </Col>
              )
             }
        )
    }

    return (
      <div>
        <div className='text-center pb-5'>Dishes:</div>
        <Row className='text-center'>
          {menuArray}
        </Row>
      </div>
      
    );
  }
}

export default Dishes;
