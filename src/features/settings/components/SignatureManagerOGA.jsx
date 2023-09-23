import { Col, Button, Row, Modal, Form, Accordion } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, SelectField } from "../../../components/form/fieldCreator";

export function SignatureManger({ show, setShow, containerName, edit }) {
  const { register, handleSubmit, watch, formState } = useForm();
  const { touchedFields, errors } = formState;

  const [sigRawData, setSigRawData] = useState("");
  // const [userSig, setUserSig] = useState(false);
  const [adminSig, setAdminSig] = useState(false);
  ///======================================================///
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  // const [bIsOpen, setBIsOpen] = useState(false);
  const [sigStringData, setSigStringData] = useState("");
  const [accordionKey, toggleAccordionKey] = useState(null);
  // const [submitType, setSubmitType] = useState();

  const pinNumber = useRef({});
  pinNumber.current = watch("pinNumber");

  // const pinValue2Ref = useRef();
  // const iagreeRef = useRef();
  // const saveRef = useRef();
  // const adminFormRef = useRef();
  // const witnessRef = useRef();

  const handleClose = () => {
    // clearFormData();
    setShow(false);
  };

  useEffect(() => {
    var deviceStatus = {
      "metadata": { "version": 1.0, "command": "GetDeviceStatus" },
      "deviceStatus": ""
    };
    var deviceStatusData = JSON.stringify(deviceStatus)
    var element = document.createElement("MyExtensionDataElementDeviceStatus");
    element.setAttribute("msgeAttributeDeviceStatus", deviceStatusData);
    document.documentElement.appendChild(element);
    var evt = document.createEvent('Events');
    evt.initEvent('GetDeviceStatusEvent', true, false);
    element.dispatchEvent(evt);


    const getDeviceStatusResponse = (event) => {
      const str = event.target.getAttribute("msgAttribute");
      const obj = JSON.parse(str);
      // Process the response
      console.log(obj)
    };

    document.addEventListener('GetDeviceStatusResponse', getDeviceStatusResponse, false);
    // Clean-up: Remove event listener on component unmount
    return () => {
      document.removeEventListener('GetDeviceStatusResponse', getDeviceStatusResponse, false);
    };
    // eslint-disable-next-line
  }, []);

  const startSign = () => {
    var canvasObj = document.getElementById('cnv');
    canvasObj.getContext('2d').clearRect(0, 0, canvasObj.width, canvasObj.height);
    console.log(canvasObj)
    var message = { "firstName": "", "lastName": "", "eMail": "", "location": "", "imageFormat": 1, "imageX": canvasObj.width, "imageY": canvasObj.height, "imageTransparency": false, "imageScaling": false, "maxUpScalePercent": 0.0, "rawDataFormat": "ENC", "minSigPoints": 25 };
    var messageData = JSON.stringify(message);
    var element = document.createElement("MyExtensionDataElement");
    element.setAttribute("messageAttribute", messageData);
    document.documentElement.appendChild(element);
    var evt = document.createEvent("Events");
    evt.initEvent("SignStartEvent", true, false);
    element.dispatchEvent(evt);

    const signResponse = (event) => {
      var str = event.target.getAttribute("msgAttribute");
      var obj = JSON.parse(str);
      console.log(obj)

      // Process the response
      setValues(obj, canvasObj.width, canvasObj.height)
    }

    document.addEventListener('SignResponse', signResponse, false);
  };

  const setValues = (objResponse, imageWidth, imageHeight) => {
    let obj = null;
    if (typeof objResponse === "string") {
      obj = JSON.parse(objResponse);
    } else {
      obj = JSON.parse(JSON.stringify(objResponse));
    }

    const ctx = document.getElementById('cnv').getContext('2d');

    if (
      obj.errorMsg != null &&
      obj.errorMsg !== "" &&
      obj.errorMsg !== "undefined"
    ) {
      alert(obj.errorMsg);
    } else {
      if (obj.isSigned) {
        var img = new Image();
        img.onload = function () {
          ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
        }
        img.src = "data:image/png;base64," + obj.imageData;
        setSigRawData(img.src)
      }
    }
  };

  const setAgreement = (e) => {
    toggleAccordionKey(e.target.checked ? 0 : null);
  };

  const setUserPin = () => {
    //get formstate of pinNumber and pinVerify Fields
    //check if they are the same
    //api call to save pin to user object (pCheck)
  }
  // const witnessSignature = () => {
  //   const sSig = sigStringData;
  //   const sWitnessID = witnessRef.current.value;
  //   const sWitnessPin = pinValue2Ref.current.value;
  //   const sStaffID = 125; // Staff ID is passed in from the calling program
  //   // const sStaffPin = pinValueRef.current.value;

  //   alert(
  //     "Send to server witnessid=" +
  //       sWitnessID +
  //       ", witnesspin=" +
  //       sWitnessPin +
  //       ",staffid=" +
  //       sStaffID +
  //       ", staffpin=" +
  //       // sStaffPin +
  //       " and base representation of the signature shown on next popup..."
  //   );
  //   alert(sigStringData);
  // };

  // const closeWindow = (sType) => {
  //   setBIsOpen(false);
  //   // w1.close();
  // };

  // const onDone = async (sWitnessID) => {
  //   if (bIsOpen === true) {
  //     // w1.close();
  //     setBIsOpen(false);
  //   }

  //   if (pinNumber.current.length >= 4) {
  //     try {
  //       const response = await fetch(
  //         "/IHelp/admin.do?" +
  //           encodeURI(
  //             "submittype=ajaxcall&actiontype=savesignature&primaryid=&miscinfo=" +
  //               sigStringData +
  //               "&pinvalue=" +
  //               // data.pinNumber +
  //               "&witness=" +
  //               sWitnessID
  //           ),
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(""),
  //         }
  //       );

  //       if (response.ok) {
  //         const res = await response.json();
  //         console.log(res);
  //         // alertify.success("signature saved");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       // alertify.alert('Error: ' + e);
  //     }
  //   } else {
  //     // alertify.alert("You must enter a pin with four to eight characters to proceed...");
  //   }
  // };

  // const setSaveBtn = () => {
  //   saveRef.current.disabled = false;
  // };

  return (
    <Modal show={show} dialogClassName="CE-width" onHide={handleClose}>
      <Modal.Header className="PNM-header" closeButton>
        <Modal.Title>Signature Manager</Modal.Title>
      </Modal.Header>

      <Modal.Body className="ps-5 pe-5 pt-3 pb-3">
        {/* <Row className="d-flex justify-content-evenly align-items-center"> */}
        {/* {renderPage(activePage, register, control, formState, setValue)} */}
        <h5>Disclosures:</h5>
        For providers using Electronic Health Records (EHRs)/Electronic Medical
        Records (EMRs): Provider EHR/EMR platforms must be configured to allow
        the DBHDD and its procies (i.e. the ASO), as well as any other
        authorized external reviewing entities, full administrative access
        (view-only) to all componenets of the EHR/EMR. Thiss access must
        include:
        <ol>
          <li>Ability to validate document creation date, time, and author;</li>
          <li>Time stamp of signatures;</li>
          <li>
            Dates, time stamps, and author(s) of any edits, amendments, or late
            entries;
          </li>
          <li>
            Ability to view the original content, prior to any editing or
            amendments, without deletions; and
          </li>
          <li>Dates and time stamps for documents uploaded to the EHR/EMR.</li>
        </ol>
        <Form.Check
          type="checkbox"
          label="I agree"
          onChange={setAgreement}
        // {...register(fieldName)}
        // name={fieldName}
        // className={`${fieldStyle}`}
        // {...other}
        />
      </Modal.Body>
      <Form action="https://sigplusweb.com/sign_chrome_ff_sigplusextlite.html#" autoComplete="off">
        <Modal.Footer className="bg-light flex-row justify-content-between p-2">
        <Accordion activeKey={accordionKey} className="w-100" flush>
        <Accordion.Item eventKey="0">
        <Accordion.Header>1. User Signature & Pin Verification</Accordion.Header>
        <Accordion.Body className="w-100 d-flex justify-content-center p-2">
            <div >
              <canvas id="cnv" name="cnv" width={400} height={100} className="border" />

            </div> 
            <Button
              id="AccordionKey" name="AccordionKey"
              size="lg"
              disabled={!accordionKey}
              className="w-25"
              // disabled={!userSig || !adminSig}
              onClick={startSign}
            >
              Sign
            </Button></Accordion.Body></Accordion.Item>
          <Accordion.Item eventKey="1" className="align-items-end">
            <Accordion.Header className={sigRawData ? "" : "text-muted"}>2. Pin Number Verification</Accordion.Header>
            <Accordion.Body className="w-100 d-flex justify-content-center p-2">
            <Col md={5}>
              <TextField
                register={register}
                labelName="Pin Number"
                fieldName="pinNumber"
                fieldType="number"
                fieldOptions={{
                  minLength: {
                    value: 4,
                    message: "Pin Number must be 4 numbers long",
                  },
                  maxLength: {
                    value: 4,
                    message: "Pin Number must be 4 numbers long",
                  },
                }}
                disabled={!sigRawData}
                // disabled={!userSig}
                isValid={touchedFields.pinNumber && !errors.pinNumber}
                isInvalid={errors.pinNumber}
              />
            </Col>
            <Col md={5}>
              <TextField
                register={register}
                labelName="Verify Pin Number"
                fieldName="pinVerify"
                fieldType="number"
                fieldOptions={{
                  required: true,
                  minLength: {
                    value: 4,
                    message: "Pin Number must be 4 numbers long",
                  },
                  maxLength: {
                    value: 4,
                    message: "Pin Number must be 4 numbers long",
                  },
                  validate: (value) =>
                    pinNumber.current === value || "Pin Numbers do not Match",
                }}
                disabled={!sigRawData}
                // disabled={!userSig}
                isValid={touchedFields.pinVerify && !errors.pinVerify}
                isInvalid={errors.pinVerify}
              />
            </Col>
            <Col md={2}>
              <Button
                id="AccordionKey" name="AccordionKey"
                disabled={!sigRawData}
                className="w-100"
                // disabled={!userSig || !adminSig}
                onClick={setUserPin}
              >
                Verify & Save
              </Button>
            </Col>
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className={adminSig ? "" : "text-muted"}>3. Witness Confirmation</Accordion.Header>
            <Accordion.Body>
            <Col md={6} className=" p-2">
              <SelectField
                register={register}
                labelName="Select Staff"
                groupName="Staff Title"
                fieldName="witnesslist"
                labelStyle="w-50 m-0 pe-1 small"
              // disabled={!intervention || !editIntervention ? true : false}
              />
            </Col>
            <Col md={6}>
              <TextField
                register={register}
                labelName="Pin Number"
                fieldName="pinNumber"
                fieldType="number"
                fieldOptions={{
                  minLength: {
                    value: 4,
                    message: "Pin Number must be 4 numbers long",
                  },
                  maxLength: {
                    value: 4,
                    message: "Pin Number must be 4 numbers long",
                  },
                }}
                disabled={!accordionKey}
                // disabled={!userSig}
                isValid={touchedFields.pinNumber && !errors.pinNumber}
                isInvalid={errors.pinNumber}
              />
            </Col>
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
