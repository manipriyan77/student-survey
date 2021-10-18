import React from "react";
import "./Experience.css";
import { Form, Container, Row, Button, Col } from "react-bootstrap";

function Experience() {
  return (
    <Container className="experience">
      <Row>
        <Col lg={12}>
          <Form>
            <Form.Label>
              How likely are you to recommend our school to a friend or
              colleague?
            </Form.Label>
            <div className="table_align">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">Very likely</label>
                <input
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
              />  <label for="css">Somewhat likely</label>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
                <label for="javascript">Unsure</label>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
                <label for="javascript">Not very likely</label>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
                <label for="javascript">Not likely</label>
            </div>
            <div className="text_area mt-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>If not, why?</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Type here..."
                  rows={3}
                />
              </Form.Group>
            </div>
            <div className="button_display">
              <Button variant="success">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Experience;
