import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { parseObjectives, parseInterventions } from "../utils/parseData";
import { getFormValue } from "../../clientDetails/utils/formatData";
import { PrintHeader } from "../../../components/PrintHeader";
import { PrintFooter } from "../../../components/PrintFooter";
import { PrintSignatureHeader } from "../../../components/PrintSignatureHeader";

export function TPPdf({ formData, data, activeClient, activeData }) {
  // const handleRender = ({ pageNumber, totalPages }) => {
  //   let style = {};
  //   if (pageNumber === totalPages) {
  //     style = {
  //       position: 'absolute',
  //       fontSize: 12,
  //       bottom: 30,
  //       left: 0,
  //       right: 0,
  //       textAlign: 'center',
  //       color: 'grey'
  //     };
  //   } else {
  //     style = {
  //       marginTop: 10,
  //       marginHorizontal: 10,
  //       padding: '5px'
  //     };
  //   }
  //   return (
  //     <View style={style}>
  //       <Text>Page {pageNumber} / {totalPages}</Text>
  //     </View>
  //   );
  // };
  return (
    <Document>
      <Page size="A4">
        <PrintHeader />
        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>Treatment Plan</Text>
          <Text style={{ fontSize: 15, marginBottom: 10 }}>
            {activeClient.pfirstname + " " + activeClient.plastname}
          </Text>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View
              style={{
                width: "33.33%",
                display: "flex",
                border: "1px solid black",
                margin: "5px",
                alignItems: "center",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <Text style={{ fontSize: 12 }}>Program Start Date</Text>
              <Text style={{ fontSize: 12 }}>{data.f1}</Text>
            </View>
            <View
              style={{
                width: "33.33%",
                display: "flex",
                border: "1px solid black",
                margin: "5px",
                alignItems: "center",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <Text style={{ fontSize: 12 }}>Diagnosis Date</Text>
              <Text style={{ fontSize: 12 }}>{data.f2}</Text>
            </View>
            <View
              style={{
                width: "33.33%",
                display: "flex",
                border: "1px solid black",
                margin: "5px",
                alignItems: "center",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <Text style={{ fontSize: 12 }}>Initial Plan Date</Text>
              <Text style={{ fontSize: 12 }}>{data.f3}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%", margin: "5px" }}>
              <Text style={{ marginBottom: 5, fontSize: "15" }}>
                Client Strengths
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  border: "1px",
                  borderRadius: "5px",
                  padding: "5px",
                  fontSize: "12",
                  height: "100",
                }}
              >
                {data.f4}
              </Text>
            </View>
            <View style={{ width: "50%", margin: "5px" }}>
              <Text style={{ marginBottom: 5, fontSize: "15" }}>
                Client Needs
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  border: "1px",
                  borderRadius: "5px",
                  padding: "5px",
                  fontSize: "12",
                  height: "100",
                }}
              >
                {data.f5}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%", margin: "5px" }}>
              <Text style={{ marginBottom: 5, fontSize: "15" }}>
                Client Abilities
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  border: "1px",
                  borderRadius: "5px",
                  padding: "5px",
                  fontSize: "12",
                  height: "100",
                }}
              >
                {data.f6}
              </Text>
            </View>
            <View style={{ width: "50%", margin: "5px" }}>
              <Text style={{ marginBottom: 5, fontSize: "15" }}>
                Client Preferences
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  border: "1px",
                  borderRadius: "5px",
                  padding: "5px",
                  fontSize: "12",
                  height: "100",
                }}
              >
                {data.f7}
              </Text>
            </View>
          </View>
          <View style={{ margin: "5px" }}>
            <Text style={{ marginBottom: 5, fontSize: "15" }}>
              Projected Family Involvement
            </Text>
            <Text
              style={{
                marginBottom: 10,
                border: "1px",
                borderRadius: "5px",
                padding: "5px",
                fontSize: "12",
                height: "100",
              }}
            >
              {data.f8}
            </Text>
          </View>

          <View style={{ margin: "5px" }}>
            <Text style={{ fontSize: 20, marginBottom: 5 }}>
              Transition / Discharge Plan
            </Text>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <View
                style={{
                  width: "33.33%",
                  border: "1px",
                  borderRadius: "5px",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <Text style={{ fontSize: "12", marginBottom: 5 }}>
                  Projected Discharge/Transition Date
                </Text>
                <Text style={{ fontSize: "12", marginBottom: 15 }}>
                  {data.f9}
                </Text>
                <Text style={{ fontSize: "12", marginBottom: 5 }}>
                  Plans for Discharge/Transition
                </Text>
                <Text
                  style={{
                    fontSize: "12",
                    border: "1px",
                    borderRadius: "5px",
                    padding: "5px",
                    height: "90",
                  }}
                >
                  {data.f10}
                </Text>
              </View>
              <View
                style={{
                  width: "67%",
                  border: "1px",
                  borderRadius: "5px",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <Text style={{ marginBottom: 5, fontSize: "15" }}>
                  Anticipated Step Down Service
                </Text>
                {formData["Services"]
                  .filter((service) => data.f11.includes(service.grouplistid))
                  .map((service) => {
                    return (
                      <Text style={{ fontSize: "12" }}>
                        • {service.groupvalue}
                      </Text>
                    );
                  })}
              </View>
            </View>
          </View>
          <View break style={{ margin: "5px" }}>
            <Text style={{ fontSize: 20, marginBottom: 5 }}>Client Goals</Text>
            {activeData.goals && activeData.goals.length > 0
              ? activeData.goals.map((goal, index) => (
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 20,
                      border: "1px",
                      borderRadius: "5px",
                      padding: "5px",
                      margin: 5,
                    }}
                  >
                    <View style={{ width: "33.33%", margin: 5 }}>
                      <Text style={{ fontSize: "15", marginBottom: 5 }}>
                        {goal.goalname}
                      </Text>
                      <Text style={{ fontSize: "12", marginBottom: 15 }}>
                        {goal.description}
                      </Text>
                      <Text style={{ fontSize: "12", marginBottom: 5 }}>
                        Open Date:{goal.targetdate}
                      </Text>
                      <Text style={{ fontSize: "12" }}>
                        Closed Date: {goal.dateclosed}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "67%",
                        border: "1px solid black",
                        borderRadius: "5px",
                        padding: "5px",
                        margin: 5,
                      }}
                    >
                      {parseObjectives(activeData, goal).length > 0
                        ? parseObjectives(activeData, goal).map(
                            (objective, i) => (
                              <>
                                <View
                                  style={{
                                    flexDirection: "row",
                                    marginBottom: 10,
                                    margin: 5,
                                  }}
                                >
                                  <View style={{ width: "50%" }}>
                                    <Text
                                      style={{
                                        marginBottom: 5,
                                        fontSize: "10",
                                      }}
                                    >
                                      {i + 1 + ". " + objective.description}
                                    </Text>
                                  </View>
                                  <View style={{ width: "25%" }}>
                                    <Text style={{ fontSize: "10" }}>
                                      Open Date:
                                    </Text>
                                    <Text style={{ fontSize: "10" }}>
                                      {objective.opendate}
                                    </Text>
                                  </View>
                                  <View style={{ width: "25%" }}>
                                    <Text style={{ fontSize: "10" }}>
                                      Closed Date:
                                    </Text>
                                    <Text style={{ fontSize: "10" }}>
                                      {objective.targetdate}
                                    </Text>
                                  </View>
                                </View>
                                <View
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  {parseInterventions(
                                    activeData,
                                    objective
                                  ).map((intervention, x) => {
                                    return (
                                      <View
                                        style={{
                                          flexDirection: "row",
                                          border: "1px",
                                          borderRadius: "5px",
                                          padding: "5px",
                                          margin: 5,
                                        }}
                                      >
                                        <View style={{ width: "50%" }}>
                                          <Text
                                            style={{
                                              marginBottom: 5,
                                              fontSize: "10",
                                            }}
                                          >
                                            {intervention.description}
                                          </Text>
                                          <Text
                                            style={{
                                              marginBottom: 5,
                                              fontSize: "10",
                                              fontStyle: "italic",
                                            }}
                                          >
                                            {getFormValue(
                                              "Services",
                                              intervention.services.split(","),
                                              formData
                                            )}
                                          </Text>
                                        </View>
                                        <View style={{ width: "25%" }}>
                                          <Text style={{ fontSize: "10" }}>
                                            Frequency:
                                          </Text>
                                          <Text style={{ fontSize: "10" }}>
                                            {getFormValue(
                                              "Frequency",
                                              [intervention.frequency],
                                              formData
                                            )}
                                          </Text>
                                        </View>
                                        <View style={{ width: "25%" }}>
                                          <Text style={{ fontSize: "10" }}>
                                            Staff:
                                          </Text>
                                          <Text style={{ fontSize: "10" }}>
                                            {getFormValue(
                                              "Staff Title",
                                              intervention.stafftitleid.split(
                                                ","
                                              ),
                                              formData
                                            )}
                                          </Text>
                                        </View>
                                      </View>
                                    );
                                  })}
                                </View>
                              </>
                            )
                          )
                        : null}
                    </View>
                  </View>
                ))
              : null}
          </View>
        </View>
        <PrintFooter />
      </Page>
      <Page>
        <PrintSignatureHeader />
      <PrintFooter />
      </Page>
    </Document>
  );
}
