import { useState } from "react";
import { Card, Row, Col, Form, ListGroup, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import { useClient } from "../data/ClientContext";
import { useEffect } from "react";

function Settings(props) {
  // let navigate = useNavigate();
  // const [startDate, setStartDate] = useState(new Date());
  const {
    clientList,
    getClient,
    getClientList,
    updateClient,
    sortAllClients,
    sortedClients,
  } = useClient();
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
  }, [sortedClients]);
  useEffect(() => {
    console.log("set active clients");
    setActiveClients(sortedClients[activeAlpha]);
  }, [activeAlpha]);

  const searchClients = (e) => {
    const targetID = e.currentTarget.id;
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);

    if (searchTerm !== "") {
      const searchTermLower = searchTerm.toLowerCase();
      const newResults = [];
      for (const client of sortedClients[inactiveAlpha]) {
        if (client.name.toLowerCase().includes(searchTermLower)) {
          newResults.push(client);
        }
      }
      if (targetID === "inactive-patients") {
        setInactiveClients(newResults);
      } else if (targetID === "active-patients") {
        setActiveClients(newResults);
      }
    } else {
      if (targetID === "inactive-patients") {
        setInactiveClients(sortedClients[inactiveAlpha]);
      } else if (targetID === "active-patients") {
        setActiveClients(sortedClients[inactiveAlpha]);
      }
    }
  };
  const activatePatients = async () => {
    console.log(moveToActive);
    const movePatients = async () => {
      let activePatients = [];
      for (const patient of moveToActive) {
        let patientData = await getClient(patient.patientid);
        console.log(patientData);
        patientData.isactive = "1";
        activePatients.push(patientData);
      }
      return activePatients;
    };
    movePatients()
      .then((patientArray) => {
        console.log(patientArray);
        patientArray.forEach(async (patient) => {
          await updateClient(patient);
        });
        setMoveToActive([]);
      })
      .then(async () => {
        await getClientList();
      });
    // .then(async () => {
    //   await sortAllClients();
    // });
  };
  return (
    <>
      <Card className="w-100 h-100">
        <Card.Body>
          <Row>
            <Col md={2} className="settings-menu">
              <Card>
                <Card.Header>Settings Menu</Card.Header>
                <ListGroup>
                  <ListGroup.Item> Active Patients</ListGroup.Item>
                  <ListGroup.Item disabled> Set Schedule</ListGroup.Item>
                </ListGroup>
                <Card.Body></Card.Body>
              </Card>
            </Col>
            <Col md={10}>
              <div className="text-start fs-2 mb-2">Activate Patients</div>
              <Row className="justify-content-between">
                <Col md={4}>
                  <Card>
                    <Card.Header>
                      <Card.Subtitle>Active Patients</Card.Subtitle>
                      <Form.Control
                        id="active-patients"
                        onChange={searchClients}
                      />
                    </Card.Header>
                    <Card.Body as={Row} className="select-container">
                      <Col md={2} className="border-right-3 alpha-list">
                        <Nav
                          defaultActiveKey="/home"
                          variant="pills"
                          className="flex-column"
                        >
                          {Object.keys(sortedClients).map((key, index) => (
                            <Nav.Link
                              eventKey={`link-${index}`}
                              onClick={() => setActiveAlpha(key)}
                              className="p-1 text-center"
                            >
                              {key}
                            </Nav.Link>
                          ))}
                        </Nav>
                      </Col>
                      <Col md={10} className="inactive-list-group">
                        <ListGroup>
                          {activeClients.map((client, index) => {
                            if (client.isactive > 0) {
                              return (
                                <ListGroup.Item
                                  action
                                  key={index}
                                  active={moveToInactive.some(
                                    (value) => value.name === client.name
                                  )}
                                  onClick={() =>
                                    setMoveToInactive((prevState) => [
                                      ...prevState,
                                      client,
                                    ])
                                  }
                                >
                                  {client.name}
                                </ListGroup.Item>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </ListGroup>
                      </Col>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  md={3}
                  className="d-flex flex-column justify-content-center"
                >
                  <Card className="move-to-card mb-5">
                    <Card.Header>
                      <Card.Subtitle>Set Patient(s) as Active</Card.Subtitle>
                    </Card.Header>
                    <Card.Body className="inactive-list-group p-0">
                      <ListGroup>
                        {moveToActive.map((client, index) => {
                          if (client.isactive < 1) {
                            return (
                              <ListGroup.Item key={index}>
                                {client.name}
                              </ListGroup.Item>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </ListGroup>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        disabled={moveToActive.length < 1}
                        className="w-100"
                        onClick={activatePatients}
                      >
                        Submit
                      </Button>
                    </Card.Footer>
                  </Card>
                  <Card className="move-to-card">
                    <Card.Header>
                      <Card.Subtitle>Set Patient(s) as Inactive</Card.Subtitle>
                    </Card.Header>
                    <Card.Body className="inactive-list-group p-0">
                      <ListGroup>
                        {moveToInactive.map((client, index) => {
                          if (client.isactive < 1) {
                            return (
                              <ListGroup.Item key={index}>
                                {client.name}
                              </ListGroup.Item>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </ListGroup>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        disabled={moveToInactive.length < 1}
                        className="w-100"
                        onClick={activatePatients}
                      >
                        Submit
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Header>
                      <Card.Subtitle>Inactive Patients</Card.Subtitle>
                      <Form.Control
                        id="inactive-patients"
                        onChange={searchClients}
                      />
                    </Card.Header>
                    <Card.Body as={Row} className="select-container">
                      <Col md={2} className="border-right-3 alpha-list">
                        <Nav
                          defaultActiveKey="/home"
                          variant="pills"
                          className="flex-column"
                        >
                          {Object.keys(sortedClients).map((key, index) => (
                            <Nav.Link
                              key={`inactive-${index}`}
                              eventKey={`inactive-${index}`}
                              onClick={() => setInactiveAlpha(key)}
                              className="p-1  text-center"
                            >
                              {key}
                            </Nav.Link>
                          ))}
                        </Nav>
                      </Col>
                      <Col md={10} className="inactive-list-group">
                        <ListGroup>
                          {inactiveClients.map((client, index) => {
                            if (client.isactive < 1) {
                              return (
                                <ListGroup.Item
                                  action
                                  key={index}
                                  active={moveToActive.some(
                                    (value) => value.name === client.name
                                  )}
                                  onClick={
                                    moveToActive.some(
                                      (value) => value.name === client.name
                                    )
                                      ? () =>
                                          setMoveToActive((prevState) =>
                                            prevState.filter(
                                              (value) =>
                                                value.name !== client.name
                                            )
                                          )
                                      : () =>
                                          setMoveToActive((prevState) => [
                                            ...prevState,
                                            client,
                                          ])
                                  }
                                >
                                  {client.name}
                                </ListGroup.Item>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </ListGroup>
                      </Col>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default Settings;
