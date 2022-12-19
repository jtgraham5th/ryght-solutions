import { useState } from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import "../features/settings/settings.css";
import { SEActivateClients } from "../features/settings";
import { SEListBoxes } from "../features/settings";

function Settings(props) {
  // let navigate = useNavigate();
  // const [startDate, setStartDate] = useState(new Date());

  const [activeSetting, setActiveSetting] = useState(0);
  const renderSetting = () => {
    switch (activeSetting) {
      case 0:
        return <SEActivateClients />;
      case 1:
        return <SEListBoxes />;
      default:
        return <SEActivateClients />;
    }
  };
  return (
    <>
      <Card className="w-100 h-100">
        <Card.Body as={Row} className="h-100">
          <Col md={2} className="settings-menu">
            <Card>
              <Card.Header>Settings Menu</Card.Header>
              <ListGroup>
                <ListGroup.Item action onClick={() => setActiveSetting(0)}>
                  Active Patients
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => setActiveSetting(1)}>
                  Setup List Boxes
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          {renderSetting()}
        </Card.Body>
      </Card>
    </>
  );
}

export default Settings;
