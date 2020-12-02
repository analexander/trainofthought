import React, { Component } from 'react';
import { withRouter} from "react-router-dom"
import { Form, Button, Card } from "react-bootstrap";
import '../journal/JournalEntry.css'

class JournalEntry extends Component {
    render() {
        return (
            <Card id="card">
                <Card.Body>
                    <Form>
                    <Form.Group id="form-group" controlId="exampleForm.ControlInput1">
                        <Card.Title>Today's Journal</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">My Daily Intention</Card.Subtitle>
                        <Form.Control as="textarea" placeholder="Energy Flows Where Intention Goes" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Card.Subtitle className="mb-2 text-muted">3 Things I Love About Myself</Card.Subtitle>
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="1" />
                        <br />                    
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="2" />
                        <br />
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="3" />
                        <br />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea2">
                        <Form.Label id="form-label">What Went Well Today?</Form.Label>
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="1" />
                        <br />                    
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="2" />
                        <br />
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="3" />
                        <br />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                        <Form.Label id="form-label">What Didn't?</Form.Label>
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="1" />
                        <br />                    
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="2" />
                        <br />
                        <Form.Control
                        onChange={() => {}}
                        type="text"
                        placeholder="3" />
                        <br />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                        <Form.Label id="form-label">Let's Vent!</Form.Label>
                        <Form.Control
                        onChange={() => {}}
                        as="textarea"
                        rows={5} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label id="form-label">To Nurture Myself Today I Will...</Form.Label>
                        <Form.Control className="form-control"
                        onChange={() => {}}
                        as="textarea"
                        placeholder="Take a bubble bath, get a massage, go for a walk" />
                    </Form.Group>
                    <Button
                    onClick={() => {}}
                    variant="primary"
                    type="submit">
                        Submit
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default withRouter(JournalEntry);
