import { useState } from "react";
import { Row, Col, Form, ListGroup, Button, Card } from "react-bootstrap";
import "../settings.css";
import { useClient } from "../../../context/ClientContext";
import { useForm } from "react-hook-form";
import { getGroupInactiveListValues } from "../../../services/api";
import { SelectField } from "../../../components/form/fieldCreator";
import { UpdateContact } from "./UpdateContact";
import { defaultContact, defaultListItem } from "../utils/parseData";
import { XLg, CheckLg } from "react-bootstrap-icons";

export function SEListBoxes(props) {
  const {
    formData,
    addGroupItem,
    updateGroupItem,
    addClientContact,
    updateClientContact,
  } = useClient();
  const [activeGroup, setActiveGroup] = useState(null);
  const [showInactive, setShowInactive] = useState(false);
  const [newItem, setNewItem] = useState(false);
  const { register, handleSubmit, reset, setValue, watch, control, formState } =
    useForm({
      defaultValues: {
        groupvalue: "",
      },
    });

  const alternateGroupType = (group) => {
    if (group.hasOwnProperty("contactid") || group.hasOwnProperty("name")) {
      return true;
    }
    return false;
  };
  const selectGroup = (group) => {
    let selectedGroup = group;
    console.log(group)
    if (group[0].hasOwnProperty("contactid")) {
      selectedGroup = group.filter((item) => parseInt(item.isactive) === 1);
    }
    setShowInactive(false);
    setActiveGroup(selectedGroup);
  };
  const activateItem = async (item) => {
    if (activeGroup[0].hasOwnProperty("contactid")) {
      const activeContact = activeGroup.find(
        (group) => group.contactid === item.contactid
      );
      activeContact.isactive = parseInt(activeContact.isactive) === 0 ? 1 : 0;
      await updateClientContact([activeContact], activeContact.contactid);
    } else {
      item.isactive = parseInt(item.isactive) === 0 ? 1 : 0;
      await updateGroupItem([item]);
    }
  };

  const addItem = async (data) => {
    console.log(activeGroup);

    if (activeGroup[0].hasOwnProperty("contactid")) {
      const activeContact = activeGroup.find(
        (group) => group.contactid === data.contactid
      );

      if (activeContact) {
        activeContact.name = data.name;
        activeContact.phone1 = data.phone1;
        activeContact.phone2 = data.phone2;
        console.log("activeContact", activeContact);
        await updateClientContact([activeContact], activeContact.contactid);
      } else {
        const newContact = defaultContact;
        newContact.name = data.name;
        newContact.phone1 = data.phone1;
        newContact.phone2 = data.phone2;
        newContact.contacttypeid = activeGroup[0].contacttypeid;
        console.log("newContact", [newContact]);
        await addClientContact([newContact]);
      }
    } else {
      const activeItem = activeGroup.find(
        (group) => group.grouplistid === data.grouplistid
      );
      if (activeItem) {
        activeItem.groupvalue = parseInt(data.groupvalue);
        console.log("active", activeItem);
        await updateGroupItem([activeItem]);
      } else {
        const newItem = defaultListItem;
        newItem.groupvalue = data.groupvalue;
        newItem.groupid = activeGroup[0].groupid;
        console.log("new item", newItem);
        await addGroupItem([newItem]);
      }
      reset();
    }
  };
  const toggleInactive = async () => {
    if (showInactive) {
      setShowInactive(false);
      if (activeGroup[0].hasOwnProperty("contactid")) {
        let filteredGroup = activeGroup.filter(
          (group) => parseInt(group.isactive) === 1
        );
        setActiveGroup(filteredGroup);
      } else {
        const [matchingGroupKey, matchingGroup] =
          Object.entries(formData).find(
            ([key, groupArray]) =>
              Array.isArray(groupArray) &&
              groupArray.some(
                (group) => group.groupid === activeGroup[0].groupid
              )
          ) || [];
        setActiveGroup(matchingGroup);
      }
    } else {
      setShowInactive(true);
      let filteredGroup;
      if (activeGroup[0].hasOwnProperty("contactid")) {
        const [matchingGroupKey, matchingGroup] =
          Object.entries(formData).find(
            ([key, groupArray]) =>
              Array.isArray(groupArray) &&
              groupArray.some(
                (group) => group.contacttypeid === activeGroup[0].contacttypeid
              )
          ) || [];
        setActiveGroup(matchingGroup);
      } else {
        filteredGroup = await getGroupInactiveListValues(
          activeGroup[0].groupid
        );
        setActiveGroup(filteredGroup);
      }
    }
  };
  const toggleNewItem = () => {
    reset();
    setNewItem(!newItem);
  };
  const setContactValues = (index) => {
    setValue("contactid", activeGroup[index].contactid);
    setValue("name", activeGroup[index].name);
    setValue("phone1", activeGroup[index].phone1);
    setValue("phone2", activeGroup[index].phone2);
  };
  const setGroupValue = (index) => {
    setValue("groupvalue", activeGroup[index].groupvalue);
    setValue("grouplistid", activeGroup[index].grouplistid);
  };
  return (
    <Col md={10} className="settings-main">
      <Card className="p-0 h-100">
        <Card.Header className="d-flex flex-row justify-content-between align-items-center p-2">
          <h4 className="mb-0">Setup List Boxes</h4>
        </Card.Header>
        <Card.Body as={Row} className="justify-content-between overflow-auto">
          <Col md={6} className="border settings-activate">
            <Form.Label className="CE-form-label">Group Name</Form.Label>
            <Form.Select
              name="groupName"
              aria-label="Select Group"
              className="mb-2"
              onChange={(e) => {
                selectGroup(formData[e.currentTarget.value]);
              }}
            >
              <option>Select Group</option>
              {Object.keys(formData).length > 0 &&
                Object.keys(formData).map((group, i) => {
                  return (
                    <option key={i} value={group}>
                      {group}
                    </option>
                  );
                })}
            </Form.Select>
            <div>
              <ListGroup>
                <ListGroup.Item
                  variant="dark"
                  className="d-flex justify-content-between"
                >
                  <Form.Switch
                    onChange={toggleInactive}
                    id="custom-switch"
                    label={`Show inactive items`}
                    checked={showInactive}
                    disabled={!activeGroup}
                  />
                  <Button
                    size="sm"
                    variant={newItem ? "outline-secondary" : "outline-success"}
                    onClick={toggleNewItem}
                    disabled={!activeGroup}
                  >
                    {newItem ? "Cancel" : "New Item"}
                  </Button>
                </ListGroup.Item>
                <div className="settings-listgroup">
                  {activeGroup &&
                    activeGroup.map((item, i) => {
                      const groupvalue = watch("groupvalue");
                      const isActive = groupvalue === item.groupvalue;
                      return (
                        <ListGroup.Item
                          key={i}
                          active={isActive}
                          action
                          onClick={
                            activeGroup[0].hasOwnProperty("contactid")
                              ? () => setContactValues(i)
                              : () => setGroupValue(i)
                          }
                          variant={
                            parseInt(item.isactive) === 0 ? "secondary" : ""
                          }
                          value={
                            alternateGroupType(item)
                              ? item.contactid
                              : item.grouplistid
                          }
                          disabled={newItem}
                          className="d-flex justify-content-between align-items-start"
                        >
                          {alternateGroupType(item)
                            ? item.name
                            : item.groupvalue}
                          <Button
                            size="sm"
                            variant={
                              parseInt(item.isactive) === 0
                                ? "outline-primary"
                                : "outline-secondary"
                            }
                            onClick={() => activateItem(item)}
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
                    {activeGroup &&
                    Object.keys(activeGroup).length > 0 &&
                    (activeGroup[0].hasOwnProperty("contactid") ||
                      activeGroup[0].hasOwnProperty("name")) ? (
                      <UpdateContact
                        register={register}
                        formState={formState}
                        control={control}
                      />
                    ) : (
                      <Form.Control
                        autoComplete="off"
                        {...register("groupvalue")}
                        type="text"
                        name="groupvalue"
                      />
                    )}
                    <Button
                      className="text-nowrap mt-3"
                      type="submit"
                      variant={newItem ? "success" : "primary"}
                    >
                      {newItem ? "Add List Item" : "Update List Item"}
                    </Button>
                  </ListGroup.Item>
                </Form>
              </ListGroup>
            </div>
          </Col>
          <Col md={6} className="border settings-activate-overflow">
            {Object.keys(formData).map((group, i) => {
              return (
                <SelectField
                  labelName={group}
                  groupName={group}
                  labelStyle="CE-form-label"
                />
              );
            })}
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
}
