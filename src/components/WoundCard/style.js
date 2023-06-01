import { StyleSheet } from "react-native";

//create a good card styles for the wound card container image infoContainer infoText
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "75%",
    aspectRatio: 16 / 9, 
  },
  infoContainer: {
    padding: 10,
  },
  infoText: {
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;

