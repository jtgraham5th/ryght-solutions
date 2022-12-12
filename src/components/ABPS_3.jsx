import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";

function ABSP3({ register, control }) {
  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Risk and Trauma Assessment (Include abuse/neglect)</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <h5>
          List all major illness, surgeries, major injuries. Begin with most
          recent and work backwards
        </h5>
        <Col md={5}>
          <Form.Label className="CE-form-label">Past Conditions</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f1")}
            type="text"
            name="f1"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Date of Onset</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f2")}
            type="text"
            name="f2"
          />
        </Col>
        <Col md={5}>
          <Form.Label className="CE-form-label">Residual Effects</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f3")}
            type="text"
            name="f3"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={5}>
          <Form.Control
            className="goal-detail-input"
            {...register("f4")}
            type="text"
            name="f4"
          />
        </Col>
        <Col md={2}>
          <Form.Control
            className="goal-detail-input"
            {...register("f5")}
            type="text"
            name="f5"
          />
        </Col>
        <Col md={5}>
          <Form.Control
            className="goal-detail-input"
            {...register("f6")}
            type="text"
            name="f6"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={5}>
          <Form.Control
            className="goal-detail-input"
            {...register("f7")}
            type="text"
            name="f7"
          />
        </Col>
        <Col md={2}>
          <Form.Control
            className="goal-detail-input"
            {...register("f8")}
            type="text"
            name="f8"
          />
        </Col>
        <Col md={5}>
          <Form.Control
            className="goal-detail-input"
            {...register("f9")}
            type="text"
            name="f9"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={5}>
          <Form.Control
            className="goal-detail-input"
            {...register("f10")}
            type="text"
            name="f10"
          />
        </Col>
        <Col md={2}>
          <Form.Control
            className="goal-detail-input"
            {...register("f11")}
            type="text"
            name="f11"
          />
        </Col>
        <Col md={5}>
          <Form.Control
            className="goal-detail-input"
            {...register("f12")}
            type="text"
            name="f12"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={5}>
          <Form.Control
            className="goal-detail-input"
            {...register("f13")}
            type="text"
            name="f13"
          />
        </Col>
        <Col md={2}>
          <Form.Control
            className="goal-detail-input"
            {...register("f14")}
            type="text"
            name="f14"
          />
        </Col>
        <Col md={5}>
          <Form.Control
            className="goal-detail-input"
            {...register("f15")}
            type="text"
            name="f15"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default ABSP3;
