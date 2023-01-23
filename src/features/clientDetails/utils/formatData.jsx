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

export const getFormValue = (groupName, activeListId, formData) => {
  if (typeof activeListId === "object") {
    const formDataArray = formData[groupName];
    const data = formDataArray.find((item) => {
      if (groupName.toLowerCase() === "services") {
        return item.groupid === parseInt(activeListId[groupName.toLowerCase()]);
      }
      return (
        item.grouplistid === parseInt(activeListId[groupName.toLowerCase()])
      );
    });
    if (data) {
      return data.groupvalue;
    } else {
      return "";
    }
  } else if (Object.keys(formData).length > 0 && activeListId) {
    const formDataArray = formData[groupName];
    const data = formDataArray.find((item) => {
      return item.grouplistid === activeListId;
    });
    if (data) {
      return data.groupvalue;
    } else {
      return "";
    }
  } else {
    return "";
  }
};
