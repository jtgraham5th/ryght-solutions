import { useState } from "react";
import { Row, Col, Form, ListGroup, Button } from "react-bootstrap";
import "../settings.css";
import { useClient } from "../../../context/ClientContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function SEListBoxes(props) {
  const { formData, getGroupNames, addGroupItem, deleteGroupItem} = useClient();
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
    // eslint-disable-next-line
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
    <Col md={10} className="settings-main">
      <div className="text-start fs-2 mb-2">Setup Patient List Boxes</div>
      <Row className="justify-content-between h-100">
        <Col md={6} className="border settings-activate">
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
            <ListGroup >
              <ListGroup.Item>
                <Form.Switch
                  // onChange={onSwitchAction}
                  id="custom-switch"
                  label={`${activeGroup.groupname} is active`}
                  // checked={activeGroup.isactive === 1}
                  disabled={!activeGroup}
                />
              </ListGroup.Item>
              <div className="settings-listgroup">
              {activeGroup &&
                formData[activeGroup.groupname].map((item, i) => {
                  return (
                    <ListGroup.Item key={i} value={item.grouplistid} className="d-flex justify-content-between align-items-start">
                      {item.groupvalue}
                      <Button size="sm" variant="light" onClick={()=> deleteGroupItem(item.grouplistid)}>X</Button>
                    </ListGroup.Item>
                  );
                })}</div>
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
        <Col md={6} className="border settings-activate-overflow">
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
                      <option key={i} value={item.grouplistid}>
                        {item.groupvalue}
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
