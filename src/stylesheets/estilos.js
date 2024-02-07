import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    /* justifyContent: "center",
      flexDirection: "row", */ // padrão é column
  },
  head: { backgroundColor: "gray", flex: 0.8 },
  content: {
    backgroundColor: "white",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    marginBottom: 4,
    marginTop: 4,
  },
  footer: { backgroundColor: "brown", flex: 0.7 },
  title: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  paragaph: {
    fontSize: 20,
    textAlign: "center",
    color: "#007BA7",
  },
});

export default styles;
