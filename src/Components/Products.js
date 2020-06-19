import React, {Component} from 'react';

import {Container, Media, Tab, Nav, Col, Row, Card, ListGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";



export default class Products extends Component {
    render() {

        return(
            <Container>
                <Tab.Container id="tabId" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column mt-5" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Oils</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Soaps</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>

                        <Col sm={8}>
                            <Tab.Content className="mt-5">
                                <Tab.Pane eventKey="first">
                                   <Media className="m-5">
                                       <img width={200}
                                       height={200}
                                       className="mr-3"
                                       src="https://images.pexels.com/photos/2879991/pexels-photo-2879991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />

                                    <Media.Body>
                                        <h3>Product One</h3>
                                        <p> Some text to desctibe product one</p>
                                    </Media.Body>
                                   </Media>
                                </Tab.Pane>
                            
                                <Tab.Pane eventKey="second">
                                <Media className="m-5">
                                       <img width={200}
                                       height={200}
                                       className="mr-3"
                                       src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />

                                    <Media.Body>
                                        <h3>Product Two</h3>
                                        <p> Some text to desctibe product two</p>
                                    </Media.Body>
                                   </Media>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        <Col sm={2} className="mt-5">
                            <h5 className="text-center">Categories</h5>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Hats</ListGroup.Item>
                                    <ListGroup.Item>Blouses</ListGroup.Item>
                                    <ListGroup.Item>Hats</ListGroup.Item>
                                    <ListGroup.Item>Hats</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
}
}
