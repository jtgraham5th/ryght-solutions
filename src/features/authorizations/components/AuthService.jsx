import { Row, Col, Button, Collapse, ListGroup } from "react-bootstrap";
import { SelectField, TextField } from "../../../components/form/fieldCreator";
import { useState, useEffect } from "react";
import { useClient } from "../../../context/ClientContext";
import { useWatch } from "react-hook-form";

export function AuthService({ register, index, control, remove, setValue }) {
  const watchServiceId = useWatch({
    control,
    name: `services.${index}.serviceid`,
  });
  const renderServiceCodes = () => {
    const newServiceCodes = serviceCodes.filter(
      (serviceCode) =>
        parseInt(serviceCode.grouplistid) === parseInt(watchServiceId)
    );
    return newServiceCodes;
  };
  useEffect(() => {
    let serviceCodesArray = [];
    renderServiceCodes().map((serviceCode) =>
      serviceCodesArray.push(serviceCode.recid)
    );
    setValue(`services.${index}.servicecodes`, serviceCodesArray.toString());
  }, [watchServiceId]);

  const { serviceCodes } = useClient();
  const [serviceIndex, setServiceIndex] = useState(null);
  const toggleCodes = (index) => {
    if (serviceIndex === index) setServiceIndex(null);
    else setServiceIndex(index);
  };

  return (
    <ListGroup.Item
      key={index}
      as={Row}
      variant="primary"
      className="d-flex align-items-center rounded mb-2"
    >
      <Col md={3}>
        <SelectField
          register={register}
          fieldName={`services.${index}.serviceid`}
          groupName="Services"
        />
      </Col>
      <Col md={1} className="p-2">
        <TextField
          register={register}
          labelName="Max Units"
          fieldType="number"
          fieldName={`services.${index}.maxunits`}
          labelStyle="small"
        />
      </Col>
      <Col md={3} className=" text-end">
        <small className="me-2">
          Client cannot be seen for more than a total of
        </small>
      </Col>
      <Col md={1} className="p-2">
        <TextField
          register={register}
          fieldType="number"
          fieldName={`services.${index}.frequencyunits`}
        />
      </Col>
      <Col md={2}>
        <small className="me-2"> units per day.</small>
      </Col>
      {/* <Col md={2}>
        <SelectField
          register={register}
          groupName="Frequency"
          fieldName={`services.${index}.frequencyid`}
        />
      </Col> */}
      <Col md={2} className="d-flex justify-content-evenly p-0">
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => toggleCodes(index)}
        >
          <small>Service Codes</small>
        </Button>
        <Button variant="outline-secondary" onClick={() => remove(index)}>
          X
        </Button>
      </Col>
      <Collapse in={serviceIndex === index} timeout={100}>
        <Col md={12}>
          <ul
            className="mt-2 bg-white border rounded overflow-auto"
            style={{ height: "8rem" }}
          >
            {renderServiceCodes().map((serviceCode) => {
              return (
                <li>
                  <small>
                    {serviceCode.code} - {serviceCode.description}
                  </small>
                </li>
              );
            })}
          </ul>
        </Col>
      </Collapse>
    </ListGroup.Item>
  );
}
