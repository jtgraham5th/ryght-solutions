import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ViewerFooter } from "../../../components/ViewerFooter";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { PNList, PNManager, PNViewNote, PNPdf } from "../../progressNotes";
import { useUser } from "../../../context/UserContext";
import { useClient } from "../../../context/ClientContext";
import { pdf } from "@react-pdf/renderer";

export function CVProgressNotes() {
  const { user } = useUser();
  const {
    activeClient,
    formData,
    sendPDFtoAPI,
  } = useClient();

  const [activeNote, setActiveNote] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [edit, setEdit] = useState(false);
  const handlePrint = async (e) => {
    const pdfBlob = await pdf(
      <PNPdf
        formData={formData}
        data={activeNote}
        activeClient={activeClient}
      />
    ).toBlob();
    console.log(pdfBlob);
    console.log(activeNote);
    const responseData = await sendPDFtoAPI(activeNote.recid, pdfBlob, user);
    console.log(responseData);
    const url =
      responseData[0].viewer + responseData[0].path + responseData[0].file;
    console.log(url);
    window.open(url, "_blank");


    // console.log(pdfBlob);
    // var file = new File([pdfBlob], "exampleTPlan", {
    //   lastModified: new Date().getTime(),
    // });
    // console.log(file);
    // const pdfFormData = new FormData();
    // pdfFormData.append("PDFBlob", pdfBlob);
    // console.log(pdfFormData);
    // try {
    //   const response = await fetch(
    //     "http://www.ivronlogs.icu:8080/rsv1/generic_api/15?tid=3",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/pdf",
    //       },
    //       body: JSON.stringify([{ PDFBlob: pdfBlob }]),
    //     }
    //   );
    //   console.log(response.json());
    // } catch (e) {
    //   console.log(e);
    // }
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
