import { Row, Col, Form } from "react-bootstrap";
import { TextField } from "../../../components/form/fieldCreator";

export function UpdateContact({ register, setState }) {
  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };

  return (
    <>
      <Form.Group as={Row}>
        <Col>
          <TextField
            register={register}
            labelName="Name"
            fieldName="name"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mt-2">
        <Col md={6}>
          <TextField
            register={register}
            labelName="Phone Number"
            fieldName="phone1"
          />
        </Col>
        <Col md={6}>
          <TextField
            register={register}
            labelName="Fax Number"
            fieldName="phone2"
          />
        </Col>
      </Form.Group>
    </>
  );
}
