import { Row, Col, ListGroup, Alert, Form, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { SVaddByGroup } from "./SVaddByGroup";
import { useClient } from "../../../context/ClientContext";
import { useState, useEffect } from "react";
import { X } from "react-bootstrap-icons";
import { filterActiveServices } from "../utils/formHelper";

export function Services({
  selectedServices,
  setSelectedServices,
  setValue,
  fieldName,
  disablePreview,
  showActiveServices,
  showServiceCodes,
}) {
  const { serviceCodes, getActiveServices, formData } = useClient();

  const setServices = () => {
    const activeServices = getActiveServices();
    if (showActiveServices) return activeServices;
    if (showServiceCodes) return filterActiveServices(activeServices, serviceCodes);
     else return formData["Services"];
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
      selectedServices.some(
        (service) =>
          service[`${showServiceCodes ? "code" : "grouplistid"}`] ===
          code[`${showServiceCodes ? "code" : "grouplistid"}`]
      )
    ) {
      removeService(code);
    } else {
      setSelectedServices((prevState) => [...prevState, code]);
    }
  };

  const removeService = (code) => {
    setSelectedServices((prevState) =>
      prevState.filter(
        (item) =>
          item[`${showServiceCodes ? "code" : "grouplistid"}`] !==
          code[`${showServiceCodes ? "code" : "grouplistid"}`]
      )
    );
  };
  const updateValue = () => {
    let servicesArray = [];
    if (selectedServices) {
      selectedServices.forEach((service) => {
        servicesArray.push(
          service[`${showServiceCodes ? "code" : "grouplistid"}`]
        );
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
  }, [selectedServices]);

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
              {/* <Col md={6}>
                <SVaddByGroup
                  selectedGroup={selectedGroup}
                  setSelectedGroup={setSelectedGroup}
                />
              </Col> */}
            </Row>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup style={{ height: "10rem" }} className="overflow-auto">
          {results.map((result, index) => {
            return (
              <ListGroup.Item
                key={
                  result[`${showServiceCodes ? "code" : "grouplistid"}`] + index
                }
                action
                active={
                  selectedServices &&
                  selectedServices.some(
                    (service) =>
                      service[
                        `${showServiceCodes ? "code" : "grouplistid"}`
                      ] ===
                      result[`${showServiceCodes ? "code" : "grouplistid"}`]
                  )
                }
                type="button"
                onClick={() => selectService(result)}
              >
                <Row>
                  <Col md="auto" className="d-flex">
                    {showServiceCodes ? (
                      <div className="fw-bold pe-2">{result.code}</div>
                    ) : null}
                    <div className="ps-0">
                      {
                        result[
                          `${showServiceCodes ? "description" : "groupvalue"}`
                        ]
                      }
                    </div>
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
