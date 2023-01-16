import { Row, Col, Card, ListGroup } from "react-bootstrap";

export function PreviewItems({ setState, state, title, header, showServices }) {
  const removeService = (code) => {
    setState((prevState) =>
      prevState.filter((item) => {
        return (
          item[`${showServices ? "recid" : "code"}`] !==
          code[`${showServices ? "recid" : "code"}`]
        );
      })
    );
  };

  return (
    <>
      <Card>
        <Card.Header className="bg-light">
          <Row className="justify-content-center align-items-center">
            <Col md={7}>
              <Card.Title className="mb-2">
                {title} ({state.length})
              </Card.Title>
            </Col>
            <Col md={5}>{header}</Col>
          </Row>
        </Card.Header>
        <Card.Body className="overflow-auto" style={{ height: "16rem" }}>
          <ListGroup>
            {state &&
              state.map((result, index) => {
                return (
                  <ListGroup.Item
                    key={
                      showServices
                        ? result.servicename + result.recid + index
                        : result.description + result.code + index
                    }
                    action
                    type="button"
                    variant="primary"
                    onClick={() => removeService(result)}
                  >
                    <Row>
                      <Col md="auto" className="d-flex">
                        {showServices ? null : (
                          <div className="fw-bold pe-2">{result.code}</div>
                        )}
                        <div className="ps-0">
                          {
                            result[
                              `${showServices ? "servicename" : "description"}`
                            ]
                          }
                        </div>{" "}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
