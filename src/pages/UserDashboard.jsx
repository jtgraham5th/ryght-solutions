import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./UserDashboard.css";
import { useUser } from "../context/UserContext";
import UserDashboardNav from "../features/userDashboard/components/UserDashboardNav";
import Dashboard from "../features/userDashboard/components/Dashboard";
import { NotesManager } from "../features/userDashboard/components/NotesManager";

function UserDashboard(props) {
  const { user } = useUser();
  const [activeKey, setActiveKey] = useState("1");

  const renderDashboardView = () => {
    switch (activeKey) {
      case "1":
        return <Dashboard />;
      case "2":
        return <NotesManager />;
      case "3":
        return <h1>Authorizations Manager</h1>;
      default:
        return <Dashboard />;
    }
  };
  return (
    <Card className="mt-3 card-shadow">
      <Card.Header>
        <Row className="justify-content-evenly">
          <Col md={4}>
            <h3>Welcome back, {user.firstname}!</h3>
            <Card.Title>No Notifcations</Card.Title>
          </Col>
          <Col className="d-flex align-items-center">
            <UserDashboardNav
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          </Col>
        </Row>
      </Card.Header>
      {renderDashboardView()}
    </Card>
  );
}

export default UserDashboard;
