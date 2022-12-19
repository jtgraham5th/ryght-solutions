import { Row, Button, Collapse, Card } from "react-bootstrap";
import "./formComponents.css";
import { useForm } from "react-hook-form";
import { useClient } from "../../context/ClientContext";

export function FormAddContainer({
  sectionTitle,
  open,
  close,
  newForm: NewForm,
  setValue,
}) {
  const { activeClient, addContact } = useClient();

  const { register, getValues,reset } = useForm({
    patientid:
      activeClient.length > 0 ? activeClient[20].patientid : 0,
  });

  const onSubmit = (e) => {
    const data = getValues();
    const newContact = {
      name: data.name,
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      udfid1: 0,
      udfid2: 0,
      contacttypeid: 0,
      patientid: data.patientid,
      relationshipid: 0,
      phone1: data.phone1,
      phone1typeid: 0,
      phone2: data.phone2,
      phone2typeid: 0,
      phone3: "",
      phone3typeid: 0,
      countyid: 0,
      isactive: 1,
    };
    switch (sectionTitle) {
      case "familyPhysician":
        newContact.contacttypeid = 24;
      case "pharmacy":
        newContact.contacttypeid = 23;
    }

    addContact(newContact).then((data) => {
      switch (sectionTitle) {
        case "familyPhysician":
          setValue("physicianid", data);
        case "pharmacy":
          setValue("pharmacyproviderid", data);
      }
    });
    reset()
    close(e);
    // console.log(data)
  };

  return (
    <Collapse in={open} timeout={300}>
      <Row>
        <Card bg="light" className="p-0 mt-3 mb-3">
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              Add {sectionTitle}
              <div className="CE-form-label-button-container">
                <Button
                  size="sm"
                  className="CE-form-label-button me-2"
                  variant="outline-success"
                  onClick={onSubmit}
                >
                  Submit
                </Button>
                <Button
                  size="sm"
                  className="CE-form-label-button "
                  variant="outline-secondary"
                  name={sectionTitle.split(" ").join("")}
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </Card.Title>
            <NewForm register={register} />
          </Card.Body>
        </Card>
      </Row>
    </Collapse>
  );
}
