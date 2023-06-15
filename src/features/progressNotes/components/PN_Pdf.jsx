import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { getListItem } from "../../../services/api";
import { useState, useEffect } from "react";
import { PrintHeader } from "../../../components/PrintHeader";

export function PNPdf({ formData, data, activeClient }) {
  console.log(formData, data);
  const [convertedValues, setConvertedValues] = useState({});

  useEffect(() => {
    getListItemName(data.f7);
    getListItemName(data.f6);
  }, [data]);

  const getListItemName = async (grouplistid) => {
    const listItem = await getListItem(grouplistid).then((item) => {
      if (item)
        setConvertedValues((prevState) => ({
          ...prevState,
          [grouplistid]: item.groupvalue,
        }));
    });
  };
  return (
    <Document>
      <Page size="A4">
        <PrintHeader />
        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>Progress Note</Text>
          <Text style={{ fontSize: 15, marginBottom: 20 }}>
            {activeClient.pfirstname + " " + activeClient.plastname}
          </Text>
          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                width: "33.33%",
                display: "flex",
                margin: "5px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Consumer:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                  {activeClient.pfirstname +
                    " " +
                    activeClient.plastname}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Date of Service:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                  {data.f1}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Start:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                  {data.f1}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Diagnosis:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                  {data.f12}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "33.33%",
                display: "flex",
                margin: "5px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Contact Type:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                  {convertedValues[data.f7]}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Units Used:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                  {data.f5}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>End:</Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginBottom: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {data.f2}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "33.33%",
                display: "flex",
                margin: "5px",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Setting:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                  {convertedValues[data.f6]}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Policy #:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>???</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <View style={{ display: "flex", width: "50%" }}>
                  <Text style={{ fontSize: 12, marginBottom: "5px" }}>
                    Service Code:
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "50%",
                    flexWrap: "wrap",
                  }}
                >
                  {data.f11.split(",").map((code, index) => (
                    <Text
                      key={`${code + index}`}
                      style={{ fontSize: 12, marginBottom: "5px" }}
                    >
                      {code}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Consumer met goal(s) this session:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                {data.f61}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Service Delivered:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}></Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <View
                style={{ width: "50%", display: "flex", flexDirection: "row" }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Person(s) Involved:
                </Text>
                <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                  {data.f8}
                </Text>
              </View>
              <View
                style={{ width: "50%", display: "flex", flexDirection: "row" }}
              >
                <Text style={{ fontSize: 12, marginRight: "10px" }}>
                  Consumers overall affect:
                </Text>
                <Text style={{ fontSize: 12 }}>{data.f9}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Relevant Changes in Medical Conditions/Medications since last
                visit?:
              </Text>
              <Text style={{ fontSize: 12 }}>{data.f10}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                If yes, please explain:
              </Text>
              <Text style={{ fontSize: 12 }}>{data.f60}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Service Plan Objectives/Interventions
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>Goal:</Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                {data.f13}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Objective:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                {data.f14}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Intervention:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                {data.f15}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Behavior:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                {data.f63}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Intervention:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                {data.f64}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Response:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                {data.f65}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>Plan:</Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                {data.f66}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Strengths:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}>
                These are my strengths
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <Text style={{ fontSize: 12, marginRight: "10px" }}>
                Next Appointment:
              </Text>
              <Text style={{ fontSize: 12, marginBottom: "10px" }}></Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
