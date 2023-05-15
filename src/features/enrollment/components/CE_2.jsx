import { useState } from "react";
import { Row, Col, Form, Accordion } from "react-bootstrap";
import "./CE_Manager.css";
import { ClipboardHeartFill } from "react-bootstrap-icons";
import { useClient } from "../../../context/ClientContext";
import { FormAddContainer } from "../../../components/form/Form_AddContainer";
import { FormFamilyPhysician } from "../../../components/form/Form_FamilyPhysician";
import { FormInsuranceProvider } from "../../../components/form/Form_InsuranceProvider";
import { FormPharmacy } from "../../../components/form/Form_Pharmacy";
import {
  DateField,
  FormLabelButtons,
  SelectField,
  TextField,
} from "../../../components/form/fieldCreator";

export function CE2({ register, control, setValue, formState }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    pharmacy: false,
    physician: false,
    provider: false,
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
    setAddNew((prevState) => ({
      ...prevState,
      sectionTitle: "",
      pharmacy: false,
      physician: false,
      provider: false,
      activeForm: () => {},
    }));
  };
  const renderSectionForm = (name) => {
    switch (name) {
      case "physician":
        return FormFamilyPhysician;
      case "pharmacy":
        return FormPharmacy;
      case "provider":
        return FormInsuranceProvider;
      default:
        return FormFamilyPhysician;
    }
  };

  return (
    <>
      <div className="CE-section-title">
        <ClipboardHeartFill size={30} className="me-3" />
        <h3>Program & Insurance Information</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-4">
        <h5>Employement Details</h5>
        <Col md={6}>
          <TextField
            register={register}
            labelName="Employer"
            fieldName="employer"
            fieldOptions={{ maxLength: 40 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.employer && !errors.employer}
            isInvalid={errors.employer}
          />
        </Col>
        <Col md={6}>
          <TextField
            register={register}
            labelName="Phone Number"
            fieldName="employerphone"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.employerphone && !errors.employerphone}
            isInvalid={errors.employerphone}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <h5>Medical Information</h5>
        <Col md={2}>
          <TextField
            register={register}
            labelName="Height"
            fieldName="height"
            fieldOptions={{
              pattern: /^\d{1}'\d{1,2}$/,
              maxLength: 4,
            }}
            labelStyle="CE-form-label"
            isValid={touchedFields.height && !errors.height}
            isInvalid={errors.height}
          />
        </Col>
        <Col md={2}>
          <TextField
            register={register}
            labelName="Weight"
            fieldName="weight"
            fieldType="number"
            fieldOptions={{ maxLength: 3 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.weight && !errors.weight}
            isInvalid={errors.weight}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Allergies"
            fieldName="allergies"
            fieldOptions={{ maxLength: 40 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.allergies && !errors.allergies}
            isInvalid={errors.allergies}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Physician
            <FormLabelButtons
              toggle={addNew.physician}
              name="physician"
              closeItem={closeItem}
              addItem={addItem}
              // disabled
            />
          </Form.Label>
          <SelectField
            register={register}
            fieldName="physicianid"
            groupName="Physician"
            labelStyle="CE-form-label"
            isValid={touchedFields.physicianid && !errors.physicianid}
            isInvalid={errors.physicianid}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Pharmacy
            <FormLabelButtons
              toggle={addNew.pharmacy}
              name="pharmacy"
              closeItem={closeItem}
              addItem={addItem}
            />
          </Form.Label>
          <SelectField
            register={register}
            fieldName="pharmacyproviderid"
            groupName="Pharmacy"
            labelStyle="CE-form-label"
            isValid={
              touchedFields.pharmacyproviderid && !errors.pharmacyproviderid
            }
            isInvalid={errors.pharmacyproviderid}
          />
        </Col>
      </Form.Group>
      <FormAddContainer
        sectionTitle={addNew.sectionTitle}
        open={
          addNew.sectionTitle === "physician" ||
          addNew.sectionTitle === "pharmacy"
        }
        close={closeItem}
        newForm={addNew.activeForm}
        setValue={setValue}
      />

      <Form.Group as={Row}>
        <h5>Primary Insurance Provider</h5>
        <Col md={5}>
          <Form.Label className="CE-form-label">
            Funding Source
            <FormLabelButtons
              toggle={addNew.provider}
              name="provider"
              closeItem={closeItem}
              addItem={addItem}
            />
          </Form.Label>
          <SelectField
            register={register}
            fieldName="ins1_fundingsource"
            groupName="Funding Source "
            labelStyle="CE-form-label"
            isValid={
              touchedFields.ins1_fundingsource && !errors.ins1_fundingsource
            }
            isInvalid={errors.ins1_fundingsource}
          />
        </Col>
        <Col md={5}>
          <TextField
            register={register}
            labelName="Policy Number"
            fieldName="ins1_policynumber"
            fieldOptions={{ maxLength: 11 }}
            labelStyle="CE-form-label"
            isValid={
              touchedFields.ins1_policynumber && !errors.ins1_policynumber
            }
            isInvalid={errors.ins1_policynumber}
          />
        </Col>
        <Col md={2}>
          <DateField
            control={control}
            labelName="Date Expires"
            fieldName="ins1_dateexpires"
            labelStyle="CE-form-label"
            fieldStyle="rounded"
          />
        </Col>
      </Form.Group>
      <FormAddContainer
        sectionTitle={
          addNew.sectionTitle
            ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
            : ""
        }
        open={addNew.sectionTitle === "provider"}
        close={closeItem}
        newForm={addNew.activeForm}
        setValue={setValue}
      />
      <Form.Group as={Row} className="mb-4">
        <Col md={4} className="mt-4">
          <Form.Check
            {...register("ins1_cardavailableid")}
            name="ins1_cardavailableid"
            type="switch"
            id="custom-switch"
            label="Card Available"
            isValid={
              touchedFields.ins1_cardavailableid && !errors.ins1_cardavailableid
            }
            isInvalid={errors.ins1_cardavailableid}
          />
        </Col>
      </Form.Group>
      <Accordion disabled className="mb-3 p-0 second-provider">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            + Add Secondary Insurance Provider
          </Accordion.Header>
          <Accordion.Body className="">
            <Form.Group as={Row}>
              <h5>Secondary Insurance Provider</h5>
              <Col md={5}>
                <Form.Label className="CE-form-label">
                  Funding Source
                  <FormLabelButtons
                    toggle={addNew.provider}
                    name="provider"
                    closeItem={closeItem}
                    addItem={addItem}
                  />
                </Form.Label>
                <SelectField
                  register={register}
                  fieldName="ins2_fundingsource"
                  groupName="Funding Source "
                  labelStyle="CE-form-label"
                  isValid={
                    touchedFields.ins2_fundingsource &&
                    !errors.ins2_fundingsource
                  }
                  isInvalid={errors.ins2_fundingsource}
                />
              </Col>
              <Col md={5}>
                <TextField
                  register={register}
                  labelName="Policy Number"
                  fieldName="ins2_policynumber"
                  fieldOptions={{ maxLength: 15 }}
                  labelStyle="CE-form-label"
                  isValid={
                    touchedFields.ins2_policynumber && !errors.ins2_policynumber
                  }
                  isInvalid={errors.ins2_policynumber}
                />
              </Col>
              <Col md={2}>
                <DateField
                  control={control}
                  labelName="Date Expires"
                  fieldName="ins2_dateexpires"
                  labelStyle="CE-form-label"
                  fieldStyle="rounded"
                />
              </Col>
            </Form.Group>
            <FormAddContainer
              sectionTitle={
                addNew.sectionTitle
                  ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
                  : ""
              }
              open={addNew.sectionTitle === "provider"}
              close={closeItem}
              newForm={addNew.activeForm}
            />
            <Form.Group as={Row} className="mb-4">
              <Col md={4}>
                <SelectField
                  register={register}
                  labelName="Relationship"
                  fieldName="ins2_relationshipid"
                  groupName="Relationship"
                  labelStyle="CE-form-label"
                  isValid={
                    touchedFields.ins2_relationshipid &&
                    !errors.ins2_relationshipid
                  }
                  isInvalid={errors.ins2_relationshipid}
                />
              </Col>
              <Col md={4} className="mt-4">
                <Form.Check
                  {...register("ins2_cardavailableid")}
                  name="ins2_cardavailableid"
                  type="switch"
                  label="Card Available"
                  isValid={
                    touchedFields.ins2_cardavailableid &&
                    !errors.ins2_cardavailableid
                  }
                  isInvalid={errors.ins2_cardavailableid}
                />
              </Col>
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
