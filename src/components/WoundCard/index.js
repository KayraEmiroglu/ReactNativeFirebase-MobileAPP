import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./style";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteWoundAsync } from "../../util/action/woundAction";

//create a card with the wound information
const WoundCard = ({ wound, onPress }) => {
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
  let uri = null;

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
      <Image style={styles.image} source={{ uri: wound.photoUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoLocation}>Location:  {woundLocation}</Text>
        <Text style={styles.infoDate}>Date:  {formattedDate}</Text>
      </View>
      {/* delete button right top the card use trash icon */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <FontAwesomeIcon icon={faTrash} size={20} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default WoundCard;
