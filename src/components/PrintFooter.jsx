import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

export function PrintFooter() {
  return (
    <View
      fixed
      style={{
        position: "absolute",
        marginTop: 10,
        marginHorizontal: 10,
        bottom: 25,
        left: 0,
        right: 0,
        textAlign: "center",
        borderTop: "1px solid black",
      }}
    ></View>
  );
}
