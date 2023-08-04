import { Row } from "react-bootstrap";
import "./DocManager.css";
import {
  renderAdultBPS,
  renderAdolescentBPS,
  renderCANS,
  renderANSA,
  renderOrderOfService,
  renderUnavailable,
} from "../data/documents";
import { CSM } from "../forms/CSM1500/CSM";

export function DocViewer({
  data,
  activePage,
  edit,
  register,
  control,
  setValue,
  screenValue,
  formState,
}) {
  const renderRequirement = () => {
    switch (data.docid) {
      case 4:
        return renderAdolescentBPS(activePage, register, control, edit);
      case 5:
        return renderAdultBPS(activePage, register, control, edit);
      case 6:
        return renderCANS(activePage, register, control, edit);
      case 7:
        return renderANSA(activePage, register, control, edit);
      case 8:
        return renderAdultBPS(activePage, register, control, edit);
      case 9:
        return renderAdultBPS(activePage, register, control), edit;
      case 10:
        return renderOrderOfService(
          activePage,
          register,
          control,
          setValue,
          edit
        );
      default:
        return renderUnavailable();
    }
  };

  return (
    <Row className="d-flex h-100 justify-content-evenly align-items-center">
      {screenValue === 1 ? (
        renderRequirement(activePage, register, control)
      ) : screenValue === 2 ? (
        <CSM register={register} control={control} formState={formState} edit={edit}/>
      ) : null}
    </Row>
  );
}
