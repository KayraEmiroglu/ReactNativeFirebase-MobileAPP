import { View, ScrollView, Text } from "react-native";
import TabBarComponent from "../../components/HomeTabBar";
import WoundCard from "../../components/WoundCard";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import firestoreServices from "../../util/firebase/firestoreServices";
import { getWoundsByUserId } from "../../util/firebase/firebaseStorage";
import { useDispatch, useSelector } from "react-redux";


export default function HomeScreen() {
  const navigation = useNavigation();
  const wounds = useSelector((state) => state.wound.wounds);
  const dispatch = useDispatch();

  const fetchWounds = () => {
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

  useEffect(() => {
    dispatch(fetchWounds());
  }, []);
 
  //when i click the wound card, it should go to wound details screen
  const handleWoundCardPress = (wound) => {
    navigation.navigate("WoundDetails", { wound });
  };


  return (
    <View style={{ flex: 1 }}>
      <TabBarComponent />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {wounds && 

          wounds.map((wound) => (
            <WoundCard
              key={wound.id}
              wound={wound}
              onPress={() => handleWoundCardPress(wound)}
            />
          ))
          }
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "100",
            fontSize: 16,
            opacity: 0.6,
          }}
        >
          Tap the "+" icon to add a new wound
        </Text>
      </ScrollView>
    </View>
  );
}
