import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

class Cuisines_Component extends Component {

    render() {
        let cuisinesArray = [];

        Object.keys(this.props.menu).forEach( key => {
            cuisinesArray.push(
                <Col>{key}</Col>
            );
          });
        return (
            <Container>
                <Row>
                    {cuisinesArray}
                </Row>
            </Container>
        )
    }
}

export default Cuisines_Component;