import { useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
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
    firestoreServices
      .loginUser(email, password)
      .then((user) => {
        console.log("User logged in successfully: ", user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Error logging in user: ", error);
        alert(error.message);
      });
  };

 
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={logo} style={{ ...styles.logo, height: height * 0.3 }} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton onPress={onSignInPressed} text="Sign In" type="primary" />

        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password?"
          type="link"
        />

        <SocialSignInButtons />

        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? Create One"
          type="link"
        />
      </View>
    </ScrollView>
  );
}
