import { View, ScrollView, Text, Alert } from "react-native";
import TabBarComponent from "../../components/HomeTabBar";
import WoundCard from "../../components/WoundCard";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import firestoreServices from "../../util/firebase/firestoreServices";
import { getWoundsByUserId } from "../../util/firebase/firebaseStorage";
import { useDispatch, useSelector } from "react-redux";
import { deleteWoundAsync } from "../../util/action/woundAction";


export default function HomeScreen() {
  const navigation2 = useNavigation();
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
    navigation2.navigate("WoundDetails", { wound });
  };

  const deleteWound = ({woundId}) => {
    dispatch(deleteWoundAsync(woundId))
  };



  return (
    <View style={{ flex: 1 }}>
      <TabBarComponent />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {wounds && 

          wounds.map((wound ,index) => (
            <WoundCard
              key={index}
              wound={wound}
              count = {index+1}
              onPress={() => handleWoundCardPress(wound)}
              onDelete={()=>deleteWound({woundId : wound.id})}
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
