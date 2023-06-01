import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { handleCameraPress } from "../../util/camera";
import { styles } from './style';
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('Emiroglu, Kayra');
  const [email, setEmail] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleUpdate = () => {
    // Here you can handle the update logic
    console.log('Updated:', name, email);
  }

  const updateImage = async () => {
    const result = await handleCameraPress();
    if (!result.canceled) {
      setImageUri(result.uri);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageWrapper} onPress={updateImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.profileImage} />
        ) : (
            <Icon name="camera" size={30} color="#999" />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>Welcome, {name}!</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
    style={styles.input}
    value="aa"
    editable={false}
/>
      <Button 
        title="Update"
        onPress={handleUpdate}
      />
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}        
      />
    </View>
  );
}
export default ProfileScreen;