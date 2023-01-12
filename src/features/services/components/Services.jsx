import { Row, Col, ListGroup, Alert, Form, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { SVaddByGroup } from "./SVaddByGroup";
import { useClient } from "../../../context/ClientContext";
import { useState, useEffect } from "react";
import { X } from "react-bootstrap-icons";

export function Services({
  selectedServices,
  setSelectedServices,
  setValue,
  fieldName,
  disablePreview,
  showActiveServices,
}) {
  const { serviceCodes, getActiveServiceCodes } = useClient();

  const setServices = () => {
    if (showActiveServices) return getActiveServiceCodes();
    else return serviceCodes;
  };

  const [results, setResults] = useState(setServices());
  const [selectedGroup, setSelectedGroup] = useState(0);

  const searchServices = (e) => {
    e.preventDefault();
    let filterCodes = [];
    const searchTerm = e.currentTarget.value;

    if (searchTerm.length > 0) {
      filterCodes = setServices().filter((service) =>
        service.description.includes(searchTerm)
      );
    }
    setResults(filterCodes);
  };
  const selectService = (code) => {
    if (
      selectedServices &&
      selectedServices.some((service) => service.code === code.code)
    ) {
      removeService(code);
    } else {
      setSelectedServices((prevState) => [...prevState, code]);
    }
  };

  const removeService = (code) => {
    setSelectedServices((prevState) =>
      prevState.filter((item) => item.code !== code.code)
    );
  };
  const updateValue = () => {
    let servicesArray = [];
    if (selectedServices) {
      selectedServices.forEach((dx) => {
        servicesArray.push(dx.code);
      });
      setValue(fieldName, servicesArray.toString());
    }
  };

  useEffect(() => {
    let filteredServices = [];
    if (parseInt(selectedGroup) === 0) {
      filteredServices = setServices();
    }
    if (parseInt(selectedGroup) > 0) {
      filteredServices = setServices().filter((service) => {
        return service.serviceid === parseInt(selectedGroup);
      });
    }
    setResults(filteredServices);
  }, [selectedGroup]);

  useEffect(() => {
    updateValue();
  },[selectedServices])

  return (
    <>
      <Row className="border">
        <ListGroup>
          <ListGroup.Item
            variant="secondary"
            className="align-items-center p-2 border-secondary"
          >
            <h4 className="d-flex px-2 m-0">Services</h4>
            <Form.Text className="d-flex px-2 mb-2">
              Select the services the client may recieve. Only those selected
              services will be available for this client when submitting Notes,
              Assessments and Authorizations.
            </Form.Text>
            <Row className="d-flex align-items-center">
              <Col md={6}>
                <Form.Control
                  className="m-1"
                  placeholder="Type to filter..."
                  onChange={searchServices}
                />
              </Col>
              <Col md={6}>
                <SVaddByGroup
                  selectedGroup={selectedGroup}
                  setSelectedGroup={setSelectedGroup}
                />
              </Col>
            </Row>
            <Row>
              {!disablePreview &&
              selectedServices &&
              selectedServices.length > 0 ? (
                <Row className="ps-4  align-items-center border-bottom-3">
                  <Col md={3} className="small pe-2 text-end">
                    Selected Services:
                  </Col>
                  <Col md={9} className="d-flex overflow-auto">
                    {selectedServices.map((service) => {
                      return (
                        <Alert
                          key={service.code}
                          className="border-primary"
                          variant="primary"
                          style={{
                            width: "6rem",
                            padding: "0.3rem",
                            display: "flex",
                            alignItems: "center",
                            margin: 0,
                            marginRight: "1rem",
                            justifyContent: "space-between",
                          }}
                        >
                          {service.code}
                          <Button
                            size="sm"
                            className="border-0"
                            variant="link"
                            onClick={() => removeService(service)}
                          >
                            <X />
                          </Button>
                        </Alert>
                      );
                    })}
                  </Col>
                </Row>
              ) : null}
            </Row>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup style={{ height: "10rem" }} className="overflow-auto">
          {results.map((result, index) => {
            return (
              <ListGroup.Item
                key={index}
                action
                active={
                  selectedServices &&
                  selectedServices.some(
                    (service) => service.code === result.code
                  )
                }
                type="button"
                onClick={() => selectService(result)}
              >
                <Row>
                  <Col md="auto" className="d-flex">
                    <div className="fw-bold pe-2">{result.code}</div>
                    <div className="ps-0">{result.description}</div>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Row>
    </>
  );
}
