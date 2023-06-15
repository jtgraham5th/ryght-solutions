import { Row, Card, ListGroup } from "react-bootstrap";
import { useClient } from "../../../context/ClientContext";
import "./ClientDemographics.css";
import { dataColumn1, dataColumn2, dataColumn3 } from "../data/clientDetails";
import { renderDetail } from "../../clientDetails/utils/formatData";

export function CVDemographics() {
  const { activeClient, formData } = useClient();
  const data01 = dataColumn1(formData, activeClient);
  const data02 = dataColumn2(formData, activeClient);
  const data03 = dataColumn3(formData, activeClient);
  return (
    <Card className="mb-4 shadow">
      <Card.Header className="fs-4 fw-normal text-center">
        {activeClient.pfirstname + " " + activeClient.plastname}
      </Card.Header>
      <Card.Body as={Row} className="demoInfo justify-content-center">
        <img
          className="w-75"
          alt="client"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
        <ListGroup className="align-items-center pt-2 pb-2" variant="flush">
          {data01.map((data, i) => renderDetail(data.field, data.value, 6, 6))}
          {/* </ListGroup>
        </Col>
        <Col md={3} className="">
          <ListGroup variant="flush"> */}
          {data02.map((data, i) => renderDetail(data.field, data.value, 6, 6))}
          {/* </ListGroup>
        </Col>
        <Col md={4} className="">
          <ListGroup variant="flush"> */}
          {data03.map((data, i) => renderDetail(data.field, data.value, 6, 6))}
        </ListGroup>
      </Card.Body>
      {/* <hr/>
      <Row className="pe-2 ps-2 pb-2">
        <ClientIssues />
      </Row> */}
    </Card>
  );
}
