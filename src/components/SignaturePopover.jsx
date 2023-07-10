import {
  Button,
  Row,
  Popover,
  Form,
  Col,
  Collapse,
  Card,
} from "react-bootstrap";
import { useState } from "react";
import { SelectField, TextField } from "./form/fieldCreator.jsx";
import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext.jsx";

export const SignaturePopover = ({handlePrint}) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { control, register, reset, handleSubmit } = useForm();
  const { user, pinCheck } = useUser();
  const onSubmit = async (data) => {
    console.log(data, user);

    //api call to check pin value matches
    // let sigData = [
    //   {
    //     userid: user.userid,
    //     UserName: user.username,
    //     StringValue: data.pinNumber,
    //     PCheckTypeID: 4,
    //     PinValue: data.pinNumber
    //   },
    // ];
    // const sigConfirmed = await pinCheck(sigData);
    if (data.pinNumber) {
      //api call to print job clarify
      handlePrint(data.pinNumber)
    } else {
      //set error alert
    }
  };
  return (
    <>
      <Card
        bg="light"
        className="ps-4 pe-4 mb-3 border-bottom"
        // style={{ height: "15rem" }}
      >
        <Card.Body className="p-0 small">
          <h5 className="text-center">Disclosures:</h5>
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
        </Card.Body>
      </Card>
      <Row className="mt-3 ps-3 pe-3">
        {/* <Card
          className="h-75 border border-2"
          border="secondary"
          bg="light"

          // border={adminSig ? "success" : "secondary"}
          // bg={adminSig ? "success" : "secondary"}
          // onClick={() => setAdminSig(!adminSig)}
        >
          <Card.Body>signature goes here</Card.Body>
        </Card> */}
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
      <Row className="mt-3 d-flex justify-content-center">
        <Col md="auto">
          <Form.Check
            onClick={() => setAcceptedTerms(!acceptedTerms)}
            type="checkbox"
            name="f8"
            label="I understand the contents of the agreement form."
          />
        </Col>
      </Row>
      <Collapse in={acceptedTerms} timeout={100}>
        <Form >
          <Row className="p-2 mt-3 border ms-2 me-2 bg-light flex-row justify-content-center">
            <TextField
              register={register}
              labelName="Pin Number"
              fieldName="pinNumber"
              fieldType="password"
              fieldOptions={{ maxLength: 15 }}
              fieldStyle="w-25"
              labelStyle="small"
              // disabled={!userSig}
              // isValid={touchedFields.employerphone && !errors.employerphone}
              // isInvalid={errors.employerphone}
            />
            <TextField
              register={register}
              labelName="Verify Pin Number"
              fieldName="pinVerify"
              fieldType="password"
              fieldOptions={{ maxLength: 15 }}
              fieldStyle="w-25"
              labelStyle="small"

              // disabled={!userSig}
              // isValid={touchedFields.employerphone && !errors.employerphone}
              // isInvalid={errors.employerphone}
            />
            <Button className="w-100 mt-3" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Row>
        </Form>
      </Collapse>
    </>
  );
};
