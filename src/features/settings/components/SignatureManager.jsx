import { Card, Col, Button, Row, Modal, Form } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { useClient } from "../../../context/ClientContext";
import { useForm } from "react-hook-form";
import { TextField } from "../../../components/form/fieldCreator";
import { SignatureCanvas } from "..";
import $ from "jquery";
// import alertify from 'alertifyjs';

export function SignatureManger({ show, setShow, containerName, edit }) {
  const [activePage, setActivePage] = useState(0);
  const [tempID, setTempID] = useState();
  const [editing, setEditing] = useState(edit);
  const [userSig, setUserSig] = useState(false);
  const [adminSig, setAdminSig] = useState(false);
  const { control, register, handleSubmit, watch, formState } = useForm();
  const { touchedFields, errors } = formState;
  ///======================================================///
  const [imgWidth, setImgWidth] = useState(null);
  const [imgHeight, setImgHeight] = useState(null);
  const [bIsOpen, setBIsOpen] = useState(false);
  const [sigStringData, setSigStringData] = useState("");
  const [sigRawData, setSigRawData] = useState("Base64 String: ");
  const [signBtn, toggleSignBtn] = useState(false);
  const [submitType, setSubmitType] = useState();

  const pinNumber = useRef({});
  pinNumber.current = watch("pinNumber");

  const pinValue2Ref = useRef();
  const iagreeRef = useRef();
  const saveRef = useRef();
  const adminFormRef = useRef();
  const witnessRef = useRef();
  const cnvRef = useRef();

  const handleClose = () => {
    clearFormData();
    setShow(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };
  const startSign = () => {
    // pinValueRef.current.disabled = false;
    // pinValue2Ref.current.disabled = false;

    const isInstalled = document.documentElement.getAttribute(
      "SigPlusExtLiteExtension-installed"
    );
    if (!isInstalled) {
      alert(
        "SigPlusExtLite extension is either not installed or disabled. Please install or enable extension."
      );
      return;
    }
    const canvasObj = cnvRef.current;
    canvasObj
      .getContext("2d")
      .clearRect(0, 0, canvasObj.width, canvasObj.height);
    setSigStringData("");
    setSigRawData("Base64 String: ");
    setImgWidth(canvasObj.width);
    setImgHeight(canvasObj.height);

    const message = {
      firstName: "",
      lastName: "",
      eMail: "",
      location: "",
      imageFormat: 1,
      imageX: imgWidth,
      imageY: imgHeight,
      imageTransparency: false,
      imageScaling: false,
      maxUpScalePercent: 0.0,
      rawDataFormat: "ENC",
      minSigPoints: 25,
    };

    const messageData = JSON.stringify(message);
    const element = document.createElement("MyExtensionDataElement");
    element.setAttribute("messageAttribute", messageData);
    document.documentElement.appendChild(element);

    const customEvent = new CustomEvent("SignStartEvent", {
      bubbles: true,
      cancelable: false,
      detail: { messageData },
    });

    window.dispatchEvent(customEvent);
  };

  const signResponse = (event) => {
    const str = event.target.getAttribute("msgAttribute");
    const obj = JSON.parse(str);
    setValues(obj, imgWidth, imgHeight);
  };
  useEffect(() => {
    // Add the event listener when the component mounts
    document.addEventListener("SignResponse", signResponse, false);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("SignResponse", signResponse, false);
    };
  }, [signBtn]);

  const setValues = (objResponse, imageWidth, imageHeight) => {
    let obj = null;
    if (typeof objResponse === "string") {
      obj = JSON.parse(objResponse);
    } else {
      obj = JSON.parse(JSON.stringify(objResponse));
    }

    const ctx = cnvRef.current.getContext("2d");

    if (
      obj.errorMsg != null &&
      obj.errorMsg !== "" &&
      obj.errorMsg !== "undefined"
    ) {
      alert(obj.errorMsg);
    } else {
      if (obj.isSigned) {
        setSigRawData(sigRawData + obj.imageData);
        setSigStringData(sigStringData + obj.sigString);
        const img = new Image();
        img.onload = function () {
          ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
        };
        img.src = "data:image/png;base64," + obj.imageData;
      }
    }
  };

  const clearFormData = () => {
    setSigStringData("");
    setSigRawData("Base64 String: ");
  };

  const formSubmit = (sType) => {
    setSubmitType(sType);
    adminFormRef.current.submit();
  };

  const setButton = (e) => {
    toggleSignBtn(e.target.checked);
  };

  const witnessSignature = () => {
    const sSig = sigStringData;
    const sWitnessID = witnessRef.current.value;
    const sWitnessPin = pinValue2Ref.current.value;
    const sStaffID = 125; // Staff ID is passed in from the calling program
    // const sStaffPin = pinValueRef.current.value;

    alert(
      "Send to server witnessid=" +
        sWitnessID +
        ", witnesspin=" +
        sWitnessPin +
        ",staffid=" +
        sStaffID +
        ", staffpin=" +
        // sStaffPin +
        " and base representation of the signature shown on next popup..."
    );
    alert(sigStringData);
  };

  const closeWindow = (sType) => {
    setBIsOpen(false);
    // w1.close();
  };

  const onDone = async (sWitnessID) => {
    if (bIsOpen === true) {
      // w1.close();
      setBIsOpen(false);
    }

    if (pinNumber.current.length >= 4) {
      try {
        const response = await fetch(
          "/IHelp/admin.do?" +
            encodeURI(
              "submittype=ajaxcall&actiontype=savesignature&primaryid=&miscinfo=" +
                sigStringData +
                "&pinvalue=" +
                // data.pinNumber +
                "&witness=" +
                sWitnessID
            ),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(""),
          }
        );

        if (response.ok) {
          const res = await response.json();
          console.log(res);
          // alertify.success("signature saved");
        }
      } catch (err) {
        console.error(err);
        // alertify.alert('Error: ' + e);
      }
    } else {
      // alertify.alert("You must enter a pin with four to eight characters to proceed...");
    }
  };

  const setSaveBtn = () => {
    saveRef.current.disabled = false;
  };

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
          onChange={setButton}
          // {...register(fieldName)}
          // name={fieldName}
          // className={`${fieldStyle}`}
          // {...other}
        />
      </Modal.Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Footer className="bg-light flex-row justify-content-between p-2">
          <Row className="w-100">
            <h5>1. User Signature & Pin Verification</h5>
            <SignatureCanvas canvasRef={cnvRef} />
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
                disabled={!signBtn}
                // disabled={!userSig}
                isValid={touchedFields.pinNumber && !errors.pinNumber}
                isInvalid={errors.pinNumber}
              />
            </Col>
            <Col md={6}>
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
                disabled={!signBtn}
                // disabled={!userSig}
                isValid={touchedFields.pinVerify && !errors.pinVerify}
                isInvalid={errors.pinVerify}
              />
            </Col>
          </Row>
          <Row className="w-100 border-top mt-3 pt-3 mb-3">
            <Col md={8} className=" p-2">
              <h5 className={adminSig ? "" : "text-muted"}>
                2. Admin Signature
              </h5>
              <Card
                className="h-75 border border-2"
                border={adminSig ? "success" : "secondary"}
                bg={adminSig ? "success" : "secondary"}
                onClick={() => setAdminSig(!adminSig)}
              >
                <Card.Body>signature</Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Button
                className="w-75"
                size="lg"
                disabled={!signBtn}
                // disabled={!userSig || !adminSig}
                onClick={startSign}
              >
                Sign
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
