import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInputs";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { styles } from "./styles";
import firestoreServices from "../../util/firebase/firestoreServices";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigation = useNavigation();


  //onSignInPressed
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  // Events Handlers =========
  //with userID
  const onRegisterPressed = () => {
    firestoreServices
      .registerUser(email, password, firstName, lastName)
      .then(() => {
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        console.error("Error registering user: ", error);
      });

  };

  const onTermsPressed = () => {
    //TODO: Create page and add page to navigation
    navigation.navigate("TermsOfUse");
  };
  const onPrivacyPressed = () => {
    //TODO: Create page and add page to navigation
    navigation.navigate("PrivacyPolicy'");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="Name"
          value={firstName}
          setValue={setFirstName}
        />
        <CustomInput
          placeholder="Surname"
          value={lastName}
          setValue={setLastName}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordConfirm}
          setValue={setPasswordConfirm}
          secureTextEntry={true}
        />

        <CustomButton
          onPress={onRegisterPressed}
          text="Register"
          type="primary"
        />

        {/* TERMS OF USE AND PRIVACY INFO  */}
        <Text style={styles.terms}>
          By registering, you confirm that you accept our{" "}
          <Text onPress={onTermsPressed} style={styles.link}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text onPress={onPrivacyPressed} style={styles.link}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          onPress={onSignInPressed}
          text="Already have an account? Sign in"
          type="link"
        />
      </View>
    </ScrollView>
  );
}
