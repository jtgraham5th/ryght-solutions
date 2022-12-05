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
import BPSSubstanceAbuse from "./BPS_SubstanceAbuse";

function BSP8({ register, control }) {
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
        <h3>Behavior and Mental Health Assessment</h3>
      </div>
      <hr />
      <Row className="mb-3">
        <h5>Substance Abuse Information</h5>
        <Col md={3} className="fs-5">
          Substance Name
        </Col>
        <Col md={2} className="text-center fs-5">
          Age of 1st Use
        </Col>
        <Col md={2} className="text-center fs-5">
          Age of Heaviest Use
        </Col>
        <Col md={2} className="text-center fs-5">
          Frequency/Amount
        </Col>
        <Col md={2} className="text-center fs-5">
          Date of Last use
        </Col>
      </Row>
      <Form.Group as={Row} className="mb-3">
        <BPSSubstanceAbuse register={register} title="Alcohol" />
        <BPSSubstanceAbuse register={register} title="Cannabis" />
        <BPSSubstanceAbuse register={register} title="Cocaine" />
        <BPSSubstanceAbuse
          register={register}
          title="Stimulants"
          subtitle="(Crystal, speed, amphetamines)"
        />
        <BPSSubstanceAbuse register={register} title="Metamphetamine" />
        <BPSSubstanceAbuse
          register={register}
          title="Inhalants"
          subtitle="(LSD, PCP, mushrooms)"
        />
        <BPSSubstanceAbuse
          register={register}
          title="Opioids"
          subtitle="(Heroine, Narcotics, Methadone)"
        />
        <BPSSubstanceAbuse
          register={register}
          title="Sedative/Hypnotics"
          subtitle="(Valium, Xanax)"
        />
        <BPSSubstanceAbuse
          register={register}
          title="Designer Drugs"
          subtitle="(Herbal, Steroids, Cough Syrup)"
        />
        <BPSSubstanceAbuse register={register} title="Tobacco" />
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What consequences has the client faced as a result of the
            Drug/Alcohol use?
          </Form.Label>
          <Form.Text>
            Include hangovers, DT’s, Blackouts, Binges, Overdoses, Seizures, GI
            Bleeding, Job Loss, DUI’s, Assaults, Incarcerations, Homicides, etc
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            as="textarea"
            name="changefield"
            rows={3}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
          Longest period of sobriety?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            name="changefield"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
          When?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            name="changefield"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <h5>Client's Legal History</h5>
        <Col md={7}>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Probation"
            label="Probation"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Parole"
            label="Parole"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="DFCS/CPS"
            label="DFCS/CPS"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="DUI"
            label="DUI"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Restraining Order"
            label="Restraining Order"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Prostitution"
            label="Prostitution"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Eating Disorder"
            label="Eating Disorder"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Other"
            label="Other"
          />
        </Col>
        <Col md={5}>
          <Form.Label className="CE-form-label mb-0">
          Name of Probation Officer, Parole Officer, Case Manager
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            name="changefield"
          />
        </Col>
      </Form.Group>      
    </>
  );
}

export default BSP8;
