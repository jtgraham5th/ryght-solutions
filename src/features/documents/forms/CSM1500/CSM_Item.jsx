import { Row, Col, Form, NavItem } from "react-bootstrap";
import { useClient } from "../../../../context/ClientContext";
import { TextField } from "../../../../components/form/fieldCreator";

export function CSMItem({ service, index, register, control, formState }) {
  const { formData } = useClient();
  const { touchedFields, errors } = formState;
  return (
    <Form.Group as={Row} className="pt-2">
      <Col
        md={3}
        className="d-flex flex-column justify-content-center align-items-center  "
      >
        <Row className="w-100">
          <Col md={6} className="fw-lighter small text-center">
            <TextField
              register={register}
              fieldName={"serviceA1-" + index}
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
          <Col md={6} className="fw-lighter small text-center">
            <TextField
              register={register}
              fieldName={"serviceA2-" + index}
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
        </Row>
      </Col>
      <Col
        md={4}
        className="d-flex flex-column justify-content-center align-items-center "
      >
        <Row className="p-0">
          <Col
            md={2}
            className=" d-flex flex-column justify-content-center align-items-center  "
          >
            <TextField
              register={register}
              fieldName={"serviceB1-" + index}
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
          <Col md={2} className=" ">
            <TextField
              register={register}
              fieldName={"serviceC1-" + index}
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
          <Col
            md={8}
            className="  d-flex flex-column justify-content-center align-items-center ps-1 pe-1"
          >
            <Row>
              <Col md={6} className="fw-lighter small text-center ">
                <TextField
                  register={register}
                  fieldName={"serviceD1-" + index}
                  fieldType="number"
                  fieldOptions={{ maxLength: 15 }}
                  labelStyle="fw-lighter small"
                  className="p-1"
                />
              </Col>
              <Col md={6} className="fw-lighter small text-center">
                <TextField
                  register={register}
                  fieldName={"serviceD2-" + index}
                  fieldType="number"
                  fieldOptions={{ maxLength: 15 }}
                  labelStyle="fw-lighter small"
                  className="p-1"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        md={1}
        className="d-flex flex-column justify-content-center align-items-center  "
      >
        <TextField
          register={register}
          fieldName={"serviceE1-" + index}
          fieldType="number"
          fieldOptions={{ maxLength: 15 }}
          labelStyle="fw-lighter small"
          className="p-1"
        />
      </Col>
      <Col
        md={4}
        className="d-flex flex-column justify-content-center align-items-center "
      >
        <Row className="  h-100 justify-content-center align-items-center ps-1 pe-1">
          <Col md={3} className="ps-1 pe-1">
            <TextField
              register={register}
              fieldName={"serviceF1-" + index}
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
          <Col md={2} className="ps-1 pe-1">
            <TextField
              register={register}
              fieldName={"serviceG1-" + index}
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
          <Col md={2} className="ps-1 pe-1">
            <TextField
              register={register}
              fieldName={"serviceH1-" + index}
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
          <Col md={2} className="ps-1 pe-1">
            <TextField
              register={register}
              fieldName={"serviceI1-" + index}
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
          <Col md={3} className="ps-1 pe-1">
            <TextField
              register={register}
              fieldName={"serviceJ1-" + index}
              fieldType="number"
              fieldOptions={{ maxLength: 15 }}
              labelStyle="fw-lighter small"
              className="p-1"
            />
          </Col>
        </Row>
      </Col>
    </Form.Group>
  );
}
