import { Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import {
  DateField,
  SelectField,
  TextField,
  TextAreaField,
} from "../../../components/form/fieldCreator";
import { useFieldArray } from "react-hook-form";
import { useState } from "react";
import { AuthService } from "./AuthService";
import { parseAuthService } from "../../utils/parseData";

export function AU1({ register, setValue, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  const addService = () => {
    append(parseAuthService()[0]);
  };

  return (
    <Row>
      <Col>
        <div className="CE-section-title">
          <h3>Authorization</h3>
        </div>
        <Row>
          <Col md={9}>
            <Form.Group as={Row} className="mb-3">
              <Col md={4} className="border rounded pb-2 bg-light">
                <TextField
                  register={register}
                  labelName="Authorization ID"
                  fieldType="number"
                  fieldName="authorizationid"
                />
              </Col>
              <Col md={4}>
                <DateField
                  control={control}
                  labelName="Requested Submission Date"
                  fieldName="submitdate"
                />
              </Col>
              <Col md={4}>
                <DateField
                  control={control}
                  labelName="Effective Date"
                  fieldName="effectivedate"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col md={4}>
                <SelectField
                  register={register}
                  labelName="Status"
                  fieldName="status"
                  groupName="Status"
                />
              </Col>
              <Col md={4}>
                <DateField
                  control={control}
                  labelName="Lapse Date"
                  fieldName="lapsedate"
                />
              </Col>
              <Col md={4}>
                <DateField
                  control={control}
                  labelName="Approval Date"
                  fieldName="approvaldate"
                />
              </Col>
            </Form.Group>
          </Col>
          <Form.Group as={Col} md={3} className="mb-3">
            <TextAreaField
              register={register}
              labelName="Comments"
              fieldName="comments"
              rows={5}
            />
          </Form.Group>
        </Row>
        <Form.Group as={Row} className="mb-4 align-items-center">
          <ListGroup variant="flush">
            {fields &&
              fields.map((serviceGroup, index) => {
                return (
                  <AuthService
                    index={index}
                    register={register}
                    control={control}
                    remove={remove}
                    setValue={setValue}
                  />
                );
              })}
            <ListGroup.Item
              as={Button}
              className="border border-primary rounded"
              onClick={addService}
            >
              Add Service
            </ListGroup.Item>
          </ListGroup>
          {/* <Col md={6}>
            <Services
              selectedServices={selectedServiceGroup}
              setSelectedServices={setSelectedServiceGroup}
              setValue={setValue}
              fieldName="serviceid"
              addServiceCodes={setSelectedServiceCodes}
              minimal
            />
          </Col> */}
          {/* <Col md={2} className="d-flex align-items-end p-0">
                    <h6>for the life of this authorization.</h6>
                  </Col> */}

          <Col md={6}>
            {/* <Services
              selectedServices={selectedServiceCodes}
              setSelectedServices={setSelectedServiceCodes}
              setValue={setValue}
              fieldName="servicecodes"
              showServiceCodes
              filterBy={selectedServiceGroup}
              minimal
            /> */}
          </Col>
        </Form.Group>
      </Col>
    </Row>
  );
}
