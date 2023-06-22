import { useState, useEffect } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { DocList, DocViewer } from "../../documents";
import { ViewerFooter } from "../../../components/ViewerFooter";
import generatePDF from "../../../utils/generatePDF";
import { useClient } from "../../../context/ClientContext";
import { useUser } from "../../../context/UserContext";
import { pdf } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import {
  addNewBillingTx,
  updateBillingTx,
  updateDocument,
} from "../../documents/services/api";
import { parseBillingTx } from "../../services/utils/parseData";
import parseDocument from "../../../utils/parseDocument";
import parseDefaultDocument from "../../../utils/parseDefaultDocument";

export function CVDocuments() {
  const [activeDocument, setActiveDocument] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [edit, setEdit] = useState(false);
  const { activeClient, formData, sendPDFtoAPI, getActiveServices } =
    useClient();
  const { user } = useUser();
  const { handleSubmit, reset, register, control, setValue } = useForm();

  useEffect(() => {
    setEdit(false);
  }, [activeDocument]);

  const onSubmit = async (data) => {
    // setShowPinInput(true);
    const updatedDocument = parseDocument(data, activeClient);
    if (!updatedDocument[0].billingid || updatedDocument[0].billingid === 0) {
      let newBillingTx = parseBillingTx(activeClient, 1, user.userid);
      await addNewBillingTx().then(async (tx) => {
        if (tx && tx.billingid) {
          tx.lastuserid = newBillingTx[0].lastuserid;
          tx.patientid = newBillingTx[0].patientid;
          tx.doctypeid = newBillingTx[0].doctypeid;
          tx.lastupdate = newBillingTx[0].lastupdate;
          const updatedBillingTx = await updateBillingTx(tx);
          updatedDocument[0].billingid = tx.billingid;
        }
      });
    }

    // console.log("updated treatment plan", updatedTPlan);
    // updateClientTreatmentPlan(updatedTPlan, user.UserId, user.PinValue);
    const response = await updateDocument(updatedDocument);
    // updateClientTreatmentPlan(updatedTPlan);
    // }
    setEdit(false);
  };

  const handlePrint = async (e) => {
    const activeServices = getActiveServices();
    const pdfBlob = await pdf(
      generatePDF(formData, activeDocument, activeClient, activeServices)
    ).toBlob();
    await sendPDFtoAPI(activeDocument.recid, pdfBlob, user).then((data) => {
      const url = data[0].viewer + data[0].path + data[0].file;
      window.open(url, "_blank");
    });
  };
  const resetDocument = (document) => {
    reset(parseDefaultDocument(document));
  };
  useEffect(() => {
    const singlePageDocTypes = [10];
    if (singlePageDocTypes.includes(activeDocument.docid)) {
      setActivePage(false);
    }
  }, [activeDocument]);
  
  return (
    <>
      <Row className="mb-3">
        <Col md={3} className="pe-0">
          <DocList
            activeDocument={activeDocument}
            setActiveDocument={setActiveDocument}
            resetDocument={resetDocument}
          />
        </Col>
        <Col md={9}>
          <Card style={{ height: "40rem" }}>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ height: "84%" }}>
              <ViewerHeader
                handlePrint={handlePrint}
                edit={edit}
                setEdit={setEdit}
                activeDocument={activeDocument}
                onSubmit={handleSubmit(onSubmit)}
              />
              <Card.Body className="overflow-auto h-100">
                {activeDocument ? (
                  <DocViewer
                    data={activeDocument}
                    activePage={activePage}
                    edit={edit}
                    register={register}
                    control={control}
                    setValue={setValue}
                  />
                ) : null}
              </Card.Body>
              {activeDocument ? (
                <ViewerFooter
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              ) : null}
            </Form>
          </Card>
        </Col>
        {/* <PNManager
          show={show}
          setShow={setShow}
          containerName="B.I.R.P. Progress Note Form"
          data={activeDocument}
          edit
        /> */}
      </Row>
    </>
  );
}
