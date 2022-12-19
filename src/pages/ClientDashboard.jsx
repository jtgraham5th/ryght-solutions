import { Card } from "react-bootstrap";
import { ClientRoutes } from "../data/routes";
import { CVHeader } from "../features/clientView";

function ClientDashboard(props) {
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
