import { useState } from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import CEAddContainer from "./CE_AddContainer";
import CEFormFamilyPhysician from "./CE_FormFamilyPhysician";
import CEFormInsuranceProvider from "./CE_FormInsuranceProvider";
import BPSRating from "./BPS_Rating";

function BSP11({ register, control }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    familyPhysician: false,
    insuranceProvider: false,
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
      case "familyPhysician":
        return CEFormFamilyPhysician;
      case "insuranceProvider":
        return CEFormInsuranceProvider;
      default:
        return CEFormFamilyPhysician;
    }
  };

  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Program Qualifiers</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12} className="d-flex flex-column">
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client is affected by an emotional disturbance or substance related disorder."
            label="Client is affected by an emotional disturbance or substance related disorder."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client has shown early indications of behaviors that could be disruptive to the community and the family/support system if Client has shown early indications of behaviors that could be disruptive to the community and the family/support system if
            behavior intensified."
            label="Client has shown early indications of behaviors that could be disruptive to the community and the family/support system if Client has shown early indications of behaviors that could be disruptive to the community and the family/support system if
            behavior intensified."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client has shown early indications behaviors/ functional problems that could cause risk of removal from the home if problems
            intensified."
            label="Client has shown early indications behaviors/ functional problems that could cause risk of removal from the home if problems
            intensified."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client has shown early indications of poor school performance (poor grades, disruptive behavior, lack of motivation,
              suspension)."
            label="Client has shown early indications of poor school performance (poor grades, disruptive behavior, lack of motivation,
              suspension)."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client has shown early indications of delinquent behaviors that could result in legal system involvement."
            label="Client has shown early indications of delinquent behaviors that could result in legal system involvement."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client has shown early indications of behavioral/functional problems that could result in multiple agency involvement if
            problems intensified."
            label="Client has shown early indications of behavioral/functional problems that could result in multiple agency involvement if
            problems intensified."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client demonstrates behaviors that are a risk of harm to self, others, or property."
            label="Client demonstrates behaviors that are a risk of harm to self, others, or property."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client indicates the need for detoxification services."
            label="Client indicates the need for detoxification services."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Treatment at a Lower Level of Care has been attempted or given serious consideration (Has this consumer been in outpatient
              care or has outpatient care been considered? If considered, why not tried?)."
            label="Treatment at a Lower Level of Care has been attempted or given serious consideration (Has this consumer been in outpatient
              care or has outpatient care been considered? If considered, why not tried?)."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client and/or family have insufficient or severely limited resources or skills to cope with an immediate crisis."
            label="Client and/or family have insufficient or severely limited resources or skills to cope with an immediate crisis."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client and/or family issues are unmanageable in traditional outpatient treatment and require intensive, coordinate clinical
            and supportive intervention."
            label="Client and/or family issues are unmanageable in traditional outpatient treatment and require intensive, coordinate clinical
            and supportive intervention."
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Client is at immediate risk for out-of-home placement or is currently in out-of-home placement and reunification imminent."
            label="Client is at immediate risk for out-of-home placement or is currently in out-of-home placement and reunification imminent."
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            If any of the above were checked, please provide details below.
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BSP11;
