import { Button, Card } from "react-bootstrap";
import { Printer, Pencil } from "react-bootstrap-icons";

const printOptions = [
  "Case Manager Name",
  "Referral Date",
  "Case Manager Supervisor",
  "Client's Record ID",
  "Case Number",
  "Review Comment",
];
export function ViewerHeader({ edit, print, disabled }) {
  return (
    <Card.Header className="d-flex flex-row justify-content-end p-2">
      <Button
        className="me-2"
        // onClick={() => setShow(true)}
        variant={"dark"}
        type="button"
        disabled={disabled}
      >
        <Printer className="me-1" /> Print
      </Button>
      <Button
        className="me-2"
        onClick={edit}
        variant="primary"
        type="button"
        disabled={disabled}
      >
        <Pencil className="me-1" /> Edit
      </Button>
    </Card.Header>
  );
}
