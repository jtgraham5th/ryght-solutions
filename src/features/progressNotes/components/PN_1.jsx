import { Row, Col, Form, Card } from "react-bootstrap";
import "./PN_Manager.css";
import { DateField, SelectField } from "../../../components/form/fieldCreator";
import { PNFileUpload } from "./PN_FileUpload";
import { overallAffect, personInvolved } from "../data/formData";
import { Diagnosis } from "../../diagnosis/components/Diagnosis";
import { Services } from "../../services";
import { useState, useEffect } from "react";
import { PreviewItems } from "../../../components/form/PreviewItems";
import {
  calculateHours,
  calculateUnits,
  parseDX,
  parseServices,
} from "../utils/parseData";
import { useClient } from "../../../context/ClientContext";

export function PN1({ register, setValue, control, watch, getValues, data }) {
  const [selectedDX, setSelectedDX] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [numOfHours, setNumOfHours] = useState(0);
  const [numOfUnits, setNumOfUnits] = useState(0);
  const watchTime = watch(["f2", "f3"]);
  const { serviceCodes, dxCodes } = useClient();

  useEffect(() => {
    if (watchTime[0] && watchTime[1]) {
      setNumOfHours(calculateHours(watchTime[0], watchTime[1]));
      setNumOfUnits(calculateUnits(watchTime[0], watchTime[1]));
      setValue("f4", calculateHours(watchTime[0], watchTime[1]));
      setValue("f5", calculateUnits(watchTime[0], watchTime[1]).toString());
    }
  }, [watchTime]);

  useEffect(() => {
    const services =data.f11;
    const diagnosis = data.f12;
    let serviceArray = [];
    let dxArray = [];
    console.log(services, diagnosis)
    if (services && services.length > 0) {
      parseServices(services.split(","), serviceCodes, serviceArray);
    }
    if (diagnosis && diagnosis.length > 0) {
      parseDX(diagnosis.split(","), dxCodes, dxArray);
    }
    setSelectedDX(dxArray);
    setSelectedServices(serviceArray);
  }, []);

  return (
    <Row>
      <Col md={8}>
        <div className="CE-section-title">
          <h3>Progress Note</h3>
        </div>
        <Form.Group as={Row} className="mb-3 border p-2 rounded bg-light w-100">
          <Col md={2}>
            <DateField
              control={control}
              labelName="Date of Service"
              fieldName="f1"
            />
          </Col>
          <Col md={2}>
            <DateField
              control={control}
              labelName="Start Time"
              fieldName="f2"
              showTimeSelect={true}
              showTimeSelectOnly={true}
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </Col>
          <Col md={2}>
            <DateField
              control={control}
              labelName="Time End"
              fieldName="f3"
              showTimeSelect={true}
              showTimeSelectOnly={true}
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </Col>
          <Col md={2} className="text-center">
            <small>Number of Hours</small>
            <div>{numOfHours}</div>
          </Col>
          <Col md={1} className="text-center">
            <small>Units Used</small>
            <div>{numOfUnits}</div>
          </Col>
          <Col md={3}>
            <SelectField
              register={register}
              labelName="Setting"
              groupName="Setting"
              fieldName="f6"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Col md={4}>
            <SelectField
              register={register}
              labelName="Contact Type"
              groupName="PN Contact Type"
              fieldName="f7"
            />
          </Col>
          <Col md={8}>
            <Form.Label>Person(s) Involved:</Form.Label>
            <Row className="ps-3">
              {personInvolved.map((person, i) => {
                return (
                  <Form.Check
                    key={"personInvolved" + i}
                    type="checkbox"
                    className="w-25"
                    name="f8"
                    {...register("f8")}
                    value={person}
                    label={person}
                  />
                );
              })}
            </Row>
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Consumer's Overall Affect</Form.Label>
          <Row className="ps-3">
            {overallAffect.map((affect, i) => {
              return (
                <Form.Check
                  key={"affect" + i}
                  type="radio"
                  className="w-25"
                  name="f9"
                  {...register("f9")}
                  value={affect}
                  label={affect}
                />
              );
            })}
          </Row>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Row className="w-100 align-items-center">
            <Col md={8}>
              <Form.Label>
                Relevant changes in medical condition and/or medications (health
                and safety stressor) since last visit?
              </Form.Label>
            </Col>
            <Col
              md={4}
              className="d-flex align-items-center justify-content-around"
            >
              <Form.Check
                type="radio"
                {...register("f10")}
                name="f10"
                value="Yes"
                label="Yes"
              />
              <Form.Check
                type="radio"
                {...register("f10")}
                name="f10"
                value="No"
                label="No (None Reported)"
              />
            </Col>
          </Row>
          <Form.Text>If yes, please explain:</Form.Text>
          <Form.Control
            as="textarea"
            {...register("f60")}
            name="f60"
            rows={3}
          />
        </Form.Group>
        <Form.Group as={Row} className="mb-4">
          <Col>
            <Form.Label>
              Did the consumer met his/her progress goal this session?
            </Form.Label>
            <Form.Control
              {...register("f61")}
              as="textarea"
              name="f61"
              rows={3}
            />
          </Col>
        </Form.Group>
      </Col>
      <Card as={Col} md={4} bg="light" className="h-100">
        <Card.Body>
          <PNFileUpload register={register} />{" "}
        </Card.Body>
      </Card>
      <Form.Group as={Row} className="mb-4 align-items-center">
        <Col md={8}>
          <Services
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            setValue={setValue}
            fieldName="f11"
            disablePreview
            showActiveServices
          />
        </Col>
        <Col md={4}>
          <PreviewItems
            state={selectedServices}
            setState={setSelectedServices}
            title="Selected Services"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={8}>
          <Diagnosis
            selectedDX={selectedDX}
            setSelectedDX={setSelectedDX}
            setValue={setValue}
            fieldName="f12"
            disablePreview
            showActiveDX
          />
        </Col>
        <Col md={4}>
          <PreviewItems
            state={selectedDX}
            setState={setSelectedDX}
            title="Selected Diagnosis"
          />
        </Col>
      </Form.Group>
    </Row>
  );
}
