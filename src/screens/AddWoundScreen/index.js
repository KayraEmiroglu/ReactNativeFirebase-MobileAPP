import React, { useState } from "react";
import { Alert, Button, View } from "react-native";
import AddWoundTabBar from "../../components/AddWoundTabBar";
import InteractiveImage from "../../components/BodyImage";
import FirestoreService from "../../util/firebase/firestoreServices";
import { uploadPhoto } from "../../util/firebase/firebaseStorage";
import { v4 as uuidv4 } from "uuid";
import { useNavigation } from "@react-navigation/native";

const AddWoundScreen = () => {
  const navigation = useNavigation();


  const [location, setLocation] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  const handleLocationSelect = (part) => {
    setLocation(part);
  };

  const handleUploadPhoto = async () => {
    try {
      const auth = getAuth();
      const user = currentUser(auth);
  
      if (!user) {
        throw new Error("User is not logged in");
      }
  
      const photoUrl = await uploadPhoto(imageUri, user.uid);
      console.log("Uploaded to database:", photoUrl);
  
      const woundId = uuidv4();
  
      const wound = {
        id: woundId,
        createdAt: new Date().toISOString(),
        photoUrl: photoUrl,
        location: location,
        updatedAt: null,
        userId: user.uid,
      };
  
      await FirestoreService.addWound(wound);
      Alert.alert("Wound added successfully!");
  
      renderPage(); // Sayfayı geçiş yapmak için
    } catch (error) {
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
         
      {imageUri && location &&  (
        <Button title="Upload to Database" onPress={() =>{ 
          handleUploadPhoto();
          renderPage();
        }} />  
          )}
      </View>
  );
};

export default AddWoundScreen;