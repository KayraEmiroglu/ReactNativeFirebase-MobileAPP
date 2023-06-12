import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./stylesFront";

const Front = (props) => {
  const [selectedPart, setSelectedPart] = useState(null);
  const windowWidth = Dimensions.get("window").width;

  const imageWidth = windowWidth - 150;

  const handlePress = (part) => {
    console.log(part); // burada, tıklanan vücut bölgesinin adını konsola yazdırırız
    setSelectedPart(part);
    props.onSelect(part);
  };

  useEffect(() => {
    if (props.reset) {
      setSelectedPart(null);
    }
  }, [props.reset]);

  return (
    <View>
      <Image
        source={require("../../../assets/images/front.png")}
        style={[styles.image, { width: imageWidth, height: imageWidth * 2 }]}
      />
      <TouchableOpacity
        style={[styles.head, selectedPart === "head" ? styles.selected : null]}
        onPress={() => {
          handlePress("head");
        }}
      />
      <TouchableOpacity
        style={[
          styles.leftArm,
          selectedPart === "rightArm" ? styles.selected : null,
        ]}
        onPress={() => handlePress("rightArm")}
      />
      <TouchableOpacity
        style={[
          styles.rightArm,
          selectedPart === "leftArm" ? styles.selected : null,
        ]}
        onPress={() => handlePress("leftArm")}
      />
      <TouchableOpacity
        style={[styles.body, selectedPart === "body" ? styles.selected : null]}
        onPress={() => handlePress("body")}
      />
      <TouchableOpacity
        style={[
          styles.leftLeg,
          selectedPart === "leftLeg" ? styles.selected : null,
        ]}
        onPress={() => handlePress("leftLeg")}
      />
      <TouchableOpacity
        style={[
          styles.rightLeg,
          selectedPart === "rightLeg" ? styles.selected : null,
        ]}
        onPress={() => handlePress("rightLeg")}
      />
    </View>
  );
};

export default Front;
