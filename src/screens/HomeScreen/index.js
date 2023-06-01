import { View, ScrollView, Text } from "react-native";
import TabBarComponent from "../../components/HomeTabBar";
import WoundCard from "../../components/WoundCard";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
  const navigation = useNavigation();
  const [wounds, setWounds] = useState([]);

  //woundları çek photoları göster 
  useEffect(() => {
    const fetchWounds = async () => {
      try {
        const db = getFirestore(); // Firestore nesnesini alın
        const woundsCollection = collection(db, "wounds"); // wounds koleksiyonunu alın
        const snapshot = await getDocs(woundsCollection); // belgeleri getir
  
        const wounds = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setWounds(wounds);
      } catch (error) {
        console.error("Error fetching wounds: ", error);
      }
    };
  
    fetchWounds();
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
