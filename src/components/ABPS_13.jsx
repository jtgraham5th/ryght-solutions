import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import CEFormFamilyPhysician from "./CE_FormFamilyPhysician";
import CEFormInsuranceProvider from "./CE_FormInsuranceProvider";

function ABSP13({ register, control }) {

  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>SNAP: Strength, Needs, Ability, Prefrences</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What strengths does the client have that affects their quality of
            life?
          </Form.Label>
          <Form.Text>
            (This should include family, friend, teacher supports, hobbies,
            community resources, education)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f60")}
            as="textarea"
            name="f60"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What is needed to increase the client’s quality of life?
          </Form.Label>
          <Form.Text>
            (Name specific interventions, resources for biological,
            psychological, and social/environmental barriers)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f61")}
            as="textarea"
            name="f61"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What are the client’s abilities and skills that would help increase
            his/her quality of life?
          </Form.Label>
          <Form.Text>
            (This should include personality traits, work skills, academic
            skills)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f62")}
            as="textarea"
            name="f62"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What strengths does the parent believe the client has?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f63")}
            as="textarea"
            name="f63"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What are the family’s strengths?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f64")}
            as="textarea"
            name="f64"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What are the client and family’s expectation of and preferences for
            this service?{" "}
          </Form.Label>
          <Form.Text>
            (This should include the client’s own words of his/her expected
            outcome)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f65")}
            as="textarea"
            name="f65"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default ABSP13;
