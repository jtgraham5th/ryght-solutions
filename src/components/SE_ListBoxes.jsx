import { useState } from "react";
import { Card, Row, Col, Form, ListGroup, Button, Nav } from "react-bootstrap";
import "../pages/Settings.css";
import { useClient } from "../data/ClientContext";
import { useEffect } from "react";

function SEListBoxes(props) {
  const { formData, getGroupNames } = useClient();
  const [groupNames, setGroupNames] = useState([]);
  const [activeGroup, setActiveGroup] = useState("");
  useEffect(() => {
    const getNames = async () => {
      const response = await getGroupNames();
      console.log(response);
      setGroupNames(response);
    };
    getNames();
  }, []);

  return (
    <Col md={10}>
      <div className="text-start fs-2 mb-2">Setup Patient List Boxes</div>
      <Row className="justify-content-between">
        <Col md={6}>
          <Form.Label className="CE-form-label">Group Name</Form.Label>
          <Form.Select
            name="groupName"
            aria-label="Select Group"
            className="mb-5"
            onChange={(e) => {
              const index = (e.currentTarget.value);
              setActiveGroup(groupNames[index]);
            }}
          >
            <option>Select Group</option>
            {groupNames.length > 0 &&
              groupNames.map((group, i) => {
                console.log(group);
                return (
                  <option key={i} value={i}>
                    {group.groupname}
                  </option>
                );
              })}
          </Form.Select>
          <Form.Label className="CE-form-label">Status</Form.Label>
          <Form.Switch
            // onChange={onSwitchAction}
            id="custom-switch"
            label={`${activeGroup.groupname} is active`}
            // checked={activeGroup.isactive === 1}
            disabled={!activeGroup}
          />
        </Col>
        <Col md={6}>
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
