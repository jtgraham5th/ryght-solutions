import { Row, Col, Alert, ListGroup, Form, Button } from "react-bootstrap";
import { useClient } from "../../../context/ClientContext";
import { useState } from "react";
import { X } from "react-bootstrap-icons";
import { useEffect } from "react";

export function Diagnosis({
  selectedDX,
  setSelectedDX,
  setValue,
  fieldName,
  disablePreview,
  showActiveDX,
}) {
  const { dxCodes, getActiveDXCodes } = useClient();

  const setCodes = () => {
    if (showActiveDX) {
      return getActiveDXCodes();
    } else {
      return dxCodes;
    }
  };

  const [results, setResults] = useState(setCodes());
  const [searchType, setSearchType] = useState(0);

  const searchDXCodes = (e) => {
    e.preventDefault();
    let filterCodes = [];
    const searchTerm = e.currentTarget.value;
    if (searchType === 0) {
      filterCodes = setCodes().filter((code) => code.code.toLowerCase().includes(searchTerm.toLowerCase()));
      setResults(filterCodes);
    } else if (searchType === 1) {
      filterCodes = setCodes().filter((code) =>
        code.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filterCodes);
    } else {
      setResults(setCodes())
    }
  };
  const selectDX = (code) => {
    if (
      selectedDX &&
      selectedDX.some((diagnosis) => diagnosis.code === code.code)
    ) {
      removeDX(code);
    } else {
      setSelectedDX((prevState) => [...prevState, code]);
    }
    updateValue();
  };
  const removeDX = (code) => {
    setSelectedDX((prevState) =>
      prevState.filter((item) => item.code !== code.code)
    );
  };
  const updateValue = () => {
    let dxArray = [];
    selectedDX.forEach((dx) => {
      dxArray.push(dx.code);
    });
    setValue(fieldName, dxArray.toString());
  };
  useEffect(() => {
    updateValue();
  }, [selectedDX]);

  return (
    <Row className="border">
      <ListGroup>
        <ListGroup.Item
          variant="secondary"
          className="align-items-center p-2 border-secondary"
        >
          <h4 className="d-flex px-2 m-0">Diagnosis</h4>
          <Form.Text className="d-flex px-2 mb-2">
            Select the diagnosis' the client may recieve. Only those selected
            services will be available for this client when submitting Notes,
            Assessments and Authorizations.
          </Form.Text>
          <div className="d-flex align-items-center">
            <Col md={6} className="me-2">
              <Form.Control
                autoComplete="off"
                className="m-1"
                placeholder="Type to filter..."
                onChange={searchDXCodes}
              />
            </Col>
            <Col md={6}>
              <Form.Check
                inline
                type="radio"
                name="searchType"
                label="by Code"
                value={0}
                onClick={() => setSearchType(0)}
              />
              <Form.Check
                inline
                type="radio"
                name="searchType"
                value={1}
                label="by Description"
                onClick={() => setSearchType(1)}
              />
            </Col>
          </div>
          <Row>
            {!disablePreview && selectedDX && selectedDX.length > 0 ? (
              <Row className="ps-4  align-items-center border-bottom-3">
                <Col md={3} className="small pe-2 text-end">
                  Selected Diagnosis:
                </Col>
                <Col md={9} className="d-flex overflow-auto">
                  {selectedDX.map((diagnosis, index) => {
                    return (
                      <Alert
                        key={"alert" + index}
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
                        {diagnosis.code}
                        <Button
                          size="sm"
                          className="border-0"
                          variant="link"
                          onClick={() => removeDX(diagnosis)}
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
        {results.map((result, index) => (
          <ListGroup.Item
            key={"dx" + index}
            action
            active={
              selectedDX &&
              selectedDX.some((diagnosis) => diagnosis.code === result.code)
            }
            type="button"
            onClick={() => selectDX(result)}
          >
            <Row>
              <Col md="auto" className="d-flex">
                <div className="fw-bold pe-2">{result.code}</div>
                <div className="ps-0">{result.description}</div>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Row>
  );
}
