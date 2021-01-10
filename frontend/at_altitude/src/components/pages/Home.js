import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Card, CardDeck, Carousel, ListGroup, Button } from 'react-bootstrap';

const divStyle1 = {
    backgroundColor: '#fff1e6',
    paddingTop: '5px',
    textColor: '#adb5bd',
    marginBottom: '5px',
    paddingBottom: '5px'
}

const carousel = {
    overflow: 'hidden'
}

const h3Style = {
    textColor: '#adb5bd'
}

const price = {
    fontSize: '3rem',
    fontWeight: 'bold'
}

const button = {
    textDecoration: 'none'
}

const Home = () => {
    return(
        <Fragment>
            <Carousel className={carousel}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../images/Daniel_Smits-2.jpg")}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The Man!</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../images/Daniel_Smits-25.jpg")}
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>The Myth!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../images/matteo-grando.jpg")}
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>The Daniel Claasen!</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={divStyle1}>
                <h3 id="about" className="text-center mt-5 mb-2" style={h3Style}>About</h3>
                <p className="mr-5 ml-5 text-center">
                Here at AT ALTITUDE we offer you the one stop shop of running. We use our passion and experience to create memorable running experiences for athletes of any level. We want to encourage you to discover where your legs can take you and help you become a well-rounded athlete. Whether it is a personal goal, a specific race or just living a healthy lifestyle, we have it covered. 
                <br/>
                <br/>
                We help you to focus on the long term goal and building consistent running improvement, instead of focusing on short term results. Our priority is to ensure that training remains a portion of your day that is enjoyable, instead of a daily chore. We create training experiences that are fun and add to your general well-being. 
                <br/>
                <br/>
                We invest in the journey with our athletes and ensure that we are present throughout the process. We encourage regular communication to ensure we stay aligned within our coach-athlete relationship. 
                <br/>
                <br/>
                We build our training programs to the bigger goals and update them weekly, based on the progress and general health and wellbeing of our athletes. We understand that time is a precious commodity and we work with you to ensure we optimise the time spent on training effectively. 

                </p>
            </div>
            <div className="ml-5 mr-5">
                <h3 id="coaching" className="text-Center mt-5">Coaching</h3>
                <CardDeck className="mt-5 mb-5">
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
                        <Card.Footer>
                        <Link to="/basic" style={button}><Button variant="outline-secondary" block>Join</Button></Link>
                        </Card.Footer>
                    </Card>
                    <Card bg="light">
                        <Card.Body>
                        <Card.Title>Premium Program</Card.Title>
                        <Card.Text>
                            <p style={price}>R750</p>
                            <p>per month</p>
                            <hr />
                        </Card.Text>
                        <ListGroup variant="light">
                            <ListGroup.Item>Personally customised training programs (weekly updated)</ListGroup.Item>
                            <ListGroup.Item>Group Runs and Group Training Sets </ListGroup.Item>
                            <ListGroup.Item>Personal one-on-one coaching and mentoring sessions </ListGroup.Item>
                            <ListGroup.Item>Quarterly Training Camps </ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                        <Link to="/premium" style={button}><Button variant="success" block>Join</Button></Link>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
            </div>
        </Fragment>
    );
}

export default Home;
