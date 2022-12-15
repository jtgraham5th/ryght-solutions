import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";

function BPS1({ register, control }) {

  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Assessment Information</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="CE-form-label">Client Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f1")}
            type="text"
            name="f1"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Assessment Date</Form.Label>
          <Controller
            control={control}
            name="f2"
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Assessor Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f3")}
            type="text"
            name="f3"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={6}>
          <Form.Label className="CE-form-label">
            Parent/Guardian Name
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f4")}
            type="text"
            name="f4"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Home Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f5")}
            type="number"
            name="f5"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Mobile Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f6")}
            type="number"
            name="f6"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f7")}
            type="text"
            name="f7"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f8")}
            type="text"
            name="f8"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
          <Form.Select
            {...register("f9")}
            name="f9"
            aria-label="Select State"
          >
            <option>Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Zip Code</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f10")}
            type="number"
            name="f10"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={3}>
          <Form.Label className="CE-form-label">Date of Birth</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f11")}
            type="text"
            name="f11"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Age</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f12")}
            type="text"
            name="f12"
          />
        </Col>

        <Col md={3}>
          <Form.Label className="CE-form-label">Race</Form.Label>
          <Form.Select
            {...register("f13")}
            name="f13"
            aria-label="Select Race"
          >
            <option>Select Race</option>
            {/* {formData["Ethnicity"].map((item, i) => {
              return (
                <option key={i} value={item.GroupListID}>
                  {item.GroupValue}
                </option>
              );
            })} */}
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label className="CE-form-label">Gender</Form.Label>
          <Form.Select
            {...register("f14")}
            name="f14"
            aria-label="Select Gender"
          >
            <option>Select Gender</option>
            {/* {formData["Gender Identity"].map((item, i) => {
              return (
                <option key={i} value={item.GroupListID}>
                  {item.GroupValue}
                </option>
              );
            })} */}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={6}>
          <Form.Label className="CE-form-label">Social Security #</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f15")}
            type="password"
            name="f15"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">Current Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f16")}
            type="password"
            name="f16"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label">Emergency Contact</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f17")}
            type="password"
            name="f17"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Relationship</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f18")}
            type="password"
            name="f18"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Contact Telephone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f19")}
            type="password"
            name="f19"
          />
        </Col>
      </Form.Group>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <h5>Insurance Information</h5>
        <Col md={12}>
          <Form.Check
            inline
            {...register("f20")}
            type="radio"
            name="f20"
            value="Medicaid Standard"
            label="Medicaid Standard"
          />
          <Form.Check
            inline
            {...register("f20")}
            type="radio"
            name="f20"
            value="Amerigroup"
            label="Amerigroup"
          />
          <Form.Check
            inline
            {...register("f20")}
            type="radio"
            name="f20"
            value="Cenpatico"
            label="Cenpatico"
          />
          <Form.Check
            inline
            type="radio"
            {...register("f20")}
            name="f20"
            value="None/Fee-for-Services"
            label="None/Fee-for-Services"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BPS1;
