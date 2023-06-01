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
      const photoUrl = await uploadPhoto(imageUri);
      console.log("Databaseye gitti:", photoUrl);

      const woundId = uuidv4();

      const wound = {
        id: woundId, // Burada id'yi yolluyoruz
        createdAt: new Date().toISOString(),
        photoUrl: photoUrl,
        location: location,
        updatedAt:null,
      };
  
      await FirestoreService.addWound(wound);
      Alert.alert("Wound added successfully!");
      
    } catch (error) {
      console.log("Error uploading photo:", error);
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