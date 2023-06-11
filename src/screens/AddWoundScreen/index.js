import React, { useState } from "react";
import { Alert, Button, View } from "react-native";
import AddWoundTabBar from "../../components/AddWoundTabBar";
import InteractiveImage from "../../components/BodyImage";
import FirestoreService from "../../util/firebase/firestoreServices";
import { uploadPhoto } from "../../util/firebase/firebaseStorage";
import { v4 as uuidv4 } from "uuid";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { uploadWoundPhoto } from "../../util/action/woundAction";

const AddWoundScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [imageUri, setImageUri] = useState(null);

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

 


  return (
    <View>
      <AddWoundTabBar
        setImageUri={setImageUri}
        location={location}
      />
      <InteractiveImage
        setLocation={handleLocationSelect}
      />
         
      {imageUri && location && (
        <Button title="Upload to Database" onPress={() =>{ 
          handleUploadPhoto();
          renderPage();
        }} />  
          )}
      </View>
  );
};

export default AddWoundScreen;