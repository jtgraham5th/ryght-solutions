import { Row, Col, Accordion, Form } from "react-bootstrap";
import "./PN_Manager.css";
import DatePicker from "react-datepicker";
import FileManager from "./FileManger";
import { Controller } from "react-hook-form";

function PNM1({ register, control }) {

  return (
    <>
      <Form.Group as={Row}>
        <Col md={6}>
          <Form.Label className="PNM-form-label">Date of Service</Form.Label>
          <Controller
            control={control}
            name="dateOfService"
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                // readOnly={editGoal ? false : true}
                // disabled={!goal ? true : false}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Form.Label className="PNM-form-label">Service Code</Form.Label>
          <Form.Select
            {...register("serviceCode")}
            name="serviceCode"
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={3}>
          <Form.Label className="PNM-form-label">Start Time</Form.Label>
          <Controller
            control={control}
            name="timeStart"
            render={({ field }) => (
              <DatePicker
                className=""
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                selected={field.value}
                onChange={(date) => {
                  field.onChange(date);
                }}
                // readOnly={editGoal ? false : true}
                // disabled={!goal ? true : false}
              />
            )}
          />
        </Col>
        <Col md={3}>
          <Form.Label className="PNM-form-label">End Time</Form.Label>
          <Controller
            control={control}
            name="timeEnd"
            render={({ field }) => (
              <DatePicker
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                selected={field.value}
                onChange={(date) => {
                  field.onChange(date);
                }}
                // readOnly={editGoal ? false : true}
                // disabled={!goal ? true : false}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Form.Label className="PNM-form-label">Service Delivered</Form.Label>
          <Form.Select
            {...register("serviceDelivered")}
            name="serviceDelivered"
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group>
        <Col md={6}>
          <Form.Label className="PNM-form-label">Setting</Form.Label>
          <Form.Select
            {...register("setting")}
            name="setting"
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <hr />
      <Form.Group>
        <Form.Label className="PNM-form-label mb-2">
          Check OPTIONAL information to be shown when PRINTED:
        </Form.Label>
        <Row>
          <Col md={4}>
            <Form.Check
              {...register("optPrintInfo")}
              type="checkbox"
              name="optPrintInfo"
              value="Case Manager Name"
              label="Case Manager Name"
            />
            <Form.Check
              {...register("optPrintInfo")}
              type="checkbox"
              name="optPrintInfo"
              value="Referral Date"
              label="Referral Date"
            />
          </Col>
          <Col md={4}>
            <Form.Check
              type="checkbox"
              name="optPrintInfo"
              {...register("optPrintInfo")}
              value="Case Manager Supervisor"
              label="Case Manager Supervisor"
            />
            <Form.Check
              type="checkbox"
              name="optPrintInfo"
              {...register("optPrintInfo")}
              value="Client's Record ID"
              label="Client's Record ID"
            />
          </Col>
          <Col md={4}>
            <Form.Check
              type="checkbox"
              name="optPrintInfo"
              {...register("optPrintInfo")}
              value="Case Number"
              label="Case Number"
            />
            <Form.Check
              type="checkbox"
              name="optPrintInfo"
              {...register("optPrintInfo")}
              value="Review Comment"
              label="Review Comment"
            />
          </Col>
        </Row>
      </Form.Group>
      <hr />
      <Form.Group>
        <Row className="w-100 align-items-center">
          <Col md={2}>
            <Form.Label className="PNM-form-label mb-2">
              Attachments:
            </Form.Label>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-between"
          >
            <Form.Check
              type="checkbox"
              name="attachments"
              {...register("attachments")}
              value="Questionnaire"
              label="Attach Questionnaire"
            />
            <Form.Check
              type="checkbox"
              name="attachments"
              {...register("attachments")}
              value="Assesment/Doc"
              label="Attach Assesment/Doc"
            />
          </Col>
        </Row>
        <Form.Text>
          Attach file(s) from client file manager or attach new file(s)
        </Form.Text>
        <Accordion className="mb-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="PNM-acc-header">
              Upload Files
            </Accordion.Header>
            <Accordion.Body>
              <FileManager />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Form.Group>
      <hr />
      <Form.Group>
        <Row>
          <Col md={8}>
            <Row>
              <Form.Label className="PNM-form-label">
                Person(s) Involved:
              </Form.Label>
              <Form.Text>At least one must be selected</Form.Text>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Check
                  type="checkbox"
                  name="personInvolved"
                  {...register("personInvolved")}
                  value="CaseManager"
                  label="Consumer"
                />
                <Form.Check
                  type="checkbox"
                  name="personInvolved"
                  {...register("personInvolved")}
                  value="fosterParent"
                  label="Foster Parent"
                />
              </Col>
              <Col md={4}>
                <Form.Check
                  type="checkbox"
                  name="personInvolved"
                  {...register("personInvolved")}
                  value="Other"
                  label="Other"
                />
                <Form.Check
                  type="checkbox"
                  name="personInvolved"
                  {...register("personInvolved")}
                  value="parentGuardian"
                  label="Parent / Guardian"
                />
              </Col>
              <Col md={4}>
                <Form.Check
                  type="checkbox"
                  name="personInvolved"
                  {...register("personInvolved")}
                  value="ghStaff"
                  label="Group Home Staff"
                />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Form.Label className="PNM-form-label">Contact Type</Form.Label>
            <Form.Select
              {...register("contactType")}
              name="contactType"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
    </>
  );
}

export default PNM1;
