import { Row, Col, Form} from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";

function BSP11({ register, control }) {
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
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client is affected by an emotional disturbance or substance related disorder."
            label="Client is affected by an emotional disturbance or substance related disorder."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client has shown early indications of behaviors that could be disruptive to the community and the family/support system if Client has shown early indications of behaviors that could be disruptive to the community and the family/support system if
            behavior intensified."
            label="Client has shown early indications of behaviors that could be disruptive to the community and the family/support system if Client has shown early indications of behaviors that could be disruptive to the community and the family/support system if
            behavior intensified."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client has shown early indications behaviors/ functional problems that could cause risk of removal from the home if problems
            intensified."
            label="Client has shown early indications behaviors/ functional problems that could cause risk of removal from the home if problems
            intensified."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client has shown early indications of poor school performance (poor grades, disruptive behavior, lack of motivation,
              suspension)."
            label="Client has shown early indications of poor school performance (poor grades, disruptive behavior, lack of motivation,
              suspension)."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client has shown early indications of delinquent behaviors that could result in legal system involvement."
            label="Client has shown early indications of delinquent behaviors that could result in legal system involvement."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client has shown early indications of behavioral/functional problems that could result in multiple agency involvement if
            problems intensified."
            label="Client has shown early indications of behavioral/functional problems that could result in multiple agency involvement if
            problems intensified."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client demonstrates behaviors that are a risk of harm to self, others, or property."
            label="Client demonstrates behaviors that are a risk of harm to self, others, or property."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client indicates the need for detoxification services."
            label="Client indicates the need for detoxification services."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Treatment at a Lower Level of Care has been attempted or given serious consideration (Has this consumer been in outpatient
              care or has outpatient care been considered? If considered, why not tried?)."
            label="Treatment at a Lower Level of Care has been attempted or given serious consideration (Has this consumer been in outpatient
              care or has outpatient care been considered? If considered, why not tried?)."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client and/or family have insufficient or severely limited resources or skills to cope with an immediate crisis."
            label="Client and/or family have insufficient or severely limited resources or skills to cope with an immediate crisis."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Client and/or family issues are unmanageable in traditional outpatient treatment and require intensive, coordinate clinical
            and supportive intervention."
            label="Client and/or family issues are unmanageable in traditional outpatient treatment and require intensive, coordinate clinical
            and supportive intervention."
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
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

export default BSP11;
