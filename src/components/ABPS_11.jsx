import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import CEFormFamilyPhysician from "./CE_FormFamilyPhysician";
import CEFormInsuranceProvider from "./CE_FormInsuranceProvider";
import ABPSBriefMentalHealth from "./ABPS_BriefMentalHealth";

function ABSP11({ register, control }) {
  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Brief Mental Status Exam</h3>
      </div>
      <hr />
      <ABPSBriefMentalHealth
        register={register}
        title="General Apperance"
        field="f1"
        options={["Overweight", "Frail", "Lean", "Muscular", "Neat"]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="Behavior"
        field="f2"
        options={[
          "Older than age",
          "Younger than age",
          "Sloppy",
          "Slumped",
          "Cooperative",
          "Open",
          "Irritable",
          "Anxious",
          "Calm",
          "Combative",
          "Agitated",
          "Defensive",
          "Other",
        ]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="If risk exists, client is able to contract not to harm"
        field="f3"
        options={["Self", "Others"]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="Mood/Affect"
        field="f4"
        options={[
          "Appropriate",
          "Apathetic",
          "Euphoric",
          "Angry",
          "Flat",
          "Hostile",
          "Sad",
          "Tearful",
          "Other",
        ]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="Speech"
        field="f5"
        options={[
          "Normal Limits",
          "Rapid",
          "Stuttering",
          "Slurred",
          "Soft",
          "Pressured",
          "Other",
        ]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="Thought Process"
        field="f6"
        options={[
          "Logical",
          "Grandiose",
          "Paranoid",
          "Unorganized",
          "Loose",
          "Delusional",
          "Tangential",
          "Other",
        ]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="Perception"
        field="f7"
        options={[
          "Normal Limits",
          "Auditory Hallucinations",
          "Visual Hallucinations",
          "Tactile Hallucinations",
          "Other",
        ]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="Orientation"
        field="f8"
        options={[
          "To Person",
          "To Place",
          "To Situation",
          "To Time",
          "Disoriented",
        ]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="Memory"
        field="f9"
        options={[
          "Recent Intact (Can repeat 3 digits)",
          "Remote Intact (Can provide history)",
          "Recent not intact",
          "Remote not intact",
          "Other",
        ]}
      />
      <ABPSBriefMentalHealth
        register={register}
        title="Insight into Illness/Life Situation"
        field="f10"
        options={["Unimpaired", "Limited", "Absent", "Other"]}
      />
      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label mb-0">
            Suicidal Ideation
          </Form.Label>
          <Form.Check
            inline
            {...register("fs2")}
            type="radio"
            name="f11"
            value="yes"
            label="yes"
          />
          <Form.Check
            inline
            {...register("fs2")}
            type="radio"
            name="f11"
            value="no"
            label="no"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label mb-0">
            Homicidal Ideations
          </Form.Label>
          <Form.Check
            inline
            {...register("f12")}
            type="radio"
            name="f12"
            value="yes"
            label="yes"
          />
          <Form.Check
            inline
            {...register("f12")}
            type="radio"
            name="f12"
            value="no"
            label="no"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default ABSP11;
