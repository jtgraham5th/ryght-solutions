import { Col, Button, Row, Modal, Form, Collapse } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../../context/UserContext";
import { TextField, SelectField } from "../../../components/form/fieldCreator";
import { getDirtyFields } from "../utils/parseData";

export function SignatureManger({ show, setShow, containerName, edit }) {
  const { register, handleSubmit, watch, formState, getValues } = useForm();
  const { touchedFields, errors } = formState;
  const { user, getAllUsers, allUsers, updateCurrentUser, pinCheck } =
    useUser();

  const [sigRawData, setSigRawData] = useState("");
  const [activeKey, setActiveKey] = useState(0);
  const [adminSig, setAdminSig] = useState(false);
  ///======================================================///
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  // const [bIsOpen, setBIsOpen] = useState(false);
  const [sigStringData, setSigStringData] = useState("");
  const [signBtn, toggleSignBtn] = useState(false);
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
      metadata: { version: 1.0, command: "GetDeviceStatus" },
      deviceStatus: "",
    };
    getAllUsers();
    var deviceStatusData = JSON.stringify(deviceStatus);
    var element = document.createElement("MyExtensionDataElementDeviceStatus");
    element.setAttribute("msgeAttributeDeviceStatus", deviceStatusData);
    document.documentElement.appendChild(element);
    var evt = document.createEvent("Events");
    evt.initEvent("GetDeviceStatusEvent", true, false);
    element.dispatchEvent(evt);

    const getDeviceStatusResponse = (event) => {
      const str = event.target.getAttribute("msgAttribute");
      const obj = JSON.parse(str);
      // Process the response
      console.log(obj);
    };

    document.addEventListener(
      "GetDeviceStatusResponse",
      getDeviceStatusResponse,
      false
    );
    // Clean-up: Remove event listener on component unmount
    return () => {
      document.removeEventListener(
        "GetDeviceStatusResponse",
        getDeviceStatusResponse,
        false
      );
    };
    // eslint-disable-next-line
  }, []);

  const startSign = () => {
    var canvasObj = document.getElementById("cnv");
    canvasObj
      .getContext("2d")
      .clearRect(0, 0, canvasObj.width, canvasObj.height);
    console.log(canvasObj);
    var message = {
      firstName: "",
      lastName: "",
      eMail: "",
      location: "",
      imageFormat: 1,
      imageX: canvasObj.width,
      imageY: canvasObj.height,
      imageTransparency: false,
      imageScaling: false,
      maxUpScalePercent: 0.0,
      rawDataFormat: "ENC",
      minSigPoints: 25,
    };
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
      console.log(obj);
      if (!obj.errorMsg) {
        setActiveKey(2);
      } else {
        console.log(obj.errorMsg);
      }

      // Process the response
      setValues(obj, canvasObj.width, canvasObj.height);
    };

    document.addEventListener("SignResponse", signResponse, false);
  };

  const setValues = (objResponse, imageWidth, imageHeight) => {
    let obj = null;
    if (typeof objResponse === "string") {
      obj = JSON.parse(objResponse);
    } else {
      obj = JSON.parse(JSON.stringify(objResponse));
    }

    const ctx = document.getElementById("cnv").getContext("2d");

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
        };
        img.src = "data:image/png;base64," + obj.imageData;
        setSigRawData(img.src);
      }
    }
  };

  const setButton = (e) => {
    setActiveKey(1);
  };

  const setUserPin = () => {
    //get formstate of pinNumber and pinVerify Fields
    const userPin = getValues("pinNumber");
    const userPinVerify = getValues("pinVerify");
    //check if they are the same
    if (userPin === userPinVerify) {
      setActiveKey(3);
    }
    //api call to save pin to user object (pCheck)
  };
  const onSubmit = async (data) => {
    console.log(data);
    //build pcheck obj
    const pCheckObj = [
      {
        userid: user.userid,
        UserName: user.username,
        StringValue: data.witnessPin,
        PCheckTypeID: 2,
        PinValue: data.witnessPin,
      },
    ];

    //check witness pin
    const witnessVerified = await pinCheck(pCheckObj);
    console.log(witnessVerified);

    // if true save pinNumber and signatrue
    // const updatedUserObj = { userid: user.userid, pinValue: data.pinValue, signature: sigRawData };
    const updatedUserObj = { userid: user.userid, signature: sigRawData };
    const fieldsString = getDirtyFields(updatedUserObj);
    console.log(updatedUserObj, fieldsString);
    await updateCurrentUser(updatedUserObj, fieldsString);
  };
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
          onChange={setButton}
          // {...register(fieldName)}
          // name={fieldName}
          // className={`${fieldStyle}`}
          // {...other}
        />
      </Modal.Body>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        action="https://sigplusweb.com/sign_chrome_ff_sigplusextlite.html#"
        autoComplete="off"
      >
        <Modal.Footer className="bg-light flex-row justify-content-between p-2">
          <Row className="w-100">
            <h5>1. User Signature & Pin Verification</h5>
            <Collapse in={activeKey === 1}>
              <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="w-100 d-flex  justify-content-center p-2">
                  <canvas
                    id="cnv"
                    name="cnv"
                    width={400}
                    height={100}
                    className="border"
                  />
                </div>
                <Button
                  id="SignBtn"
                  name="SignBtn"
                  size="lg"
                  disabled={activeKey !== 1}
                  className="w-25 mt-2"
                  // disabled={!userSig || !adminSig}
                  onClick={startSign}
                >
                  Sign
                </Button>
              </div>
            </Collapse>
          </Row>
          <Row className="w-100 border-top mt-3 pt-3 align-items-end">
            <h5 className={activeKey === 2 ? "" : "text-muted"}>
              2. Pin Number Verification
            </h5>
            <Collapse in={activeKey === 2}>
              <div>
                <Form.Group as={Row}>
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
                          pinNumber.current === value ||
                          "Pin Numbers do not Match",
                      }}
                      disabled={!sigRawData}
                      // disabled={!userSig}
                      isValid={touchedFields.pinVerify && !errors.pinVerify}
                      isInvalid={errors.pinVerify}
                    />
                  </Col>
                  <Col md={2}>
                    <Button
                      id="SignBtn"
                      name="SignBtn"
                      disabled={!sigRawData}
                      className="w-100 mt-2"
                      // disabled={!userSig || !adminSig}
                      onClick={setUserPin}
                    >
                      Verify & Save
                    </Button>
                  </Col>
                </Form.Group>
              </div>
            </Collapse>
          </Row>
          <Row className="w-100 border-top mt-3 pt-3 mb-3">
            <h5 className={activeKey === 3 ? "" : "text-muted"}>
              3. Witness Confirmation
            </h5>
            <Collapse in={activeKey === 3}>
              <div>
                <Form.Group as={Row} className="justify-content-center">
                  <Col md={6} className=" p-2">
                    <SelectField
                      listData={allUsers}
                      itemDetail={["userid", "fullname"]}
                      register={register}
                      labelName="Select Staff Member"
                      fieldName="witness"
                      labelStyle="w-50 m-0 pe-1 small"
                      // disabled={!intervention || !editIntervention ? true : false}
                    />
                  </Col>
                  <Col md={6}>
                    <TextField
                      register={register}
                      labelName="Witness Pin Number"
                      fieldName="witnessPin"
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
                      // disabled={!signBtn}
                      // disabled={!userSig}
                      isValid={touchedFields.witnessPin && !errors.witnessPin}
                      isInvalid={errors.witnessPin}
                    />
                  </Col>
                </Form.Group>
                <Row className="justify-content-center">
                  <Button
                    variant="success"
                    disabled={!sigRawData}
                    className="w-50 mt-2"
                    // disabled={!userSig || !adminSig}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Row>
              </div>
            </Collapse>
          </Row>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
