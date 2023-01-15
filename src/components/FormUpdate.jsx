import { Toast } from "react-bootstrap";

function FormUpdate({ data, client, show, toggleShow }) {
  return (
    <Toast show={show} onClose={toggleShow} delay={3000} postition="top-start" autohide bg={data.status === "Error" ? "danger" : "success"}>
      <Toast.Header>
        <div className="d-flex flex-column">
          <strong className="text-center">
            {client.pfirstname} {client.plastname}
          </strong>
          <div className="text-center">
            {data.message}
          </div>
        </div>
      </Toast.Header>
    </Toast>
  );
}

export default FormUpdate;
