import React from "react";
import { Row, Container, Form } from "react-bootstrap";

function Details() {
  return (
    <Container>
      <Row>
        <h3>Student Name</h3>
        <Row>
          <div className="col-lg-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="First Name" />
                <Form.Text className="text-muted">
                  <Form.Label>First Name</Form.Label>
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
          <div className="col-lg-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Last Name" />
                <Form.Text className="text-muted">
                  <Form.Label>Last Name</Form.Label>
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
        </Row>
        <Row>
          <div className="col-lg-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>
            </Form>
          </div>
        </Row>
        <Row>
          <div className="col-lg-6">
            <Form>
              <Form.Label>How long have you been a student here?</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
            </Form>
          </div>
        </Row>
      </Row>
      <hr />
    </Container>
  );
}

export default Details;
