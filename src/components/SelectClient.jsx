import { Form } from "react-bootstrap";
import "../pages/ClientView.css";
import { useClient } from "../data/ClientContext";

function SelectClient() {
  const { selectClient, clientList, getContactList } = useClient();

  const handleClientSelect = async (e) => {
    for (let i = 20; i < 23; i++) {
      await selectClient(e.target.value, i);
    }
    for (let i = 21; i < 25; i++) {
      await getContactList(e.target.value, i);
    }
    return;
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
