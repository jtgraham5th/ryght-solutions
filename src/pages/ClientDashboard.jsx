import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useMatch } from "react-router-dom";
import { useClient } from "../context/ClientContext";
import { ClientRoutes } from "../data/routes";
import { CVHeader } from "../features/clientView";

function ClientDashboard(props) {
  const { activeClient, resetClient } = useClient();
  const match = useMatch("/ryght-solutions/patient/:patientid");

  useEffect(() => {
    if (match) {
      resetClient(match.params.patientid);
    }
  }, [match]);

  if (Object.keys(activeClient[20]).length < 0) {
  }
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
