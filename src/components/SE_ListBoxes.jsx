import { useState } from "react";
import { Card, Row, Col, Form, ListGroup, Button, Nav } from "react-bootstrap";
import "../pages/Settings.css";
import { useClient } from "../data/ClientContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function SEListBoxes(props) {
  const { formData, getGroupNames, addGroupItem } = useClient();
  const [groupNames, setGroupNames] = useState([]);
  const [activeGroup, setActiveGroup] = useState("");
  const { register, handleSubmit, reset } = useForm({});

  const getNames = async () => {
    const response = await getGroupNames();
    console.log(response);
    setGroupNames(response);
  };
  useEffect(() => {
    getNames();
  }, []);

  const addItem = async (data) => {
    let newItem = {
      groupvalue: data.itemName,
      isactive: 1,
      groupid: activeGroup.groupnameid,
    };
    await addGroupItem(newItem).then((response) => reset());
  };
  return (
    <Col md={10}>
      <div className="text-start fs-2 mb-2">Setup Patient List Boxes</div>
      <Row className="justify-content-between">
        <Col md={6} className="border">
          <Form.Label className="CE-form-label">Group Name</Form.Label>
          <Form.Select
            name="groupName"
            aria-label="Select Group"
            className="mb-5"
            onChange={(e) => {
              const index = e.currentTarget.value;
              setActiveGroup(groupNames[index]);
            }}
          >
            <option>Select Group</option>
            {groupNames.length > 0 &&
              groupNames.map((group, i) => {
                return (
                  <option key={i} value={i}>
                    {group.groupname}
                  </option>
                );
              })}
          </Form.Select>
          <div>
            <ListGroup>
              <ListGroup.Item>
                <Form.Switch
                  // onChange={onSwitchAction}
                  id="custom-switch"
                  label={`${activeGroup.groupname} is active`}
                  // checked={activeGroup.isactive === 1}
                  disabled={!activeGroup}
                />
              </ListGroup.Item>
              {activeGroup &&
                formData[activeGroup.groupname].map((item, i) => {
                  return (
                    <ListGroup.Item key={i} value={item.listId}>
                      {item.listItem}
                    </ListGroup.Item>
                  );
                })}
              <Form onSubmit={handleSubmit(addItem)}>
                <ListGroup.Item variant="secondary" className="d-flex flex-row">
                  <Form.Control
                    {...register("itemName")}
                    type="text"
                    name="itemName"
                    className="w-75 me-3"
                  />
                  <Button size="sm" className="text-nowrap" type="submit">
                    Add List Item
                  </Button>
                </ListGroup.Item>
              </Form>
            </ListGroup>
          </div>
        </Col>
        <Col md={6} className="border">
          {Object.keys(formData).map((group, i) => {
            return (
              <>
                <Form.Label className="CE-form-label fs-6 fw-bold">
                  {group}
                </Form.Label>
                <Form.Select
                  name={group}
                  aria-label="Select Group"
                  className="mb-3"
                >
                  {formData[group].map((item, i) => {
                    return (
                      <option key={i} value={item.listId}>
                        {item.listItem}
                      </option>
                    );
                  })}
                </Form.Select>
              </>
            );
          })}
        </Col>
      </Row>
    </Col>
  );
}

export default SEListBoxes;
