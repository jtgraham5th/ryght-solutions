import { Row, Col, Form, Button, Collapse, Card } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PeopleFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";

function CEFormReferralSource({ register }) {
  return (
<>      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Referral Source</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("firstName")}
            type="text"
            name="firstName"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("address")}
            type="text"
            name="address"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("city")}
            type="text"
            name="city"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
          <Form.Select
            {...register("state")}
            name="state"
            aria-label="Select State"
          >
            <option>Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Zip Code</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("zipCode")}
            type="number"
            name="zipCode"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default CEFormReferralSource;
