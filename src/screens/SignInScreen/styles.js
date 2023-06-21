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
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    flex: 1,
  }
});
