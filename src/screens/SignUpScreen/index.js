import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInputs";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { styles } from "./styles";
import firestoreServices from "../../util/firebase/firestoreServices";
import { ActivityIndicator } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [checkingPassword, setCheckingPassword] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordConfirm, setHidePasswordConfirm] = useState(true);

  const navigation = useNavigation();

  const checkPassword = () => {
    if (password !== passwordConfirm) {
      setCheckingPassword(true);
    } else {
      setCheckingPassword(false);
    }
  };

  useEffect(() => {
    checkPassword();
  }, [passwordConfirm]);


  //onSignInPressed
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  // Events Handlers =========
  //with userID
  const onRegisterPressed = () => {
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      alert("Please provide your details");
      return;
    }

    setIsLoading(true);

    firestoreServices
      .registerUser(email, password, firstName, lastName)
      .then(() => {
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        console.error("Error registering user: ", error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  const onTermsPressed = () => {
    //TODO: Create page and add page to navigation
    navigation.navigate("TermsOfUse");
  };
  const onPrivacyPressed = () => {
    //TODO: Create page and add page to navigation
    navigation.navigate("PrivacyPolicy");
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
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={hidePassword}
            onFocus={() => setPasswordFocused(true)}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <FontAwesomeIcon
              icon={hidePassword ? faEye : faEyeSlash}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {password.length < 8 && passwordFocused && (
          <Text style={styles.hintText}>
            Password should be minimum 8 characters!
          </Text>
        )}

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            placeholder="Confirm Password"
            secureTextEntry={hidePasswordConfirm}
          />
          <TouchableOpacity
            onPress={() => setHidePasswordConfirm(!hidePasswordConfirm)}
          >
            <FontAwesomeIcon
              icon={hidePasswordConfirm ? faEye : faEyeSlash}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
          
        {checkingPassword && (
          <Text style={styles.hintText}>
            Passwords are not matching!
          </Text>
        )}
      

        {isLoading ? ( // Conditional rendering based on loading state
          <ActivityIndicator size="small" color="gray" /> // Display loading indicator while loading
        ) : (
          <CustomButton
            onPress={onRegisterPressed}
            text="Register"
            type="primary"
          />
        )}
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
