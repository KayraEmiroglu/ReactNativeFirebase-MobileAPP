import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Progress from "../ProgressSections";

// Sample data for the patient, location, onset, and last assessment
const patient = "John Smith";
const location = "Right Leg";
const onset = "June12, 2021";
const lastAssessment = "July 5, 2021";

const WoundCardDetails = ({ route }) => {
  const [showProgress, setShowProgress] = useState(false);
  const { wound } = route.params;

  const handlePhotoClick = () => {
    setShowProgress(!showProgress);
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.infoText}>{`Patient : ${patient}`}</Text>
        <Text style={styles.infoText}>{`Location: ${location}`}</Text>
        <Text style={styles.infoText}>{`Onset: ${onset}`}</Text>
        <Text
          style={styles.infoText}
        >{`Last Assessment: ${lastAssessment}`}</Text>
      </View>

      <TouchableOpacity onPress={handlePhotoClick}>
        <Image style={styles.image} source={{ uri: wound.photoUrl }} />
      </TouchableOpacity>
      {showProgress &&  <Progress/>
}
     
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  topInfo: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
};

export default WoundCardDetails;
