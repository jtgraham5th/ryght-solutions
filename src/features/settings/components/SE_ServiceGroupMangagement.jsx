import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  ListGroup,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import "../settings.css";
import { useClient } from "../../../context/ClientContext";
import { useForm } from "react-hook-form";
import { getGroupInactiveListValues } from "../../../services/api";
import {
  createServiceGroupCodeString,
  defaultListItem,
} from "../utils/parseData";
import { XLg, CheckLg } from "react-bootstrap-icons";
import { Services } from "../../services";
import { updateListItem } from "../../../services/api";
import {
  getServiceGroupCodes,
  getServiceCodesWithId,
} from "../../services/services/api";

export function SEServiceGroupManagement(props) {
  const { formData, getFormFields, updateGroupItem, serviceCodes } =
    useClient();
  const [serviceGroup, setServiceGroup] = useState({});
  const [serviceGroupCodes, setServiceGroupCodes] = useState([]);
  const [selectedServiceCodes, setSelectedServiceCodes] = useState([]);
  const [showInactive, setShowInactive] = useState(false);
  const [newItem, setNewItem] = useState(false);

  const { register, handleSubmit, reset, setValue, watch, control, formState } =
    useForm({
      defaultValues: {
        groupvalue: "",
      },
    });

  const selectGroup = async (grouplistid) => {
    const parsedGrouplistId = parseInt(grouplistid);
    const selectedGroup = formData["Services"].filter((item) => {
      return parseInt(item.grouplistid) === parsedGrouplistId;
    });
    setServiceGroup(selectedGroup[0]);
    setServiceGroupCodes(await getServiceGroupCodes(parsedGrouplistId));
    setShowInactive(false);
  };

  const activateItem = async (item) => {
    item.isactive = parseInt(item.isactive) === 0 ? 1 : 0;
    await updateGroupItem([item]);
  };

  const addItem = async (data) => {
    // Combine the existing service group code string with the new data
    const updatedServiceGroupCodeString = `${serviceGroup.udf1}${
      selectedServiceCodes.length > 0
        ? "," + createServiceGroupCodeString(selectedServiceCodes)
        : ""
    }`;

    // Construct the updated group object
    const updatedGroup = {
      grouplistid: serviceGroup.grouplistid,
      udf1: updatedServiceGroupCodeString,
    };

    // Perform the update and handle the response
    const updateResponse = await updateListItem([updatedGroup]);
    console.log("Update Response:", updateResponse);

    // Reset selected service codes
    setSelectedServiceCodes([]);
    selectGroup(serviceGroup.grouplistid); ///take all the selectedService Codes and create an array string
    getFormFields();
    reset();
  };
  const toggleInactive = async () => {
    if (showInactive) {
      setShowInactive(false);

      const [matchingGroupKey, matchingGroup] =
        Object.entries(formData).find(
          ([key, groupArray]) =>
            Array.isArray(groupArray) &&
            groupArray.some(
              (group) => group.groupid === serviceGroupCodes[0].groupid
            )
        ) || [];
      setServiceGroupCodes(matchingGroup);
    } else {
      setShowInactive(true);
      let filteredGroup;

      filteredGroup = await getGroupInactiveListValues(
        serviceGroupCodes[0].groupid
      );
      setServiceGroupCodes(filteredGroup);
    }
  };
  const removeItemFromGroup = async (item) => {
    const recid = item.recid.toString(); // Convert to string once for reuse

    const targetString = serviceGroup.udf1.includes(recid)
      ? serviceGroup.udf1
      : selectedServiceCodes
      ? createServiceGroupCodeString(selectedServiceCodes)
      : serviceGroup.udf1;
    const updatedServiceGroupCodeString = targetString
      .split(",")
      .filter((code) => code !== recid)
      .join(",");

    if (serviceGroup.udf1.includes(recid)) {
      const updatedGroup = {
        grouplistid: serviceGroup.grouplistid,
        udf1: updatedServiceGroupCodeString,
      };
      const updateResponse = await updateListItem([updatedGroup]);
      getFormFields();
      selectGroup(serviceGroup.grouplistid);
    } else if (targetString !== serviceGroup.udf1) {
      setSelectedServiceCodes(
        selectedServiceCodes.filter((svc) => svc.recid !== item.recid)
      );
    }
  };
  
  const toggleNewItem = () => {
    reset();
    setNewItem(!newItem);
  };
  const setGroupValue = (index) => {
    // setValue("groupvalue", serviceGroupCodes[index].groupvalue);
    setValue("grouplistid", serviceGroupCodes[index].grouplistid);
  };
  return (
    <Col md={10} className="settings-main">
      <Card className="p-0">
        <Card.Header className="d-flex flex-row justify-content-between align-items-center p-2">
          <h4 className="mb-0">Setup List Boxes</h4>
        </Card.Header>
        <Card.Body
          as={Row}
          className="justify-content-evenly overflow-auto h-100 pb-0"
        >
          <Col md={6} className="settings-activate h-100 p-2">
            <Form.Label className="fs-5">Service Group Name</Form.Label>
            <Form.Select
              name="groupName"
              aria-label="Select Group"
              className="mb-2"
              onChange={(e) => {
                selectGroup(e.currentTarget.value);
              }}
            >
              <option>Select Group</option>
              {formData["Services"].length > 0 &&
                formData["Services"].map((group, i) => {
                  return (
                    <option key={i} value={group.grouplistid}>
                      {group.groupvalue}
                    </option>
                  );
                })}
            </Form.Select>
            <div className="h-100">
              <ListGroup className="h-100">
                <ListGroup.Item
                  variant="dark"
                  className="d-flex justify-content-between"
                >
                  <Form.Switch
                    onChange={toggleInactive}
                    id="custom-switch"
                    label={`Show inactive items`}
                    checked={showInactive}
                    disabled={true}
                  />
                  <Button
                    size="sm"
                    variant={newItem ? "outline-secondary" : "outline-success"}
                    onClick={toggleNewItem}
                    disabled={true}
                  >
                    {newItem ? "Cancel" : "New Item"}
                  </Button>
                </ListGroup.Item>
                <div className="settings-listgroup-services">
                  {serviceGroupCodes &&
                    serviceGroupCodes.map((item, i) => {
                      const groupvalue = watch("groupvalue");
                      const isActive = groupvalue === item.groupvalue;
                      return (
                        <ListGroup.Item
                          key={i}
                          active={isActive}
                          action
                          // onClick={() => setGroupValue(i)}
                          variant={
                            parseInt(item.isactive) === 0 ? "secondary" : ""
                          }
                          value={item.recid}
                          disabled={newItem}
                          className="d-flex justify-content-between align-items-start"
                        >
                          <small>{item.description}</small>
                          <Badge bg="primary" className="ms-1">
                            {item.code}
                          </Badge>
                          <Button
                            size="sm"
                            variant={
                              parseInt(item.isactive) === 0
                                ? "outline-primary"
                                : "outline-secondary"
                            }
                            onClick={() => removeItemFromGroup(item)}
                          >
                            {parseInt(item.isactive) === 0 ? (
                              <CheckLg />
                            ) : (
                              <XLg size={10}/>
                            )}
                          </Button>
                        </ListGroup.Item>
                      );
                    })}
                  {selectedServiceCodes &&
                    selectedServiceCodes.map((item, i) => {
                      const groupvalue = watch("groupvalue");
                      const isActive = groupvalue === item.groupvalue;
                      return (
                        <ListGroup.Item
                          key={i}
                          active={isActive}
                          action
                          onClick={() => setGroupValue(i)}
                          variant={
                            parseInt(item.isactive) === 0 ? "secondary" : ""
                          }
                          value={item.recid}
                          disabled={newItem}
                          className="d-flex justify-content-between align-items-start"
                        >
                          {item.description}
                          <Badge bg="secondary" className="ms-1">
                            {item.code}
                          </Badge>
                          <Button
                            size="sm"
                            variant={
                              parseInt(item.isactive) === 0
                                ? "outline-primary"
                                : "outline-secondary"
                            }
                            onClick={() => removeItemFromGroup(item)}
                          >
                            {parseInt(item.isactive) === 0 ? (
                              <CheckLg />
                            ) : (
                              <XLg />
                            )}
                          </Button>
                        </ListGroup.Item>
                      );
                    })}
                </div>
                <Form onSubmit={handleSubmit(addItem)} autoComplete="off">
                  <ListGroup.Item variant="dark" className="d-flex flex-column">
                    <Form.Control
                      autoComplete="off"
                      {...register("groupvalue")}
                      type="text"
                      name="groupvalue"
                    />

                    <Button
                      className="text-nowrap mt-3"
                      type="submit"
                      variant={newItem ? "success" : "primary"}
                    >
                      {newItem ? "Add List Item" : "Update Service Group"}
                    </Button>
                  </ListGroup.Item>
                </Form>
              </ListGroup>
            </div>
          </Col>
          <Col md={5} className="p-2">
            <Services
              selectedServices={selectedServiceCodes}
              setSelectedServices={setSelectedServiceCodes}
              setValue={setValue}
              fieldName="servicecodes"
              showServiceCodes
              // filterBy={selectedServiceGroup}
              minimal
              containerStyle="h-100"
            />
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
}
