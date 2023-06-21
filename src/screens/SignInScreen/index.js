import { useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import logo from "../../../assets/images/Logo_1.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInputs";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { styles } from "./styles";
import firestoreServices from "../../util/firebase/firestoreServices";
import { TouchableOpacity } from "react-native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
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
        <Image
          source={logo}
          style={{
            ...styles.logo,
            height: height * 0.3,
            borderRadius: (height * 0.3) / 2,
          }}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <FontAwesomeIcon
              icon={hidePassword ? faEye : faEyeSlash}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={styles.forgotPasswordContainer} onPress={onForgotPasswordPressed}>
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

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

        <TouchableOpacity style={styles.buttonRegister} onPress={onSignUpPressed}>
          <Text style={styles.buttonTextRegister}>
            Don't have an account? Create One
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

