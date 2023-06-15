import { useState } from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import "../features/settings/settings.css";
import { SEActivateClients } from "../features/settings";
import { SEListBoxes } from "../features/settings";
import { SEEditUser } from "../features/settings/components/SE_EditUser";
import { useUser } from "../context/UserContext";
import { SEAdminManagement } from "../features/settings/components/SE_AdminManagement";

function Settings(props) {
  // let navigate = useNavigate();
  // const [startDate, setStartDate] = useState(new Date());
  const { user } = useUser();
  // console.log(user);
  
  const [activeSetting, setActiveSetting] = useState(0);
  const renderSetting = () => {
    switch (activeSetting) {
      case 0:
        return <SEEditUser />;
      case 1:
        return <SEActivateClients />;
      case 2:
        return <SEListBoxes />;
      case 3:
        return <SEAdminManagement />;
      default:
        return <SEEditUser />;
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
                  Edit Personal Information
                </ListGroup.Item>
                {user.accesslevel === 20 ? (
                  <ListGroup.Item action onClick={() => setActiveSetting(1)}>
                    Active Patients 
                  </ListGroup.Item>
                ) : null}
                {user.accesslevel === 20 ? (
                  <ListGroup.Item action onClick={() => setActiveSetting(2)}>
                    Setup List Boxes
                  </ListGroup.Item>
                ) : null}
                {user.accesslevel === 20 ? (
                  <ListGroup.Item action onClick={() => setActiveSetting(3)}>
                    Admin Management
                  </ListGroup.Item>
                ) : null}
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
