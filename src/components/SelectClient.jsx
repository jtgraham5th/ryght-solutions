import { Form } from "react-bootstrap";
import "../pages/ClientView.css";
import { useClient } from "../data/ClientContext";

function SelectClient() {
  const { selectClient, clientList } = useClient();

  const handleClientSelect = (e) => {
    selectClient(e.target.value);
  };

  return (
    <Form.Select
      className="select-client"
      onChange={(e) => handleClientSelect(e)}
    >
      <option>Select Client</option>
      {clientList &&
        clientList.map((client, i) => (
          <option key={i} value={client.patientid}>
            {client.name}
          </option>
        ))}
    </Form.Select>
  );
}

export default SelectClient;
