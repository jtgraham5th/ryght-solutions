import { Row, Col, Form, NavItem } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../../../../context/ClientContext";
import { statesList } from "../../../../data/formData";
import {
  DateField,
  SelectField,
  TextField,
  TextAreaField,
} from "../../../../components/form/fieldCreator";
import { dxTable } from "../../data/documents";
import { CSMHeader } from "./CSM_Header";
import { CSMItem } from "./CSM_Item";
import { isEditable } from "@testing-library/user-event/dist/utils";

export function CSM({ register, control, formState, edit }) {
  const { formData } = useClient();
  const { touchedFields, errors } = formState;
  const insCarriers = [
    "Medicare",
    "Medicaid",
    "Tricare",
    "Champva",
    "Group Health Plan",
    "FECA Blk Lung",
    "Other",
  ];
  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Health Insurance Claim Form</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <Col md={8}>
          {/* {insCarriers.map((item, i) => {
              return (
                <Controller
                  key={item + i}
                  control={control}
                  name="f1"
                  rules={{ valueAsNumber: true }}
                  render={({ field, fieldState, formState }) => {
                    return (
                      <Form.Check
                        type="radio"
                        inline
                        {...field}
                        className="text-primary small text-primary-emphasis"
                        defaultChecked={parseInt(field.value) === item}
                        value={item}
                        onChange={(e) => {
                          return field.onChange(item);
                        }}
                        label={item}
                        isValid={fieldState.isTouched && !fieldState.error}
                        isInvalid={fieldState.error}
                        readOnly={!edit}
                      />
                    );
                  }}
                />
              );
            })} */}
          <SelectField
            register={register}
            labelName="INSURANCE CARRIER"
            fieldName="f1"
            groupName="Funding Source "
            labelStyle="text-primary small"
            isValid={
              touchedFields.ins1_fundingsource && !errors.ins1_fundingsource
            }
            isInvalid={errors.ins1_fundingsource}
            disabled={!edit}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="INSURED'S ID NUMBER"
            fieldName="f2"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f2 && !errors.f2}
            isInvalid={errors.f2}
            readOnly={!edit}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <TextField
            register={register}
            labelName="PATIENT'S NAME"
            fieldName="f3"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f3 && !errors.f3}
            isInvalid={errors.f3}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName="BIRTH DATE"
                fieldName="f4"
                fieldOptions={{ maxLength: 100 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f4 && !errors.f4}
                isInvalid={errors.f4}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <SelectField
                register={register}
                labelName="SEX"
                fieldName="f5"
                groupName="Sex At Birth"
                labelStyle="text-primary small"
                fieldOptions={{
                  required: true,
                  valueAsNumber: true,
                  maxLength: 2,
                }}
                isValid={touchedFields.f5 && !errors.f5}
                isInvalid={errors.f5}
                readOnly={!edit}
              />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="INSURED'S NAME"
            fieldName="f6"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f6 && !errors.f6}
            isInvalid={errors.f6}
            readOnly={!edit}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <TextField
            register={register}
            labelName="PATIENT'S ADDRESS"
            fieldName="f7"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f7 && !errors.f7}
            isInvalid={errors.f7}
            readOnly={!edit}
          />
          <Row>
            <Col md={8}>
              <TextField
                register={register}
                labelName="CITY"
                fieldName="f8"
                fieldOptions={{ maxLength: 100 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f8 && !errors.f8}
                isInvalid={errors.f8}
                readOnly={!edit}
              />
            </Col>
            <Col md={4}>
              <SelectField
                register={register}
                labelName="STATE"
                fieldName="f9"
                fieldOptions={{ maxLength: 2 }}
                listData={statesList}
                labelStyle="text-primary small"
                isValid={touchedFields.f9 && !errors.f9}
                isInvalid={errors.f9}
                readOnly={!edit}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName="ZIP CODE"
                fieldName="f10"
                fieldType="number"
                fieldOptions={{ valueAsNumber: true, maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f10 && !errors.f10}
                isInvalid={errors.f10}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <TextField
                register={register}
                labelName="TELEPHONE"
                fieldName="f11"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f11 && !errors.f11}
                isInvalid={errors.f11}
                readOnly={!edit}
              />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <SelectField
            register={register}
            labelName="RELATIONSHIP TO INSURED"
            fieldName="f12"
            fieldOptions={{ valueAsNumber: true, maxLength: 2 }}
            groupName="Relationship"
            labelStyle="text-primary small"
            isValid={touchedFields.f12 && !errors.f12}
            isInvalid={errors.f12}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="INSURED'S ADDRESS"
            fieldName="f13"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f13 && !errors.f13}
            isInvalid={errors.f13}
            readOnly={!edit}
          />
          <Row>
            <Col md={8}>
              <TextField
                register={register}
                labelName="CITY"
                fieldName="f14"
                fieldOptions={{ maxLength: 100 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f14 && !errors.f14}
                isInvalid={errors.f14}
                readOnly={!edit}
              />
            </Col>
            <Col md={4}>
              <SelectField
                register={register}
                labelName="STATE"
                fieldName="f15"
                fieldOptions={{ maxLength: 2 }}
                listData={statesList}
                labelStyle="text-primary small"
                isValid={touchedFields.f15 && !errors.f15}
                isInvalid={errors.f15}
                readOnly={!edit}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName="ZIP CODE"
                fieldName="f16"
                fieldType="number"
                fieldOptions={{ valueAsNumber: true, maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f16 && !errors.f16}
                isInvalid={errors.f16}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <TextField
                register={register}
                labelName="TELEPHONE"
                fieldName="f17"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f17 && !errors.f17}
                isInvalid={errors.f17}
                readOnly={!edit}
              />
            </Col>
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <TextField
            register={register}
            labelName="9. OTHER INSURED'S NAME"
            fieldName="f18"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f18 && !errors.f18}
            isInvalid={errors.f18}
            readOnly={!edit}
          />
          <TextField
            register={register}
            labelName="a. OTHER INSURED'S POLICY"
            fieldName="f19"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f19 && !errors.f19}
            isInvalid={errors.f19}
            readOnly={!edit}
          />
          <TextField
            register={register}
            labelName="b. RESERVED FOR NUCC USE"
            fieldName="f20"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f20 && !errors.f20}
            isInvalid={errors.f20}
            readOnly={!edit}
          />
          <TextField
            register={register}
            labelName="c. RESERVED FOR NUCC USE"
            fieldName="f21"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f21 && !errors.f21}
            isInvalid={errors.f21}
            readOnly={!edit}
          />
          <TextField
            register={register}
            labelName="d.INUSRANCE PLAN NAME"
            fieldName="f22"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f22 && !errors.f22}
            isInvalid={errors.f22}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="text-primary small mb-5">
            10. IS PATIENT'S CONDITION RELATED TO:
          </Form.Label>
          <Form.Label className="text-primary small">a. EMPLOYMENT?</Form.Label>
          <div className="d-flex flex-row justify-content-evenly">
            <Form.Check
              type="radio"
              {...register("f23")}
              name="f23"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              type="radio"
              {...register("f23")}
              name="f23"
              value="No"
              label="No "
            />
          </div>
          <Form.Label className="text-primary small">
            b. AUTO ACCIDENT?
          </Form.Label>
          <div className="d-flex flex-row justify-content-evenly">
            <Form.Check
              type="radio"
              {...register("f24")}
              name="f24"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              type="radio"
              {...register("f24")}
              name="f24"
              value="No"
              label="No "
            />
          </div>
          <Form.Label className="text-primary small">
            c. OTHER ACCIDENT?
          </Form.Label>
          <div className="d-flex flex-row justify-content-evenly">
            <Form.Check
              type="radio"
              {...register("f25")}
              name="f25"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              type="radio"
              {...register("f25")}
              name="f25"
              value="No"
              label="No "
            />
          </div>
          <TextField
            register={register}
            labelName="10d.CLAIM CODES"
            fieldName="f26"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f26 && !errors.f26}
            isInvalid={errors.f26}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="INSURED'S POLICY GROUP / FECA #"
            fieldName="f27"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f27 && !errors.f27}
            isInvalid={errors.f27}
            readOnly={!edit}
          />

          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName="a. BIRTH DATE"
                fieldName="f28"
                fieldOptions={{ maxLength: 100 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f28 && !errors.f28}
                isInvalid={errors.f28}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <SelectField
                register={register}
                labelName="SEX"
                fieldName="f29"
                groupName="Sex At Birth"
                labelStyle="text-primary small"
                fieldOptions={{
                  required: true,
                  valueAsNumber: true,
                  maxLength: 2,
                }}
                isValid={touchedFields.f29 && !errors.f29}
                isInvalid={errors.f29}
                readOnly={!edit}
              />
            </Col>
          </Row>
          <TextField
            register={register}
            labelName="b. OTHER CLAIM ID"
            fieldName="f30"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f30 && !errors.f30}
            isInvalid={errors.f30}
            readOnly={!edit}
          />
          <TextField
            register={register}
            labelName="c. INSURANCE PLAN NAME"
            fieldName="f31"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f31 && !errors.f31}
            isInvalid={errors.f31}
            readOnly={!edit}
          />
          <Form.Label className="text-primary small">
            d. IS THERE ANOTHER HEALTH BENEFIT PLAN
          </Form.Label>
          <div className="d-flex flex-row justify-content-evenly">
            <Form.Check
              type="radio"
              {...register("f32")}
              name="f32"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              type="radio"
              {...register("f32")}
              name="f32"
              value="No"
              label="No "
            />
          </div>
        </Col>
      </Form.Group>
      <hr />
      <Form.Group as={Row}>
        <Col md={5}>
          <TextField
            register={register}
            labelName="DATE OF CURRENT ILLNESS, INJURY, or PREGNANCY"
            fieldName="f33"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f33 && !errors.f33}
            isInvalid={errors.f33}
            readOnly={!edit}
          />
        </Col>
        <Col md={3}>
          <TextField
            register={register}
            labelName="OTHER DATE"
            fieldName="f34"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f34 && !errors.f34}
            isInvalid={errors.f34}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="text-primary small">
            DATES PATIENT UNABLE TO WORK IN CURRENT OCCUPATION
          </Form.Label>
          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName="FROM"
                fieldName="f35"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f35 && !errors.f35}
                isInvalid={errors.f35}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <TextField
                register={register}
                labelName="TO"
                fieldName="f36"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f36 && !errors.f36}
                isInvalid={errors.f36}
                readOnly={!edit}
              />
            </Col>
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={5}>
          <TextField
            register={register}
            labelName="NAME OF REFERRING PROVIDER OR OTHER SOURCE"
            fieldName="f37"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f37 && !errors.f37}
            isInvalid={errors.f37}
            readOnly={!edit}
          />
        </Col>
        <Col md={3}>
          <TextField
            register={register}
            labelName="17a."
            fieldName="f38"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f38 && !errors.f38}
            isInvalid={errors.f38}
            readOnly={!edit}
          />
          <TextField
            register={register}
            labelName="17b."
            fieldName="f39"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f39 && !errors.f39}
            isInvalid={errors.f39}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="text-primary small">
            HOSPITALIZATION DATES RELATED TO CURRENT SERVICES
          </Form.Label>
          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName="FROM"
                fieldName="f40"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f40 && !errors.f40}
                isInvalid={errors.f40}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <TextField
                register={register}
                labelName="TO"
                fieldName="f41"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f41 && !errors.f41}
                isInvalid={errors.f41}
                readOnly={!edit}
              />
            </Col>
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={8}>
          <TextAreaField
            register={register}
            labelStyle="text-primary small"
            labelName="19. ADDITIONAL CLAIM INFORMATION"
            fieldName="f60"
            rows={1}
          />
        </Col>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <Form.Label className="text-primary small">
                OUTSIDE LAB?
              </Form.Label>
              <div className="d-flex flex-row justify-content-evenly">
                <Form.Check
                  type="radio"
                  {...register("f42")}
                  name="f42"
                  value="Yes"
                  label="Yes"
                />
                <Form.Check
                  type="radio"
                  {...register("f42")}
                  name="f42"
                  value="No"
                  label="No "
                />
              </div>
            </Col>
            <Col md={6}>
              <TextField
                register={register}
                labelName="$ CHARGES"
                fieldName="f43"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f43 && !errors.f43}
                isInvalid={errors.f43}
                readOnly={!edit}
              />
            </Col>
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={8}>
          <Form.Label className="text-primary small">
            DIAGNOSIS OR NATURE OF ILLNESS OR INJURY
          </Form.Label>
          <Row>
            {dxTable.map((dx, i) => {
              return (
                <Col className="d-flex flex-row mb-1" md={3}>
                  <Form.Label className="text-primary small me-2">
                    {dx.label}
                  </Form.Label>
                  <Form.Control value={dx.diagnosis} className="p-1" />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName="RESUBMISSION CODE"
                fieldName="f44"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f44 && !errors.f44}
                isInvalid={errors.f44}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <TextField
                register={register}
                labelName="ORIGINAL REF. NO."
                fieldName="f45"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f45 && !errors.f45}
                isInvalid={errors.f45}
                readOnly={!edit}
              />
            </Col>
          </Row>
          <TextField
            register={register}
            labelName="PRIOR AUTHORIZATION NUMBER"
            fieldName="f46"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f46 && !errors.f46}
            isInvalid={errors.f46}
            readOnly={!edit}
          />
        </Col>
      </Form.Group>
      <CSMHeader register={register} control={control} formState={formState} />
      {["test", "test"].map((service, i) => {
        return (
          <CSMItem
            key={i}
            service={service}
            index={i}
            register={register}
            control={control}
            formState={formState}
          />
        );
      })}
      <Form.Group as={Row} className="mt-3">
        <Col md={4}>
          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName="FEDERAL TAX I.D. NUMBER"
                fieldName="f47"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f47 && !errors.f47}
                isInvalid={errors.f47}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <div className="d-flex flex-row justify-content-evenly align-items-center h-100">
                <Form.Check
                  type="radio"
                  {...register("f48")}
                  name="f48"
                  value="SSN"
                  label="SSN"
                />
                <Form.Check
                  type="radio"
                  {...register("f48")}
                  name="f48"
                  value="EID"
                  label="EID "
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <TextField
                register={register}
                labelName=" PATIENT'S ACCOUNT NO."
                fieldName="f49"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f49 && !errors.f49}
                isInvalid={errors.f49}
                readOnly={!edit}
              />
            </Col>
            <Col md={6}>
              <Form.Label className="text-primary small">
                ACCEPT ASSIGNMENT
              </Form.Label>

              <div className="d-flex flex-row justify-content-evenly">
                <Form.Check
                  type="radio"
                  {...register("f50")}
                  name="f50"
                  value="YES"
                  label="YES"
                />
                <Form.Check
                  type="radio"
                  {...register("f50")}
                  name="f50"
                  value="NO"
                  label="NO "
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col md={4}>
              <TextField
                register={register}
                labelName="TOTAL CHARGE"
                fieldName="f51"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f51 && !errors.f51}
                isInvalid={errors.f51}
                readOnly={!edit}
              />
            </Col>
            <Col md={4}>
              <TextField
                register={register}
                labelName="AMOUNT PAID"
                fieldName="f52"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f52 && !errors.f52}
                isInvalid={errors.f52}
                readOnly={!edit}
              />
            </Col>
            <Col md={4}>
              <TextField
                register={register}
                labelName="RESERVED FOR NUCC"
                fieldName="f53"
                fieldType="number"
                fieldOptions={{ maxLength: 15 }}
                labelStyle="text-primary small"
                isValid={touchedFields.f53 && !errors.f53}
                isInvalid={errors.f53}
                readOnly={!edit}
              />
            </Col>
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="pb-4">
        <Col md={4}>
          <TextField
            register={register}
            labelName="SIGNATURE OF PHYSICIAN OR SUPPLIER"
            fieldName="f54"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f54 && !errors.f54}
            isInvalid={errors.f54}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <TextAreaField
            register={register}
            labelStyle="text-primary small"
            labelName="SERVICE FACILITY LOCATION INFORMATION"
            fieldName="f61"
            rows={2}
          />
          <TextField
            register={register}
            labelName="a."
            fieldName="f55"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f55 && !errors.f55}
            isInvalid={errors.f55}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <TextAreaField
            register={register}
            labelStyle="text-primary small"
            labelName="BILLING PROVIDER INFO & PHONE NUMBER"
            fieldName="f62"
            rows={2}
          />
          <TextField
            register={register}
            labelName="a."
            fieldName="f56"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="text-primary small"
            isValid={touchedFields.f56 && !errors.f56}
            isInvalid={errors.f56}
            readOnly={!edit}
          />
        </Col>
      </Form.Group>
    </>
  );
}
