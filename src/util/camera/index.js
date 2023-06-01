import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const handleCameraPress = async (setImageUri,location) => {

  if(location == null){
    Alert.alert("Please select a location first.")
    return;
  }

    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('You need to grant camera permissions to use this feature.');
      return;
    }
  
    Alert.alert('Choose an image', '', [
      {
        text: 'Camera',
        onPress: async () => {
          let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
          });
  
          if (!result.canceled) {
            console.log(result); 
            setImageUri(result.assets[0].uri);      
          }
        },
      },
      {
        text: 'Gallery',
        onPress: async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
          });
  
          if (!result.canceled) {
            console.log(result);
            setImageUri(result.assets[0].uri);    
          }
        },
      },
    ]);
  };