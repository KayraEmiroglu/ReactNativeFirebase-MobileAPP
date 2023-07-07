import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
  const [loading, setLoading] = useState(false);

  const handleLocationSelect = (part) => {
    setLocation(part);
  };

  const handleUploadPhoto = () => {
    try {
      setLoading(true);
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        throw new Error("User is not logged in");
      }

      dispatch(uploadWoundPhoto(imageUri, location, user.uid)).then(() => {
        updateState();
        setReset((prevReset) => !prevReset);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred while uploading the photo.");
      setLoading(false);
    }
  };

  const renderLoadingScreen = () => {
    if (loading) {
      return (
        <View style={styles.loadingOverlay}>
          <View style={styles.blurBackground} />
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="blue" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
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
      {renderLoadingScreen()}
    </View>
  );
};

export default AddWoundScreen;
