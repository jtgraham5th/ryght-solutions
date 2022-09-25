import { Row, Col, Form, Button, Collapse, Card } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PeopleFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";

function CEAddContainer({ sectionTitle, open, close, newForm: NewForm }) {
  const { register, getValues } = useForm();
  
  const onSubmit = (e) => {
    console.log(getValues());
    close(e);
    // console.log(data)
  };

  return (
    <Collapse in={open} timeout={300}>
      <Row>
        <Card bg="light" className="p-0 mt-3 mb-3">
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              Add {sectionTitle}
              <div className="CE-form-label-button-container">
                <Button
                  size="sm"
                  className="CE-form-label-button me-2"
                  variant="outline-success"
                  onClick={onSubmit}
                >
                  Submit
                </Button>
                <Button
                  size="sm"
                  className="CE-form-label-button "
                  variant="outline-secondary"
                  name={sectionTitle.split(" ").join("")}
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </Card.Title>
            <NewForm register={register} />
          </Card.Body>
        </Card>
      </Row>
    </Collapse>
  );
}

export default CEAddContainer;
