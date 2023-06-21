import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import { handleCameraPress } from "../../util/camera";
import firestoreServices from "../../util/firebase/firestoreServices";
import { useDispatch, useSelector } from "react-redux";

const TabBarComponent = () => {
  const navigation = useNavigation();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const dispatch = useDispatch();
  const photoUrl = useSelector(state => state.photoUrl);

  handleSideBarPress = () => {
    setSidebarVisible(true);
  };

  //get user info from with getCurrentUserId
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firestoreServices
        .getCurrentUser()
        .then((user) => {
          // Set the user's first name and last name in the state
          setFirstName(user.firstName);
          setLastName(user.lastName);
        })
        .catch((error) => {
          console.error("Error getting current user: ", error);
        });
    });

    return unsubscribe;
  }, []);

  const handleCameraPress2 = () => {
    handleCameraPress(setImageUri);
  };



  //logout
  const handleLogoutPress = () => {
    firestoreServices
      .logout()
      .then(() => {
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };



  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name="bars"
            size={30}
            color="#fff"
            onPress={() => handleSideBarPress()}
          />
        }
        centerComponent={{
          text: `${lastName}, ${firstName}`,
          style: { color: "#fff", fontSize: 18, fontWeight: "bold" },
        }}
        rightComponent={
          <Icon
            name="plus"
            size={30}
            color="#fff"
            onPress={() => navigation.navigate("AddWoundScreen")}
          />
        }
        containerStyle={{
          backgroundColor: "#3da6d4",
          justifyContent: "space-around",
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={sidebarVisible}
        onRequestClose={() => {
          setSidebarVisible(!sidebarVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => setSidebarVisible(false)}>
            <Icon style={styles.icon} name="close" size={30} color="#000" />
          </TouchableOpacity>
          {imageUri ? (
            <Image style={styles.profileImage} source={{ uri: imageUri }} />
          ) : (
            <TouchableOpacity onPress={handleCameraPress2}>
              <Icon name="user" size={100} color="#000" />
            </TouchableOpacity>
          )}
          <Text style={styles.textStyle}>{`${firstName} ${lastName}`}</Text>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("ProfileScreen");
            }}
          >
            <Icon name="user" size={30} color="#000" />
            <Text style={styles.buttonText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleLogoutPress}
          >
            <Icon name="sign-out" size={30} color="#000" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default TabBarComponent;
