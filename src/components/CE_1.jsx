import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PersonLinesFill } from "react-bootstrap-icons";

function CE1({ register, control }) {
  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Demographics</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <h5>Personal Information</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">First Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("firstName")}
            type="text"
            name="firstName"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Last Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("lastName")}
            type="text"
            name="lastName"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Preferred Name <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("preferredName")}
            type="text"
            name="preferredName"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="CE-form-label mb-2">
          Marital Status
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Married"
            label="Married"
          />
          <Form.Check
            inline
            type="radio"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Single"
            label="Single"
          />
          <Form.Check
            inline
            type="radio"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Divorced"
            label="Divorced"
          />
          <Form.Check
            inline
            type="radio"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Widowed"
            label="Widowed"
          />
          <Form.Check
            inline
            type="radio"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Separated"
            label="Separated"
          />
        </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="CE-form-label">Date of Birth</Form.Label>
          <Controller
            control={control}
            name="dateOfBirth"
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
          <Form.Label className="CE-form-label">
            Social Security # <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("SSN")}
            type="password"
            name="SSN"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Race</Form.Label>
          <Form.Select
            {...register("race")}
            name="race"
            aria-label="Select Race"
          >
            <option>Select Race</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>

      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Col md={4}>
          <Form.Label className="CE-form-label">Sex at birth</Form.Label>
          <Form.Select {...register("sex")} name="sex" aria-label="Select Sex">
            <option>Select Sex</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Gender</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("gender")}
            type="text"
            name="gender"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Religion</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("religon")}
            type="text"
            name="religon"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <h5>Home Address</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("address")}
            type="text"
            name="address"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("city")}
            type="text"
            name="city"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
          <Form.Select
            {...register("state")}
            name="state"
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
            {...register("zipCode")}
            type="number"
            name="zipCode"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("phone")}
            type="number"
            name="phone"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <div>
            <Form.Check
              {...register("phoneType")}
              type="radio"
              inline
              name="phoneType"
              value="mobile"
              label="Mobile"
            />
            <Form.Check
              type="radio"
              inline
              {...register("phoneType")}
              name="phoneType"
              value="home"
              label="Home"
            />
          </div>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Email Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("email")}
            type="email"
            name="email"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <h5>Emergency Contact</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Name <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("emergencyContact")}
            type="text"
            name="emergencyContact"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Phone <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("emergencyPhone")}
            type="number"
            name="emergencyPhone"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default CE1;
