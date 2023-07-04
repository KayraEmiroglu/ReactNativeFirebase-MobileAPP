import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import firestoreServices from "../../util/firebase/firestoreServices";

const TabBarComponent = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSideBarPress = () => {
    navigation.openDrawer();
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

  const handleAddWoundPress = () => {
    navigation.navigate("AddWoundScreen"); // Navigate to "AddWoundScreen"
  };

  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name="bars"
            size={30}
            color="#fff"
            onPress={handleSideBarPress}
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
            onPress={handleAddWoundPress}          />
        }
        containerStyle={{
          backgroundColor: "#3da6d4",
          justifyContent: "space-around",
        }}
      />
    </View>
  );
};

export default TabBarComponent;
