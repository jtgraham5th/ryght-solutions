import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

export function PrintSignatureHeader() {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        borderBottom: "1px solid black",
        padding: "5px",
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "light", textAlign: "center" }}>
        Graham & Associates, Inc.
      </Text>
      <Text style={{ fontSize: 10, textAlign: "center" }}>
        1518 Airport Road Hinesville, GA 31313-9439
      </Text>
      <Text style={{ fontSize: 10, textAlign: "center" }}>
        Office : 912-559-5536 Fax : 614-388-3712
      </Text>
      <Text style={{ fontSize: 10, textAlign: "center" }}>
        Email : grahamalinda@gmail.com
      </Text>
    </View>
  );
}
