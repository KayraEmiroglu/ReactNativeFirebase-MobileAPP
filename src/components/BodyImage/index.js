import React, { useState } from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./stylesFront";
import Front from "./front";
import Back from "./back";

const InteractiveImage = ({ setLocation }) => {
  const [isFrontVisible, setIsFrontVisible] = useState(true);

  const handleButtonPress = () => {
    setIsFrontVisible(!isFrontVisible);
  };

  const handleLocationSelect = (part) => {
    setLocation(part);
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <FontAwesomeIcon icon={faRepeat} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      {isFrontVisible ? (
        <Front onSelect={handleLocationSelect} />
      ) : (
        <Back onSelect={handleLocationSelect} />
      )}
    </View>
  );
};

export default InteractiveImage;