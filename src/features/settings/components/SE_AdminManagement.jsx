import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  Card,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import "../settings.css";
import { useUser } from "../../../context/UserContext";
import { StarFill, Pencil } from "react-bootstrap-icons";
import { Register } from "../../authentication/components/Register";
import {
  getUserWithID,
  addNewUser,
  updateUser,
} from "../../authentication/services/api";
import { useForm } from "react-hook-form";
import { parseSignUpData } from "../../authentication/utils/parseData";
import { getDirtyFields } from "../utils/parseData";
import { filterObjectByKeys } from "../utils/parseData";

export function SEAdminManagement(props) {
  const { user, adminUpdateUser, getAllUsers, allUsers } = useUser();
  const { register, handleSubmit, formState, watch, control, reset } = useForm({
    mode: "onBlur",
  });
  const { dirtyFields } = formState;

  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false, status: false, user: "" });
  const [selectedUser, setSelectedUser] = useState({});

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
    console.log(response);
    if (response) {
      setAlert({
        show: true,
        status: true,
        user: user.firstname + " " + user.lastname,
      });
      const updatedSelectedUser = allUsers.find(
        (user) => user.userid === selectedUser.userid
      );
      if (updatedSelectedUser) {
        const userSelect = await getUserWithID(selectedUser.userid);
        setSelectedUser(userSelect[0]);
      }
    } else {
      setAlert({ show: true, status: false });
    }
  };
  const viewUser = async (e, altUser) => {
    e.preventDefault();
    console.log(altUser);
    const userSelect = await getUserWithID(altUser.userid);
    setSelectedUser(userSelect[0]);
    setEdit(false);
  };

  const newUser = () => {
    setSelectedUser({});
    setEdit(true);
  };

  const onSubmit = async (data) => {
    const dirtyFieldsString = getDirtyFields(dirtyFields, "passwordconfirm");
    if (dirtyFieldsString) {
      const filteredObj = filterObjectByKeys(data, dirtyFields);
      delete filteredObj.passwordconfirm;

      const signupData = parseSignUpData(data);
      if (signupData[0].UserID) {
        console.log("updated", signupData, dirtyFieldsString);
        await updateUser(
          signupData[0].UserID,
          [filteredObj],
          dirtyFieldsString
        ).then(() => getAllUsers());
      } else {
        console.log("new", signupData, dirtyFieldsString);
        await addNewUser().then((newUser) => {
          console.log(newUser);
          signupData[0].UserID = newUser.userid;
          updateUser(signupData[0].UserID, [filteredObj], dirtyFieldsString);
          getAllUsers();
        });
      }
    }
    setEdit(false);
  };

  return (
    <Col md={10} className="settings-main">
      <Card className="p-0 h-100">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="h-100"
        >
          <Card.Header className="d-flex flex-row justify-content-between align-items-center p-2">
            <h5 className="mb-0 ms-2">Admin Managment</h5>
          </Card.Header>

          <Card.Body className="h-100">
            <Form.Group as={Row} className="mb-2">
              <Col md={3} className="h-100">
                <h5>User Access</h5>
                <Card.Text>Control which users have admin access.</Card.Text>
                <Button
                  variant="success"
                  className="mb-3 w-100"
                  disabled={edit}
                  onClick={newUser}
                >
                  Add New User
                </Button>
                <ListGroup
                  className="overflow-auto border-2 border"
                  style={{ height: "25rem" }}
                >
                  {allUsers &&
                    allUsers.map((altUser, index) => {
                      return (
                        <ListGroup.Item
                          key={index}
                          className="d-flex justify-content-between align-items-start small"
                          action
                          // active={active}
                          variant={
                            altUser.userid === user.UseriD ? "primary" : ""
                          }
                          onClick={(e) => viewUser(e, altUser)}
                        >
                          {altUser.accesslevel === 20 ? <StarFill /> : ""}
                          <div className="ms-2 me-auto fw-lighter">
                            <div className="fw-normal">
                              {altUser.firstname + " " + altUser.lastname}
                            </div>
                            {altUser.email}
                          </div>
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </Col>
              <Card as={Col} md={9} className="border pe-0 ps-0 h-100">
                <Card.Header className="d-flex flex-row justify-content-between align-items-center ps-3 p-2">
                  <h5>
                    {selectedUser.firstname && selectedUser.lastname
                      ? selectedUser.firstname + " " + selectedUser.lastname
                      : "New User"}
                  </h5>
                  <div className="d-flex align-items-center">
                    <Form.Label className="me-2 mb-0">Admin Access</Form.Label>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      checked={selectedUser.accesslevel === 20}
                      onChange={() => toggleAccess(selectedUser)}
                      // disabled={selectedUser.userid === user.UseriD}
                    />
                    {!edit ? (
                      <Button
                        className="me-2"
                        onClick={() => setEdit(true)}
                        variant="primary"
                        type="button"
                        disabled={!selectedUser}
                      >
                        <Pencil className="me-1" /> Edit
                      </Button>
                    ) : (
                      <>
                        <Button
                          className="me-2"
                          variant="success"
                          type="submit"
                          id="footer-next"
                          // disabled={disabled}
                        >
                          Save User
                        </Button>
                        <Button
                          className="me-2"
                          variant="secondary"
                          onClick={() => setEdit(false)}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                  </div>
                </Card.Header>
                <Card.Body>
                  <Register
                    userData={selectedUser}
                    onSubmit
                    register={register}
                    control={control}
                    formState={formState}
                    reset={reset}
                    watch={watch}
                    edit={edit}
                  />
                  {/* 
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
                    })} */}
                </Card.Body>
              </Card>
            </Form.Group>
            {alert.show && alert.status ? (
              <Alert
                variant={alert.status ? "primary" : "danger"}
                className={` ${alert.show ? "fade-in-out" : "fade-out"}`}
              >
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
