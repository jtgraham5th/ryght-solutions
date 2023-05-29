import { useEffect, useState } from "react";
import { Row, Col, Form, Card, Alert, ListGroup } from "react-bootstrap";
import "../settings.css";
import { useUser } from "../../../context/UserContext";
import { SelectField } from "../../../components/form/fieldCreator";
import { statesList } from "../../../data/formData";
import { ViewerHeader } from "../../../components/ViewerHeader";

export function SEAdminManagement(props) {
  const { user, adminUpdateUser, getAllUsers, allUsers } = useUser();

  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false, status: false, user: "" });

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert((prevAlert) => ({ ...prevAlert, show: false }));
      }, 2500);

      return () => clearTimeout(timer); // Clear the timeout if the component unmounts or alert.show changes
    }
  }, [alert.show]);
  const toggleAccess = async (user) => {
    console.log(user);
    const updatedUser = {};
    if (user.accesslevel === 20) {
      updatedUser.accesslevel = 10;
    } else {
      updatedUser.accesslevel = 20;
    }

    console.log(updatedUser);
    const response = await adminUpdateUser(
      user.userid,
      [updatedUser],
      "accesslevel"
    );
    if (response) {
      setAlert({
        show: true,
        status: true,
        user: user.firstname + " " + user.lastname,
      });
    } else {
      setAlert({ show: true, status: false });
    }
  };

  return (
    <Col md={10} className="settings-main">
      <Card className="p-0">
        <Form onSubmit={() => {}}>
          <ViewerHeader
            edit={edit}
            setEdit={setEdit}
            onSubmit={() => {}}
            title="Admin Management"
          />

          <Card.Body>
            <Form.Group as={Row} className="mb-2">
              <h5>User Access</h5>
              <Card.Text>Control which users have admin access.</Card.Text>
              <Col md={8}>
                <ListGroup className="overflow-auto">
                  {allUsers &&
                    allUsers.map((altUser, index) => {
                      return (
                        <ListGroup.Item
                          className="d-flex justify-content-between align-items-start"
                          variant={
                            altUser.userid === user.UseriD ? "primary" : ""
                          }
                        >
                          <div className="ms-2 me-auto fw-lighter">
                            <div className="fw-normal">
                              {altUser.firstname + " " + altUser.lastname}
                            </div>
                            {altUser.email}
                          </div>
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            checked={altUser.accesslevel === 20}
                            onChange={() => toggleAccess(altUser)}
                            disabled={altUser.userid === user.UseriD}
                          />
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </Col>
              <Col md={4} className="border pt-3">
                <h5>Admin Users</h5>
                <hr />
                {allUsers &&
                  allUsers
                    .filter((user) => user.accesslevel === 20)
                    .map((user, index) => {
                      console.log(user);
                      return (
                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto fw-lighter">
                            <div className="fw-normal">
                              {user.firstname + " " + user.lastname}
                            </div>
                            {user.email}
                          </div>
                        </ListGroup.Item>
                      );
                    })}
              </Col>
            </Form.Group>
            {alert.show && alert.status ? (
              <Alert variant={alert.status ? "primary" : "danger"} className={` ${alert.show ? "fade-in-out" : "fade-out"}`}>
                {alert.status
                  ? "Access Updated For " + alert.user
                  : "Update Failed, Please try again."}
              </Alert>
            ) : null}
          </Card.Body>
        </Form>
      </Card>
    </Col>
  );
}
