import {
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PeopleFill } from "react-bootstrap-icons";
import { useState } from "react";
import CEAddContainer from "./CE_AddContainer";
import CEFormReferralSource from "./CE_FormReferralSource";
import CEFormReferralOutSource from "./CE_FormReferralOutSource";

function CE3({ register, control }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    referralSource: false,
    referralOutsource: false,
    activeForm: () => {},
  });

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
        <Col md={4}>
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
            {...register("referralSource")}
            name="referralSource"
            aria-label="Select Referral"
          >
            <option>Select Referral</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={4}>
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
            {...register("referralOutsource")}
            name="referralOutsource"
            aria-label="Select Outsource"
          >
            <option>Select Outsource</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Referral Date <small>(optional)</small>
          </Form.Label>
          <Controller
            control={control}
            name="referralDate"
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
      <CEAddContainer
        sectionTitle={
          addNew.sectionTitle
            ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
            : ""
        }
        open={addNew.sectionTitle}
        close={closeItem}
        newForm={addNew.activeForm}
      />
      <Form.Group as={Row} className="mb-5">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Reason For Referral <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("referralReason")}
            as="textarea"
            name="referralReason"
            rows={3}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <h5>Referring Provider</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Referring Provider <small>(optional)</small>
          </Form.Label>
          <Form.Select
            {...register("referringProvider")}
            name="providerReferral"
            aria-label="Select Referring Provider"
          >
            <option>Select Referring Provider</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Referral Date <small>(optional)</small>
          </Form.Label>
          <Controller
            control={control}
            name="providerReferralDate"
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
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Reason For Referral <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("providerReferralReason")}
            as="textarea"
            name="providerReferralReason"
            rows={3}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default CE3;
