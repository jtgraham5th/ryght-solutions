import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

export function PrintHeader() {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        borderBottom: "1px solid black",
        padding: "5px",
      }}
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
          <Text style={{ fontSize: 12, fontWeight: "light" }}>
            Graham & Associates, Inc.
          </Text>
          <Text style={{ fontSize: 10 }}>1518 Airport Road</Text>
          <Text style={{ fontSize: 10 }}>Hinesville, GA 31313-9439</Text>
        </View>
        <View
          style={{
            width: "50%",
            display: "flex",
            margin: "5px",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 10 }}>Office : 912-559-5536</Text>
          <Text style={{ fontSize: 10 }}>Fax : 614-388-3712</Text>
          <Text style={{ fontSize: 10 }}>Email : grahamalinda@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}
