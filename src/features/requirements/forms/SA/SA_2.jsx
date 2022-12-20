import { Row, Col, Form} from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

function SA2({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Inital Client Intake</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="RQ-form-label">
            Presenting Problem / Reason for Service
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
        <Form.Label className="RQ-form-label mb-2">
          Will family or others participate in your counseling?
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("familyParticipation")}
            type="radio"
            name="familyParticipation"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            type="radio"
            {...register("familyParticipation")}
            name="familyParticipation"
            value="No"
            label="No"
          />
          <Form.Check
            inline
            type="radio"
            {...register("familyParticipation")}
            name="familyParticipation"
            value="Not Sure"
            label="Not Sure"
          />
        </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="RQ-form-label">
            Profession / Type of work / Employment <small>(adult)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("profession")}
            type="text"
            name="profession"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="RQ-form-label">
            Years in current field <small>(adult)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("profession")}
            type="text"
            name="profession"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={6}>
          <Form.Label className="RQ-form-label">
            Adjusted Monthly Income
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("monthlyIncome")}
            type="text"
            name="monthlyIncome"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-2">
            Are you currently having financial difficulties?{" "}
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("finDifficulty")}
              type="radio"
              name="finDifficulty"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("finDifficulty")}
              name="finDifficulty"
              value="No"
              label="No"
            />
          </div>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">
          School Setting for Consumer (Check one):
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("schoolSetting")}
            type="radio"
            name="schoolSetting"
            value="Mainstream"
            label="Mainstream"
          />
          <Form.Check
            inline
            type="radio"
            {...register("schoolSetting")}
            name="schoolSetting"
            value="Home School"
            label="Home School"
          />
          <Form.Check
            inline
            type="radio"
            {...register("schoolSetting")}
            name="schoolSetting"
            value="Alternative"
            label="Alternative"
          />
          <Form.Check
            inline
            type="radio"
            {...register("schoolSetting")}
            name="schoolSetting"
            value="Not Enrolled"
            label="Not Enrolled"
          />
          <Form.Check
            inline
            type="radio"
            {...register("schoolSetting")}
            name="schoolSetting"
            value="Psychologial Education Center"
            label="Psychologial Education Center"
          />
        </div>
      </Form.Group>
      <h5>Consumer Highest Level of Education</h5>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">
          English Proficency
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("englishProficiency")}
            type="radio"
            name="englishProficiency"
            value="Proficient"
            label="Proficient"
          />
          <Form.Check
            inline
            type="radio"
            {...register("englishProficiency")}
            name="englishProficiency"
            value="Limited-Spanish Primary Language"
            label="Limited-Spanish Primary Language"
          />
          <Form.Check
            inline
            type="radio"
            {...register("englishProficiency")}
            name="englishProficiency"
            value="Limited-Primary Language"
            label="Limited-Primary Language"
          />
        </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">Communication</Form.Label>
        <div>
          <Form.Check
            inline
            {...register("communication")}
            type="radio"
            name="communication"
            value="No Impairment Noted"
            label="No Impairment Noted"
          />
          <Form.Check
            inline
            type="radio"
            {...register("communication")}
            name="communication"
            value="American Sign Language"
            label="American Sign Language"
          />
          <Form.Check
            inline
            type="radio"
            {...register("communication")}
            name="communication"
            value="Signgle Words or Gestures"
            label="Signgle Words or Gestures"
          />
          <Form.Check
            inline
            type="radio"
            {...register("communication")}
            name="communication"
            value="Utilizes language Technology"
            label="Utilizes language Technology"
          />
        </div>
      </Form.Group>
      <h5>Military History</h5>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="RQ-form-label mb-2">
            Have you ever served?
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("militaryService")}
              type="radio"
              name="militaryService"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("militaryService")}
              name="militaryService"
              value="No"
              label="No"
            />
          </div>
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">
            If yes, what branch?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("militaryBranch")}
            type="text"
            name="militaryBranch"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">Years of Service?</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("yearsOfService")}
            type="number"
            name="yearsOfService"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="RQ-form-label mb-2">
            Were you in combat?
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("combatExperience")}
              type="radio"
              name="combatExperience"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("combatExperience")}
              name="combatExperience"
              value="No"
              label="No"
            />
          </div>
        </Col>
        <Col md={8}>
          <Form.Label className="RQ-form-label">
            If yes, do you experience any flashbacks, uncontrolled anger
            outbursts, etc.?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("combatDetail")}
            type="text"
            name="combatDetail"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Spiritual/Religious Background</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("spiritualBackground")}
            type="text"
            name="spiritualBackground"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Cultural Background</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("culturalBackground")}
            type="text"
            name="culturalBackground"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">Referral Source</Form.Label>
        <div>
          <Form.Check
            inline
            {...register("referralSource")}
            type="checkbox"
            name="referralSource"
            value="Self"
            label="Self"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("referralSource")}
            name="referralSource"
            value="DFCS"
            label="DFCS"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("referralSource")}
            name="referralSource"
            value="DJJ"
            label="DJJ"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("referralSource")}
            name="referralSource"
            value="School"
            label="School"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("referralSource")}
            name="referralSource"
            value="Physician"
            label="Physician"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("referralSource")}
            name="referralSource"
            value="BHL / Crisis Hotline"
            label="BHL / Crisis Hotline"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("referralSource")}
            name="referralSource"
            value="Other: EAP"
            label="Other: EAP"
          />
        </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="RQ-form-label">Contact Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("referralName")}
            type="text"
            name="referralName"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("referralPhone")}
            type="text"
            name="referralPhone"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">
          Special Population
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("specialPopulation")}
            type="checkbox"
            name="specialPopulation"
            value="Vision Impairment"
            label="Vision Impairment"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("specialPopulation")}
            name="specialPopulation"
            value="Hearing Impairment"
            label="Hearing Impairment"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("specialPopulation")}
            name="specialPopulation"
            value="SSI / Disabled"
            label="SSI / Disabled"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("specialPopulation")}
            name="specialPopulation"
            value="Pregnant"
            label="Pregnant"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("specialPopulation")}
            name="specialPopulation"
            value="None"
            label="None"
          />
        </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">
          Consumer Living Situation
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("livingSituation")}
            type="checkbox"
            name="livingSituation"
            value="Private Residence"
            label="Private Residence"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("livingSituation")}
            name="livingSituation"
            value="Foster Home"
            label="Foster Home"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("livingSituation")}
            name="livingSituation"
            value="Group Home"
            label="Group Home"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("livingSituation")}
            name="livingSituation"
            value="Other"
            label="Other"
          />
        </div>
      </Form.Group>
    </>
  );
}

export default SA2;
