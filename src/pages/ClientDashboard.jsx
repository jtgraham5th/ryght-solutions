import { Card } from "react-bootstrap";
import { ClientRoutes } from "../data/routes";
import CVHeader from "../components/CV_Header";

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
