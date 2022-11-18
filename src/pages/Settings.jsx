import { useState } from "react";
import { Card, Row, Col, Form, ListGroup, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import { useClient } from "../data/ClientContext";
import { useEffect } from "react";
import { abcObject } from "../data/formData";
import SEActivateClients from "../components/SE_ActivateClients";
import SEListBoxes from "../components/SE_ListBoxes";

function Settings(props) {
  // let navigate = useNavigate();
  // const [startDate, setStartDate] = useState(new Date());
  const { clientList, getClient, getClientList, updateClient, sortedClients } =
    useClient();

  const [activeClients, setActiveClients] = useState(clientList);
  const [inactiveClients, setInactiveClients] = useState(clientList);
  const [inactiveAlpha, setInactiveAlpha] = useState("a");
  const [activeAlpha, setActiveAlpha] = useState("a");
  const [moveToActive, setMoveToActive] = useState([]);
  const [moveToInactive, setMoveToInactive] = useState([]);

  useEffect(() => {
    console.log("set inactive clients");
    setInactiveClients(sortedClients[inactiveAlpha]);
  }, [inactiveAlpha]);

  useEffect(() => {
    console.log("client list has changed");
  }, [clientList]);

  useEffect(() => {
    console.log("sorted list has been updated");
    setInactiveClients(sortedClients[inactiveAlpha]);
    setActiveClients(sortedClients[activeAlpha]);
  }, [sortedClients]);

  useEffect(() => {
    console.log("set active clients");
    setActiveClients(sortedClients[activeAlpha]);
  }, [activeAlpha]);

  const [activeSetting, setActiveSetting] = useState(0)
  const renderSetting = () => {
    switch (activeSetting) {
      case 0: 
      return <SEActivateClients />;
      case 1:
        return <SEListBoxes />;
      default:
        return <SEActivateClients />;
    }
  }
  return (
    <>
      <Card className="w-100 h-100">
        <Card.Body className="h-100">
          <Row >
            <Col md={2} className="settings-menu">
              <Card>
                <Card.Header>Settings Menu</Card.Header>
                <ListGroup>
                  <ListGroup.Item action onClick={() => setActiveSetting(0)}> Active Patients</ListGroup.Item>
                  <ListGroup.Item action onClick={() => setActiveSetting(1)}> Setup List Boxes</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            {renderSetting()}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default Settings;
