import React, { useState } from "react";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import AddWoundTabBar from "../../components/AddWoundTabBar";
import InteractiveImage from "../../components/BodyImage";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { uploadWoundPhoto } from "../../util/action/woundAction";
import { styles } from "./styles";

const AddWoundScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [reset, setReset] = useState(false);

  const handleLocationSelect = (part) => {
    setLocation(part);
  };

  const handleUploadPhoto = () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        throw new Error("User is not logged in");
      }

      dispatch(uploadWoundPhoto(imageUri, location, user.uid))
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("An error occurred while uploading the photo.");
        });
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred while uploading the photo.");
    }
  };

  const renderPage = () => {
    navigation.navigate("Home");
  };

  //update states and selectedlocation red parts dissapeared
  const updateState = () => {
    setLocation(null);
    setImageUri(null);
  };

  return (
    <View style={styles.container}>
      <AddWoundTabBar setImageUri={setImageUri} location={location} />
      <InteractiveImage setLocation={handleLocationSelect} reset={reset} />

      {imageUri && location && (
        <>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => {
              handleUploadPhoto();
              renderPage();
            }}
          >
            <Text style={styles.buttonText}>Confirm informations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              updateState();
              setReset((prevReset) => !prevReset);
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default AddWoundScreen;
