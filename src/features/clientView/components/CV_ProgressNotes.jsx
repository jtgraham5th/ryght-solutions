import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ViewerFooter } from "../../../components/ViewerFooter";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { PNList, PNManager, PNViewNote, PNPdf } from "../../progressNotes";
import { useUser } from "../../../context/UserContext";
import { useClient } from "../../../context/ClientContext";
import { pdf } from "@react-pdf/renderer";
import generatePDF from "../../../utils/generatePDF";
import { getListItemName } from "../../services/utils/formHelper";

export function CVProgressNotes() {
  const { user } = useUser();
  const { activeClient, formData, sendPDFtoAPI, getActiveServices } =
    useClient();

  const [activeNote, setActiveNote] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [edit, setEdit] = useState(false);
  const handlePrint = async (pinNumber) => {
    let pin;
    if (typeof pinNumber === "string" || typeof pinNumber === "number") {
      pin = pinNumber;
    } else {
      pin = false;
    }

    const activeServices = getActiveServices();
    activeClient.ins1_fundingsource = await getListItemName(
      activeClient.ins1_fundingsource
    );
    activeClient.sexatbirthid = await getListItemName(
      activeClient.sexatbirthid
    );
    activeNote.f6 = await getListItemName(activeNote.f6);
    activeNote.f7 = await getListItemName(activeNote.f7);
    
    const pdfBlob = await pdf(
      generatePDF(formData, activeNote, activeClient, activeServices)
    ).toBlob();

    console.log("pdf Blob:", pdfBlob);
    console.log("Active Doc:", activeNote);
    await sendPDFtoAPI(activeNote.recid, pdfBlob, user, pin).then((data) => {
      const url = data[0].viewer + data[0].path + data[0].file;
      window.open(url, "_blank");
    });
  };
  
  return (
    <>
      <Row className="mb-3">
        <Col md={3}>
          <PNList activeNote={activeNote} setActiveNote={setActiveNote} />
        </Col>
        <Col md={9}>
          <Card className="h-100">
            <ViewerHeader
              edit={edit}
              setEdit={setEdit}
              activeDocument={activeNote}
              handlePrint={handlePrint}
            />
            <Card.Body className="overflow-auto" style={{ height: "28rem" }}>
              {activeNote ? <PNViewNote data={activeNote} /> : null}
            </Card.Body>
            {activeNote ? (
              <ViewerFooter
                activePage={activePage}
                setActivePage={setActivePage}
              />
            ) : null}
          </Card>
        </Col>
        <PNManager
          show={edit}
          setShow={setEdit}
          containerName="B.I.R.P. Progress Note Form"
          data={activeNote}
          edit
        />
      </Row>
    </>
  );
}
