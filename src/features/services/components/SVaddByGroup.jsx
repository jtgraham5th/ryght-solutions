import { Form, Row, Col } from "react-bootstrap";
import { useClient } from "../../../context/ClientContext";

export function SVaddByGroup({ selectedGroup, setSelectedGroup }) {
  const { serviceGroups } = useClient();

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
          {serviceGroups.map((item, i) => {
            return (
              <option key={i} value={item.recid}>
                {item.servicename}
              </option>
            );
          })}
        </Form.Select>
      </Col>
    </Row>
  );
}
