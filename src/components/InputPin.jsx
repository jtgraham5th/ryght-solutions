import { Button, Row, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "./form/fieldCreator";

export function InputPin({ show, setShow, setPinNumber }) {
  const { register, handleSubmit, reset } = useForm();

  const handleClose = () => {
    setShow(false);
    reset();
  };
  const onSubmit = (data) => {
    console.log(data);
    setPinNumber(data.pinNumber)
  };

  return (
    <Modal show={show} dialogClassName="" onHide={handleClose}>
      <Modal.Header className="PNM-header" closeButton>
        <Modal.Title>Input Pin Number</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Modal.Body className="h-25">
          <Row className="d-flex justify-content-evenly align-items-center">
            <TextField
              register={register}
              labelName="Pin Number"
              fieldName="pinNumber"
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              fieldStyle="w-25"
              labelStyle="w-25 fs-6"
              // disabled={!userSig}
              // isValid={touchedFields.employerphone && !errors.employerphone}
              // isInvalid={errors.employerphone}
            />
          </Row>
        </Modal.Body>

        <Modal.Footer className="flex-row justify-content-between p-2">
          <Button
            // className="PNM-nav-button p-1"
            variant="primary"
            type="submit"
            // onClick={activePage >= 3 ? () => console.log("submit") : nextPage}
          >
            Submit
          </Button>
          <Button
            // className="PNM-nav-button p-1"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
