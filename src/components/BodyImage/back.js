import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from "./stylesBack";

const Back = (props) => {
    const [selectedPart, setSelectedPart] = useState(null);
    const windowWidth = Dimensions.get("window").width;
  
    const handlePress = (part) => {
      console.log(part); // burada, tıklanan vücut bölgesinin adını konsola yazdırırız
      setSelectedPart(part);
      props.onSelect(part);  
  };
  

  
    const imageWidth = windowWidth - 150;

  return (
    <View>
      <Image
        source={require("../../../assets/images/back.png")}
        style={[styles.image, { width: imageWidth, height: imageWidth * 2 }]}
      />
      <TouchableOpacity
        style={[styles.head, selectedPart === "head" ? styles.selected : null]}
        onPress={() => handlePress("head")}
      />
      <TouchableOpacity
        style={[
          styles.leftArm,
          selectedPart === "leftArm" ? styles.selected : null,
        ]}
        onPress={() => handlePress("leftArm")}
      />
      <TouchableOpacity
        style={[
          styles.rightArm,
          selectedPart === "rightArm" ? styles.selected : null,
        ]}
        onPress={() => handlePress("rightArm")}
      />
      <TouchableOpacity
        style={[styles.body, selectedPart === "body" ? styles.selected : null]}
        onPress={() => handlePress("body")}
      />
      <TouchableOpacity
        style={[
          styles.rightLeg,
          selectedPart === "rightLeg" ? styles.selected : null,
        ]}
        onPress={() => handlePress("rightLeg")}
      />
      <TouchableOpacity
        style={[
          styles.leftLeg,
          selectedPart === "leftLeg" ? styles.selected : null,
        ]}
        onPress={() => handlePress("leftLeg")}
      />
    </View>
  )
}

export default Back;
