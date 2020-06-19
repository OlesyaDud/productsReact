import React, {Component} from 'react';
import  {Container, CardDeck, Card, Button} from 'react-bootstrap';

import Contact from "./Contact";

export default class Home extends Component {
    render() {

        return(
            <>
            <Container>
                <h2 className="text-center m-5">Our Locations</h2>

            <CardDeck className="m-4 mb-5">
                <Card bg="light" className="text-center" text="info">
                    <Card.Img style={{ height: '350px'}} variant="top" src="https://images.pexels.com/photos/3639542/pexels-photo-3639542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title>Location One</Card.Title>
                        <Card.Text>text about location One</Card.Text>
                        <Button variant="info">View</Button>
                    </Card.Body>
                </Card>

                <Card bg="light" className="text-center" text="info">
                    <Card.Img style={{ height: '350px'}} variant="top" src="https://images.pexels.com/photos/2879991/pexels-photo-2879991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title>Location Two</Card.Title>
                        <Card.Text>text about location Two</Card.Text>
                        <Button variant="info">View</Button>
                    </Card.Body>
                </Card>

                <Card bg="light" className="text-center" text="info"> 
                    <Card.Img style={{ height: '350px'}} variant="top" src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title>Location Three</Card.Title>
                        <Card.Text>text about location Three</Card.Text>
                        <Button variant="info">View</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
            </Container>
            <Contact />
            </>
        );
}
}
