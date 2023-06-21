import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteWoundAsync } from "../../util/action/woundAction";

//create a card with the wound information
const WoundCard = ({ wound, onPress,count }) => {
  const dispatch = useDispatch();
  const formattedDate = moment(wound.createdAt).format("DD/MM/YYYY");

  const handleDelete = () => {
    Alert.alert(
      "Delete wound",
      "Are you sure you want to delete this wound?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => dispatch(deleteWoundAsync(wound.id)),
        },
      ],
      { cancelable: false }
    );
  };

  let woundLocation = wound.location;

  //TODO kart yapısında kullanılacak 
  let woundUri = wound.photoUrl;

  if (woundLocation === "head") {
    woundLocation = "Head";
  }else if (woundLocation === "back") {
    woundLocation = "Back";
  }else if (woundLocation === "leftArm") {
    woundLocation = "Left Arm";
  }else if (woundLocation === "rightArm") {
    woundLocation = "Right Arm";
  }else if (woundLocation === "leftLeg") {
    woundLocation = "Left Leg";
  }else if (woundLocation === "rightLeg") {
    woundLocation = "Right Leg";
  }else if (woundLocation === "leftHand") {
    woundLocation = "Left Hand";
  }else if (woundLocation === "body") {
    woundLocation = "Body";
  }




  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>
        Wound : {count}
      </Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoLocation}>Location:  {woundLocation}</Text>
        <Text style={styles.infoDate}>Date:  {formattedDate}</Text>
      </View>
      <Image style={styles.image} source={{ uri: wound.photoUrl }} />
      {/* delete button right top the card use trash icon */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <FontAwesomeIcon icon={faTrash} size={20} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles =  StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 30,
    margin: 9,
    position: 'relative',
  },
  title: {
    position: 'absolute', 
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
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
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute', // position the button absolutely
    top: 5, // adjust as needed
    right: 5, // adjust as needed
  },
});


export default WoundCard;
