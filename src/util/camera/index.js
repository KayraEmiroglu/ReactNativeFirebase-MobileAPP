import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const handleCameraPress = async (setImageUri) => {


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
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
  
          if (!result.canceled) {
            setImageUri(result.assets[0].uri);      
          }
        },
      },
      {
        text: 'Gallery',
        onPress: async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
  
          if (!result.canceled) {
            setImageUri(result.assets[0].uri);    
          }
        },
      },
    ]);
  };