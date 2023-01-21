import {
  Row,
  Col,
  Card,
  Form,
  ListGroup,
  Alert,
  Button,
} from "react-bootstrap";
import "../TreatmentPlan.css";
import { useClient } from "../../../context/ClientContext";
import { useForm } from "react-hook-form";
import { DateField, TextAreaField } from "../utils/fieldCreator";
import { Pencil } from "react-bootstrap-icons";
import { useState, useRef, useEffect } from "react";
import { TreatmentPlanHeader } from "./TreatmentPlanHeader";
import {
  parseDefaultTreatmentPlan,
  parseTreatmentPlan,
} from "../utils/parseData";
// import { addNewTreatementPlan } from "../services/api";

export function TreatmentPlanDetail() {
  const {
    getActiveServices,
    activeTreatmentPlan,
    updateClientTreatmentPlan,
    activeClient,
    formData,
  } = useClient();
  const { tPlan } = activeTreatmentPlan;
  const { patientid } = activeClient[20];

  const [editTreatmentPlan, setEditTreatmentPlan] = useState(false);
  const [selectedServices] = useState(getActiveServices());

  const { control, register, handleSubmit, reset } = useForm();

  const treatmentPlanRef = useRef();

  useEffect(() => {
    if (tPlan && tPlan.length > 0) {
      const updatedTPlan = parseDefaultTreatmentPlan(tPlan[0]);
      console.log("updatedTPlan", updatedTPlan);
      reset({ ...updatedTPlan });
    }
    // eslint-disable-next-line
  }, [tPlan]);

  const getPageMargins = () => {
    return `@page { margin: 20px 20px 20px 20px !important; }`;
  };

  const onSubmit = (data) => {
    console.log("tplan formdata", data);
    const updatedTPlan = parseTreatmentPlan(data, patientid, activeClient);
    console.log("updated treatment plan", updatedTPlan);
    updateClientTreatmentPlan(updatedTPlan);
    setEditTreatmentPlan(false);
  };

  return (
    <Card className="mb-3 border-0">
      <Card.Body>
        <Form ref={treatmentPlanRef} onSubmit={handleSubmit(onSubmit)}>
          <style>{getPageMargins()}</style>
          <TreatmentPlanHeader
            editTreatmentPlan={editTreatmentPlan}
            setEditTreatmentPlan={setEditTreatmentPlan}
            treatmentPlanRef={treatmentPlanRef}
          />
          <Alert
            show={editTreatmentPlan}
            variant="primary"
            className="editingDetail text-center"
          >
            <strong>Editing Treatment Plan</strong>
            <Pencil className="ms-2" />
          </Alert>
          <Row>
            <Col md={4}>
              <DateField
                control={control}
                labelName="Program Start Date"
                fieldName="f1"
                readOnly={!editTreatmentPlan}
              />
            </Col>
            <Col md={4}>
              <DateField
                control={control}
                labelName="Diagnosis Date"
                fieldName="f2"
                readOnly={!editTreatmentPlan}
              />
            </Col>
            <Col md={4}>
              <DateField
                control={control}
                labelName="Initial Plan Date"
                fieldName="f3"
                readOnly={!editTreatmentPlan}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <TextAreaField
                register={register}
                labelName="Client Strengths"
                fieldName="f4"
                readOnly={!editTreatmentPlan}
              />
              <TextAreaField
                register={register}
                labelName="Client Needs"
                fieldName="f5"
                readOnly={!editTreatmentPlan}
              />
            </Col>
            <Col md={6}>
              <TextAreaField
                register={register}
                labelName="Client Abilities"
                fieldName="f6"
                readOnly={!editTreatmentPlan}
              />
              <TextAreaField
                register={register}
                labelName="Client Prefrences"
                fieldName="f7"
                readOnly={!editTreatmentPlan}
              />
            </Col>
          </Row>
          <Row>
            <TextAreaField
              register={register}
              labelName="Projected Family Involvement"
              fieldName="f8"
              readOnly={!editTreatmentPlan}
            />
          </Row>
          <Row>
            <h3>Transition / Discharge Plan</h3>
            <Col md={4}>
              <ListGroup>
                <DateField
                  control={control}
                  labelName="Projected Discharge/Transition Date"
                  fieldName="f9"
                  readOnly={!editTreatmentPlan}
                />
                <ListGroup.Item>
                  <TextAreaField
                    register={register}
                    labelName="Plans for Discharge/Transition"
                    fieldName="f10"
                    readOnly={!editTreatmentPlan}
                  />
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item>
                  <Form.Label className="fs-5">
                    Anticipated Step Down Service
                  </Form.Label>
                  {/* Add a warning that is dependent on Order of Services being completed */}
                  <Form.Text className="ms-2 text-danger fst-italic">
                    *** These services are pending approval by the Doctor ***
                  </Form.Text>
                  <Form.Group as={Row} className="p-2 align-items-center">
                    {formData["Services"].map((item, i) => {
                      item.grouplistid = item.grouplistid.toString();
                      return (
                        <Form.Check
                          key={i}
                          type="checkbox"
                          className="w-25"
                          name="f11"
                          {...register("f11")}
                          value={item.grouplistid}
                          label={item.groupvalue}
                        />
                      );
                    })}

                    <Form.Control
                      {...register("f12")}
                      className="w-25 h-50"
                      type="text"
                      placeholder="Enter value"
                      readOnly={!editTreatmentPlan}
                      disabled={!editTreatmentPlan}
                    />
                  </Form.Group>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {editTreatmentPlan ? (
              <Button
                size="lg"
                type="submit"
                variant="success"
                className="mt-3"
              >
                Save Treatment Plan
              </Button>
            ) : (
              ""
            )}
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
