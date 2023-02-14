import { useState } from "react";
import {
  Row,
  Col,
  Button,
  Badge,
  ListGroup,
  Collapse,
} from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { getAuthServices } from "../services/api";
import { useEffect } from "react";
import { getFormValue } from "../../clientDetails/utils/formatData";
import { useClient } from "../../../context/ClientContext";
import { getServiceCodeValue } from "../utils/formatData";
import formattedDate from "../../../utils/formattedDate";

export function AUListItem({ data, setShow }) {
  const [serviceIndex, setServiceIndex] = useState(false);
  const [authServices, setAuthServices] = useState([]);
  const { formData, serviceCodes } = useClient();
  useEffect(() => {
    const loadServices = async () => {
      const services = await getAuthServices(data.authrecid);
      setAuthServices(services);
    };
    loadServices();
  }, [data]);

  const toggleCollapse = (index) => {
    if (serviceIndex === index) setServiceIndex(null);
    else setServiceIndex(index);
  };
  const renderStatusVariant = (status) => {
    switch (status) {
      case 210:
        return "success";
      case 211:
        return "secondary";
      case 212:
        return "danger";
      default:
        return "primary";
    }
  };
  const renderStatus = (status) => {
    switch (status) {
      case 210:
        return "Approved";
      case 211:
        return "Pending";
      case 212:
        return "Denied";
      default:
        return "no status";
    }
  };
  return (
    <>
      <ListGroup.Item className="p-0" variant="">
        <Row>
          <Col md={1} className="fs-6 border text-center">
            <h6 className="mt-2 mb-0">{data.authorizationID}</h6>
            <Button
              className="d-flex fs-6"
              variant="link"
              type="button"
              onClick={() => setShow(data)}
            >
              <small>
                <Pencil className="me-1" />
                Edit
              </small>
            </Button>
            <div className="text-center mb-2">
              <Badge pill bg={renderStatusVariant(data.status)}>
                {renderStatus(data.status)}
              </Badge>
            </div>
          </Col>
          <Col md={1} className="pt-3 small text-center border">
            {formattedDate(data.submitdate)}
          </Col>
          <Col md={4} className="fs-6 border">
            <div>
              {authServices.length > 0 &&
                authServices.map((service, i) => (
                  <Row className="align-items-center border-bottom">
                    <Col md={6}>
                      <Button onClick={() => toggleCollapse(i)} variant="link">
                        {getFormValue("Services", service.serviceid, formData)}
                      </Button>
                    </Col>
                    <Col md={3} className="text-center">
                      <small>{`${service.maxunits} units`} </small>
                    </Col>
                    <Col md={3} className="text-center">
                      <small>
                        {service.frequencyunits} units per day
                        {/* {getFormValue(
                          "Frequency",
                          service.frequencyid,
                          formData
                        )} */}
                      </small>
                    </Col>
                    <Col
                      className="overflow-auto mt-2"
                      style={{ maxHeight: "15rem" }}
                    >
                      <Collapse in={serviceIndex === i} timeout={100}>
                        <ul className="mt-2">
                          {service.servicecodes.split(",").map((code) => (
                            <li>
                              <small>
                                {getServiceCodeValue(code, serviceCodes)}
                              </small>
                            </li>
                          ))}
                        </ul>
                      </Collapse>
                    </Col>
                  </Row>
                ))}
            </div>
          </Col>
          <Col md={1} className="pt-3 small text-center border">
            {formattedDate(data.effectivedate)}
          </Col>
          <Col md={1} className="pt-3 small text-center border">
            {formattedDate(data.lapsedate)}
          </Col>
          <Col md={1} className="pt-3 small text-center border">
            Malinda Graham
          </Col>
          <Col md={1} className="pt-3 small text-center border">
            {formattedDate(data.approvaldate)}
          </Col>
          <Col md={1} className="pt-3 small text-center border">
            {data.comments}
          </Col>
          <Col md={1} className="pt-3 small text-center border">
            Dr. Benjamin Green
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
}
