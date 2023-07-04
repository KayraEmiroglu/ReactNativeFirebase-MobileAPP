import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Swipeable } from "react-native-gesture-handler";

//create a card with the wound information
const WoundCard = ({ wound, onPress,onDelete, count }) => {
  const formattedDate = moment(wound.createdAt).format("DD/MM/YYYY");



  let woundLocation = wound.location;

  //TODO kart yapısında kullanılacak
  let woundUri = wound.photoUrl;

  const locationMap = {
    head: "Head",
    back: "Back",
    leftArm: "Left Arm",
    rightArm: "Right Arm",
    leftLeg: "Left Leg",
    rightLeg: "Right Leg",
    leftHand: "Left Hand",
    body: "Body",
  };

   if (woundLocation in locationMap) {
    woundLocation = locationMap[woundLocation];
  }



  const renderRightActions = () => {
    return (
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <FontAwesomeIcon icon={faTrash} color="white" size={20} />
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>Wound: {count}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLocation}>Location: {woundLocation}</Text>
          <Text style={styles.infoDate}>Date: {formattedDate}</Text>
        </View>
        <Image style={styles.image} source={{ uri: wound.photoUrl }} />
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 30,
    margin: 9,
    position: "relative",
    overflow: "hidden", 
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  infoLocation: {
    fontSize: 15,
    paddingBottom: 20,
    fontWeight: "bold",
  },
  deleteButton: {
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 10,
    width: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    transform: [{ translateX: 10 }],
    alignItems: 'center', // Buton içeriğini yatayda ortalamak için
    marginTop: 10, // Kartın üstünden biraz yukarıya yerleştirmek için
    marginBottom: 10, // Kartın altından biraz aşağıya yerleştirmek için
  },
});

export default WoundCard;
