import { Row, Col, Button, Card, ListGroup, Form } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import { getListItem } from "../../../services/api";
import { useEffect } from "react";
import { useClient } from "../../../context/ClientContext";
import formatDateToday from "../../../utils/formatDateToday";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

export function OrderOfService({ register, control, setValue, formState }) {
  const noteRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => noteRef.current,
  });
  const getPageMargins = () => {
    return `@page { margin: 20px 20px 20px 20px !important; }`;
  };
  const { activeClient, formData } = useClient();
  const [convertedValues, setConvertedValues] = useState({});
  const [serviceids, setServiceids] = useState([]);
  useEffect(() => {
    getListItemName(activeClient[21].ins1_fundingsource);
    getListItemName(activeClient[20].sexatbirthid);
  }, []);

  const getListItemName = async (grouplistid) => {
    const listItem = await getListItem(grouplistid).then((item) => {
      if (item)
        setConvertedValues((prevState) => ({
          ...prevState,
          [grouplistid]: item.groupvalue,
        }));
    });
  };
  const setServiceValue = (e, grouplistid) => {
    e.target.value = e.target.value.toUpperCase();
    if (e.target.value.length === 2) {
      setServiceids((prevState) => [...prevState, grouplistid]);
    } else if (e.target.value.length < 1) {
      const filteredids = serviceids.filter((id) => id !== grouplistid);
      if (filteredids.length !== serviceids.length) {
        setServiceids([...filteredids]);
      }
    }
  };
  const checkidexists = (grouplistid) => {
    return serviceids.includes(grouplistid);
  };
  useEffect(() => {
    setValue("f7", serviceids.toString());
  }, [serviceids]);

  useEffect(() => {
    setValue("f5", convertedValues[activeClient[21].ins1_fundingsource]);
    setValue("f6", convertedValues[activeClient[20].sexatbirthid]);
  }, [convertedValues]);

  return (
    <div>
      <Row className="align-items-center mb-4 border-bottom">
        <Col md={3}></Col>
        <Col md={6} className="text-center">
          <h5>Graham & Associates, Inc.</h5> 1518 Airport Road Hinesville, GA
          31313-9439
          <p />
          <h3>Order of Service</h3>
        </Col>
        <Col className="text-end" md={3}>
          SHN RCM CMOs
          <br /> 1518 Airport Road
          <br /> Hinesville, GA
          <br /> 31313-9439
          <br /> LIBERTY County
          <br /> Phone : 912-559-5536
        </Col>
      </Row>
      <style>{getPageMargins()}</style>
      <Form.Group as={Row} className="justify-content-evenly mb-2 pb-3">
        <Col
          md={4}
          className="pn_note-view-item border border-light p-2 rounded"
        >
          <h6>Start Date: </h6>
          <Controller
            control={control}
            name="f2"
            render={({ field }) => {
              console.log(field);
              return (
                <DatePicker
                  className="datePicker rounded"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              );
            }}
          />
        </Col>
        <Col
          md={4}
          className="pn_note-view-item border border-light p-2 rounded"
        >
          <h6>End Date: </h6>
          <Controller
            control={control}
            name="f3"
            render={({ field }) => (
              <DatePicker
                className="datePicker rounded"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
      </Form.Group>
      <Row className="ps-3 p-2 mb-3">
        <Col md={6} className="pn_note-view-item  fs-5">
          <h5>Name:</h5>{" "}
          <h5 className="fw-normal ms-3 w-100 pb-1 border-bottom border-secondary">
            {activeClient[20].pfirstname + " " + activeClient[20].plastname}
          </h5>
        </Col>
        <Col md={3} className="pn_note-view-item">
          <h5>Insurance: </h5>{" "}
          <h5 className="fw-normal ms-3">
            {convertedValues[activeClient[21].ins1_fundingsource]}
          </h5>
        </Col>
        <Col md={3} className="pn_note-view-item">
          <h5>Gender: </h5>{" "}
          <h5 className="fw-normal ms-3">
            {convertedValues[activeClient[20].sexatbirthid]}
          </h5>
        </Col>
      </Row>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="border-bottom pb-2 mb-3">
            Please place an Intial and Date by Service(s) being requested for
            consumer
          </Card.Title>
          <Row>
            {formData["Services"].map((item, i) => {
              return (
                <Col md={6} key={item.grouplistid + i}>
                  <Row className="mb-2">
                    <Col md={2}>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="f7"
                        onChange={(e) => setServiceValue(e, item.grouplistid)}
                      />
                    </Col>
                    <Col
                      md={3}
                      className={`border d-flex justify-content-center align-items-center ${
                        checkidexists(item.grouplistid)
                          ? "fw-bold text-primary"
                          : ""
                      }`}
                    >
                      {formatDateToday()}
                    </Col>
                    <Col
                      md={7}
                      className={
                        checkidexists(item.grouplistid)
                          ? "fw-bold text-primary"
                          : ""
                      }
                    >
                      {item.groupvalue}
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3 border-light">
        <Card.Body>
          <Row className="mt-5 mb-2 justify-content-evenly">
            <Col md={5} className="pn_note-view-item border-top">
              Licensed Clinican, (Print Name)
            </Col>
            <Col
              md={5}
              className="pn_note-view-item border-top d-flex justify-content-between"
            >
              <div>Licensed Clinican (Signaure)</div> <div> Date</div>
            </Col>
          </Row>
          <Row className="mt-5 mb-2 justify-content-evenly">
            <Col md={5} className="pn_note-view-item border-top">
              Physician, (Print Name)
            </Col>
            <Col
              md={5}
              className="pn_note-view-item border-top d-flex justify-content-between"
            >
              <div>Physician (Signaure)</div> <div> Date</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
