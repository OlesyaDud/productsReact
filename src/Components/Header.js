import React, {Component} from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import Home from "./Home";
import Products from "./Products";
import Locations from "./Locations";
import Login from "./Login";



export default class Header extends Component {
render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link  href="/products">Products</Nav.Link>
                            <Nav.Link  href="/locations">Locations</Nav.Link>
                            <Nav.Link  href="/login">Login</Nav.Link>
                        </Nav>
                        <Button variant="outline-info">Search</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/locations" component={Locations} />
                    <Route exact path="/login" component={ Login } />
                </Switch>
            </Router>
            </>
        )
    }
}
