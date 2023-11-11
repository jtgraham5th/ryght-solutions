import { useEffect } from "react";
import { Card, ListGroup, Row, Col, Button, Badge } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { PNNewNote } from "../../progressNotes";
import { SelectField, DateField } from "../../../components/form/fieldCreator";
import { useUser } from "../../../context/UserContext";
import { filterByStaff, filterDatesInRange, filterByFunding } from "../utils/filterData";
import { X } from "react-bootstrap-icons";
import { useClient } from "../../../context/ClientContext";
import { billingStatusList } from "../../../data/formData";

export function NotesFilterList({
  filteredNotes,
  setFilteredNotes,
  control,
  register,
  watch,
  reset,
  clientInfo,
}) {
  const { allNotes } = useClient();
  const { allUsers } = useUser();

  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const fundingSource = watch("fundingSource");
  const staff = watch("staff");
  const billingStatus = watch("billingStatus");

  useEffect(() => {
    if (startDate && endDate) {
      const filteredDates = filterDatesInRange(
        startDate,
        endDate,
        filteredNotes
      );
      setFilteredNotes(filteredDates); // Do something with the filtered dates
    }
  }, [startDate, endDate]);

  useEffect(() => {
    let staffFilter = allNotes;
    if (staff) {
      staffFilter = filterByStaff(staff, filteredNotes);
    }
    setFilteredNotes(staffFilter); // Do something with the filtered dates
  }, [staff]);

  useEffect(() => {
    let fundingFilter = allNotes;
    if (fundingSource) {
      fundingFilter = filterByFunding(fundingSource, filteredNotes, clientInfo);
      setFilteredNotes(fundingFilter); // Do something with the filtered dates
    }
  }, [fundingSource]);

  const resetFilters = () => {
    reset();
    setFilteredNotes(allNotes);
  };
  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <Card.Title className="p-3 w-100 border mb-0 d-flex justify-content-between">Filters<Button size="sm" variant="secondary" onClick={resetFilters}>
                <X size={20} /> Clear Filters
              </Button></Card.Title>
        <ListGroup style={{ height: "32rem" }} variant="flush">
          <div
            style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
          >
            <ListGroup.Item className="d-flex flex-column justify-content-center">
              <h6>Filter by Date Range</h6>
              <Row>
                <Col>
                  <DateField
                    control={control}
                    labelName="From: "
                    fieldName="startDate"
                  />
                </Col>
                <Col>
                  <DateField
                    control={control}
                    labelName="To: "
                    fieldName="endDate"
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Filter by Staff:</h6>
              <SelectField
                listData={allUsers}
                itemDetail={["fullname", "fullname"]}
                register={register}
                labelName="Select Staff Member"
                fieldName="staff"
                labelStyle="m-0 pe-1 small"
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Filter by Billing Status: <Badge bg="secondary">Disabled</Badge></h6> 
              <SelectField
                listData={billingStatusList}
                register={register}
                labelName="Select Staff Member"
                fieldName="billingStatus"
                labelStyle="m-0 pe-1 small"
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Filter by Funding Source:</h6>
              <SelectField
                register={register}
                fieldName="fundingSource"
                groupName="Funding Source "
                labelStyle="CE-form-label"
              />
            </ListGroup.Item>
          </div>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
