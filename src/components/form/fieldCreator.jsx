import { Form, Button, NavItem } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { useClient } from "../../context/ClientContext";
import { useState } from "react";
import isStringNumber from "../../utils/isStringNumber";
import Select from "react-select";
import { useEffect } from "react";

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
    fieldOptions,
    ...other
  } = props;
  const { formData } = useClient();

  const [detail, setDetail] = useState(
    itemDetail && Array.isArray(itemDetail)
      ? itemDetail
      : ["grouplistid", "groupvalue"]
  );
  useEffect(() => {
    function hasContactAndNameKeysInArray(arr) {
      for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        if (!obj.hasOwnProperty("contactid") || !obj.hasOwnProperty("name")) {
          return false;
        }
      }
      return true;
    }
    if (
      formData[groupName] &&
      hasContactAndNameKeysInArray(formData[groupName])
    ) {
      setDetail(["contactid", "name"]);
    }
  }, [formData[groupName]]);
  const renderOptions = () => {
    console.log("renderoptions");
    if (listData && groupName) {
      const filterOptions = listData.filter((listItem) => {
        return formData[groupName].some((formItem) => {
          return formItem.groupvalue === listItem.groupvalue;
        });
      });

      return filterOptions;
    } else if (listData) {
      return listData;
    } else if (groupName) {
      return formData[groupName];
    }
    return [];
  };
  renderOptions();
  return (
    <>
      {labelName ? (
        <Form.Label className={`fs-6 ${labelStyle}`}>{labelName}</Form.Label>
      ) : null}
      <Form.Select
        {...(register ? { ...register(fieldName, fieldOptions) } : null)}
        name={fieldName}
        className={`${fieldStyle}`}
        {...other}
      >
        {renderOptions().map((item, i) => {
          if (groupName || itemDetail)
            item[detail[0]] = isStringNumber(item[detail[0]]);
          return (
            <option
              key={i}
              value={groupName || itemDetail ? item[detail[0]] : item}
            >
              {groupName || itemDetail ? item[detail[1]] : item}
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
  labelStyle,
  fieldStyle,
  fieldType,
  fieldOptions,
  isInvalid,
  ...other
}) {
  return (
    <div className={fieldStyle}>
      {labelName ? (
        <Form.Label
          className={labelStyle ? labelStyle : disabled ? "text-muted" : "fs-6"}
        >
          {labelName}
        </Form.Label>
      ) : null}
      <Form.Control
        {...register(fieldName, fieldOptions)}
        type={fieldType ? fieldType : "text"}
        readOnly={readOnly}
        disabled={disabled}
        isInvalid={isInvalid}
        {...other}
      />
      <Form.Control.Feedback type="invalid">
        {isInvalid && isInvalid.message}
      </Form.Control.Feedback>
    </div>
  );
}
export function CheckboxField(props) {
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
export function FormLabelButtons({
  toggle,
  name,
  closeItem,
  addItem,
  disabled,
}) {
  return (
    <div className="CE-form-label-button-container">
      {toggle ? (
        <>
          <Button
            className="CE-form-label-button me-2"
            name={name}
            onClick={closeItem}
            variant="outline-success"
            size="sm"
          >
            Save
          </Button>
          <Button
            className="CE-form-label-button"
            name={name}
            variant="outline-secondary"
            size="sm"
            onClick={closeItem}
          >
            Cancel
          </Button>
        </>
      ) : (
        <Button
          disabled={disabled}
          size="sm"
          variant="outline-primary"
          name={name}
          className="CE-form-label-button"
          onClick={addItem}
        >
          new
        </Button>
      )}
    </div>
  );
}
