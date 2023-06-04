import { View, ScrollView, Text } from "react-native";
import TabBarComponent from "../../components/HomeTabBar";
import WoundCard from "../../components/WoundCard";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import firestoreServices from "../../util/firebase/firestoreServices";
import { getWoundsByUserId } from "../../util/firebase/firebaseStorage";



export default function HomeScreen() {
  const navigation = useNavigation();
  const [wounds, setWounds] = useState([]);

  //getWoundByUserId use this method
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("Home screen focused");
  
      const userId = firestoreServices.getCurrentUserId();
  
      getWoundsByUserId(userId)
        .then((wounds) => {
          console.log("Wounds: ", wounds);
          setWounds(wounds);
        })
        .catch((error) => {
          return [];
        });
    });
  
    return unsubscribe;
  }, []);

  

  //when i click the wound card, it should go to wound details screen
  const handleWoundCardPress = (wound) => {
    navigation.navigate("WoundDetails", { wound: wound });
  };


  return (
    <View style={{ flex: 1 }}>
      <TabBarComponent />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {wounds.map((wound) => (
          <WoundCard key={wound.id} wound={wound} onPress={() => handleWoundCardPress(wound)} />
        ))}
        <Text style={{ textAlign: "center", marginTop: 20, fontWeight: "100", fontSize: 16, opacity: 0.6 }}>
        Tap the "+" icon to add a new wound
        </Text>
      </ScrollView>
    </View>
  );
}
