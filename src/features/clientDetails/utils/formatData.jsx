import { Row, Col, ListGroup } from "react-bootstrap";

export const renderDetail = (field, data, x, y) => {
  return (
    <ListGroup.Item key={field} className="d-flex w-100 p-1 align-items-center" as={Row}>
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
  const formDataArray = formData[groupName];

  if (activeListId && typeof activeListId === "object") {
    let idValues = [];
    activeListId.forEach((activeId) => {
      const data = formDataArray.find((item) => {
        // if (groupName.toLowerCase() === "services") {
        //   return (
        //     item.groupid === parseInt(activeId)
        //   );
        // }
        // console.log(item)
        return parseInt(item.grouplistid) === parseInt(activeId);
      });
      if (data) {
        idValues.push(data.groupvalue);
      }
    });
    return idValues.join(", ");
  } else if (Object.keys(formData).length > 0 && activeListId) {
    const data = formDataArray.find((item) => {
      return item.grouplistid === parseInt(activeListId);
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
