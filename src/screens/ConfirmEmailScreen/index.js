import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInputs';
import { styles } from './styles';

export default function ConfirmEmailScreen() {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    //check code is correct
    //if correct, navigate to Home
    //else, show error
    



  };
  const onBackToSignInPressed = () => navigation.navigate('SignIn');
  const onResendCode = () => console.warn('resend code');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm Email</Text>

        <CustomInput
          placeholder="Enter confirmation Code"
          value={code}
          setValue={setCode}
        />

        <CustomButton
          onPress={onConfirmPressed}
          text="Confirm"
          type="primary"
        />

        <CustomButton
          onPress={onResendCode}
          text="Resend Code"
          type="secondary"
        />

        <CustomButton
          onPress={onBackToSignInPressed}
          text="Back to Sign in"
          type="link"
        />
      </View>
    </ScrollView>
  );
}
