import { Button, Row, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./PN_Manager.css";
import AlertContainer from "./AlertContainer";
import CE1 from "./CE_1";
import CE2 from "./CE_2";
import CE3 from "./CE_3";
import { useForm } from "react-hook-form";
import { useClient } from "../data/ClientContext";

function ClientEnrollmentManager({ show, setShow, containerName, edit }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const [tempID, setTempID] = useState();
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { dirtyFields },
  } = useForm({});
  const {
    activeClient,
    activeContacts,
    addClient,
    updateClient,
    addContact,
    updateContact,
  } = useClient();

  const formatDate = (newDate) => {
    return new Date(newDate).toISOString().slice(0, 10).replace("T", " ");
  };

  const handleClose = () => {
    setActivePage(0);
    setShow(false);
  };
  const nextPage = () => {
    setActivePage((page) => page + 1);
  };
  const prevPage = () => {
    setActivePage((page) => page - 1);
  };
  const renderPage = () => {
    switch (activePage) {
      case 0:
        return <CE1 register={register} control={control} />;
      case 1:
        return (
          <CE2 register={register} control={control} setValue={setValue} />
        );
      case 2:
        return <CE3 register={register} control={control} />;
      default:
        return <CE1 register={register} control={control} />;
    }
  };
  const onSubmit = async (data) => {
    console.log(data);
    const t20 = [
      {
        patientid: edit ? activeClient[20].patientid : tempID ? tempID : 0,
        pfirstname: data.pfirstname,
        pinitial: data.pinitial,
        plastname: data.plastname,
        preferredname: data.preferredname,
        maritalstatusid: data.maritalstatusid,
        dob: formatDate(data.dob),
        socsec: data.socsec,
        sexatbirthid: data.sexatbirthid,
        genderid: data.genderid,
        preferredpronounid: data.preferredpronounid,
        ethnicityid: data.ethnicityid,
        religionid: data.religionid,
        email: data.email,
        statusid: data.statusid,
      },
    ];
    const t21 = [
      {
        patientid:
          edit && activeClient.length > 0
            ? activeClient[20].patientid
            : tempID
            ? tempID
            : 0,
        employer: data.employer,
        employerphone: data.employerphone,
        weight: data.weight,
        allergies: data.allergies,
        physicianid: data.physicianid,
        pharmacyproviderid: data.pharmacyproviderid,
        ins1_fundingsource: data.ins1_fundingsource,
        ins1_policynumber: data.ins1_policynumber,
        ins1_dateexpires: formatDate(data.ins1_dateexpires),
        ins1_relationshipid: data.ins1_relationshipid,
        ins1_cardavailableid: data.ins1_cardavailableid,
        ins2_fundingsource: data.ins2_fundingsource,
        ins2_policynumber: data.ins2_policynumber,
        ins2_dateexpires: formatDate(data.ins2_dateexpires),
        ins2_relationshipid: data.ins2_relationshipid,
        ins2_cardavailableid: data.ins2_cardavailableid,
      },
    ];
    const t22 = [
      {
        patientid:
          edit && activeClient.length > 0
            ? activeClient[20].patientid
            : tempID
            ? tempID
            : 0,
        referralid: data.referralid,
        referraldate: formatDate(data.referraldate),
        referralOutsourceid: 0,
        dateoutsourced: formatDate(data.dateoutsourced),
        internalreferralid: data.internalreferralid,
        patient_comment: data.patient_comment,
        dxcodes: data.dxcodes,
        dxdate: formatDate(data.dxdate),
        firstapptdate: formatDate(data.firstapptdate),
        firstpsydate: formatDate(data.firstpsydate),
      },
    ];
    const patientContact = [
      {
        contactid:
          edit && activeContacts.patient[0].contactid
            ? activeContacts.patient[0].contactid
            : 0,
        name: data.pfirstname + " " + data.plastname,
        address1: data.paddress,
        address2: "",
        city: data.pcity,
        state: data.pstate,
        zip: data.pZip,
        // udfid1: 0,
        // udfid2: 0,
        contacttypeid: 21,
        patientid: parseInt(data.patientid),
        relationshipid: 0,
        phone1: data.pphone1,
        phone1typeid: parseInt(data.pphone1type),
        phone2: data.pphone2,
        phone2typeid: parseInt(data.pphone2type),
        phone3: data.pphone3,
        phone3typeid: parseInt(data.pphone3type),
        countyid: 0,
        isactive: 1,
      },
    ];
    const emergencyContact = [
      {
        contactid:
          edit && activeContacts.emergency[0].contactid
            ? activeContacts.emergency[0].contactid
            : 0,
        name: data.ecName,
        address1: data.ecAddress,
        address2: "",
        city: data.ecCity,
        state: data.ecState,
        zip: data.ecZip,
        // udfid1: 0,
        // udfid2: 0,
        contacttypeid: 22,
        patientid: parseInt(data.patientid),
        relationshipid: parseInt(data.ecRelationship),
        phone1: data.ecPhone,
        phone1typeid: parseInt(data.ecPhoneType),
        phone2: "",
        phone2typeid: 0,
        phone3: "",
        phone3typeid: 0,
        countyid: 0,
        isactive: 1,
      },
    ];

    if (activePage === 0) {
      if (edit || tempID) {
        updateClient(t20, 20);
        updateContact(patientContact, activeContacts.patient[0].contactid);
        updateContact(emergencyContact, activeContacts.emergency[0].contactid);
        nextPage();
      } else {
        console.log(emergencyContact, patientContact);
        const newPatientId = await addClient(t20);
        patientContact[0].patientid = newPatientId;
        emergencyContact[0].patientid = newPatientId;
        console.log(newPatientId);
        addContact(patientContact, 20);
        addContact(emergencyContact, 20);
        setTempID(newPatientId);
        nextPage();
      }
    }
    if (activePage === 1) {
      updateClient(t21, 21);
      nextPage();
    }
    if (activePage === 2) {
      updateClient(t22, 22);
      handleClose();
      //trigger popup
      reset();
    }
  };

  const handleConfirm = (data) => {
    console.log(data);
    const newClient = {
      pfirstname: data.pfirstname,
      pinitial: data.pinitial,
      plastname: data.plastname,
      maritalstatusid: data.maritalstatusid,
      dob: formatDate(data.dob),
      socsec: data.socsec,
      genderid: data.genderid,
      phone1: data.phone1,
      phone2: data.phone2,
      phone3: data.phone3,
      email: data.email,
      enrolldate: formatDate(data.enrolldate),
      religionid: data.religionid,
      ethnicityid: data.ethnicityid,
      sexatbirthid: data.sexatbirthid,
      statusid: data.statusid,
      outcomeid: data.outcomeid,
      preferredname: data.preferredname,
      preferredpronounid: data.preferredpronounid,
      referralid: data.referralid,
      internalreferralid: data.internalreferralid,
      dxcodes: data.dxcodes,
      referraldate: formatDate(data.referraldate),
      dateoutsourced: formatDate(data.dateoutsourced),
      firstapptdate: formatDate(data.firstapptdate),
      firstpsydate: formatDate(data.firstpsydate),
      dxdate: formatDate(data.dxdate),
      employer: data.employer,
      employerphone: data.employerphone,
      clientaddressid: data.clientaddressid,
      emergencycontactid: data.emergencycontactid,
      emergencyrelationshipid: data.emergencyrelationshipid,
      allergies: data.allergies,
      physicianid: data.physicianid,
      ins1_cardavailableid: data.ins1_cardavailableid,
      ins1_dateexpires: formatDate(data.ins1_dateexpires),
      ins1_carrierid: data.ins1_carrierid,
      ins1_planid: data.ins1_planid,
      ins1_phone: data.ins1_phone,
      ins1_policynumber: data.ins1_policynumber,
      ins1_relationshipid: data.ins1_relationshipid,
      ins1_fundingsource: data.ins1_fundingsource,
      ins2_cardavailableid: data.ins2_cardavailableid,
      ins2_dateexpires: formatDate(data.ins2_dateexpires),
      ins2_carrierid: data.ins2_carrierid,
      ins2_planid: data.ins2_planid,
      ins2_phone: data.ins2_phone,
      ins2_policynumber: data.ins2_policynumber,
      ins2_relationshipid: data.ins2_relationshipid,
      ins2_fundingsource: data.ins2_fundingsource,
      height: data.height,
      weight: data.weight,
      pharmacy: data.pharmacy,
      pharmacyproviderid: data.pharmacyproviderid,
      photolink: data.photolink,
      patient_comment: data.patient_comment,
    };
    handleClose();
    reset();
  };

  const handleCancel = (data) => {};
  useEffect(() => {
    return function cleanup() {
      console.log("cleanup!");
      setTempID();
    };
  }, []);

  useEffect(() => {
    console.log("ACTIVE CLIENT CHANGE", activeClient);
    if (Object.keys(activeClient).length !== 0) {
      let defaultValues = {
        patientid: edit ? activeClient[20].patientid : 0,
        pfirstname: edit ? activeClient[20].pfirstname : "",
        plastname: edit ? activeClient[20].plastname : "",
        pinitial: edit ? activeClient[20].pinitial : "",
        preferredname: edit ? activeClient[20].preferredname : "",
        dob: edit ? Date.parse(activeClient[20].dob) : Date.now(),
        maritalstatusid: edit ? parseInt(activeClient[20].maritalstatusid) : 0,
        socsec: edit ? activeClient[20].socsec : "",
        ethnicityid: edit ? activeClient[20].ethnicityid : 0,
        sexatbirthid: edit ? activeClient[20].sexatbirthid : 0,
        genderid: edit ? activeClient[20].genderid : 0,
        preferredpronounid: edit ? activeClient[20].preferredpronounid : 0,
        religionid: edit ? activeClient[20].religionid : 0,
        weight: edit ? activeClient[21].weight : "",
        height: edit ? activeClient[21].height : "",
        email: edit ? activeClient[20].email : "",
        employer: edit ? activeClient[21].employer : "",
        employerphone: edit ? activeClient[21].employerphone : "",
        ins1_cardavailableid: edit // ? activeClient[21].ins1_cardavailableid
          ? 1
          : 0,
        ins1_dateexpires: edit
          ? Date.parse(activeClient[21].ins1_dateexpires)
          : Date.now(),
        ins1_policynumber: edit ? activeClient[21].ins1_policynumber : "",
        ins1_relationshipid: edit ? activeClient[21].ins1_relationshipid : 0,
        ins1_fundingsource: edit ? activeClient[21].ins1_fundingsource : "",
        ins2_cardavailableid: edit // ? activeClient[21].ins2_cardavailableid
          ? 1
          : 0,
        ins2_dateexpires: edit
          ? Date.parse(activeClient[21].ins2_dateexpires)
          : Date.now(),
        ins2_policynumber: edit ? activeClient[21].ins2_policynumber : "",
        ins2_relationshipid: edit ? activeClient[21].ins2_relationshipid : 0,
        ins2_fundingsource: edit ? activeClient[21].ins2_fundingsource : "",
        allergies: edit ? activeClient[21].allergies : "",
        physicianid: edit ? activeClient[21].physicianid : 0,
        pharmacy: edit ? activeClient[21].pharmacy : "",
        pharmacyproviderid: edit ? activeClient[21].pharmacyproviderid : 0,
        patient_comment: edit ? activeClient[22].patient_comment : "",
        referralid: edit ? activeClient[22].referralid : 0,
        referraldate: edit
          ? Date.parse(activeClient[22].referraldate)
          : Date.now(),
        dxdate: edit ? Date.parse(activeClient[22].dxdate) : Date.now(),
        internalreferralid: edit ? activeClient[22].internalreferralid : 0,
        statusid: edit ? activeClient[20].statusid : 0,
        outcomeid: edit ? activeClient[22].outcomeid : 0,
        dxcodes: edit ? activeClient[22].dxcodes : "",
        dateoutsourced: edit
          ? Date.parse(activeClient[22].dateoutsourced)
          : Date.now(),
        firstapptdate: edit
          ? Date.parse(activeClient[22].firstapptdate)
          : Date.now(),
        firstpsydate: edit
          ? Date.parse(activeClient[22].firstpsydate)
          : Date.now(),
      };
      if (activeContacts.patient && activeContacts.patient.length > 0) {
        console.log(activeContacts.patient);
        const patientContact = {
          paddress: edit ? activeContacts.patient[0].address1 : "",
          pcity: edit ? activeContacts.patient[0].city : "",
          pstate: edit ? activeContacts.patient[0].state : "",
          pZip: edit ? activeContacts.patient[0].zip : "",
          pphone1: edit ? parseInt(activeContacts.patient[0].Phone1) : "",
          pphone1type: edit ? activeContacts.patient[0].Phone1TypeID : 0,
          pphone2: edit ? activeContacts.patient[0].Phone2 : "",
          pphone2type: edit ? activeContacts.patient[0].Phone2TypeID : 0,
          pphone3: edit ? activeContacts.patient[0].Phone3 : "",
          pphone3type: edit ? activeContacts.patient[0].Phone3TypeID : 0,
        };
        defaultValues = { ...defaultValues, ...patientContact };
      }
      if (activeContacts.emergency && activeContacts.emergency.length > 0) {
        console.log(activeContacts.emergency);
        const emergencyContact = {
          ecName: edit ? activeContacts.emergency[0].name : "",
          ecAddress: edit ? activeContacts.emergency[0].address1 : "",
          ecCity: edit ? activeContacts.emergency[0].city : "",
          ecState: edit ? activeContacts.emergency[0].state : "",
          ecZip: edit ? activeContacts.emergency[0].zip : "",
          ecPhone: edit ? parseInt(activeContacts.emergency[0].Phone1) : "",
          ecPhoneType: edit ? activeContacts.emergency[0].Phone1TypeID : "",
          ecRelationship: edit
            ? activeContacts.emergency[0].RelationshipID
            : "",
        };
        defaultValues = { ...defaultValues, ...emergencyContact };
      }
      reset({ ...defaultValues });
    }
    // eslint-disable-next-line
  }, [activeClient, activeContacts]);

  return (
    <Modal show={show} dialogClassName="PNM-width" onHide={handleClose}>
      <Modal.Header className="PNM-header" closeButton>
        <Modal.Title>{containerName}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Row className="d-flex justify-content-evenly align-items-center">
            {renderPage()}
          </Row>
        </Modal.Body>
        <Modal.Footer className="flex-row justify-content-between p-2">
          <Button
            className="PNM-nav-button p-1"
            variant="outline-primary"
            disabled={activePage === 0 ? true : false}
            onClick={activePage === 0 ? () => {} : prevPage}
          >
            Previous
          </Button>
          <Button
            className="PNM-nav-button p-1"
            variant={activePage >= 2 ? "outline-success" : "outline-primary"}
            type="submit"
            // onClick={activePage >= 2 ? () => console.log("Add New Client") : nextPage}
          >
            {activePage >= 2
              ? edit
                ? "Subit & Exit"
                : "Save and Continue"
              : "Next"}
          </Button>
        </Modal.Footer>
      </Form>
      <AlertContainer
        show={alert.message && alert.data}
        alert={alert}
        setAlert={setAlert}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    </Modal>
  );
}

export default ClientEnrollmentManager;
