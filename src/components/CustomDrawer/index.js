import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const handleLogoutPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#4dd0e1" }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/Logo_1.png")}
            style={styles.profilePhoto}
          />
          <Text style={styles.nameContainer}>Kayra Emiroglu</Text>
        </View>

        <View style={styles.menuContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          onPress={handleLogoutPress}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="logout" size={22} color={"#4dd0e1"} />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  imageContainer: {
    padding: 20,
    backgroundColor: "#4dd0e1",
  },
  profilePhoto: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  nameContainer: {
    color: "#fff",
    fontSize: 18,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  logoutContainer: {
    padding: 20,
    borderTopWidth: 0.5,
    borderTopColor: "ccc",
  },
  logoutText: {
    fontSize: 15,
    marginLeft: 10,
  },
});
