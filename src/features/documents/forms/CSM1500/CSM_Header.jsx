import { Row, Col, Form, NavItem } from "react-bootstrap";
export function CSMHeader({ register, control, formState }) {
  return (
    <Form.Group as={Row}>
      <Col
        md={3}
        className="d-flex flex-column justify-content-center align-items-center border"
      >
        <Form.Label className="text-primary small text-center  ">
          24. A. DATE(S) OF SERVICE
        </Form.Label>
        <Row className="w-100">
          <Col md={6} className="text-primary small text-center">
            From
          </Col>
          <Col md={6} className="text-primary small text-center">
            To
          </Col>
        </Row>
      </Col>
      <Col
        md={4}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Row>
          <Col md={2} className="border p-0">
            <Form.Label className="text-primary small text-center ">
              B. PLACE OF SERVICE
            </Form.Label>
          </Col>
          <Col md={2} className="border">
            <Form.Label className="text-primary small text-center">
              C. EMG
            </Form.Label>
          </Col>
          <Col md={8} className="border ">
            <Form.Label className="text-primary small text-center">
              D. PROCEDURES, SERVICES, OR SUPPLIES
            </Form.Label>
            <Row>
              <Col md={6} className="text-primary small text-center">
                CPT/HCPCS
              </Col>
              <Col md={6} className="text-primary small text-center">
                MODIFIER
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        md={1}
        className="d-flex flex-column justify-content-center align-items-center border"
      >
        <Form.Label className="text-primary small text-center">
          E. DIAGNOSIS POINTER
        </Form.Label>
      </Col>
      <Col
        md={4}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Row>
          <Col md={3} className="border">
            <Form.Label className="text-primary small text-center">
              F. $ CHARGES
            </Form.Label>
          </Col>
          <Col md={2} className="border p-0">
            <Form.Label className="text-primary small text-center">
              G. DAYS OR UNITS
            </Form.Label>
          </Col>
          <Col md={2} className="border p-0">
            <Form.Label className="text-primary small text-center">
              H. EPSDT Family Plan
            </Form.Label>
          </Col>
          <Col md={2} className="border text-center">
            <Form.Label className="text-primary small text-center">
              I.
              <br /> ID.
              <br /> QUAL.
            </Form.Label>
          </Col>
          <Col md={3} className="border  p-0">
            <Form.Label className="text-primary small text-center">
              J. RENDERING PROVIDER ID. #
            </Form.Label>
          </Col>
        </Row>
      </Col>
    </Form.Group>
  );
}
