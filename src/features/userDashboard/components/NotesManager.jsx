import { useEffect, useState } from "react";
import { Row, Col, Card, ListGroup, Badge, Button } from "react-bootstrap";
import { ViewerFooter } from "../../../components/ViewerFooter";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { PNList, PNManager, PNViewNote, PNPdf } from "../../progressNotes";
import { useUser } from "../../../context/UserContext";
import { useClient } from "../../../context/ClientContext";
import { pdf } from "@react-pdf/renderer";
import generatePDF from "../../../utils/generatePDF";
import { getListItemName } from "../../services/utils/formHelper";
import { NotesFilterList } from "./NotesFilterList";
import { NotesManagerHeader } from "./NotesManagerHeader";
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
    await getListItem(grouplistid).then((item) => {
      if (item) return item;
      else return null;
    });
  };
  const renderNoteStatus = (noteStatus) => {
    let content;
    let variant;

    switch (noteStatus) {
      case "To be Reviewed":
        content = (
          <>
            <JournalCheck className="me-1"/>
            To be Reviewed
          </>
        );
        variant = "dark";
        break;

      case "Lock":
        content = (
          <>
            <Lock className="me-1"/>
            Lock
          </>
        );
        variant = "primary";
        break;

      case "Lock/Sign":
        content = (
          <>
            <FileLock className="me-1"/>
            Lock/Sign
          </>
        );
        variant = "warning";
        break;

      case "Error Correction Needed":
        content = (
          <>
            <ExclamationDiamond className="me-1"/>
            Error Correction Needed
          </>
        );
        variant = "danger";
        break;

      default:
        content = null;
        variant = null; // Or some default content
    }

    return (
      content &&
      variant && (
        <Button size="sm" disabled variant={`outline-${variant}`} className="">
          {content}
        </Button>
      )
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
                    const client = clientInfo[note.patientid] || {};
                    const billingTx = billingInfo[note.billingid] || {};
                    console.log(billingTx);
                    return (
                      <ListGroup.Item className="border rounded d-flex flex-column mb-2">
                        <Row>
                          <Col md={6}>
                            <Col>
                              <CalendarEvent
                                className="text-secondary pe-1"
                                size={20}
                              />
                              <small className="text-secondary pe-3">
                                {formatDate("MMM DD YYYY", note.f1)}
                              </small>
                              <Stopwatch
                                className="text-secondary pe-1"
                                size={20}
                              />
                              <small className="text-secondary pe-3">{`${note.f2} - ${note.f3}`}</small>
                              <Badge bg="dark">{`${note.f5} units`}</Badge>
                            </Col>
                            <Col>
                              <div className="fs-6">
                                {`${client.plastname}, ${client.pfirstname}`}
                                <Badge bg="light" className="ms-1 text-primary">
                                  {getFormValue(
                                    "Funding Source ",
                                    client.ins1_fundingsource,
                                    formData
                                  )}{" "}
                                  - {`${client.ins1_policynumber}`}
                                </Badge>
                              </div>
                            </Col>
                            <Col>
                              <Badge bg="secondary" className="me-1">
                                {getFormValue("Setting", note.f6, formData)}
                              </Badge>
                              <Badge bg="primary" className="me-1">
                                {billingTx.billingid}
                              </Badge>
                              <PersonBadge className="text-primary" size={20} />
                              <Button variant="link">
                                {note.f16 || "Staff Member"}
                              </Button>
                            </Col>
                          </Col>
                          <Col
                            md={3}
                            className="d-flex align-items-center justify-content-center"
                          >
                            {renderNoteStatus(note.f17)}
                          </Col>
                          <Col
                            md={3}
                            className="d-flex flex-column align-items-end justify-content-center"
                          >
                            <Button
                              className="w-75"
                              size="sm"
                              onClick={() => setActiveNote(note)}
                            >
                              View Note
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </Card.Body>
            {activeNote ? (
              <ViewerFooter
                activePage={activePage}
                setActivePage={setActivePage}
              />
            ) : null}
          </Card>
        </Col>
        <ModalContainer
          show={activeNote}
          setShow={setActiveNote}
          containerName="Goals Manager"
          component={<PNViewNote data={activeNote} />}
        />
        {/* <PNManager
          show={edit}
          setShow={setEdit}
          containerName="B.I.R.P. Progress Note Form"
          data={activeNote}
          edit
        /> */}
      </Row>
    </Card.Body>
  );
}
