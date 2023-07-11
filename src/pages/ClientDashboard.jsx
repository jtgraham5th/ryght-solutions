import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useMatch, matchRoutes } from "react-router-dom";
import { useClient } from "../context/ClientContext";
import { ClientRoutes } from "../data/routes";
import { CVHeader } from "../features/clientView";

function ClientDashboard(props) {
  const { activeClient, resetClient } = useClient();
  // const match = useMatch("/ryght-solutions/patient/:patientid");

  const routes = [
    { path: "/ryght-solutions/patient/:patientid", caseSensitive: true },
    {
      path: "/ryght-solutions/patient/:patientid/treatment-plan",
      caseSensitive: true,
    },
    {
      path: "/ryght-solutions/patient/:patientid/progress-notes",
      caseSensitive: true,
    },
    {
      path: "/ryght-solutions/patient/:patientid/documents",
      caseSensitive: true,
    },
  ];
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const newMatches = matchRoutes(routes, currentPath);
    setMatches(newMatches);

    if (newMatches !== null) {
      resetClient(newMatches[0].params.patientid);
    }
  }, [window.location.pathname]);

  

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
