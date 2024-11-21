import { StyleSheet } from "react-native";

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#161622",
  },
  textWhite: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffff",
  },
  textBlack: {
    fontSize: 16,
    fontWeight: "400",
    color: "#161622",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  button: {
    padding: 12,
    backgroundColor: "#fea000",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default defaultStyles;
