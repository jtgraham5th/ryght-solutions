import { Row, Col, ListGroup, Form, Badge } from "react-bootstrap";
import { useClient } from "../../../context/ClientContext";
import { useState, useEffect } from "react";
import { filterActiveServices } from "../utils/formHelper";

export function Services({
  selectedServices,
  setSelectedServices,
  setValue,
  fieldName,
  showActiveServices,
  showServiceCodes,
  addServiceCodes,
  filterBy,
  minimal,
  containerStyle,
}) {
  const { serviceCodes, getActiveServices, formData } = useClient();

  const setServices = () => {
    const activeServices = getActiveServices();
    if (showActiveServices) return activeServices;
    if (filterBy && showServiceCodes) {
      return filterActiveServices(filterBy, serviceCodes);
    }
    if (showServiceCodes) {
      return filterActiveServices(activeServices, serviceCodes);
    } else return formData["Services"];
  };

  const [results, setResults] = useState(setServices());
  const [selectedGroup] = useState(0);

  useEffect(() => {
    setResults(setServices());
    // eslint-disable-next-line
  }, [filterBy]);

  const searchServices = (e) => {
    e.preventDefault();
    let filterCodes = [];
    const searchTerm = e.currentTarget.value;
    if (searchTerm.length > 0) {
      filterCodes = setServices().filter((service) => {
        if (showServiceCodes) {
          return (
            service.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            service.code.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          return service.groupvalue.toLowerCase().includes(searchTerm.toLowerCase());
        }
      });
      setResults(filterCodes);
    } else {
      setResults(setServices());
    }
  };
  const selectService = (code) => {
    if (
      selectedServices &&
      selectedServices.some(
        (service) =>
          service[
            `${
              showServiceCodes && filterBy
                ? "recid"
                : showServiceCodes
                ? "code"
                : "grouplistid"
            }`
          ] ===
          code[
            `${
              showServiceCodes && filterBy
                ? "recid"
                : showServiceCodes
                ? "code"
                : "grouplistid"
            }`
          ]
      )
    ) {
      removeService(code);
      if (addServiceCodes) {
        removeServiceCodes(code);
      }
    } else {
      setSelectedServices((prevState) => [...prevState, code]);
      if (addServiceCodes) {
        addServiceCodes((prevState) => ({
          ...prevState,
          [code.grouplistid]: filterActiveServices([code], serviceCodes, true),
        }));
      }
    }
  };

  const removeService = (code) => {
    setSelectedServices((prevState) =>
      prevState.filter(
        (item) =>
          item[
            `${
              showServiceCodes && filterBy
                ? "recid"
                : showServiceCodes
                ? "code"
                : "grouplistid"
            }`
          ] !==
          code[
            `${
              showServiceCodes && filterBy
                ? "recid"
                : showServiceCodes
                ? "code"
                : "grouplistid"
            }`
          ]
      )
    );
  };

  const removeServiceCodes = (code) => {
    addServiceCodes((prevState) => {
      if (prevState.hasOwnProperty(code.grouplistid)) {
        const newState = { ...prevState };
        delete newState[code.grouplistid];
        return newState;
      }
      return prevState;
    });
  };
  const updateValue = () => {
    let servicesArray = [];
    if (selectedServices) {
      selectedServices.forEach((service) => {
        servicesArray.push(
          service[
            `${
              showServiceCodes && filterBy
                ? "recid"
                : showServiceCodes
                ? "code"
                : "grouplistid"
            }`
          ]
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
    // eslint-disable-next-line
  }, [selectedGroup]);

  useEffect(() => {
    updateValue();
    // eslint-disable-next-line
  }, [selectedServices]);

  return (
    <>
      <Row className={`border ${containerStyle}`}>
        <ListGroup>
          <ListGroup.Item
            variant="secondary"
            className={`align-items-center p-2 border-secondary ${
              minimal ? "d-flex" : ""
            }`}
          >
            <h4 className="d-flex px-2 m-0">
              {showServiceCodes ? "Service Codes" : "Services"}
            </h4>
            {!minimal ? (
              <Form.Text className="d-flex px-2 mb-2">
                Select the services the client may recieve. Only those selected
                services will be available for this client when submitting
                Notes, Assessments and Authorizations.
              </Form.Text>
            ) : (
              ""
            )}
            <Row className="d-flex align-items-center">
              <Col md={!minimal ? 6 : "auto"}>
                <Form.Control
                  autoComplete="off"
                  className="m-1"
                  placeholder="Type to filter..."
                  onChange={searchServices}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup
          style={containerStyle ? { height: "60vh" } : { height: "10rem" }}
          className="overflow-auto"
        >
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
                        `${
                          showServiceCodes && filterBy
                            ? "recid"
                            : showServiceCodes
                            ? "code"
                            : "grouplistid"
                        }`
                      ] ===
                      result[
                        `${
                          showServiceCodes && filterBy
                            ? "recid"
                            : showServiceCodes
                            ? "code"
                            : "grouplistid"
                        }`
                      ]
                  )
                }
                type="button"
                onClick={() => selectService(result)}
              >
                <Row>
                  <Col md="auto" className="">
                    <div className="ps-0">
                      <small>{
                        result[
                          `${showServiceCodes ? "description" : "groupvalue"}`
                        ]
                      }</small>
                      {showServiceCodes ? (
                        <Badge bg="dark" className="ms-1">
                          {result.code}
                        </Badge>
                      ) : null}
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
