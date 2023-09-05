import { useEffect, useState } from "react";
import { Row, Col, ListGroup, Button, Form, Card } from "react-bootstrap";
import styles from "../ClientDetails.module.scss";
import { useClient } from "../../../context/ClientContext";
import { TextField, SelectField } from "../../../components/form/fieldCreator";
import { Controller, useForm } from "react-hook-form";
import { formatPhoneNumber } from "../../enrollment/utils/formhelper";
import { statesList } from "../../../data/formData";
import {
  PersonWorkspace,
  House,
  Telephone,
  PeopleFill,
} from "react-bootstrap-icons";
import { getListItem } from "../../../services/api";

export function CDContact() {
  const { activeContacts } = useClient();
  const { control, register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const allContacts = [].concat(...Object.values(activeContacts));
  const [updatedContacts, setUpdatedContacts] = useState([]);
  // useEffect(() => {
  //   const fetchRelationships = async () => {
  //     const promises = allContacts.map(async (contact) => {
  //       const relationship = await getItem(contact.relationshipid);
  //       return { ...contact, relationshipid: relationship };
  //     });

  //     const results = await Promise.all(promises);
  //     setUpdatedContacts(results);
  //   };

  //   fetchRelationships();
  // }, [allContacts]);

  // const getItem = async (relationshipid) => {
  //   const listItem = await getListItem(relationshipid);
  //   return listItem ? listItem.groupvalue : "N/A";
  // };
  return (
    <Row className="m-1">
      <Col md={5} className="p-2 border-right">
        <Card>
          <Card.Header>Add New Contact</Card.Header>
          <Card.Body>
            <Form.Group as={Row}>
              <Col md={8}>
                <TextField
                  register={register}
                  labelName="Name"
                  labelStyle="small mb-1"
                  fieldName="name"
                  fieldOptions={{
                    maxLength: {
                      value: 100,
                      message: "Max character length reached",
                    },
                  }}
                  isInvalid={errors.name}
                  errorMessage={errors.name ? errors.name.message : null}
                  disabled
                />
              </Col>
              <Col md={4}>
                <SelectField
                  register={register}
                  labelName="Relationship"
                  labelStyle="small mb-1"
                  fieldName="relationshipid"
                  fieldOptions={{ valueAsNumber: true, maxLength: 2 }}
                  groupName="Relationship"
                  isInvalid={errors.relationshipid}
                  disabled
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <TextField
                register={register}
                labelName="Address"
                labelStyle="small mb-1"
                fieldName="address1"
                fieldOptions={{
                  maxLength: {
                    value: 100,
                    message: "Max character length reached",
                  },
                }}
                isInvalid={errors.address1}
                errorMessage={errors.address1 ? errors.address1.message : null}
                disabled
              />
            </Form.Group>
            <Form.Group as={Row}>
              <Col md={8}>
                <TextField
                  register={register}
                  labelName="City"
                  labelStyle="small mb-1"
                  fieldName="city"
                  fieldOptions={{
                    maxLength: {
                      value: 100,
                      message: "Max character length reached",
                    },
                  }}
                  isInvalid={errors.city}
                  errorMessage={errors.city ? errors.city.message : null}
                  disabled
                />
              </Col>
              <Col md={4}>
                <SelectField
                  register={register}
                  labelName="State"
                  labelStyle="small mb-1"
                  fieldName="state"
                  fieldOptions={{ maxLength: 2 }}
                  listData={statesList}
                  isInvalid={errors.state}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <TextField
                register={register}
                labelName="Zip Code"
                labelStyle="small mb-1"
                fieldName="zip"
                fieldType="number"
                fieldOptions={{ valueAsNumber: true, maxLength: 15 }}
                isInvalid={errors.zip}
                errorMessage={errors.zip ? errors.zip.message : null}
                disabled
              />
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col md={8}>
                <Controller
                  control={control}
                  name="phone1"
                  rules={{
                    minLength: {
                      value: 10,
                      message: "Max character length reached",
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        labelName="Phone 1"
                        labelStyle="small mb-1"
                        maxLength="13"
                        isInvalid={errors.phone1}
                        onBlur={(e) => {
                          e.target.value = formatPhoneNumber(e.target.value);
                          field.onBlur(e);
                          field.onChange(e);
                        }}
                        errorMessage={
                          errors.phone1 ? errors.phone1.message : null
                        }
                        disabled
                      />
                    );
                  }}
                />
              </Col>
              <Col md={4}>
                <SelectField
                  register={register}
                  labelName="Phone Type"
                  labelStyle="small mb-1"
                  fieldName="phone1typeid"
                  fieldOptions={{ valueAsNumber: true, maxLength: 2 }}
                  groupName="PhoneType"
                  isInvalid={errors.phone1typeid}
                  disabled
                />
              </Col>
            </Form.Group>
            <Button variant="success" disabled className="w-100">Save</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={7}>
        <ListGroup className={styles.dataGroup}>
          {activeContacts &&
            allContacts.map((contact, index) => {
              console.log(contact);
              return (
                <ListGroup.Item key={index}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <Row className="ps-3 fs-6 fw-bold">
                        {contact.name ? contact.name : "N/A"}
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col className={styles.contactData}>
                              <div className="d-flex flex-column">
                                <div>{contact.address1}</div>
                                <div>
                                  {contact.city + ", " + contact.state}{" "}
                                  {contact.zip}
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col className="d-flex">
                          <PeopleFill className="me-3" />
                          <div className="ps-2">{contact.relationshipid}</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex">
                          <House className="me-3" />
                          <div className="ps-2">
                            {contact.phone1
                              ? formatPhoneNumber(contact.phone1)
                              : "N/A"}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex">
                          <Telephone className="me-3" />
                          <div className="ps-2">
                            {contact.phone2
                              ? formatPhoneNumber(contact.phone2)
                              : "N/A"}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex">
                          <PersonWorkspace className="me-3" />
                          <div className="ps-2">
                            {contact.phone3 ? contact.phone3 : "N/A"}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </Col>
    </Row>
  );
}
