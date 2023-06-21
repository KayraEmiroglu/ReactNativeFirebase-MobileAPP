import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: '70%',
    maxWidth: 200,
    height: 50,
    resizeMode: 'contain',
    marginTop: 70,
    marginBottom: 50,
  
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  input: {
    flex: 1,
    padding: 10,
    margin: 5,
  },
  buttonRegister: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  buttonTextRegister: {
    color: 'deepskyblue',
    fontSize: 12,
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPassword: {
    color: 'deepskyblue',
    fontSize: 12,
  },
});
