import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "../ClientDetails.module.scss";
import { useClient } from "../../../context/ClientContext";
import { getFormValue, renderDetail } from "../utils/formatData";

export function CDPersonal() {
  const { activeClient, formData } = useClient();
  const dataArray1 = [
    { field: "DOB", value: activeClient[20].dob },
    { field: "Height", value: activeClient[21].height },
    { field: "Weight", value: activeClient[21].weight },
    {
      field: "Marital Status",
      value: getFormValue(
        "Marital Status",
        activeClient[20].sexatbirthid,
        formData
      ),
    },
    {
      field: "Ethnicity",
      value: getFormValue("Ethnicity", activeClient[20].ethnicityid, formData),
    },
  ];
  const dataArray2 = [
    {
      field: "Sex At Birth",
      value: getFormValue(
        "Sex At Birth",
        activeClient[20].sexatbirthid,
        formData
      ),
    },
    {
      field: "Gender Identity",
      value: getFormValue(
        "Gender Identity",
        activeClient[20].genderid,
        formData
      ),
    },
    {
      field: "Preferred Pronouns",
      value: getFormValue(
        "Preferred Pronouns",
        activeClient[20].preferredpronounid,
        formData
      ),
    },
    {
      field: "Religion",
      value: getFormValue("Religion", activeClient[20].religonid, formData),
    },
  ];
  return (
    <Row>
      <Col md={6} className="pe-0">
        <ListGroup className={styles.dataGroup} variant="flush">
          {dataArray1.map((data, i) =>
            renderDetail(data.field, data.value, 5, 7)
          )}
        </ListGroup>
      </Col>
      <Col md={6} className="ps-0">
        <ListGroup className={styles.dataGroup} variant="flush">
          {dataArray2.map((data, i) =>
            renderDetail(data.field, data.value, 7, 5)
          )}
        </ListGroup>
      </Col>
    </Row>
  );
}
