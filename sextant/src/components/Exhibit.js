import React from "react";
import { Card } from "react-bootstrap";

class Exhibit extends React.Component {
    render() {
        return (
            <Card className='exhibit'>
                <Card.Header>
                    Welcome to Sextant!
                </Card.Header>
                <Card.Body>
                    {this.props.children}
                </Card.Body>
            </Card>
        );
    }
}

export default Exhibit;