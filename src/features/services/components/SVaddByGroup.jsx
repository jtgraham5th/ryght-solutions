import { Form, Row, Col } from "react-bootstrap";
import { useClient } from "../../../context/ClientContext";
import { useState } from "react";

export function SVaddByGroup({ selectedGroup, setSelectedGroup }) {
  const { getActiveServices } = useClient();
  const [services] = useState(getActiveServices());

  return (
    <Row className="align-items-center">
      <Col md={4} className="text-end">
        <Form.Label> By Group</Form.Label>
      </Col>
      <Col md={8} className="ps-0">
        <Form.Select
          className="fs-6"
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value={0}>All Services</option>
          {services.map((item, i) => {
            return (
              <option key={i} value={item.grouplistid}>
                {item.groupvalue}
              </option>
            );
          })}
        </Form.Select>
      </Col>
    </Row>
  );
}
