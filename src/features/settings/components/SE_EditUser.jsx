import { useState } from "react";
import { Row, Col, Form, Card, Alert } from "react-bootstrap";
import "../settings.css";
import { useUser } from "../../../context/UserContext";
import { useForm, Controller } from "react-hook-form";
import { SelectField, TextField } from "../../../components/form/fieldCreator";
import { statesList } from "../../../data/formData";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { getDirtyFields, filterObjectByKeys } from "../utils/parseData";
import { formatPhoneNumber } from "../../enrollment/utils/formhelper";

export function SEEditUser(props) {
  const { user, updateCurrentUser } = useUser();
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: { ...user },
  });
  const { dirtyFields, touchedFields, errors } = formState;
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false, status: false });

  const onSubmit = async (data) => {
    const dirtyFieldsString = getDirtyFields(dirtyFields);
    const filteredObj = filterObjectByKeys(data, dirtyFields);
    await updateCurrentUser(filteredObj, dirtyFieldsString).then((response) => {
      if (response) {
        setAlert({ show: true, status: true });
      } else {
        setAlert({ show: true, status: false });
      }
    });
    setEdit();
  };

  return (
    <Col md={10} className="settings-main">
      <Card className="p-0">
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <ViewerHeader
            edit={edit}
            setEdit={setEdit}
            onSubmit={handleSubmit(onSubmit)}
            title="Edit Personal Information"
          />

          <Card.Body>
            <Form.Group as={Row} className="mb-2">
              <h5>Personal Information</h5>
              <Col md={4}>
                <TextField
                  register={register}
                  labelName="First Name"
                  fieldName="firstname"
                  fieldOptions={{ required: true, maxLength: 40 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.FirstName && !errors.FirstName}
                  isInvalid={errors.FirstName}
                  readOnly={!edit}
                />
              </Col>
              <Col md={4}>
                <TextField
                  register={register}
                  labelName="Last Name"
                  fieldName="lastname"
                  fieldOptions={{ required: true, maxLength: 40 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.LastName && !errors.LastName}
                  isInvalid={errors.LastName}
                  readOnly={!edit}
                />
              </Col>
              <Col md={3}>
                <TextField
                  register={register}
                  labelName="Company ID"
                  fieldName="companyid"
                  fieldOptions={{ required: true, maxLength: 40 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.CompanyID && !errors.CompanyID}
                  isInvalid={errors.CompanyID}
                  disabled={true}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col md={4}>
                <TextField
                  register={register}
                  labelName="Credentials"
                  fieldName="credentials"
                  fieldOptions={{ required: true, maxLength: 40 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.Credentials && !errors.Credentials}
                  isInvalid={errors.Credentials}
                  readOnly={!edit}
                />
              </Col>
              <Col md={4}>
                <TextField
                  register={register}
                  labelName="Title"
                  fieldName="title"
                  fieldOptions={{ required: true, maxLength: 40 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.Title && !errors.Title}
                  isInvalid={errors.Title}
                  readOnly={!edit}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Col md={4}>
                <TextField
                  register={register}
                  labelName="Email"
                  fieldName="email"
                  fieldOptions={{ required: true, maxLength: 40 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.Email && !errors.Email}
                  isInvalid={errors.Email}
                  readOnly={!edit}
                />
              </Col>
              <Col md={4}>
                {/* <DateField
            control={control}
            labelName="Date of Birth"
            fieldName="DOB"
            labelStyle="CE-form-label"
            fieldStyle="rounded"
          /> */}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <h5>Home Address</h5>
              <Col md={4}>
                <TextField
                  register={register}
                  labelName="Street Address"
                  fieldName="street1"
                  fieldOptions={{ maxLength: 100 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.Street1 && !errors.Street1}
                  isInvalid={errors.Street1}
                  readOnly={!edit}
                />
              </Col>
              <Col md={4}>
                <TextField
                  register={register}
                  labelName="City"
                  fieldName="city"
                  fieldOptions={{ maxLength: 100 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.City && !errors.City}
                  isInvalid={errors.City}
                  readOnly={!edit}
                />
              </Col>
              <Col md={2}>
                <SelectField
                  register={register}
                  labelName="State"
                  fieldName="state"
                  fieldOptions={{ maxLength: 2 }}
                  listData={statesList}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.State && !errors.State}
                  isInvalid={errors.State}
                  readOnly={!edit}
                />
              </Col>
              <Col md={2}>
                <TextField
                  register={register}
                  labelName="Zip Code"
                  fieldName="zip"
                  fieldType="number"
                  fieldOptions={{ valueAsNumber: true, maxLength: 15 }}
                  labelStyle="CE-form-label"
                  isValid={dirtyFields.Zip && !errors.Zip}
                  isInvalid={errors.Zip}
                  readOnly={!edit}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col md={4}>
                <Controller
                  control={control}
                  name="phone1"
                  rules={{ minLength: 10 }}
                  render={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        labelName="Phone 1"
                        maxLength="13"
                        labelStyle="CE-form-label"
                        isValid={touchedFields.phone1 && !errors.phone1}
                        isInvalid={errors.phone1}
                        onBlur={(e) => {
                          e.target.value = formatPhoneNumber(e.target.value);
                          field.onBlur(e);
                          field.onChange(e);
                        }}
                        readOnly={!edit}
                      />
                    );
                  }}
                />
              </Col>
              <Col md={4}>
              <Controller
                  control={control}
                  name="phone2"
                  rules={{ minLength: 10 }}
                  render={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        labelName="Phone 2"
                        maxLength="13"
                        labelStyle="CE-form-label"
                        isValid={touchedFields.phone2 && !errors.phone2}
                        isInvalid={errors.phone2}
                        onBlur={(e) => {
                          e.target.value = formatPhoneNumber(e.target.value);
                          field.onBlur(e);
                          field.onChange(e);
                        }}
                        readOnly={!edit}
                      />
                    );
                  }}
                />
              </Col>
            </Form.Group>
            {alert.show && alert.status ? (
              <Alert variant={alert.status ? "primary" : "danger"}>
                {alert.status
                  ? "Update Saved Successfully"
                  : "Update Failed, Please try again."}
              </Alert>
            ) : null}
          </Card.Body>
        </Form>
      </Card>
    </Col>
  );
}
