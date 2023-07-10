import { Card, ListGroup, ButtonGroup, ToggleButton } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./DocManager.css";
import { DocItem } from "./DocItem";
import { useClient } from "../../../context/ClientContext";
import { DocNew } from "./DocNew";
import { BillingItem } from "./BillingItem";
import { useState } from "react";

export function DocList({
  activeDocument,
  setActiveDocument,
  resetDocument,
  screenValue,
  setScreenValue,
  batchBilling, 
  setBatchBilling
}) {
  const { activeDocuments, activeBillingTx } = useClient();

  const screens = [
    { name: "Documents", value: 1 },
    { name: "Billing", value: 2 },
  ];

  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <Card.Title className="p-3 w-100 border mb-0">
          <ButtonGroup className="w-100 mt-2 mb-2 text-center">
            {screens.map((screen, idx) => (
              <ToggleButton
                key={idx}
                id={`screen-${idx}`}
                type="radio"
                variant={
                  screen.value === screenValue ? "primary" : "outline-primary"
                }
                name="screen"
                value={screen.value}
                onChange={(e) => setScreenValue(screen.value)}
              >
                {screen.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Card.Title>
       {screenValue === 1 ? <DocNew /> : null}
        <ListGroup style={{ height: "32rem" }} variant="flush">
          <div
            style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
          >
            {screenValue === 1
              ? activeDocuments
                  .filter((item) => item.docid > 3 && item.pageid === 1)
                  .map((value, i) => {
                    return (
                      <DocItem
                        key={i}
                        index={i}
                        data={value}
                        selectDoc={setActiveDocument}
                        active={activeDocument === value}
                        resetDocument={resetDocument}
                      />
                    );
                  })
              : activeBillingTx.map((value, i) => {
                  return (
                    <BillingItem
                      key={i}
                      index={i}
                      data={value}
                      selectDoc={setActiveDocument}
                      active={activeDocument === value}
                      resetDocument={resetDocument}
                      batchBilling={batchBilling}
                      setBatchBilling={setBatchBilling}
                    />
                  );
                })}
          </div>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
