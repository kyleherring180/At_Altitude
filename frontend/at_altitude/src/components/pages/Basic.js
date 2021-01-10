import React from 'react';
import ContactForm from '../pages/Contact';
import { CardDeck, Card, ListGroup} from 'react-bootstrap';

const price = {
    fontSize: '3rem',
    fontWeight: 'bold'
}

const basic = {
    height: '100%'
}

const Basic = () => {
    return(
        <div>
            <div className="mt-5">
            <h1>Basic Program</h1>
            </div>
            <CardDeck className="mt-5 mb-10 ml-2 mr-2">
                    <Card>
                        <Card.Body>
                        <Card.Title>Basic Program</Card.Title>
                        <Card.Text>
                            <p style={price}>R400</p>
                            <p>per month</p>
                            <hr />
                        </Card.Text>
                        <ListGroup variant="light">
                            <ListGroup.Item>Personally customised training programs (weekly updated)</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                                <ContactForm />
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                    </CardDeck>
        </div>
    )
}

export default Basic;