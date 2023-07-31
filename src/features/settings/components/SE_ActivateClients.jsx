import { useState } from "react";
import {
  Card,
  Row,
  Col,
  Form,
  ListGroup,
  Button,
  Nav,
  Spinner,
} from "react-bootstrap";
import "../settings.css";
import { useClient } from "../../../context/ClientContext";
import { useEffect } from "react";

export function SEActivateClients(props) {
  const {
    clientList,
    getClient,
    getClientList,
    updateClient,
    sortedClients,
    loading,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inactiveAlpha]);

  useEffect(() => {
    console.log("sorted list has been updated");
    setInactiveClients(sortedClients[inactiveAlpha]);
    setActiveClients(sortedClients[activeAlpha]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedClients]);

  useEffect(() => {
    console.log("set active clients");
    setActiveClients(sortedClients[activeAlpha]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const activatePatients = async (type) => {
    const patientArray = type === "activate" ? moveToActive : moveToInactive;
    const movePatients = async () => {
      let activePatients = [];
      for (const patient of patientArray) {
        let patientData = await getClient(patient.patientid);
        console.log(patientData);
        patientData.statusid = patientData.statusid === "1" ? "0" : "1";
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
        if (type === "activate") {
          setMoveToActive([]);
        } else {
          setMoveToInactive([]);
        }
      })
      .then(async () => {
        await getClientList(20);
      });
    // .then(async () => {
    //   await sortAllClients();
    // });
  };
  return (
    <Col md={10}>
      <Card className="p-0">
        <Card.Header className="d-flex flex-row justify-content-between align-items-center p-2">
          <h4 className="mb-0">Activate Patients</h4>
        </Card.Header>
        <Card.Body as={Row} className="justify-content-between">
          <Col md={4}>
            <Card>
              <Card.Header>
                <Card.Subtitle>Active Patients</Card.Subtitle>
                <Form.Control autoComplete="off" id="active-patients" onChange={searchClients} />
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
                <Col
                  md={10}
                  className={`inactive-list-group ${
                    loading ? "spinner-activate" : ""
                  }`}
                >
                  <ListGroup>
                    {loading ? (
                      <Spinner animation="border" variant="primary" />
                    ) : (
                      activeClients.map((client, index) => {
                        if (client.statusid > 0) {
                          return (
                            <ListGroup.Item
                              action
                              key={index}
                              active={moveToInactive.some(
                                (value) => value.name === client.name
                              )}
                              onClick={
                                moveToInactive.some(
                                  (value) => value.name === client.name
                                )
                                  ? () =>
                                      setMoveToInactive((prevState) =>
                                        prevState.filter(
                                          (value) => value.name !== client.name
                                        )
                                      )
                                  : () =>
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
                      })
                    )}
                  </ListGroup>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="d-flex flex-column justify-content-center">
            <Card className="move-to-card mb-5">
              <Card.Header>
                <Card.Subtitle>Set Patient(s) as Active</Card.Subtitle>
              </Card.Header>
              <Card.Body className="inactive-list-group p-0">
                <ListGroup>
                  {moveToActive.map((client, index) => {
                    return (
                      <ListGroup.Item
                        action
                        key={index}
                        onClick={() =>
                          setMoveToActive((prevState) =>
                            prevState.filter(
                              (value) => value.name !== client.name
                            )
                          )
                        }
                      >
                        {client.name}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Card.Body>
              <Card.Footer>
                <Button
                  disabled={moveToActive.length < 1}
                  className="w-100"
                  onClick={() => activatePatients("activate")}
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
                    if (client.statusid > 0) {
                      return (
                        <ListGroup.Item
                          action
                          key={index}
                          onClick={() =>
                            setMoveToInactive((prevState) =>
                              prevState.filter(
                                (value) => value.name !== client.name
                              )
                            )
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
              </Card.Body>
              <Card.Footer>
                <Button
                  disabled={moveToInactive.length < 1}
                  className="w-100"
                  onClick={() => activatePatients("deactivate")}
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
                <Form.Control autoComplete="off" id="inactive-patients" onChange={searchClients} />
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
                <Col
                  md={10}
                  className={`inactive-list-group ${
                    loading ? "spinner-activate" : ""
                  }`}
                >
                  <ListGroup>
                    {loading ? (
                      <Spinner animation="border" variant="primary" />
                    ) : (
                      inactiveClients.map((client, index) => {
                        if (client.statusid < 1) {
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
                                          (value) => value.name !== client.name
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
                      })
                    )}
                  </ListGroup>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
}
