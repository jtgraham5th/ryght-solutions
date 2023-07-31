import { useState, useEffect } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { DocList, DocNew, DocViewer } from "../../documents";
import { ViewerFooter } from "../../../components/ViewerFooter";
import generatePDF from "../../../utils/generatePDF";
import { useClient } from "../../../context/ClientContext";
import { useUser } from "../../../context/UserContext";
import { pdf } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import {
  addNewBillingTx,
  addNewDocument,
  updateBillingTx,
  updateDocument,
} from "../../documents/services/api";
import { parseBillingTx } from "../../services/utils/parseData";
import parseDocument from "../../../utils/parseDocument";
import parseDefaultDocument from "../../../utils/parseDefaultDocument";
import { documents } from "../../documents/data/documents";

export function CVDocuments() {
  const [activeDocument, setActiveDocument] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [edit, setEdit] = useState(false);
  const [screenValue, setScreenValue] = useState(1);
  const [batchBilling, setBatchBilling] = useState([]);

  const {
    activeClient,
    activeDocuments,
    formData,
    sendPDFtoAPI,
    getActiveServices,
    getClientDocuments,
  } = useClient();
  const { user } = useUser();
  const { handleSubmit, reset, register, control, setValue, formState } =
    useForm();
  const maxPages = (
    documents.find((doc) => doc.doctypeid === activeDocument.docid) || {
      pages: 0,
    }
  ).pages;

  useEffect(() => {
    setEdit(false);
  }, [activeDocument]);

  const onSubmit = async (data, e) => {
    const submitter = e.nativeEvent.submitter ? e.nativeEvent.submitter.id : e.target.id;
    const updatedDocument = parseDocument(data, activeClient, activePage);
    const blankDoc = parseDefaultDocument({
      docid: updatedDocument[0].docid,
      pageid: submitter === "footer-next" ? activePage + 1 : activePage - 1,
      billingid: updatedDocument[0].billingid,
    });

    // Create new billingid if there isnt one
    if (!updatedDocument[0].billingid || updatedDocument[0].billingid === 0) {
      let newBillingTx = parseBillingTx(activeClient, 1, user.userid);
      const tx = await addNewBillingTx();
      if (tx && tx.billingid) {
        tx.lastuserid = newBillingTx[0].lastuserid;
        tx.patientid = newBillingTx[0].patientid;
        tx.doctypeid = newBillingTx[0].doctypeid;
        tx.lastupdate = newBillingTx[0].lastupdate;
        await updateBillingTx(tx);
        updatedDocument[0].billingid = tx.billingid;
      }
    }

    // Save Current Document
    const response = await updateDocument(updatedDocument);
    await getClientDocuments();

    // If the next or previous page number is present in activeDocuments
    // then make it the next active document
    if (
      activeDocuments.some(
        (doc) =>
          doc.pageid ===
            (submitter === "footer-next" ? activePage + 1 : activePage - 1) &&
          doc.docid === activeDocument.docid &&
          doc.billingid === activeDocument.billingid
      )
    ) {
      const nextDoc = activeDocuments.filter(
        (doc) =>
          doc.billingid === updatedDocument[0].billingid &&
          doc.docid === updatedDocument[0].docid &&
          doc.pageid ===
            (submitter === "footer-next" ? activePage + 1 : activePage - 1)
      );
      reset(
        nextDoc[0]
          ? parseDefaultDocument(nextDoc[0])
          : parseDefaultDocument(blankDoc)
      );
      setActiveDocument(parseDefaultDocument(nextDoc[0]));
    } else {
      blankDoc.pageid = activePage;
      await addNewDocument().then(async (newdoc) => {
        const blankDocument = {
          recid: newdoc.recid,
          docid: updatedDocument[0].docid,
          billingid: updatedDocument[0].billingid,
        };
        const res = await updateDocument(
          parseDocument(blankDocument, activeClient, activePage + 1)
        );
        await getClientDocuments();
        reset(res[0]);
        setActiveDocument(res[0]);
      });
    }
    // Go to the next or previous page
    if (submitter === "footer-next") {
      nextPage();
    } else {
      prevPage();
    }
    setEdit(false);
  };

  const nextPage = () => {
    if (activePage < maxPages) {
      setActivePage((page) => page + 1);
    }
  };
  const prevPage = () => {
    if (activePage >= 2) setActivePage((page) => page - 1);
  };

  const handlePrint = async (pinNumber) => {
    let pin;
    if (typeof pinNumber === 'string' || typeof pinNumber === 'number') {
      pin = pinNumber
    } else {
      pin = false
    }
    const activeServices = getActiveServices();
    const pdfBlob = await pdf(
      generatePDF(formData, activeDocument, activeClient, activeServices)
    ).toBlob();
    await sendPDFtoAPI(activeDocument.recid, pdfBlob, user, pin).then(
      (data) => {
        const url = data[0].viewer + data[0].path + data[0].file;
        window.open(url, "_blank");
      }
    );
  };
  const resetDocument = (document) => {
    setActivePage(1);
    reset(parseDefaultDocument(document));
  };
  useEffect(() => {
    //List of docids that are single pages
    const singlePageDocTypes = [10];
    if (singlePageDocTypes.includes(activeDocument.docid)) setActivePage(false);
  }, [activeDocument]);

  const submitBilling = () => {
    console.log(batchBilling);
  };

  return (
    <>
      <Row className="mb-3">
        <Col md={3} className="pe-0">
          <DocList
            activeDocument={activeDocument}
            setActiveDocument={setActiveDocument}
            resetDocument={resetDocument}
            screenValue={screenValue}
            setScreenValue={setScreenValue}
            batchBilling={batchBilling}
            setBatchBilling={setBatchBilling}
          />
        </Col>
        <Col md={9}>
          <Card style={{ height: "40rem" }}>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ height: "84%" }} autoComplete="off">
              <ViewerHeader
                handlePrint={handlePrint}
                edit={edit}
                setEdit={setEdit}
                activeDocument={activeDocument}
                onSubmit={handleSubmit(onSubmit)}
                title={
                  (
                    documents.find(
                      (doc) => doc.doctypeid === activeDocument.docid
                    ) || {
                      name: null,
                    }
                  ).name
                }
                billing={screenValue === 2 ? true : false}
                submitBilling={submitBilling}
              />
              {activeDocument ? (
                <>
                  <Card.Body className="overflow-auto h-100">
                    <DocViewer
                      data={activeDocument}
                      activePage={activePage}
                      edit={edit}
                      register={register}
                      control={control}
                      setValue={setValue}
                      screenValue={screenValue}
                      formState={formState}
                    />
                  </Card.Body>
                  <ViewerFooter
                    activePage={activePage}
                    setActivePage={setActivePage}
                    activeDocument={activeDocument}
                    onSubmit={handleSubmit((e) => onSubmit(e))}
                  />
                </>
              ) : null}
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
