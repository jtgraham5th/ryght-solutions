import { Row, Button, Collapse, Card } from "react-bootstrap";
import "./formComponents.css";
import { useClient } from "../../context/ClientContext";
import { useState } from "react";
import {
  parseNewContact,
  parseNewProvider,
} from "../../features/enrollment/utils/parseData";

export function FormAddContainer({
  sectionTitle,
  open,
  close,
  newForm: NewForm,
  setValue,
}) {
  const {
    activeClient,
    addClientContact,
    getFormFields,
    addGroupItem,
    updateClientContact,
    setToggleUpdate,
  } = useClient();
  const [state, setState] = useState({});
  const getContactType = () => {
    switch (sectionTitle) {
      case "physician":
        return 24;
      case "pharmacy":
        return 23;
      default:
        return 0;
    }
  };
  const onSubmit = async (e) => {
    console.log(sectionTitle);
    if (sectionTitle === "provider") {
      const data = parseNewProvider(state);
      if (!state.carrierName || state.carrierName.length < 1) {
        setToggleUpdate({
          status: "Error",
          message:
            "There was an error creating this Insurance Provider. Please try again.",
          show: true,
        });
        setState({});
        return;
      }
      await addGroupItem([data]);
    } else {
      const data = parseNewContact(
        state,
        getContactType(),
        activeClient.patientid
      );
      await addClientContact(data).then(async (newcontactid) => {
        getFormFields();
        console.log(newcontactid);
        switch (sectionTitle) {
          case "physician":
            setValue("physicianid", newcontactid);
            break;
          case "pharmacy":
            setValue("pharmacyproviderid", newcontactid);
            break;
          default:
            break;
        }
        await updateClientContact(data, newcontactid).then((updatedContact) => {
          console.log(updatedContact);
        });
      });
    }
    setState({});
    close(e);
  };

  return (
    <Collapse in={open} timeout={300}>
      <Row>
        <Card bg="light" border="primary" className="p-0 mt-3 mb-3 shadow  border border-2">
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              Add {sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1)}
              <div className="CE-form-label-button-container">
                <Button
                  size="sm"
                  className="CE-form-label-button me-2"
                  variant="success"
                  onClick={onSubmit}
                >
                  Submit
                </Button>
                <Button
                  size="sm"
                  className="CE-form-label-button "
                  variant="secondary"
                  name={sectionTitle.split(" ").join("")}
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </Card.Title>
            <NewForm state={state} setState={setState} />
          </Card.Body>
        </Card>
      </Row>
    </Collapse>
  );
}
