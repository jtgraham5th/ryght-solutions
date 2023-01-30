import { Card, Button } from "react-bootstrap";
import "../TreatmentPlan.css";
import { Printer } from "react-bootstrap-icons";
import { useReactToPrint } from "react-to-print";

export function TreatmentPlanHeader({
  editTreatmentPlan,
  setEditTreatmentPlan,
  treatmentPlanRef,
}) {
  const handlePrint = () => {
    var iHeight = 800;
    var iWidth = 800;
    var sPath =
      "http://www.ivronlogs.icu:8080/projects/PDFViewer/web/viewer.html?file=../../ryght-solutions/docs/apilist/APList.pdf";
    window.open(
      sPath,
      "popUpWindow",
      "height=" +
        iHeight +
        ",width=" +
        iWidth +
        ",left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
    );
  };
  // useReactToPrint({
  //   content: () => treatmentPlanRef.current,
  // });

  const handleEdit = (e) => {
    e.preventDefault();
    setEditTreatmentPlan(true);
  };
  const exitEdit = () => {
    setEditTreatmentPlan(false);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h3>Treatment Plan Information</h3>
      {editTreatmentPlan ? (
        <div className="TP-form-label-button-container">
          <Button className="me-2" type="submit" variant="success">
            Save
          </Button>
          <Button className="me-2" variant="secondary" onClick={exitEdit}>
            Cancel
          </Button>
        </div>
      ) : (
        <div className="w-25 d-flex justify-content-evenly">
          <Button
            className="me-2"
            onClick={handleEdit}
            variant={"primary"}
            type="button"
          >
            Edit Treatment Plan
          </Button>
          <Button
            className="me-2"
            onClick={handlePrint}
            variant={"dark"}
            type="button"
          >
            <Printer className="me-1" /> Print
          </Button>
        </div>
      )}
    </div>
  );
}
