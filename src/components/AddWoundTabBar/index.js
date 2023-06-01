import React, { useState } from "react";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome";
import { handleCameraPress } from "../../util/camera";


const AddWoundTabBar = ({setImageUri,location}) => {
  const navigation = useNavigation();


  return (
    <>
      <Header
        leftComponent={
          <Icon
            name="arrow-left"
            size={30}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={{ text: "Add New Wound", style: { color: "#fff" } }}
        rightComponent={
          <Icon
            name="camera"
            size={30}
            color="#fff"
            onPress={() => handleCameraPress(setImageUri,location)}
          />
        }
        containerStyle={{
          backgroundColor: "purple",
          justifyContent: "space-around",
        }}
      />
    </>
  );
};

export default AddWoundTabBar;
