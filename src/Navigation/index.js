// React Navigation ==============
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Screens ================
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import AddWoundScreen from "../screens/AddWoundScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WoundDetails from "../components/WoundDetails";
import TermsOfUseScreen from "../screens/TermsOfUseScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import { Ionicons } from "react-native-vector-icons";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// +++  Create Stack +++
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

//Sidebarda gözükecek olan şeyler
export function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: () => <Text>Home</Text>,
          drawerLabelStyle: { fontWeight: "100" },
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Drawer.Screen name="TermsOfUseScreen" component={TermsOfUseScreen} />
    </Drawer.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16 }, // Tab etiketlerinin yazı boyutunu 16 olarak ayarlayın
        tabBarStyle: { backgroundColor: "#3da6d4", height: 70 }, // Tab çubuğunun arka plan rengini ve yüksekliğini ayarlayın
        tabBarIconStyle: { marginBottom: -5 }, // Tab ikonlarının alt boşluğunu ayarlayın
      }}
    >
      <Tab.Screen
        name="Main"
        component={Root}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={25} color={"white"} />,
          headerShown: false,
          tabBarLabelStyle: {
            color: "white",
            fontSize: 16,
          },
        }}
      />
      <Tab.Screen
        name="Add Wound"
        component={AddWoundScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="add-circle" size={25} color={"white"} />
          ),
          headerShown: false,
          tabBarLabelStyle: {
            color: "white",
            fontSize: 16,
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-sharp" size={25} color={"white"} />
          ),
          headerShown: false,
          tabBarLabelStyle: {
            color: "white",
            fontSize: 16,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* SCREENS  */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddWoundScreen" component={AddWoundScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="WoundDetails" component={WoundDetails} />

        <Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
