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
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { dirtyFields },
  } = useForm({});
  const [clientData, setClientData] = useState({});
  const {
    activeClient,
    addClient,
    updateClient,
    addContact,
    updateContact,
    getContact,
  } = useClient();

  const [contactData, setContactData] = useState({
    patient: {},
    emergency: {},
    physician: {},
    pharmacy: {},
  });
  const formatDate = (newDate) => {
    return new Date(newDate).toISOString().slice(0, 10).replace("T", " ");
  };

  const defaultValues = {
    patientid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.patientid
        : 0,
    pfirstname:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pfirstname
        : "",
    plastname:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.plastname
        : "",
    pinitial:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pinitial
        : "",
    preferredname:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.preferredname
        : "",
    dob:
      edit && Object.keys(activeClient).length !== 0
        ? Date.parse(activeClient.dob)
        : Date.now(),
    maritalstatusid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.maritalstatusid
        : 0,
    socsec:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.socsec : "",
    ethnicityid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ethnicityid
        : 0,
    sexatbirthid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.sexatbirthid
        : 0,
    genderid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.genderid
        : 0,
    preferredpronounid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.preferredpronounid
        : 0,
    religionid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.religionid
        : 0,
    weight:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.weight : "",
    height:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.height : "",
    phone1:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.phone1 : "",
    phone2:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.phone2 : "",
    phone3:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.phone3 : "",
    email:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.email : "",
    enrolldate:
      edit && Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    employer:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.employer
        : "",
    employerphone:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.employerphone
        : "",
    clientaddressid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.clientaddressid
        : 0,
    ins1_cardavailableid:
      edit && Object.keys(activeClient).length !== 0
        ? // ? activeClient.ins1_cardavailableid
          1
        : 0,
    ins1_dateexpires:
      edit && Object.keys(activeClient).length !== 0
        ? Date.parse(activeClient.ins1_dateexpires)
        : Date.now(),
    ins1_carrierid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins1_carrierid
        : 0,
    ins1_planid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins1_planid
        : 0,
    ins1_phone:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins1_phone
        : "",
    ins1_policynumber:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins1_policynumber
        : "",
    ins1_relationshipid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins1_relationshipid
        : 0,
    ins1_fundingsource:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins1_fundingsource
        : "",
    ins2_cardavailableid:
      edit && Object.keys(activeClient).length !== 0
        ? // ? activeClient.ins2_cardavailableid
          1
        : 0,
    ins2_dateexpires:
      edit && Object.keys(activeClient).length !== 0
        ? Date.parse(activeClient.ins2_dateexpires)
        : Date.now(),
    ins2_carrierid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins2_carrierid
        : 0,
    ins2_planid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins2_planid
        : 0,
    ins2_phone:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins2_phone
        : "",
    ins2_policynumber:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins2_policynumber
        : "",
    ins2_relationshipid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins2_relationshipid
        : 0,
    ins2_fundingsource:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ins2_fundingsource
        : "",
    allergies:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.allergies
        : "",
    physicianid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.physicianid
        : 0,
    pharmacy:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pharmacy
        : "",
    pharmacyproviderid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pharmacyproviderid
        : 0,
    emergencycontactid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.emergencycontactid
        : 0,
    emergencyrelationshipid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.emergencyrelationshipid
        : 0,
    patient_comment:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.patient_comment
        : "",
    referralid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.referralid
        : 0,
    referraldate:
      edit && Object.keys(activeClient).length !== 0
        ? Date.parse(activeClient.referraldate)
        : Date.now(),
    dxdate:
      edit && Object.keys(activeClient).length !== 0
        ? Date.parse(activeClient.dxdate)
        : Date.now(),
    internalreferralid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.internalreferralid
        : 0,
    statusid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.statusid
        : 0,
    outcomeid:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.outcomeid
        : 0,
    dxcodes:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.dxcodes
        : "",
    dateoutsourced:
      edit && Object.keys(activeClient).length !== 0
        ? Date.parse(activeClient.dateoutsourced)
        : Date.now(),
    firstapptdate:
      edit && Object.keys(activeClient).length !== 0
        ? Date.parse(activeClient.firstapptdate)
        : Date.now(),
    firstpsydate:
      edit && Object.keys(activeClient).length !== 0
        ? Date.parse(activeClient.firstpsydate)
        : Date.now(),
    paddress:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.paddress
        : "",
    pcity:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.pcity : "",
    pstate:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.pstate : "",
    pZip:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.pZip : "",
    pphone1:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pphone1
        : "",
    pphone1type:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pphone1type
        : 0,
    pphone2:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pphone2
        : "",
    pphone2type:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pphone2type
        : 0,
    pphone3:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.phone3 : "",
    pphone3type:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.pphone3type
        : 0,
    // relationshipid: edit && contactData.patient ? contactData.patient.phone3typeid : 0,
    ecName:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.ecName : "",
    ecAddress:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ecAddress
        : "",
    ecCity:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.ecCity : "",
    ecState:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ecState
        : "",
    ecZip:
      edit && Object.keys(activeClient).length !== 0 ? activeClient.ecZip : "",
    ecPhone:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ecPhone
        : "",
    ecPhoneType:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ecPhoneType
        : "",
    ecRelationship:
      edit && Object.keys(activeClient).length !== 0
        ? activeClient.ecRelationship
        : "",
    // relationshipid: edit && contactData.emergency ? contactData.emergency.phone3typeid : 0,
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
  const onSubmit = (data) => {
    console.log(data);
    setClientData((prevState) => ({ ...prevState, ...data }));
    if (activePage < 2) {
      nextPage();
    }
    if (activePage === 2) {
      setAlert({
        message: <h6>Are you sure you want to save these changes?</h6>,
        data: data,
        title: "Add New Client",
      });
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
    const patientContact = {
      name: data.pfirstname + " " + data.plastname,
      address1: data.paddress,
      address2: "",
      city: data.pcity,
      state: data.pstate,
      zip: data.pZip,
      udfid1: 0,
      udfid2: 0,
      contacttypeid: 21,
      patientid: data.patientid,
      relationshipid: 0,
      phone1: data.pphone1,
      phone1typeid: data.pphone1type,
      phone2: data.pphone2,
      phone2typeid: data.pphone2type,
      phone3: data.pphone3,
      phone3typeid: data.pphone3type,
      countyid: 0,
      isactive: 1,
    };
    const emergencyContact = {
      name: data.ecName,
      address1: data.ecAddress,
      address2: "",
      city: data.ecCity,
      state: data.ecState,
      zip: data.ecZip,
      udfid1: 0,
      udfid2: 0,
      contacttypeid: 22,
      patientid: data.patientid,
      relationshipid: data.ecRelationship,
      phone1: data.ecPhone,
      phone1typeid: data.ecPhoneType,
      phone2: "",
      phone2typeid: 0,
      phone3: "",
      phone3typeid: 0,
      countyid: 0,
      isactive: 1,
    };
    console.log("newClient:", newClient);
    console.log("patientContact:", patientContact);
    console.log("emergencyContact:", emergencyContact);

    // const newClient = {
    //   firstname: data.firstname,
    //   lastname: data.lastname,
    //   initial: "",
    //   preferredname: data.preferredname,
    //   dob: "10/11/1986",
    //   maritalstatusid: data.maritalstatusid,
    //   socsec: data.socsec,
    //   ethicityid: data.ethicityid,
    //   sexatbirthid: data.sexatbirthid,
    //   sexid: data.sexatbirthid,
    //   genderidentiyid: data.genderidentiyid,
    //   religionid: data.religionid,
    //   weight: data.weight,
    //   height: data.height,
    //   sharenoteid: "000",
    //   isactive: "1",
    //   allergies: "none",
    // };
    // const enrollNewClient = {
    //   dateofadmission: "10/11/1986",
    //   dxcodes: "",
    //   dxdate: "1/20/2022",
    //   outcomestatusid: 9,
    //   enrollstatusid: 1,
    //   referralsourceid: 0,
    //   firstapptdate: "1/20/2022",
    //   firstpsydate: "1/20/2022",
    //   patientid: 100000,
    //   pharmacyproviderid: 0,
    //   familyphysicianid: 0,
    // };
    if (edit) {
      newClient.patientid = activeClient.patientid;
      console.log("update", newClient);
      if (newClient.clientaddressid !== "0") {
        console.log(" - update patient contact -");
        updateContact(patientContact, newClient.clientaddressid).then(
          (data) => {
            newClient.clientaddressid = data;
            updateClient(newClient);
          }
        );
      } else {
        console.log(" - add patient contact -");
        addContact(patientContact).then((data) => {
          newClient.clientaddressid = data;
          updateClient(newClient);
        });
      }
      if (newClient.emergencycontactid !== "0") {
        console.log(" - update emergency contact -");
        updateContact(emergencyContact, newClient.emergencycontactid).then(
          (data) => {
            newClient.emergencycontactid = data;
            updateClient(newClient);
          }
        );
      } else {
        console.log(" - add emergency contact -");
        addContact(emergencyContact).then((data) => {
          newClient.emergencycontactid = data;
          updateClient(newClient);
        });
      }
    } else {
      console.log(newClient);
      addClient(newClient).then((response) => {
        console.log("new client", response);
        const patientid = response.patientid;
        addContact(patientContact).then(
          (data) => (newClient.clientaddressid = data)
        );
        addContact(emergencyContact).then(
          (data) => (newClient.emergencycontactid = data)
        );
        newClient.patientid = patientid;
        updateClient(newClient);
      });
    }
    handleClose();
    reset();
  };

  const handleCancel = (data) => {};
  useEffect(() => {
    return function cleanup() {
      console.log("cleanup!");
      setContactData({
        patient: {},
        emergency: {},
        physician: {},
        pharmacy: {},
      });
    };
  }, []);

  useEffect(() => {
    console.log("reset");

    reset({ ...defaultValues });
    if (activeClient.clientaddressid && activeClient.clientaddressid !== "0") {
      console.log("has clientaddressid");
      const getClientaddressid = async () =>
        await getContact(activeClient.clientaddressid).then((data) =>
          setContactData((prevState) => ({
            ...prevState,
            patient: data,
          }))
        );
      getClientaddressid();
    }
    if (
      activeClient.emergencycontactid &&
      activeClient.emergencycontactid !== "0"
    ) {
      console.log("has emergencyaddressid");
      const getEmergencyContact = async () =>
        await getContact(activeClient.emergencycontactid).then((data) =>
          setContactData((prevState) => ({
            ...prevState,
            emergency: data,
          }))
        );
      getEmergencyContact();
    }
    if (activeClient.physicianid && activeClient.physicianid !== "0") {
      console.log("has physicianid");
      const getPhysician = async () =>
        await getContact(activeClient.physicianid).then((data) =>
          setContactData((prevState) => ({
            ...prevState,
            physician: data,
          }))
        );
      getPhysician();
    }
    if (
      activeClient.pharmacyproviderid &&
      activeClient.pharmacyproviderid !== "0"
    ) {
      console.log("has pharmacyproviderid");
      const getPharmacy = async () =>
        await getContact(activeClient.pharmacyproviderid).then((data) =>
          setContactData((prevState) => ({
            ...prevState,
            pharmacy: data,
          }))
        );
      getPharmacy();
    }
    // eslint-disable-next-line
  }, [activeClient]);

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
            {activePage >= 2 ? (edit ? "Save" : "Add New Client") : "Next"}
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
