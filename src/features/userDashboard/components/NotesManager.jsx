import { useEffect, useState } from "react";
import { Row, Col, Card, ListGroup, Badge, Button } from "react-bootstrap";
import { ViewerFooter } from "../../../components/ViewerFooter";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { PNList, PNManager, PNViewNote } from "../../progressNotes";
import { useUser } from "../../../context/UserContext";
import { useClient } from "../../../context/ClientContext";
import { pdf } from "@react-pdf/renderer";
import generatePDF from "../../../utils/generatePDF";
import { getListItemName } from "../../services/utils/formHelper";
import { NotesFilterList } from "./NotesFilterList";
import { getClient } from "../../enrollment/services/api";
import { getListItem } from "../../../services/api";
import { getFormValue } from "../../clientDetails/utils/formatData";
import {
  CalendarEvent,
  ExclamationDiamond,
  JournalCheck,
  Lock,
  PersonBadge,
  Stopwatch,
  FileLock,
} from "react-bootstrap-icons";
import formatDate from "../../../utils/formatDate";
import { getBillingTx } from "../../documents/services/api";
import { useForm } from "react-hook-form";
import ModalContainer from "../../../components/ModalContainer";

export function NotesManager() {
  const { user } = useUser();
  const { control, register, watch, reset } = useForm({
    defaultValues: {
      staff: "",
      fundingSource: "",
    },
  });
  const { activeClient, formData, sendPDFtoAPI, getActiveServices, allNotes } =
    useClient();
  const [filteredNotes, setFilteredNotes] = useState(allNotes);
  const [activeNote, setActiveNote] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [edit, setEdit] = useState(false);
  const [clientInfo, setClientInfo] = useState({});
  const [billingInfo, setBillingInfo] = useState({});

  useEffect(() => {
    const fetchClientInfo = async () => {
      const clients = {};
      const promises = filteredNotes.map(async (note) => {
        if (note.patientid) {
          clients[note.patientid] = await getClientInfo(note.patientid);
        }
      });
      await Promise.all(promises);
      setClientInfo(clients);
    };
    const fetchBillingInfo = async () => {
      const billingTxs = {};
      const promises = filteredNotes.map(async (note) => {
        if (note.billingid) {
          billingTxs[note.billingid] = await getBillingTx(note.billingid);
        }
      });
      await Promise.all(promises);
      setBillingInfo(billingTxs);
    };
    fetchClientInfo();
    fetchBillingInfo();
  }, [filteredNotes]); // Depend on filteredNotes so it updates when notes change

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
  
  const getClientInfo = async (patientid) => {
    const clientInfo = await getClient(patientid);
    return clientInfo;
  };

  const getListItemName = async (grouplistid) => {
    const item = await getListItem(grouplistid);
    return item || null;
  };
  
  const renderNoteStatus = (noteStatus) => {
    switch (noteStatus) {
      case "draft":
        return (
          <Badge bg="warning" text="dark">
            <JournalCheck className="me-1" />
            Draft
          </Badge>
        );
      case "pending":
        return (
          <Badge bg="info" text="dark">
            <Stopwatch className="me-1" />
            Pending
          </Badge>
        );
      case "approved":
        return (
          <Badge bg="success">
            <JournalCheck className="me-1" />
            Approved
          </Badge>
        );
      case "rejected":
        return (
          <Badge bg="danger">
            <ExclamationDiamond className="me-1" />
            Rejected
          </Badge>
        );
      case "locked":
        return (
          <Badge bg="secondary">
            <Lock className="me-1" />
            Locked
          </Badge>
        );
      default:
        return (
          <Badge bg="light" text="dark">
            Unknown
          </Badge>
        );
    }
  };

  const renderNoteActions = (note) => {
    const content = note.status === "draft" ? "Edit Note" : "View Note";
    return (
      <Button
        variant={note.status === "draft" ? "primary" : "outline-secondary"}
        size="sm"
        onClick={() => {
          setActiveNote(note);
          if (note.status === "draft") {
            setEdit(true);
          }
        }}
      >
        {content}
      </Button>
    );
  };

  return (
    <Card.Body>
      <Row className="mb-3">
        <Col md={3}>
          <NotesFilterList
            filteredNotes={filteredNotes}
            setFilteredNotes={setFilteredNotes}
            control={control}
            register={register}
            watch={watch}
            reset={reset}
            clientInfo={clientInfo}
          />
        </Col>
        <Col md={9}>
          <Card className="h-100">
            <ViewerHeader
              edit={edit}
              setEdit={setEdit}
              activeDocument={activeNote}
              handlePrint={handlePrint}
              title="Notes Manager"
            />
            <Card.Body className="overflow-auto" style={{ height: "28rem" }}>
              <ListGroup variant="flush">
                {filteredNotes &&
                  filteredNotes.map((note, index) => {
                    const client = clientInfo[note.patientid];
                    const billing = billingInfo[note.billingid];
                    
                    return (
                      <ListGroup.Item
                        key={note.recid || index}
                        className="d-flex justify-content-between align-items-start"
                        action
                        onClick={() => setActiveNote(note)}
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            {client ? `${client.pfirstname} ${client.plastname}` : `Patient ${note.patientid}`}
                          </div>
                          <div className="d-flex align-items-center gap-2 mt-1">
                            <small className="text-muted">
                              <CalendarEvent className="me-1" />
                              {note.f1 ? formatDate("MM/DD/YYYY", note.f1) : "No date"}
                            </small>
                            {note.f2 && note.f3 && (
                              <small className="text-muted">
                                {note.f2} - {note.f3}
                              </small>
                            )}
                            {note.f5 && (
                              <small className="text-muted">
                                Units: {note.f5}
                              </small>
                            )}
                          </div>
                          {note.f13 && (
                            <small className="text-muted">
                              Goal: {note.f13}
                            </small>
                          )}
                        </div>
                        <div className="d-flex flex-column align-items-end gap-2">
                          {renderNoteStatus(note.status || "draft")}
                          {renderNoteActions(note)}
                        </div>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <ModalContainer
          show={activeNote}
          setShow={setActiveNote}
          containerName="Note Viewer"
          component={<PNViewNote data={activeNote} />}
        />
        <PNManager
          show={edit}
          setShow={setEdit}
          containerName="B.I.R.P. Progress Note Form"
          data={activeNote}
          edit={true}
        />
      </Row>
    </Card.Body>
  );
}
