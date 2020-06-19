import React, {Component} from 'react';

import{Form, Button, Container} from 'react-bootstrap';

export default class Contact extends Component {
    render() {

        return(
            <Container style={{ width: '500px'}} >
                <h2 className="text-center m-5">Contact Our Main Office</h2>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Your message" rows="5" />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        )
}
}
