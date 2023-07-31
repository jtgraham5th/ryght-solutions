import React from "react";
import {  View, Text } from "@react-pdf/renderer";

export function PrintHeader({ docTitle, activeClient, insurance, gender }) {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderBottom: "1px solid black",
        padding: "5px",
      }}
      fixed
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: "50%",
            display: "flex",
            margin: "5px",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontSize: 20 }}>{docTitle}</Text>
          <Text style={{ fontSize: 15, marginTop: 5 }}>
            {activeClient.pfirstname + " " + activeClient.plastname}
          </Text>
          <Text style={{ fontSize: 12 }}>
            Client ID: {activeClient.patientid}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontSize: 12 }}>DOB: </Text>
            <Text style={{ fontSize: 12, marginRight: 10 }}>
              {activeClient.dob}
            </Text>
            <Text style={{ fontSize: 12, marginRight: 5 }}>Gender:</Text>
            <Text style={{ fontSize: 12 }}>{gender}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontSize: 12, marginRight: 5 }}>Insurance:</Text>
            <Text style={{ fontSize: 12, marginRight: 10 }}>{insurance}</Text>
          </View>
        </View>
        <View
          style={{
            width: "50%",
            display: "flex",
            margin: "5px",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "light" }}>
            Graham & Associates, Inc.
          </Text>
          <Text style={{ fontSize: 12 }}>1518 Airport Road</Text>
          <Text style={{ fontSize: 12 }}>Hinesville, GA 31313-9439</Text>
          <Text style={{ fontSize: 12 }}>Office : 912-559-5536</Text>
          <Text style={{ fontSize: 12 }}>Fax : 614-388-3712</Text>
        </View>
      </View>
    </View>
  );
}
