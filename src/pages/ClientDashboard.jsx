import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { matchRoutes } from "react-router-dom";
import { useClient } from "../context/ClientContext";
import { ClientRoutes } from "../data/routes";
import { CVHeader } from "../features/clientView";

function ClientDashboard(props) {
  const { resetClient } = useClient();

  const routes = [
    { path: "/patient/:patientid", caseSensitive: true },
    {
      path: "/patient/:patientid/treatment-plan",
      caseSensitive: true,
    },
    {
      path: "/patient/:patientid/progress-notes",
      caseSensitive: true,
    },
    {
      path: "/patient/:patientid/documents",
      caseSensitive: true,
    },
  ];
  useEffect(() => {
    const currentPath = window.location.pathname;
    const newMatches = matchRoutes(routes, currentPath);

    if (newMatches !== null) {
      resetClient(newMatches[0].params.patientid);
    }
  }, [resetClient]);

  

  // useEffect(() => {
  //   console.log("changed route")
  //   // eslint-disable-next-line
  // }, [matches]);

  return (
    <Card className="mt-3 w-100 card-shadow">
      <CVHeader />
      <Card.Body>
        <ClientRoutes />
      </Card.Body>
    </Card>
  );
}

export default ClientDashboard;
