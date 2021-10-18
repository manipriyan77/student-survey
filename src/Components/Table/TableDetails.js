import React, { useState } from "react";
import "./Table.css";
import { Row, Container, Table, Col } from "react-bootstrap";
import Radio from "@mui/material/Radio";

function TableDetails() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [secondSelectedValue, setSecondSelectedValue] = useState("");

  const secondHandleChange = (event) => {
    setSecondSelectedValue(event.target.value);
  };

  const [thirdSelectedValue, setThirdSelectedValue] = useState("");

  const thirdHandleChange = (event) => {
    setThirdSelectedValue(event.target.value);
  };

  return (
    <Container className="table_details">
      {/* start of Curicluum and classes for the term */}
      <Row>
        <Col lg={8}>
          <h4>Curriculum and classes for the term</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="head_table"></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  The class descriptions accurately described the content.
                </td>
                <td>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                   
                </td>
                <td>
                  <Radio
                    checked={selectedValue === "c"}
                    onChange={handleChange}
                    value="c"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "C" }}
                  />
                   
                </td>
                <td>
                  <Radio
                    checked={selectedValue === "f"}
                    onChange={handleChange}
                    value="f"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "F" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={selectedValue === "d"}
                    onChange={handleChange}
                    value="d"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "D" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  The class descriptions accurately described the content.
                </td>
                <td>
                  <Radio
                    checked={secondSelectedValue === "e"}
                    onChange={secondHandleChange}
                    value="e"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "E" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={secondSelectedValue === "d"}
                    onChange={secondHandleChange}
                    value="d"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "D" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={secondSelectedValue === "c"}
                    onChange={secondHandleChange}
                    value="c"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "C" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={secondSelectedValue === "b"}
                    onChange={secondHandleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={secondSelectedValue === "a"}
                    onChange={secondHandleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  The class descriptions accurately described the content.
                </td>
                <td>
                  <Radio
                    checked={thirdSelectedValue === "a"}
                    onChange={thirdHandleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={thirdSelectedValue === "b"}
                    onChange={thirdHandleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={thirdSelectedValue === "c"}
                    onChange={thirdHandleChange}
                    value="c"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "C" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={thirdSelectedValue === "d"}
                    onChange={thirdHandleChange}
                    value="d"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "D" }}
                  />
                </td>
                <td>
                  <Radio
                    checked={thirdSelectedValue === "e"}
                    onChange={thirdHandleChange}
                    value="e"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "E" }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      {/* end of Curicluum and classes for the term */}
      <hr />
    </Container>
  );
}

export default TableDetails;
