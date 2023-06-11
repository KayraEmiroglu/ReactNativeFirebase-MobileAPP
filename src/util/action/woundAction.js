import { Alert } from "react-native";
import { uploadPhoto } from "../firebase/firebaseStorage";
import firestoreServices from "../firebase/firestoreServices";
import { v4 as uuidv4 } from "uuid";

export const fetchWounds = () => {
  return async (dispatch) => {
    try {
      const userId = await firestoreServices.getCurrentUserId();
      const fetchedWounds = await getWoundsByUserId(userId);
      dispatch({ type: "FETCH_WOUNDS", payload: fetchedWounds });
    } catch (error) {
      console.error("Error fetching wounds: ", error);
    }
  };
};

export const addWound = (wound) => {
  return {
    type: "ADD_WOUND",
    payload: wound,
  };
};

export const deleteWound = (woundId) => {
  return {
    type: 'DELETE_WOUND',
    payload: woundId,
  };
};

export const uploadWoundPhoto = (imageUri, location, userUid) => {
  return async (dispatch) => {
    try {
      const photoUrl = await uploadPhoto(imageUri, userUid);
      console.log("Uploaded to database:", photoUrl);

      const woundId = uuidv4();

      const wound = {
        id: woundId,
        createdAt: new Date().toISOString(),
        photoUrl: photoUrl,
        location: location,
        updatedAt: null,
        userId: userUid,
      };

      await firestoreServices.addWound(wound);
      dispatch(addWound(wound));
      Alert.alert("Wound added successfully!");
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred while uploading the photo.");
      return Promise.reject(error);
    }
  };
};



//delete
export const deleteWoundAsync = (woundId) => {
  return async (dispatch) => {
    try {
      // ... perform delete operation, API call, or update store logic ...
      await firestoreServices.deleteWound(woundId);


      // Dispatch deleteWound action after successful deletion
      dispatch(deleteWound(woundId));
      console.log('Wound deleted successfully');
    } catch (error) {
      console.error('Error deleting wound: ', error);
    }
  };

};


