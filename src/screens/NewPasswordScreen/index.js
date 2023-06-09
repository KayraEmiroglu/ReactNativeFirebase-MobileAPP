import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInputs';
import { styles } from './styles';

export default function NewPasswordScreen() {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onBackToSignInPressed = () => navigation.navigate('SignIn');
  const onSubmitPressed = () => navigation.navigate('Home');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create a new Password</Text>

        <CustomInput
          placeholder="Enter confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder="Enter a new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton onPress={onSubmitPressed} text="Submit" type="primary" />

        <CustomButton
          onPress={onBackToSignInPressed}
          text="Back to Sign in"
          type="link"
        />
      </View>
    </ScrollView>
  );
}
