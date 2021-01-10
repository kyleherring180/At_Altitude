import React from 'react';
import ContactForm from '../pages/Contact';
import { CardDeck, Card, ListGroup} from 'react-bootstrap';

const price = {
    fontSize: '3rem',
    fontWeight: 'bold'
};

class Premium extends React.Component {
    render(){
        return(
            <div>
                <div className="mt-2">
                <h1>Premium Program</h1>
                </div>
                <CardDeck className="mt-5 mb-5 ml-2 mr-2">
                    <Card>
                        <Card.Body>
                        <Card.Title>Premium Program</Card.Title>
                        <Card.Text>
                            <p style={price}>R750</p>
                            <p>per month</p>
                            <hr />
                        </Card.Text>
                        <ListGroup variant="light">
                            <ListGroup.Item>Personally customised training programs (weekly updated)</ListGroup.Item>
                            <ListGroup.Item>Group Runs and Group Training Sets</ListGroup.Item>
                            <ListGroup.Item>Personal one-on-one coaching and mentoring sessions</ListGroup.Item>
                            <ListGroup.Item>Quarterly Training Camps</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <ContactForm /> 
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Premium;