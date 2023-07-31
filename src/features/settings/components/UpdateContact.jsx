import { Row, Col, Form } from "react-bootstrap";
import { TextField } from "../../../components/form/fieldCreator";
import { Controller } from "react-hook-form";
import { formatPhoneNumber } from "../../enrollment/utils/formhelper";

export function UpdateContact({ register, formState, control, setState }) {
  const { touchedFields, errors } = formState;

  return (
    <>
      <Form.Group as={Row}>
        <Col>
          <TextField register={register} labelName="Name" fieldName="name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mt-2">
        <Col md={6}>
          <Controller
            control={control}
            name="phone1"
            rules={{ minLength: 10 }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  labelName="Phone Number"
                  maxLength="13"
                  labelStyle="CE-form-label"
                  isValid={touchedFields.phone1 && !errors.phone1}
                  isInvalid={errors.phone1}
                  onBlur={(e) => {
                    e.target.value = formatPhoneNumber(e.target.value);
                    field.onBlur(e);
                    field.onChange(e);
                  }}
                />
              );
            }}
          />
        </Col>
        <Col md={6}>
          <Controller
            control={control}
            name="phone2"
            rules={{ minLength: 10 }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  labelName="Fax Number"
                  maxLength="13"
                  labelStyle="CE-form-label"
                  isValid={touchedFields.phone2 && !errors.phone2}
                  isInvalid={errors.phone2}
                  onBlur={(e) => {
                    e.target.value = formatPhoneNumber(e.target.value);
                    field.onBlur(e);
                    field.onChange(e);
                  }}
                />
              );
            }}
          />
        </Col>
      </Form.Group>
    </>
  );
}
