import { Row, Col, Card, ListGroup } from "react-bootstrap";
import { ClientIssues } from "./ClientIssues";
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
    <Card className="mb-4">
      <Card.Body as={Row} className="demoInfo">
        <Col className="p-0 h-100 d-flex align-items-center flex-column" md={2}>
          <div className="clientImg">
            <img
              className="w-100"
              alt="client"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
          </div>
        </Col>
        <Col md={3} className="">
          <ListGroup className="align-items-center" variant="flush">
            {data01.map((data, i) =>
              renderDetail(data.field, data.value, 4,7)
            )}
          </ListGroup>
        </Col>
        <Col md={3} className="">
          <ListGroup variant="flush">
            {data02.map((data, i) =>
              renderDetail(data.field, data.value, 8,4)
            )}
          </ListGroup>
        </Col>
        <Col md={4} className="">
          <ListGroup variant="flush">
            {data03.map((data, i) =>
              renderDetail(data.field, data.value, 5,7)
            )}
          </ListGroup>
        </Col>
      </Card.Body>
      {/* <hr/>
      <Row className="pe-2 ps-2 pb-2">
        <ClientIssues />
      </Row> */}
    </Card>
  );
}
