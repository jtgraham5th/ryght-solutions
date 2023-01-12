import React, { useState, forwardRef } from "react";
import { Form, Dropdown, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../pages/UserDashboard.css";
import { useClient } from "../context/ClientContext";

function ClientSelectDropdown(props) {
  let navigate = useNavigate();

  const { selectClient, getContactList, sortedClients, loading } = useClient();
  const [alphaSelector, setAlphaSelector] = useState("");
  const [searchResults, setSearchResults] = useState(sortedClients["a"].sort());
  const [searchValue, setSearchValue] = useState("");

  const handleClientSelect = async (patientid) => {
    for (let i = 20; i < 23; i++) {
      await selectClient(patientid, i);
    }
    for (let i = 21; i < 25; i++) {
      await getContactList(patientid, i);
    }
    return;
  };
  const searchClients = (e) => {
    e.preventDefault();
    const searchTerm = e.currentTarget.value;
    setSearchValue(searchTerm);
    if (searchTerm.length === 1) {
      setAlphaSelector(searchTerm);
      setSearchResults(sortedClients[searchTerm].sort());
    }
  };
  const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <Dropdown.Toggle
      id="dropdown-custom-components"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Dropdown.Toggle>
  ));
  const CustomMenu = forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={searchClients}
            value={searchValue}
          />

          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !searchValue ||
                child.props.children.toLowerCase().includes(searchValue)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {loading ? <Spinner animation="border" size="sm" /> : ""} Select Client
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
        {alphaSelector ? (
          searchResults.sort().map((result, index) => (
            <Dropdown.Item
              key={index}
              eventKey={index}
              onClick={() => {
                handleClientSelect(result.patientid).then(() =>
                  navigate(`/patient/${result.patientid}`)
                );
              }}
            >
              {result.name}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item className="client-select-empty">
            Start by typing the patient's last Name
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ClientSelectDropdown;
