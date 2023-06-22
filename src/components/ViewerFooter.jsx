import {
  Button,
  Row,
  Modal,
  Card,
  OverlayTrigger,
  Popover,
  Form,
  Col,
  Collapse,
} from "react-bootstrap";
import { useState } from "react";
import AlertContainer from "./AlertContainer";
import { useForm } from "react-hook-form";
import { Pen } from "react-bootstrap-icons";
import { SelectField, TextField } from "./form/fieldCreator.jsx";

export function ViewerFooter({ activePage, setActivePage }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const { control, register, reset } = useForm();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const handleClose = () => {
    setActivePage(0);
  };

  const nextPage = () => {
    if (activePage < 14) {
      setActivePage((page) => page + 1);
    }
  };
  const prevPage = () => {
    setActivePage((page) => page - 1);
  };

  const onSubmit = (data) => {
    if (activePage < 14) {
      setActivePage((page) => page + 1);
    }
    if (activePage === 14) {
      setAlert({
        message: <h6>Are you sure you want to save these changes?</h6>,
        data: data,
        title: "Add New Client",
      });
    }
  };
  const handleConfirm = (data) => {
    console.log(data);
    handleClose();
    reset();
  };
  const handleCancel = (data) => {};
  const popover = (
    <Popover
      id="popover-basic"
      className="shadow"
      style={{
        width: "50rem",
        maxWidth: "50rem",
      }}
      onHide={() => setAcceptedTerms(false)}
    >
      <Popover.Header as="h3">Signature</Popover.Header>
      <Popover.Body
        style={{
          maxHeight: "30rem",
        }}
        className="h-100 w-100 overflow-auto"
      >
        <Card
          bg="light"
          className="ps-4 pe-4 mb-3 border-bottom"
          style={{ height: "15rem" }}
        >
          <h5>Disclosures:</h5>
          For providers using Electronic Health Records (EHRs)/Electronic
          Medical Records (EMRs): Provider EHR/EMR platforms must be configured
          to allow the DBHDD and its procies (i.e. the ASO), as well as any
          other authorized external reviewing entities, full administrative
          access (view-only) to all componenets of the EHR/EMR. This access must
          include:
          <ol>
            <li>
              Ability to validate document creation date, time, and author;
            </li>
            <li>Time stamp of signatures;</li>
            <li>
              Dates, time stamps, and author(s) of any edits, amendments, or
              late entries;
            </li>
            <li>
              Ability to view the original content, prior to any editing or
              amendments, without deletions; and
            </li>
            <li>
              Dates and time stamps for documents uploaded to the EHR/EMR.
            </li>
          </ol>
        </Card>
        <Row className="mt-3 ps-3 pe-3">
          <Card
            className="h-75 border border-2"
            border="secondary"
            bg="light"

            // border={adminSig ? "success" : "secondary"}
            // bg={adminSig ? "success" : "secondary"}
            // onClick={() => setAdminSig(!adminSig)}
          >
            <Card.Body>signature goes here</Card.Body>
          </Card>
        </Row>
        <Row className="pt-2 ps-3 pe-3">
          <SelectField
            register={register}
            labelName="Select Staff"
            groupName="Staff Title"
            fieldName="stafftitleid"
            labelStyle="w-50 m-0 pe-1 small"
            // disabled={!intervention || !editIntervention ? true : false}
          />
        </Row>
        <Row>
          <Col md="auto" className="mt-3">
            <Form.Check
              onClick={() => setAcceptedTerms(!acceptedTerms)}
              type="checkbox"
              name="f8"
              label="I understand the contents of the agreement form."
            />
          </Col>
        </Row>
        <Collapse in={!acceptedTerms} timeout={100}>
          <Row className="p-3 mt-3 border ms-2 me-2 bg-light">
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
            <TextField
              register={register}
              labelName="Verify Pin Number"
              fieldName="pinVerify"
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              fieldStyle="w-25"
              labelStyle="w-25 fs-6"

              // disabled={!userSig}
              // isValid={touchedFields.employerphone && !errors.employerphone}
              // isInvalid={errors.employerphone}
            />
            <Button className="w-100 mt-3">Submit</Button>
          </Row>
        </Collapse>
      </Popover.Body>
    </Popover>
  );

  return (
    <Card.Footer className="d-flex flex-row justify-content-between p-2">
      <Button
        className="RQ-nav-button p-1"
        variant="outline-primary"
        disabled={activePage === 0 ? true : false || !activePage}
        onClick={activePage === 0 ? () => {} : prevPage}
      >
        Previous
      </Button>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button>
          <Pen />
          Sign
        </Button>
      </OverlayTrigger>

      <Button
        className="RQ-nav-button p-1"
        variant={activePage >= 14 ? "outline-success" : "outline-primary"}
        onClick={nextPage}
        disabled={!activePage}
        type="submit"
      >
        {activePage >= 14 ? "Complete" : "Next"}
      </Button>
      <AlertContainer
        show={alert.message && alert.data}
        alert={alert}
        setAlert={setAlert}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    </Card.Footer>
  );
}
