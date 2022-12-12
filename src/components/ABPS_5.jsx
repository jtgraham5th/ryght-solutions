import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import ABPSFamMedHistory from "./ABPS_FamMedHistory";

function ABSP5({ register, control }) {
  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Family Assessment</h3>
      </div>
      <Row className="mb-1">
        <h5>Please complete the below checklist for symptoms:</h5>
        <Col md={2} className="fs-6 mt-3">
          Type of Illness
        </Col>
        <Col md={2} className="text-center fs-6"></Col>
        <Col md={8} className="text-center fs-6">
          Relationship (Father, Mother, Sibling, Aunt, Uncle, etc…)
        </Col>
      </Row>
      <ABPSFamMedHistory
        register={register}
        title="Cardiovascular"
        field1="fs1"
        field2="fs2"
      />
      <ABPSFamMedHistory
        register={register}
        title="Hypertension"
        field1="fs3"
        field2="fs4"
      />
      <ABPSFamMedHistory
        register={register}
        title="Seizures"
        field1="fs5"
        field2="fs6"
      />
      <ABPSFamMedHistory
        register={register}
        title="Psychiatric Hospitalization"
        field1="fs7"
        field2="fs8"
      />
      <ABPSFamMedHistory
        register={register}
        title="Suicide"
        field1="fs9"
        field2="fs10"
      />
      <ABPSFamMedHistory
        register={register}
        title="Depression"
        field1="fs11"
        field2="fs12"
      />
      <ABPSFamMedHistory
        register={register}
        title="Addictions"
        field1="fs13"
        field2="fs14"
      />
      <ABPSFamMedHistory
        register={register}
        title="Eating Disorder"
        field1="fs15"
        field2="fs16"
      />
      <ABPSFamMedHistory
        register={register}
        title="Cancer"
        field1="fs17"
        field2="fs18"
      />
      <ABPSFamMedHistory
        register={register}
        title="Other"
        field1="fs19"
        field2="fs20"
      />
      <hr />
      <Form.Group as={Row} className="mb-2 align-items-center rounded">
        <Col md={4}>
          <Form.Label className="CE-form-label mb-0">
            HIV Prevention Education information offered
          </Form.Label>
        </Col>
        <Col md={8}>
          <Form.Check
            inline
            {...register("fs21")}
            type="radio"
            name="fs21"
            value="Accepted"
            label="Accepted"
          />

          <Form.Check
            inline
            {...register("fs21")}
            type="radio"
            name="fs21"
            value="Declined"
            label="Declined"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4 align-items-center rounded">
        <Col md={4}>
          <Form.Label className="CE-form-label mb-0">
            HIV Testing referral offered
          </Form.Label>
        </Col>
        <Col md={8}>
          <Form.Check
            inline
            {...register("fs22")}
            type="radio"
            name="fs22"
            value="Accepted"
            label="Accepted"
          />

          <Form.Check
            inline
            {...register("fs22")}
            type="radio"
            name="fs22"
            value="Declined"
            label="Declined"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">Comments</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f60")}
            as="textarea"
            name="f60"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default ABSP5;
