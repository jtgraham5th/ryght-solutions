import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      alignItems: "center",
      margin: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    row: {
      flexDirection: "row",
      marginBottom: 10,
    },
    box: {
      width: "33.33%",
      display: "flex",
      border: "1px solid black",
      margin: "5px",
      alignItems: "center",
      borderRadius: "10px",
      padding: "5px",
    },
    label: {
      fontSize: 12,
    },
    text: {
      fontSize: 12,
    },
    col: {
      width: "50%",
      margin: "5px",
    },
    heading: {
      marginBottom: 5,
      fontSize: "15",
    },
    textarea: {
      marginBottom: 10,
      border: "1px",
      borderRadius: "5px",
      padding: "5px",
      fontSize: "12",
      height: "100",
    },
    notes: {
      marginBottom: 5,
      fontSize: "15",
    },
    notesBox: {
      marginBottom: 10,
      border: "1px",
      borderRadius: "5px",
      padding: "5px",
      fontSize: "12",
      height: "100",
    },
    transitionBox: {
      border: "1px",
      borderRadius: "5px",
      padding: "5px",
      margin: 5,
    },
    transitionLabel: {
      fontSize: "12",
      marginBottom: 5,
    },
    transitionText: {
      fontSize: "12",
    },
    transitionNotes: {
      fontSize: "12",
      border: "1px",
      borderRadius: "5px",
      padding: "5px",
      height: "90",
    },
  });
  