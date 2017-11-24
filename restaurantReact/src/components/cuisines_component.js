import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

class Cuisines_Component extends Component {

    handleClick(event) {
        this.props.setChosenCuisine(event.target.innerHTML);
    }

    render() {
        let cuisinesArray = [];

        Object.keys(this.props.menu).forEach( (key, i) => {
            cuisinesArray.push(
                <Col key={key}>
                    <button onClick={this.handleClick.bind(this)}>
                        {key}
                    </button>
                </Col>
            );
          });
        return (
            <Container className="pt-5">
                <Row className="pb-5">
                    {cuisinesArray}
                </Row>
            </Container>
        )
    }
}

export default Cuisines_Component;