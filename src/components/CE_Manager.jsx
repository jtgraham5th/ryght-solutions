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
  const { control, register, handleSubmit, reset } = useForm({});
  const [clientData, setClientData] = useState({});
  const { activeClient, addClient, enrollClient, updateClient, addContact } =
    useClient();

  // const formatDate = (newDate) => {
  //   console.log(activeClient);
  //   return Date(newDate.split("/").reverse().join("-")).toString();
  // };

  const defaultValues = {
    pfirstname:
      Object.keys(activeClient).length !== 0 ? activeClient.pfirstname : "",
    plastname:
      Object.keys(activeClient).length !== 0 ? activeClient.plastname : "",
    pinitial:
      Object.keys(activeClient).length !== 0 ? activeClient.initial : "",
    preferredname:
      Object.keys(activeClient).length !== 0 ? activeClient.preferredname : "",
    dob: Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    maritalstatusid:
      Object.keys(activeClient).length !== 0 ? activeClient.maritalstatusid : 0,
    socsec: Object.keys(activeClient).length !== 0 ? activeClient.socsec : "",
    ethicityid:
      Object.keys(activeClient).length !== 0 ? activeClient.ethicityid : 0,
    sexatbirthid:
      Object.keys(activeClient).length !== 0 ? activeClient.sexatbirthid : 0,
    genderid:
      Object.keys(activeClient).length !== 0 ? activeClient.genderid : 0,
    preferredpronounid:
      Object.keys(activeClient).length !== 0
        ? activeClient.preferredpronounid
        : 0,
    religionid:
      Object.keys(activeClient).length !== 0 ? activeClient.religionid : 0,
    weight: Object.keys(activeClient).length !== 0 ? activeClient.weight : "",
    height: Object.keys(activeClient).length !== 0 ? activeClient.height : "",
    phone1: Object.keys(activeClient).length !== 0 ? activeClient.phone1 : "",
    phone2: Object.keys(activeClient).length !== 0 ? activeClient.phone2 : "",
    phone3: Object.keys(activeClient).length !== 0 ? activeClient.phone3 : "",
    email: Object.keys(activeClient).length !== 0 ? activeClient.email : "",
    enrolldate:
      Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    employer:
      Object.keys(activeClient).length !== 0 ? activeClient.employer : "",
    employerphone:
      Object.keys(activeClient).length !== 0 ? activeClient.employerphone : "",
    clientaddressid:
      Object.keys(activeClient).length !== 0 ? activeClient.clientaddressid : 0,
    ins1_cardavailableid:
      Object.keys(activeClient).length !== 0
        ? activeClient.ins1_cardavailableid
        : 0,
    ins1_dateexpires:
      Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    ins1_carrierid:
      Object.keys(activeClient).length !== 0 ? activeClient.ins1_carrierid : 0,
    ins1_planid:
      Object.keys(activeClient).length !== 0 ? activeClient.ins1_planid : 0,
    ins1_phone:
      Object.keys(activeClient).length !== 0 ? activeClient.ins1_phone : "",
    ins1_policynumber:
      Object.keys(activeClient).length !== 0
        ? activeClient.ins1_policynumber
        : "",
    ins1_relationshipid:
      Object.keys(activeClient).length !== 0
        ? activeClient.ins1_relationshipid
        : 0,
    ins1_fundingsource:
      Object.keys(activeClient).length !== 0
        ? activeClient.ins1_fundingsource
        : "",
    isn2_cardavailableid:
      Object.keys(activeClient).length !== 0
        ? activeClient.isn2_cardavailableid
        : 0,
    isn2_dateexpires:
      Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    isn2_carrierid:
      Object.keys(activeClient).length !== 0 ? activeClient.isn2_carrierid : 0,
    isn2_planid:
      Object.keys(activeClient).length !== 0 ? activeClient.isn2_planid : 0,
    isn2_phone:
      Object.keys(activeClient).length !== 0 ? activeClient.isn2_phone : "",
    isn2_policynumber:
      Object.keys(activeClient).length !== 0
        ? activeClient.isn2_policynumber
        : "",
    isn2_relationshipid:
      Object.keys(activeClient).length !== 0
        ? activeClient.isn2_relationshipid
        : 0,
    isn2_fundingsource:
      Object.keys(activeClient).length !== 0
        ? activeClient.isn2_fundingsource
        : "",
    allergies:
      Object.keys(activeClient).length !== 0 ? activeClient.allergies : "",
    physicianid:
      Object.keys(activeClient).length !== 0 ? activeClient.physicianid : 0,
    pharmacy:
      Object.keys(activeClient).length !== 0 ? activeClient.pharmacy : "",
    pharmacyproviderid:
      Object.keys(activeClient).length !== 0
        ? activeClient.pharmacyproviderid
        : 0,
    emergencycontactid:
      Object.keys(activeClient).length !== 0
        ? activeClient.emergencycontactid
        : 0,
    emergencyrelationshipid:
      Object.keys(activeClient).length !== 0
        ? activeClient.emergencyrelationshipid
        : 0,
    patient_comment:
      Object.keys(activeClient).length !== 0
        ? activeClient.patient_comment
        : "",
    referralid:
      Object.keys(activeClient).length !== 0 ? activeClient.referralid : 0,
    referraldate:
      Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    dxdate: Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    internalreferralid:
      Object.keys(activeClient).length !== 0
        ? activeClient.internalreferralid
        : 0,
    statusid:
      Object.keys(activeClient).length !== 0 ? activeClient.statusid : 0,
    outcomeid:
      Object.keys(activeClient).length !== 0 ? activeClient.outcomeid : 0,
    dxcodes: Object.keys(activeClient).length !== 0 ? activeClient.dxcodes : "",
    dateoutsourced:
      Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    firstapptdate:
      Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    firstpsydate:
      Object.keys(activeClient).length !== 0 ? Date.now() : Date.now(),
    photolink:
      Object.keys(activeClient).length !== 0 ? activeClient.photolink : "",
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
        return <CE2 register={register} control={control} />;
      case 2:
        return <CE3 register={register} control={control} />;
      default:
        return <CE1 register={register} control={control} />;
    }
  };
  const onSubmit = (data) => {
    setClientData((prevState) => ({ ...prevState, ...data }));
    if (activePage < 2) {
      nextPage();
    }
    if (activePage === 2) {
      setAlert({
        message: <h6>Are you sure you want to save these changes?</h6>,
        data: clientData,
        title: "Add New Client",
      });
    }
  };
  const handleConfirm = (data) => {
    console.log(data);
    const newClient = {
      patientid: data.patientid,
      pfirstname: data.pfirstname,
      pinitial: data.pinitial,
      plastname: data.plastname,
      maritalstatusid: data.maritalstatusid,
      dob: data.dob,
      socsec: data.socsec,
      genderid: data.genderid,
      phone1: data.phone1,
      phone2: data.phone2,
      phone3: data.phone3,
      email: data.email,
      enrolldate: data.enrolldate,
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
      referraldate: data.referraldate,
      dateoutsourced: data.dateoutsourced,
      firstapptdate: data.firstapptdate,
      firstpsydate: data.firstpsydate,
      dxdate: data.dxdate,
      employer: data.employer,
      employerphone: data.employerphone,
      clientaddressid: data.clientaddressid,
      emergencycontactid: data.emergencycontactid,
      emergencyrelationshipid: data.emergencyrelationshipid,
      allergies: data.allergies,
      physicianid: data.physicianid,
      ins1_cardavailableid: data.ins1_cardavailableid,
      ins1_dateexpires: data.ins1_dateexpires,
      ins1_carrierid: data.ins1_carrierid,
      ins1_planid: data.ins1_planid,
      ins1_phone: data.ins1_phone,
      ins1_policynumber: data.ins1_policynumber,
      ins1_relationshipid: data.ins1_relationshipid,
      ins1_fundingsource: data.ins1_fundingsource,
      ins2_cardavailableid: data.ins2_cardavailableid,
      ins2_dateexpires: data.ins2_dateexpires,
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
    };
    const patientContact = {
      name: data.pfirstname + " " + data.plastname,
      address1: data.paddress,
      address2: "",
      city: data.pcity,
      state: data.pstate,
      zip: data.pzipCode,
      udfid1: 0,
      udfid2: 0,
      contacttypeid: 21,
      patientid: 676034,
      relationshipid: 0,
      phone1: data.pphone1,
      phone1typeid: data.pphone1type,
      phone2: data.pphone1,
      phone2typeid: data.pphone2type,
      phone3: data.pphone1,
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
      contacttypeid: 21,
      patientid: 676034,
      relationshipid: data.ecRelationship,
      phone1: data.ecPhone,
      phone1typeid: data.ecPhoneType,
      phone2: "",
      phone2typeid: "",
      phone3: "",
      phone3typeid: "",
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
      console.log(newClient);
      updateClient(newClient);
    } else {
      console.log(newClient);
      addClient(newClient).then((response) => {
        console.log(response);
        const patientid = response.patientid
        let clientAddressID = addContact(patientid, 21, patientContact);
        let emergencyContactID = addContact(patientid, 22, emergencyContact);
        newClient.clientaddressid =  clientAddressID;
        newClient.emergencycontactid = emergencyContactID;
        console.log(newClient)
        updateClient(newClient);
      });
    }
    handleClose();
    reset();
  };

  const handleCancel = (data) => {};

  useEffect(() => {
    console.log("reset");
    reset({ ...defaultValues });
    // eslint-disable-next-line
  }, [activeClient]);

  useEffect(() => {
    console.log("reset");
    reset({ ...defaultValues });
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
            {activePage >= 2 ? "Add New Client" : "Next"}
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
