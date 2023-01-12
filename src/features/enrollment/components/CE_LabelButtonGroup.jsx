import { Form, Button } from "react-bootstrap";
import "./CE_Manager.css";

export function LabelButtonGroup({ title, name, trigger, add, close, save }) {
  return (
    <Form.Label className="CE-form-label">
      {title}
      <div className="CE-form-label-button-container">
        {trigger ? (
          <>
            <Button
              className="CE-form-label-button me-2"
              name={name}
              type="submit"
              variant="outline-success"
              size="sm"
              onClick={save}
            >
              Save
            </Button>
            <Button
              className="CE-form-label-button"
              name={name}
              variant="outline-secondary"
              size="sm"
              onClick={close}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            size="sm"
            variant="outline-primary"
            name="referralSource"
            className="CE-form-label-button"
            onClick={add}
          >
            new
          </Button>
        )}
      </div>
    </Form.Label>
  );
}
