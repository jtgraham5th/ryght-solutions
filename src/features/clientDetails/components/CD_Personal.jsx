import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "../ClientDetails.module.scss";
import { useClient } from "../../../context/ClientContext";
import { renderDetail } from "../utils/formatData";
import { dataArray1, dataArray2 } from "../data/clientDetails";

export function CDPersonal() {
  const { activeClient, formData } = useClient();
  
  const data01 = dataArray1(formData, activeClient);
  const data02 = dataArray2(formData, activeClient);

  return (
    <Row>
      <Col md={6} className="pe-0">
        <ListGroup className={styles.dataGroup} variant="flush">
          {data01.map((data, i) =>
            renderDetail(data.field, data.value, 5, 7)
          )}
        </ListGroup>
      </Col>
      <Col md={6} className="ps-0">
        <ListGroup className={styles.dataGroup} variant="flush">
          {data02.map((data, i) =>
            renderDetail(data.field, data.value, 7, 5)
          )}
        </ListGroup>
      </Col>
    </Row>
  );
}
