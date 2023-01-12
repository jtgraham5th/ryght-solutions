import { Form, ListGroup, Card } from "react-bootstrap";
import "../TreatmentPlan.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { useClient } from "../../../context/ClientContext";

export function DateField({
  control,
  labelName,
  fieldName,
  readOnly,
  disabled,
}) {
  return (
    <Card bg="light">
      <Card.Body className="d-flex ">
        <Form.Label className="fs-6 me-3  text-nowrap">{labelName}</Form.Label>
        <Controller
          control={control}
          name={fieldName}
          render={({ field }) => (
            <DatePicker
              className="datePicker"
              selected={field.value}
              onChange={(date) => {
                field.onChange(date);
              }}
              readOnly={readOnly}
              disabled={disabled}
            />
          )}
        />
      </Card.Body>
    </Card>
  );
}
export function SelectField({ register, labelName, fieldName }) {
  const { formData } = useClient();
  return (
    <ListGroup.Item>
      <Form.Label>{labelName}</Form.Label>
      <Form.Select {...register(fieldName)} name={fieldName}>
        {/* {formData[labelName].map((item, i) => {
          return (
            <option key={i} value={item.grouplistid}>
              {item.groupvalue}
            </option>
          );
        })} */}
      </Form.Select>
    </ListGroup.Item>
  );
}
export function TextAreaField({
  register,
  labelName,
  fieldName,
  readOnly,
  disabled,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="fs-5 ">{labelName}</Form.Label>
      <Form.Control
        {...register(fieldName)}
        as="textarea"
        rows={3}
        readOnly={readOnly}
        disabled={disabled}
      />
    </Form.Group>
  );
}
