import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  photoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  placeholderText: {
    fontSize: 16,
    color: "#999",
  },
});