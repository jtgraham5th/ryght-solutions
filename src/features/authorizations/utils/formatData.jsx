import { Row, Col, ListGroup } from "react-bootstrap";

export const renderDetail = (field, data, x, y) => {
  return (
    <ListGroup.Item key={field} className="d-flex w-100" as={Row}>
      <Col md={x} className={`text-primary`}>
        {field}:
      </Col>
      <Col md={y} className="fw-bold p-0">
        {data}
      </Col>
    </ListGroup.Item>
  );
};

export const getServiceCodeValue = (code, serviceCodes) => {
  const foundService = serviceCodes.find((service) => parseInt(service.recid) === parseInt(code));
  if (foundService) return foundService.description;
  else return "";
};
