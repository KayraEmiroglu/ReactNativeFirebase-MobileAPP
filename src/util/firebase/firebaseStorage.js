import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "../../firebase";

//getdownloadurl and also post on database
export const uploadPhoto = async (imageUri) => {
  const response = await fetch(imageUri);
  const blob = await response.blob();
  
  const storageRef = ref(getStorage(app), "woundImages/" + imageUri);
  await uploadBytes(storageRef, blob);
  
  const url = await getDownloadURL(storageRef);
  return url;
};

  //getWoundById
  export const getWoundById = async (woundId) => {
    try {
      const db = getFirestore();
      const woundRef = doc(db, "wounds", woundId);
      const woundSnap = await getDoc(woundRef);
  
      if (woundSnap.exists()) {
        const woundData = { id: woundSnap.id, ...woundSnap.data() };
  
        // Retrieve the wound photo download URL
        const storageRef = ref(getStorage(), "woundImages/" + woundData.photoFileName);
        const photoUrl = await getDownloadURL(storageRef);
        
        woundData.photoUrl = photoUrl;
  
        return woundData;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting wound:", error);
      throw error;
    }
  };

  


const storage = getStorage(app);
