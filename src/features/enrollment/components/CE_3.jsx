import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PeopleFill } from "react-bootstrap-icons";
import { useState } from "react";
import { FormAddContainer } from "../../../components/form/Form_AddContainer";
import { CEFormReferralSource } from "./CE_FormReferralSource";
import { CEFormReferralOutSource } from "./CE_FormReferralOutSource";
import { useClient } from "../../../context/ClientContext";
import { Diagnosis } from "../../diagnosis/components/Diagnosis";
import { Services } from "../../services";
import { PreviewItems } from "../../../components/form/PreviewItems";
import {
  DateField,
  TextAreaField,
  SelectField,
} from "../../../components/form/fieldCreator";
import { renderSectionTitle } from "../utils/formhelper";
import { LabelButtonGroup } from "./CE_LabelButtonGroup";

export function CE3({ register, control, formState, setValue }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    referralSource: false,
    referralOutsource: false,
    activeForm: () => {},
  });
  const { getActiveServices, getActiveDXCodes } = useClient();
  const [selectedDX, setSelectedDX] = useState(getActiveDXCodes());
  const [selectedServices, setSelectedServices] = useState(
    getActiveServices()
  );
  const { touchedFields, errors } = formState;

  const addItem = (e) => {
    e.preventDefault();
    let sectionName = e.target.name;
    setAddNew((prevState) => ({
      ...prevState,
      sectionTitle: sectionName,
      activeForm: renderSectionForm(sectionName),
      [sectionName]: true,
    }));
  };
  const closeItem = (e) => {
    e.preventDefault();
    let sectionName = e.target.name;
    setAddNew((prevState) => ({
      ...prevState,
      sectionTitle: "",
      activeForm: () => {},
      [sectionName]: false,
    }));
  };
  const removeService = (code) => {
    setSelectedServices((prevState) =>
      prevState.filter((item) => item.code !== code.code)
    );
  };

  const renderSectionForm = (name) => {
    switch (name) {
      case "referralSource":
        return CEFormReferralSource;
      case "referralOutsource":
        return CEFormReferralOutSource;
      default:
        return CEFormReferralSource;
    }
  };

  return (
    <>
      <div className="CE-section-title">
        <PeopleFill size={30} className="me-3" />
        <h3>Referring Information</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3 align-items-center">
        <Col md={4}>
          <LabelButtonGroup
            title="Referral Source"
            trigger={addNew.referralSource}
            name="referralSource"
            add={addItem}
            close={closeItem}
          />
          <SelectField
            register={register}
            fieldName="referralid"
            groupName="Referral Source"
            isValid={touchedFields.referralid && !errors.referralid}
            isInvalid={errors.referralid}
            fieldStyle="mb-3"
          />
          <DateField
            control={control}
            labelName="Referrall Date"
            fieldName="referraldate"
            fieldStyle="mb-2"
          />
          <hr />
          <DateField
            control={control}
            labelName="First Appointment Date"
            fieldName="firstapptdate"
          />
        </Col>
        <Col md={4}>
          <LabelButtonGroup
            title="Referral OutSource"
            trigger={addNew.referralOutsource}
            name="referralOutsource"
            add={addItem}
            close={closeItem}
          />
          <SelectField
            register={register}
            fieldName="referralOutsource"
            groupName="Referral Outsource"
            isValid={
              touchedFields.referralOutsource && !errors.referralOutsource
            }
            isInvalid={errors.referralOutsource}
            disabled
            fieldStyle="mb-3"
          />

          <DateField
            control={control}
            labelName="Date of Outsourced"
            fieldName="dateoutsourced"
            fieldStyle="mb-2"
          />
          <hr />
          <DateField
            control={control}
            labelName="First Psy Date"
            fieldName="firstpsydate"
          />
        </Col>
        <Col md={4}>
          <SelectField
            register={register}
            labelName="Internal Referral"
            fieldName="internalreferralid"
            groupName="Internal Referral"
            isValid={
              touchedFields.internalreferralid && !errors.internalreferralid
            }
            isInvalid={errors.internalreferralid}
            fieldStyle="mb-3"
          />
          <TextAreaField
            register={register}
            labelName="Reason For Referral"
            fieldName="patient_comment"
            isValid={touchedFields.patient_comment && !errors.patient_comment}
            isInvalid={errors.patient_comment}
            rows={5}
          />
        </Col>
      </Form.Group>
      <FormAddContainer
        sectionTitle={renderSectionTitle(addNew.sectionTitle)}
        open={addNew.sectionTitle ? true : false}
        close={closeItem}
        newForm={addNew.activeForm}
      />
      <hr />
      <Form.Group as={Row} className="mb-4 align-items-center">
        <Col md={6}>
          <Services
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            setValue={setValue}
            fieldName="servicecodes"
            disablePreview
          />
        </Col>
        <Col md={6}>
          <PreviewItems
            state={selectedServices}
            setState={setSelectedServices}
            title="Current Patient Services"
            showServices
          />
        </Col>
      </Form.Group>
      <hr />
      <Form.Group as={Row} className="mb-4">
        <Col md={6}>
          <Diagnosis
            selectedDX={selectedDX}
            setSelectedDX={setSelectedDX}
            setValue={setValue}
            fieldName="dxcodes"
            disablePreview
          />
        </Col>
        <Col md={6}>
          <PreviewItems
            state={selectedDX}
            setState={setSelectedDX}
            title="Current Patient Diagnosis"
            header={
              <DateField
                control={control}
                labelName="Diagnosis Date"
                fieldName="dxdate"
              />
            }
          />
        </Col>
      </Form.Group>
    </>
  );
}
