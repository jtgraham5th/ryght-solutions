import { Row, Col, Form, Button } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PeopleFill } from "react-bootstrap-icons";
import { useState } from "react";
import {FormAddContainer} from "../../../components/form/Form_AddContainer";
import {CEFormReferralSource} from "./CE_FormReferralSource";
import {CEFormReferralOutSource} from "./CE_FormReferralOutSource";
import { useClient } from "../../../context/ClientContext";

export function CE3({ register, control, formState }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    referralSource: false,
    referralOutsource: false,
    activeForm: () => {},
  });
  const { formData } = useClient();
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
      <Form.Group as={Row} className="mb-2">
        <h5>Referral Source</h5>
        <Col md={8}>
          <Form.Label className="CE-form-label">
            Referral Source
            <div className="CE-form-label-button-container">
              {addNew.referralSource ? (
                <>
                  <Button
                    className="CE-form-label-button me-2"
                    name="referralSource"
                    type="submit"
                    variant="outline-success"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className="CE-form-label-button"
                    name="referralSource"
                    variant="outline-secondary"
                    size="sm"
                    onClick={closeItem}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  size="sm"
                  variant="outline-primary"
                  name="referralSource"
                  className="CE-form-label-button"
                  onClick={addItem}
                >
                  new
                </Button>
              )}
            </div>
          </Form.Label>
          <Form.Select
            {...register("referralid",{ valueAsNumber: true })}
            name="referralid"
            aria-label="Select Referral"
            isValid={touchedFields.referralid && !errors.referralid}
            isInvalid={errors.referralid}
          >
            <option>Select Referral</option>
            {formData["Referral Source"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            ReferralDate <small>(optional)</small>
          </Form.Label>
          <Controller
            control={control}
            name="referraldate"
            
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
      </Form.Group>
      <FormAddContainer
        sectionTitle={
          addNew.sectionTitle
            ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
            : ""
        }
        open={addNew.sectionTitle}
        close={closeItem}
        newForm={addNew.activeForm}
      />
      <Form.Group as={Row} className="mb-2">
        <Col md={8}>
          <Form.Label className="CE-form-label">
            Referral Outsource
            <div className="CE-form-label-button-container">
              {addNew.referralOutsource ? (
                <>
                  <Button
                    className="CE-form-label-button me-2"
                    name="referralOutsource"
                    type="submit"
                    variant="outline-success"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className="CE-form-label-button"
                    name="referralOutsource"
                    variant="outline-secondary"
                    size="sm"
                    onClick={closeItem}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  disabled
                  size="sm"
                  variant="outline-primary"
                  name="referralOutsource"
                  className="CE-form-label-button"
                  onClick={addItem}
                >
                  new
                </Button>
              )}
            </div>
          </Form.Label>
          <Form.Select
            disabled
            {...register("referralOutsource",{ valueAsNumber: true })}
            name="referralOutsource"
            aria-label="Select Outsource"
            isValid={touchedFields.referralOutsource && !errors.referralOutsource}
            isInvalid={errors.referralOutsource}
          >
            <option>Select Outsource</option>
            {formData["Referral Outsource"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Date Outsourced</Form.Label>
          <Controller
            control={control}
            name="dateoutsourced"
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className="CE-form-label">Internal Referral</Form.Label>
          <Form.Select
            {...register("internalreferralid", { valueAsNumber: true })}
            name="internalreferralid"
            aria-label="Select Referral"
            isValid={touchedFields.internalreferralid && !errors.internalreferralid}
            isInvalid={errors.internalreferralid}

          >
            <option>Select Referral</option>
            {formData["Internal Referral"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Reason For Referral <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment",{ maxLength: 255 })}
            as="textarea"
            rows={3}
            name="patient_comment"
            isValid={touchedFields.patient_comment && !errors.patient_comment}
            isInvalid={errors.patient_comment}

          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={6}>
          <Form.Label className="CE-form-label">
            Diagnosis Codes <small>(separate by comma)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("dxcodes", { maxLength: 255 })}
            type="text"
            name="dxcodes"
            isValid={touchedFields.dxcodes && !errors.dxcodes}
            isInvalid={errors.dxcodes}

          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">Diagnosis Date</Form.Label>
          <Controller
            control={control}
            name="dxdate"
            
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={6}>
          <Form.Label className="CE-form-label">
            First Appointment Date
          </Form.Label>
          <Controller
            control={control}
            name="firstapptdate"
            
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">First Psy Date</Form.Label>
          <Controller
            control={control}
            name="firstpsydate"
            
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
      </Form.Group>
    </>
  );
}
