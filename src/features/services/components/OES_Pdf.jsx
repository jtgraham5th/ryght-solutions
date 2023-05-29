import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { PrintHeader } from "../../../components/PrintHeader";

export function OESPdf({ data, activeClient, activeData }) {
  return (
    <Document>
      <Page size="A4">
        <PrintHeader />
        <View style={{ marginTop: 10, marginHorizontal: 20, marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>
            Order of Service
          </Text>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={{ fontSize: 15, marginRight: 10 }}>
              {activeClient[20].pfirstname + " " + activeClient[20].plastname}
            </Text>
            <Text style={{ fontSize: 12, marginRight: 5 }}>Insurance:</Text>
            <Text style={{ fontSize: 12, marginRight: 10 }}>{data.f5}</Text>
            <Text style={{ fontSize: 12, marginRight: 5 }}>Gender:</Text>
            <Text style={{ fontSize: 12 }}>{data.f6}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
            <Text style={{ fontSize: 12 }}>Start Date</Text>
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
            <Text style={{ fontSize: 12 }}>End Date</Text>
            <Text style={{ fontSize: 12 }}>{data.f3}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            border: "1px solid black",
            borderRadius: "10px",
            margin: "20px",
            flexWrap: "wrap",
            padding: "10px",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              padding: 5,
              width: "100%",
              textAlign: "center",
            }}
          >
            Please place an Intial and Date by Service(s) being requested for
            consumer
          </Text>
          {activeData.map((item, i) => {
            return (
              <View
                key={item.grouplistid + i}
                style={{
                  width: "48%",
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid black",
                  margin: "5px",
                  alignItems: "center",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    border: "1px solid black",
                    padding: 5,
                  }}
                >
                  {data["f" + (8 + i)]}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "5px",
                  }}
                >
                  <Text style={{ fontSize: 12 }}>{item.groupvalue}</Text>
                  <Text style={{ fontSize: 12 }}>{data.f1}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
}
