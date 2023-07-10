import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doe");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const handleUpdate = () => {
    if (password.length >= 8) {
      // Update the user's password
      console.log("Updating password...");
    } else {
      // Show an error message
      console.log("Password should be at least 8 characters long");
    }
  };

  const handlePhotoUpload = () => {
    // Logic to handle photo upload
    console.log("Uploading profile photo...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Details</Text>

      <TouchableOpacity onPress={handlePhotoUpload}>
        {profilePhoto ? (
          <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
        ) : (
          <Icon
            name="user"
            size={100}
            color="black"
            style={styles.uploadIcon}
          />
        )}
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.info}
          value="example@example.com"
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Surname:</Text>
        <TextInput
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
          placeholder="Enter your surname"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter new password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop:50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  uploadIcon: {
    textAlign: "center",
    marginBottom: 20,
    paddingTop:40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 100,
    height: 200,
    width : 200,
    marginLeft: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    backgroundColor: "transparent",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileScreen;
