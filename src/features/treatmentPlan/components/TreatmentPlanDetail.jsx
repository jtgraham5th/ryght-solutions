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
import {
  DateField,
  TextAreaField,
} from "../../../components/form/fieldCreator";
import { Pencil } from "react-bootstrap-icons";
import { useState, useRef, useEffect } from "react";
import { TreatmentPlanHeader } from "./TreatmentPlanHeader";
import {
  parseDefaultTreatmentPlan,
  parseTreatmentPlan,
} from "../utils/parseData";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { useUser } from "../../../context/UserContext";
import { InputPin } from "../../../components/InputPin";
import {
  addNewBillingTx,
  updateBillingTx,
} from "../../requirements/services/api";
import { parseBillingTx } from "../../services/utils/parseData";

export function TreatmentPlanDetail() {
  const {
    activeTreatmentPlan,
    addClientTreatmentPlan,
    updateClientTreatmentPlan,
    activeClient,
    formData,
  } = useClient();
  const { user } = useUser();
  const [activeNote, setActiveNote] = useState(true);
  const [edit, setEdit] = useState(false);
  const [pinNumber, setPinNumber] = useState();
  const [showPinInput, setShowPinInput] = useState(false);
  const { tPlan } = activeTreatmentPlan;
  const { patientid } = activeClient[20];

  const { control, register, handleSubmit, reset } = useForm();

  const treatmentPlanRef = useRef();

  const handlePrint = async (e) => {
    const url =
      "https://www.ivronlogs.icu/projects/PDFViewer/web/viewer.html?file=../../ryght-solutions/docs/198468/test.pdf";
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (tPlan && tPlan.length > 0) {
      const updatedTPlan = parseDefaultTreatmentPlan(tPlan[0]);
      console.log("updatedTPlan", updatedTPlan);
      reset({ ...updatedTPlan });
    }
    // eslint-disable-next-line
  }, [tPlan]);

  const onSubmit = async (data) => {
    console.log("tplan formdata", data);
    // setShowPinInput(true);
    const updatedTPlan = parseTreatmentPlan(data, patientid);
    console.log("user", user);
    console.log("updated treatment plan", updatedTPlan);
    if (!updatedTPlan[0].billingid || updatedTPlan[0].billingid === 0) {
      let newBillingTx = parseBillingTx(activeClient, 1, user.userid);
      console.log("new billing Tx: ", newBillingTx);
      await addNewBillingTx().then(async (tx) => {
        console.log("New billing id created: ", tx);
        if (tx && tx.billingid) {
          tx.lastuserid = newBillingTx[0].lastuserid;
          tx.patientid = newBillingTx[0].patientid;
          tx.doctypeid = newBillingTx[0].doctypeid;
          tx.lastupdate = newBillingTx[0].lastupdate;
          console.log(tx);
          const updatedBillingTx = await updateBillingTx(tx);
          console.log("updated billing tx", updatedBillingTx);
          updatedTPlan[0].billingid = tx.billingid;
        }
      });
    }

    if (!tPlan || tPlan.length === 0) {
      console.log("new treatment plan");
      addClientTreatmentPlan(updatedTPlan, user.UserId, user.PinValue);
    } else if (edit) {
      console.log("updated treatment plan", updatedTPlan);
      // updateClientTreatmentPlan(updatedTPlan, user.UserId, user.PinValue);
      updateClientTreatmentPlan(updatedTPlan);
      // }
      setEdit(false);
    }
  };

  return (
    <Card className="h-100 p-0">
      <Form ref={treatmentPlanRef} onSubmit={handleSubmit(onSubmit)}>
        <ViewerHeader
          edit={edit}
          setEdit={setEdit}
          activeNote={activeNote}
          onSubmit={handleSubmit(onSubmit)}
          handlePrint={handlePrint}
          title="Treatment Plan"
        />

        <Card.Body>
          <Alert
            show={edit}
            variant="primary"
            className="editingDetail text-center"
          >
            <strong>Editing Treatment Plan</strong>
            <Pencil className="ms-2" />
          </Alert>
          <Row>
            <Col md={4}>
              <Card bg="light">
                <Card.Body className="d-flex ">
                  <DateField
                    control={control}
                    labelName="Program Start Date"
                    fieldName="f1"
                    readOnly={!edit}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="light">
                <Card.Body className="d-flex ">
                  <DateField
                    control={control}
                    labelName="Diagnosis Date"
                    fieldName="f2"
                    readOnly={!edit}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="light">
                <Card.Body className="d-flex ">
                  <DateField
                    control={control}
                    labelName="Initial Plan Date"
                    fieldName="f3"
                    readOnly={!edit}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <TextAreaField
                register={register}
                labelName="Client Strengths"
                fieldName="f4"
                readOnly={!edit}
              />
              <TextAreaField
                register={register}
                labelName="Client Needs"
                fieldName="f5"
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <TextAreaField
                register={register}
                labelName="Client Abilities"
                fieldName="f6"
                readOnly={!edit}
              />
              <TextAreaField
                register={register}
                labelName="Client Prefrences"
                fieldName="f7"
                readOnly={!edit}
              />
            </Col>
          </Row>
          <Row>
            <TextAreaField
              register={register}
              labelName="Projected Family Involvement"
              fieldName="f8"
              readOnly={!edit}
            />
          </Row>
          <Row>
            <h3>Transition / Discharge Plan</h3>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item variant="secondary">
                  <DateField
                    control={control}
                    labelName="Projected Discharge/Transition Date"
                    fieldName="f9"
                    readOnly={!edit}
                  />{" "}
                </ListGroup.Item>
                <ListGroup.Item variant="light"></ListGroup.Item>
                <ListGroup.Item>
                  <TextAreaField
                    register={register}
                    labelName="Plans for Discharge/Transition"
                    fieldName="f10"
                    readOnly={!edit}
                  />
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item className="p-0">
                  <Form.Label className="align-items-center border-bottom pb-2 bg-light form-label w-100 d-flex flex-wrap p-2">
                    <Col md={8} className="fs-4">
                      Anticipated Step Down Service
                    </Col>
                    <Col md={4}>
                      <DateField
                        control={control}
                        labelName="Anticipated Step Down Date"
                        fieldName="f13"
                        readOnly={!edit}
                      />
                    </Col>
                  </Form.Label>

                  {/* Add a warning that is dependent on Order of Services being completed */}
                  <Form.Group
                    as={Row}
                    className="ps-4 pe-4 pb-3 align-items-center"
                  >
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
                      readOnly={!edit}
                      disabled={!edit}
                    />
                  </Form.Group>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {edit ? (
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
        </Card.Body>
      </Form>
      <InputPin
        show={showPinInput}
        setShow={setShowPinInput}
        setPinNumber={setPinNumber}
      />
    </Card>
  );
}
