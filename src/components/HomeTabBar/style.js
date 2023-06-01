import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalView: {
      margin: 0,
      backgroundColor: "white",
      padding: 50 ,
      paddingBottom: 100,
      alignItems: "flex-start",

      width: '75%',
      height: '100%',
      position: 'absolute',
    },
    icon:{
      position:'absolute',
      top:  -30,
      right: -10,
      margin: 10,
    },
    textStyle: {
      color: "black",
      paddingTop: 20,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    profileImage: {
      width: 100,
      height: 100,
      paddingTop: 20,
      borderRadius: 50,
      marginBottom: 100,
    },
    buttonStyle: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 20,
      marginTop: 20,
    },
    buttonText: {
      marginLeft: 10,
    },
  });