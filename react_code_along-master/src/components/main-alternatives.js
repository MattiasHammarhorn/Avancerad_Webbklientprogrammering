
import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import Dishes from './dishes.js';




class MainAlternatives extends Component {
    
    constructor() {

        super();

        this.state = {
            mainAlternatives: []
        }

    }

    componentWillMount() {

        const alternatives = [];

        Object.keys(this.props.menu.main).forEach( (key, i ) => {
            alternatives.push(key);
        })

        this.setState({
            mainAlternatives: alternatives
        })
    }

    handleAlternativeClick(event) {
        let alternative = event.currentTarget.innerHTML;

        this.props.chooseMainAlternative(alternative);
    }
    
    render() {
        
        let alternativesHTML_Array = this.state.mainAlternatives.map( (alternative, i) => {
            return (
                <Col key={i} className='text-center'>
                    <strong onClick={this.handleAlternativeClick.bind(this)}>{alternative}</strong>
                </Col>
            )
        } )

        return(
            <div>
                <div className='text-center pb-5'>Main Alternatives:</div>
                <Row className='pb-5'>
                    {alternativesHTML_Array}
                </Row>
            </div>
        )
        
    }
}

export default MainAlternatives;

{/* <Dishes 
          //pass the state.dishes as props to Dishes
          dishes={this.state.dishes}
          menu = {this.state.menu}

          //pass the AddToNavSum function to Dishes, and Dishes will pass it on to Dish
          addToNavSum={this.props.addToNavSum}

          //pass the addToCart function to Dishes, and Dishes will pass it on to Dish.
          addToCart={this.addToCart.bind(this)}
        />
        <ShoppingCart
          //send the state.sum to ShoppingCart
          sum={this.state.sum}
        /> */}