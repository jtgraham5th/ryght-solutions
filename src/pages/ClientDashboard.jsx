import { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Routes, Route, Redirect } from "react-router-dom";
import { ClientRoutes, UserRoutes } from "../data/routes";
import CVHeader from "../components/CV_Header";
import Sidebar from "../components/Sidebar.jsx";
// import "./dashboard.css";

function ClientDashboard(props) {
  return (
        <Card className="mt-3 w-100">
          <CVHeader />
          <Card.Body>
            <ClientRoutes />
          </Card.Body>
        </Card>
  );
}

export default ClientDashboard;
