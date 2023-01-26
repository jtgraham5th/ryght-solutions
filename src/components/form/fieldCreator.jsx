import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { useClient } from "../../context/ClientContext";
import { useState } from "react";
import isStringNumber from "../../utils/isStringNumber";
import Select from "react-select";

export function DateField(props) {
  const { control, labelName, fieldName, labelStyle, fieldStyle, ...other } =
    props;
  return (
    <>
      <Form.Label className={`fs-6 me-3 text-nowrap ${labelStyle}`}>
        {labelName}
      </Form.Label>
      <Controller
        control={control}
        name={fieldName}
        render={({ field }) => (
          <DatePicker
            {...other}
            className={`datePicker ${fieldStyle} border-1 rounded`}
            selected={field.value}
            onChange={(date) => {
              field.onChange(date);
            }}
          />
        )}
      />
    </>
  );
}
export function SelectField(props) {
  const {
    register,
    labelName,
    fieldName,
    groupName,
    listData,
    labelStyle,
    fieldStyle,
    itemDetail,
    ...other
  } = props;
  const { formData } = useClient();

  const [detail] = useState(
    itemDetail && Array.isArray(itemDetail)
      ? itemDetail
      : ["grouplistid", "groupvalue"]
  );
  const renderOptions = () => {
    if (listData) {
      const filterOptions = listData.filter((listItem) => {
        return formData[groupName].some((formItem) => {
          return formItem.groupvalue === listItem.groupvalue;
        });
      });
      return filterOptions;
    } else if (groupName) return formData[groupName];
    return [];
  };
  return (
    <>
      {labelName ? (
        <Form.Label className={`fs-6 ${labelStyle}`}>{labelName}</Form.Label>
      ) : null}
      <Form.Select
        {...register(fieldName)}
        name={fieldName}
        className={`${fieldStyle}`}
        {...other}
      >
        {renderOptions().map((item, i) => {
          item[detail[0]] = isStringNumber(item[detail[0]]);
          return (
            <option key={i} value={item[detail[0]]}>
              {item[detail[1]]}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
}
export function MultiSelectField(props) {
  const {
    control,
    labelName,
    fieldName,
    groupName,
    listData,
    listDataProps,
    labelStyle,
    fieldStyle,
    ...other
  } = props;
  const { formData } = useClient();

  const renderOptions = () => {
    if (listData && listDataProps) {
      return listData.map((item) => {
        return {
          label: item[listDataProps[0]],
          value: item[listDataProps[1]],
        };
      });
    } else if (groupName)
      return formData[groupName].map((item) => {
        return {
          label: item.groupvalue,
          value: item.grouplistid,
        };
      });
    return [];
  };

  const convertValues = (options, values) => {
    if (options && values && values.length > 0) {
      if (
        typeof values[0] === "object" &&
        !Array.isArray(values[0]) &&
        values[0] !== null
      )
        return values;
      return options.filter((option) => {
        return values.some((item) => Number(option.value) === Number(item));
      });
    }
    return [];
  };
  return (
    <>
      {labelName ? (
        <Form.Label className={`fs-6 ${labelStyle}`}>{labelName}</Form.Label>
      ) : null}
      <Controller
        control={control}
        name={fieldName}
        // defaultValue={}
        render={({ field: { onChange, onBlur, value, name, ref } }) => {
          value = convertValues(renderOptions(), value);
          return (
            <Select
              defaultValue={convertValues(renderOptions(), value)}
              isMulti
              options={renderOptions()}
              className={`${fieldStyle}`}
              classNamePrefix="select"
              closeMenuOnSelect={false}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              ref={ref}
              {...other}
            />
          );
        }}
      />
    </>
  );
}
export function TextAreaField(props) {
  const { register, labelName, fieldName, readOnly, disabled, rows, ...other } =
    props;
  return (
    <>
      <Form.Label className="fs-6 ">{labelName}</Form.Label>
      <Form.Control
        {...register(fieldName)}
        as="textarea"
        rows={rows ? rows : 3}
        className="mb-3"
        readOnly={readOnly}
        disabled={disabled}
        {...other}
      />
    </>
  );
}
export function TextField({
  register,
  labelName,
  fieldName,
  readOnly,
  disabled,
}) {
  return (
    <>
      <Form.Label className="fs-5 ">{labelName}</Form.Label>
      <Form.Control
        {...register(fieldName)}
        type="text"
        rows={3}
        readOnly={readOnly}
        disabled={disabled}
      />
    </>
  );
}
