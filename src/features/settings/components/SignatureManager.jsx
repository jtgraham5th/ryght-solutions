import { Card, Col, Button, Row, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useClient } from "../../../context/ClientContext";
import { useForm } from "react-hook-form";
import { TextField } from "../../../components/form/fieldCreator";

export function SignatureManger({ show, setShow, containerName, edit }) {
  const [activePage, setActivePage] = useState(0);
  const [tempID, setTempID] = useState();
  const [editing, setEditing] = useState(edit);
  const [userSig, setUserSig] = useState(false);
  const [adminSig, setAdminSig] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    // reset,
    // setValue,
    // formState,
    // watch,
    // getValues,
  } = useForm({ mode: "onBlur" });

  const handleClose = () => {
    setShow(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Modal show={show} dialogClassName="CE-width" onHide={handleClose}>
      <Modal.Header className="PNM-header" closeButton>
        <Modal.Title>Signature Manager</Modal.Title>
      </Modal.Header>

      <Modal.Body className="ps-5 pe-5 pt-3 pb-3">
        {/* <Row className="d-flex justify-content-evenly align-items-center"> */}
        {/* {renderPage(activePage, register, control, formState, setValue)} */}
        <h5>Disclosures:</h5>
        For providers using Electronic Health Records (EHRs)/Electronic Medical
        Records (EMRs): Provider EHR/EMR platforms must be configured to allow
        the DBHDD and its procies (i.e. the ASO), as well as any other
        authorized external reviewing entities, full administrative access
        (view-only) to all componenets of the EHR/EMR. Thiss access must
        include:
        <ol>
          <li>Ability to validate document creation date, time, and author;</li>
          <li>Time stamp of signatures;</li>
          <li>
            Dates, time stamps, and author(s) of any edits, amendments, or late
            entries;
          </li>
          <li>
            Ability to view the original content, prior to any editing or
            amendments, without deletions; and
          </li>
          <li>Dates and time stamps for documents uploaded to the EHR/EMR.</li>
        </ol>
        {/* </Row> */}
      </Modal.Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Footer className="bg-light flex-row justify-content-between p-2">
          <Row className="w-100">
            <Col md={8} className="p-2">
              <h5>1. User Signature & Pin Verification</h5>
              <Card
                className="h-75 border border-2"
                border={userSig ? "success" : "secondary"}
                bg={userSig ? "success" : "secondary"}
                onClick={() => setUserSig(!userSig)}
              >
                <Card.Body>signature</Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <TextField
                register={register}
                labelName="Pin Number"
                fieldName="pinNumber"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                disabled={!userSig}
                // isValid={touchedFields.employerphone && !errors.employerphone}
                // isInvalid={errors.employerphone}
              />
              <TextField
                register={register}
                labelName="Verify Pin Number"
                fieldName="pinVerify"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                disabled={!userSig}
                // isValid={touchedFields.employerphone && !errors.employerphone}
                // isInvalid={errors.employerphone}
              />
            </Col>
          </Row>
          <Row className="w-100 border-top mt-3 pt-3 mb-3">
            <Col md={8} className=" p-2">
              <h5 className={adminSig ? "" : "text-muted"}>2. Admin Signature</h5>
              <Card
                className="h-75 border border-2"
                border={adminSig ? "success" : "secondary"}
                bg={adminSig ? "success" : "secondary"}
                onClick={() => setAdminSig(!adminSig)}
              >
                <Card.Body>signature</Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Button
                className="w-75"
                size="lg"
                disabled={!userSig || !adminSig}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
