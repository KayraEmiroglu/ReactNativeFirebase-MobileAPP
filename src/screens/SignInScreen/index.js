import { useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import logo from "../../../assets/images/Logo_1.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInputs";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { styles } from "./styles";
import firestoreServices from "../../util/firebase/firestoreServices";


export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  // Event Handlers =========
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  //login user check inputs empty
  const onSignInPressed = () => {
    if (email === "" || password === "") {
      alert("Please provide email or password");
      return;
    }

    setIsLoading(true); // Start loading

    firestoreServices
      .loginUser(email, password)
      .then((user) => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Error logging in user: ", error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={logo} style={{ ...styles.logo, height: height * 0.3 , borderRadius: (height * 0.3) / 2 }} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        {isLoading ? ( // Conditional rendering based on loading state
          <ActivityIndicator size="small" color="gray" /> // Display loading indicator while loading
        ) : (
          <CustomButton
            onPress={onSignInPressed}
            text="Sign In"
            type="primary"
          /> // Display sign-in button when not loading
        )}
         <SocialSignInButtons />
         
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password?"
          type="link"
        />
  
        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? Create One"
          type="link"
        />
      </View>
    </ScrollView>
  );
}
