import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {  Image, Modal, Text, TouchableOpacity, View} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import { handleCameraPress } from "../../util/camera";
import { getFirestore, doc, getDoc } from "firebase/firestore";



const TabBarComponent = () => {
  const navigation = useNavigation();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const [imageUri, setImageUri] = useState(null);

  handleSideBarPress = () => {
    setSidebarVisible(true);
  }

  //Every user should see their name we can fetch from current user firestore


  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name="bars"
            size={30}
            color="#fff"
            onPress={() => handleSideBarPress()
            }             
          />
        }
        centerComponent={{ text: "Emiroglu , Kayra", style: { color: "#fff" } }}
        rightComponent={
          <Icon
            name="plus"
            size={30}
            color="#fff"
            onPress={() => navigation.navigate("AddWoundScreen")}
          />
        }
        containerStyle={{
          backgroundColor: "purple", // your desired color
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
          <TouchableOpacity onPress={() => 
            setSidebarVisible(false)}>
            <Icon style={styles.icon} name="close" size={30} color="#000" />
          </TouchableOpacity>
          {imageUri ? (
            <Image style={styles.profileImage} source={{ uri: imageUri }} />
          ) : (
            <TouchableOpacity onPress={handleCameraPress}>
              <Icon name="user" size={100} color="#000" />
            </TouchableOpacity>
          )}
          <Text style={styles.textStyle}>Emiroglu , Kayra</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {navigation.navigate('ProfileScreen')}}>
            <Icon name="user" size={30} color="#000" />
            <Text style={styles.buttonText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("SignIn")}>
            <Icon name="sign-out" size={30} color="#000" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default TabBarComponent;
